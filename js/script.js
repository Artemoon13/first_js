/* eslint-disable indent */
'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies :{},
    actors : {},
    genres : [],
    privat : false
};


const a = prompt('Последние просмотреные фильмы?', ''),
      b = prompt('На сколько вы его оцените?'),
      c = prompt('Последние просмотреные фильмы?', ''),
      d = prompt('На сколько вы его оцените?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);


