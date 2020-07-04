'use strict';


/* while (num < 55) {
 console.log(num);
 num++;
} */
/* while (num <= 55) {
 console.log(num);
 num++;
} */
/* ВКЛЮЧИТЕЛЬНО С 55 */
/*
let num = 50;
do {
 console.log(num);
 num++;
}
while(num < 55);
 */
let num = 50;
for (let i = 1; i < 18; i++) {
 if (i === 6) {
  break; /* Прерывает цикл на данном этапе, значит на 6 */
 }
 console.log(i);
}
continue; /* НЕ ПРЕРЫВАЕТ ЦИКЛ, НО УБИРАЕТ ШАГ, Т.Е ЦИФРУ ИЛИ ОПРЕДЕЛЕННЫЙ МОМЕНТ */