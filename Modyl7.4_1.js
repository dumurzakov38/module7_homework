// Родительская функция для электроприборов
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

// Методы для включения/выключения прибора из розетки
ElectricalAppliance.prototype.switchOn = function() {
  if (!this.pluggedIn) {
    this.pluggedIn = true;
    console.log(this.name + " включен(а) в розетку.");
  } else {
    console.log(this.name + " уже включен(а) в розетку.");
  }
};

ElectricalAppliance.prototype.switchOff = function() {
  if (this.pluggedIn) {
    this.pluggedIn = false;
    console.log(this.name + " выключен(а) из розетки.");
  } else {
    console.log(this.name + " уже выключен(а) из розетки.");
  }
};

// Конкретный прибор - Настольная лампа
function DeskLamp(name, power, brightness) {
  ElectricalAppliance.call(this, name, power);
  this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Дополнительный метод для настольной лампы
DeskLamp.prototype.adjustBrightness = function(level) {
  this.brightness = level;
  console.log(this.name + " яркость установлена на " + level + ".");
};

// Конкретный прибор - Компьютер
function Computer(name, power, brand) {
  ElectricalAppliance.call(this, name, power);
  this.brand = brand;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Дополнительный метод для компьютера
Computer.prototype.runProgram = function(program) {
  console.log(this.brand + " компьютер запустил программу: " + program + ".");
};

// ...

// Создаем экземпляры каждого прибора
var deskLamp = new DeskLamp("Настольная лампа", 40, 3);
var computer = new Computer("Компьютер", 500, "Some Brand");
// Подключаем приборы в розетку
deskLamp.switchOn();
computer.switchOn();

// Используем дополнительные методы для каждого прибора
deskLamp.adjustBrightness(5);
computer.runProgram("Искусственный интеллект");

// Выключаем приборы из розетки
deskLamp.switchOff();
computer.switchOff();