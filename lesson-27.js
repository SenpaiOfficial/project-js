'use strict';

/* let y = 1;
let x = y = 2; */

console.log([ ] + 1 + 2); // 12

alert('1'[0]); // 1

console.log(2 && 1 && null && 0 && undefined); // и запинает на лжи

console.log(!!( 1 && 2 ) === (1 && 2)); // !! - перевод в булин

// ИЛИ запинается на правде

alert( null || 2 && 3 || 4 );

console.log(0 || "" || 2 || undefined || true || falsе);
// ИЛИ || запинается на правде, true здесь - 2.