'use strict';

const btns = document.querySelectorAll('button'),
 overlay = document.querySelector('.overlay');


/* btn.onclick = function () {
 alert('Click');
};

btn.onclick = function () {
 alert('Second Click');
}; */
// Старые методы сверху, работает только ласт функция
let i = 0;
const deleteElement = (e) => {
 console.log(e.target);
 console.log(e.type);
 // i++;
 // if (i == 1) {
 //  btn.removeEventListener('click', deleteElement);
 // }
};

// btn.addEventListener('click', deleteElement); // С перем. deleteElement(функция) можно удалять
// элемент после события клика
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => { // btn - это каждая отдельная кнопка, которая находится внутри
 btn.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
 event.preventDefault();
});


/* btn.addEventListener('click', () => {
 alert('Second Click');
}); */
// Работает все две функции