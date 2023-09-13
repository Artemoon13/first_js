/* eslint-disable indent */
'use strict';

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies :{},
    actors : {},
    genres : [],
    privat : true
};




function rememberMyFilms() {

for (let i = 0; i < 2; i++) {
    const a = prompt('Последние просмотреные фильмы?', '');
    const b = prompt('На сколько вы его оцените?');
    
    if (a != null && b != null && a !== '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
}
}

// rememberMyFilms();


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номерои ${i + 1}`);
    }
}

// writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы класический зритель');
    }else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    
    } else {
        alert('Произошла ошибка');
    }
}

// detectPersonalLevel() ;



function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

ShowMyDB(personalMovieDB.privat);


