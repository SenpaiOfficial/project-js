'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
 count: numberOfFilms,
 movies: {},
 actors: {},
 genres: [],
 privat: false
};

for (let i = 0; i < 2; i++) {
 const questionOfFilms1 = prompt('Один из просмотренных фильмов?', ''),
  rateOfFilms1 = prompt('На сколько оцените его?');

 if (questionOfFilms1 != null && rateOfFilms1 != null && questionOfFilms1 != '' && rateOfFilms1 != '' && questionOfFilms1.length < 50) {
  personalMovieDB.movies[questionOfFilms1] = rateOfFilms1;
  console.log('done');
 } else {
  console.log('error');
  i--;
 }
}

if (personalMovieDB.count < 10) {
 console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
 console.log('Классический зритель');
} else if (personalMovieDB.count >= 30) {
 console.log('Вы киноман');
} else {
 console.log('Произошла ошибка');
}

console.log(personalMovieDB);