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



for (let i =0; i < 2; i++) {
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

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы класический зритель');
}else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');

} else {
    alert('произошла ошибка');
}






console.log(personalMovieDB);


