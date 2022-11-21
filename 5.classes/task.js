class PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state *= 1.5;
    }
    set state(num){
        if(num < 0){
            this._state = 0;
        }
        if(num > 100){
            this._state = 100;
        }else{
            this._state = num;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let res = this.books.find(book => book[type] === value);
        return typeof res === "object" ? res : null;
    }

    giveBookByName(bookName){
        let searchBook = this.books.find((book) => book.name === bookName);
        if (typeof searchBook === "object") {
          this.books.splice(this.books.indexOf(searchBook), 1);
          return searchBook;
        } else 
        return null;
    }
}

class Student {
    #journal;
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.#journal = {};
    }
  
    addMark(mark, subject) {
      if (mark < 1 || mark > 5 || typeof mark !== "number") {
        console.log(`Оценка должна быть числом от 1 до 5 включительно`);
        return;
      } else if (this.#journal[subject] === undefined) {
        //проверяет, есть ли свойство, если нет - создает
        this.#journal[subject] = [];
      }
      return this.#journal[subject].push(mark); //добавляет в свойство оценку
    }
  
    getAverageBySubject(subject) {
      // средняя по предмету
      let sum = 0;
      this.#journal[subject].forEach((mark) => (sum += mark));
      return sum / this.#journal[subject].length;
    }
  
    getAverage() {                                                       // средняя оценка
      let sum = 0;
      let subjects = 0;
      Object.entries(this.#journal).forEach(([subject]) => {
        sum += this.getAverageBySubject(subject);
        subjects++;
      });
      return sum / subjects;
    }
  }