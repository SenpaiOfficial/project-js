'use strict';

let str = 'some';
let strObj = new String(str);



console.dir([1,2,3]);

const soldier = {
 health: 400,
 armor: 100,
 sayHello: function() {
  console.log('Hello');
 }
};

const john = Object.create(soldier); // Создаем объект john прототипно

/* const john = {
 health: 100
};
 */
// john.__proto__ = soldier; // Устаревший формат

Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
john.sayHello();

