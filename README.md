Modul7.2_1+try_it_yourself
  
  Попробуйте сами
  1.	Создайте пустой объект;
  2.	Добавьте несколько свойств со значениями разных типов;
  3.	Добавьте метод;
  4.	Удалите одно из созданных свойств.

Modyl7.3_1
  Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.     Данная функция не должна возвращать значение.

Modyl7.3_2
  Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с     данным именем. Функция должна возвращать true или false.

Modyl7.3_3
  Написать функцию, которая создает пустой объект, но без прототипа.
  
Modyl7.4_1
  Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
  Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов    (передайте аргумент). 
  Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он       обладает.
  План:
    1.	Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
    2.	Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
    3.	У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    4.	Создайте экземпляры каждого прибора.
    5.	Выведите в консоль 
  Общие требования:
    1.	Имена функций, свойств и методов должны быть информативными
    2.	Соблюдайте best practices:
    	использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
    	информативные имена (а не a, b);
    	четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
    	использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

Modyl7.5_1
  Переписать консольное приложение из предыдущего юнита на классы.
  Общие требования:
    •	Имена классов, свойств и методов должны быть информативными;
    •	Соблюдать best practices;
    •	Использовать синтаксис ES6.
