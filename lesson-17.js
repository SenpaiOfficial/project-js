'use strict';

const str = 'test';

console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));
/* substr - индекс/кол-во символов */

const num = 12.2;

console.log(Math.round(num));
/* Math - математические операции */

const test = '12.2px';

console.log(parseInt(test));
/* parseInt - образует в число целый тип данных, т.е 12 */
console.log(parseFloat(test));
/* parseFloat - образует в число тип данных, т.е 12.2 */


const str1 = 'Aydos Makeyev - best web-developer';

console.log(str1.slice(16));
console.log(str1.slice(-18));