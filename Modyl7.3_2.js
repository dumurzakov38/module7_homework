function checkPropertyExistence(propertyName, obj) {
  return propertyName in obj;
}

let obj = {
  name: 'Dmitriy',
  age: 29,
  city: 'Moscow'
};

console.log(checkProperty('name', person)); // true
console.log(checkProperty('address', person)); // false