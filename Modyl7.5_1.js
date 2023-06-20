// Родительский класс для электроприборов
class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  // Метод для включения/выключения прибора из розетки
  switchOn() {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(`${this.name} включен(а) в розетку.`);
    } else {
      console.log(`${this.name} уже включен(а) в розетку.`);
    }
  }

  switchOff() {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(`${this.name} выключен(а) из розетки.`);
    } else {
      console.log(`${this.name} уже выключен(а) из розетки.`);
    }
  }
}

// Конкретный прибор - Настольная лампа
class DeskLamp extends ElectricalAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  // Дополнительный метод для настольной лампы
  adjustBrightness(level) {
    this.brightness = level;
    console.log(`${this.name} яркость установлена на ${level}.`);
  }
}

// Конкретный прибор - Компьютер
class Computer extends ElectricalAppliance {
  constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
  }

  // Дополнительный метод для компьютера
  runProgram(program) {
    console.log(`${this.brand} компьютер запустил программу: ${program}.`);
  }
}

// Создаем экземпляры каждого прибора
const deskLamp = new DeskLamp("Настольная лампа", 40, 3);
const computer = new Computer("Компьютер", 500, "Some Brand");

// Подключаем приборы в розетку
deskLamp.switchOn();
computer.switchOn();

// Используем дополнительные методы для каждого прибора
deskLamp.adjustBrightness(5);
computer.runProgram("Искусственный интеллект");

// Выключаем приборы из розетки
deskLamp.switchOff();
computer.switchOff();
