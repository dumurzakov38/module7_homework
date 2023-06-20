function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ':', obj[key]);
    }
  }
}

// Пример использования
const person = {
  name: 'Ivan',
  age: 37,
  city: 'Almaty'
};

printOwnProperties(person);