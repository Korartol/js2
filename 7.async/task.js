class AlarmClock {
  constructor() {
    this.alarmCollection = []; // Создайте свойство для хранения коллекции звонков, изначально пустой массив
    this.timerId = null; // таймер без начального значения.
  }

  addClock(time, callback, id) { // добавляет новый звонок в коллекцию существующих.
    if (typeof id === "undefined") {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (
      typeof this.alarmCollection.find((clock) => clock.id === id) !=="undefined") 
      {
      return console.warn("Уже присутствует звонок на это же время");
    }
    return this.alarmCollection.push({ id, time, callback });
  }

  removeClock(id) { // удаляет звонки по определённому времени
    let currentLenght = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((clock) => clock.id !== id);
    let newLenght = this.alarmCollection.length;
    return currentLenght > newLenght;
  }

  getCurrentFormattedTime() { // возвращает текущее время в строковом формате HH:MM
    let addZero = (number) => {
      if (number > 10) {
        return number;
      }
      return "0" + number;
    };
    let currentTime = new Date();
    let minutes = addZero(currentTime.getMinutes());
    let hours = addZero(currentTime.getHours());
    return hours + ":" + minutes;
  }

  start() { // запускает будильник
    let checkClock = (clock) => {
      if (this.getCurrentFormattedTime() === clock.time) {
        return clock.callback();
      }
    };
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((clock) => checkClock(clock));
      }, 2000);
    }
    return;
  }

  stop() { // останавливает выполнение интервала будильника
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      return (this.timerId = null);
    }
  }


  clearAlarms() { // удаляет все звонки
    this.stop();
    return (this.alarmCollection = []);
  }
}
