function createEmptyObject() {
  return Object.create(null);
}

// Пример использования
const obj = createEmptyObject();
console.log(obj); // {}
console.log(Object.getPrototypeOf(obj)); // null


function checkProperty(propertyName, obj) {
return propertyName in obj;
}