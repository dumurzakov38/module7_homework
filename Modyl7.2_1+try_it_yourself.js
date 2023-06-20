//let nam = prompt("Как вас зовут?");
//let surnam = prompt("Какая у вас фамилия?");
//let ag = prompt("Сколько вам лет?");
//let cit = prompt("Из какого вы города?");
//const obj = new Object();
//obj.A_name = [nam]
//obj.B_surname = [surnam]
//obj.C_age = [ag]
//obj.D_city = [cit]
//console.log(obj


const obj = new Object();

obj.A_name = 'Daniyar'
obj.B_surname = 'Umurzakov'
obj.C_age = 20
obj.D_Acountry = 'Kazakstan'
obj.E_city = 'Almaty'

//delete obj.B_surname;

sayHello = function() {
  console.log('Hi! My name is ' + obj.B_surname + ' ' + obj.A_name + ', I\'m ' + obj.C_age + ' years old, I\'m from ' + obj.D_Acountry + ', ' + obj.E_city);
};

console.log(obj);
sayHello();