let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
 count: numberOfFilms,
 movies: {},
 actors: {},
 genres: [],
 privat: false
};

const questionOfFilms1 = prompt('Один из просмотренных фильмов?', '');
const questionOfFilms2 = prompt('Один из просмотренных фильмов?', '');
const rateOfFilms1 = prompt('На сколько оцените его?');
const rateOfFilms2 = prompt('На сколько оцените его?');

personalMovieDB.m ovies[questionOfFilms1] = rateOfFilms1;
personalMovieDB.movies[questionOfFilms2] = rateOfFilms2;

console.log(personalMovieDB);


