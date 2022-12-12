function parseCount(item) {
    if(Object.is((parseInt(item)), NaN)){
        throw new Error("Невалидное значение");
    }
    return parseInt(item);
}

function validateCount(item){
    try{
        return parseCount(item);
    }
    catch (error){
        return error;
    }
}


class Triangle {
    constructor(a, b ,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        let p = this.getPerimeter() / 2;
        let s = parseFloat(
            Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
            );
        return s;
    }
}

function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      let triangle = new Object();
      triangle.getArea = function () {
        return "Ошибка! Треугольник не существует";
      };
      triangle.getPerimeter = function () {
        return "Ошибка! Треугольник не существует";
      };
      return triangle;
    }
  }