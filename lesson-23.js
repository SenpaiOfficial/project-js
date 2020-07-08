'use strict';
// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + '')); // Конкатенация переводит в строку

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN;

let switcher = 0;

if (switcher) {
 console.log('Working...');
}

console.log(!!'44444');