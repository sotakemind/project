"use strict";

let numberOfFilms = prompt('Как ваша имя?', '');
let lastFilm,
    ratingFilm;

console.log(numberOfFilms);

lastFilm = prompt('Один из последних просмотренных фильмов?', '');
ratingFilm = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {lastFilm, ratingFilm},
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB['movies']);




