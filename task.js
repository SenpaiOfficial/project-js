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
 }
};

console.log(options.name);

delete options.name;