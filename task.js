'use strict';

let num = 20;

function showFirstMessage(text) {
 console.log(text);
 let num = 10;
 console.log(num);

}

showFirstMessage('Hello world!');
console.log(num);

/* function calc(a, b) {
 return (a + b);
}

console.log(calc(4, 3));

function ret() {
 let num = 50;
 return num;
} */

const options = {
 name: 'test',
 width: 1024,
 height: 1024,
 colors: {
  border: 'black',
  bg: 'red'
 },
 makeTest: function() {
  console.log('Test');
 }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
// console.log(Object.keys(options).length); //
/* Определят объект с ключами, т.е keys определяет какие ключи, а length - считает сколько ключей */
/* console.log(options.name);

delete options.name;
 */

/* let counter = 0;
for (let key in options) {
 if (typeof (options[key]) === 'object') {
  for (let i in options[key]) {
   console.log(`Property ${i} имеет значение ${options[key][i]}`);
  }
 } else {
  console.log(`Property ${key} имеет значение ${options[key]}`);
  counter++;
 }
}
Перебор элементов по ключу!, т.е узнает значение у объекта.
*/

