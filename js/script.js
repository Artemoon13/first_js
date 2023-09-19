/* eslint-disable indent */
'use strict';


const personalMovieDB = {
    count : 0,
    movies :{},
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Последние просмотреные фильмы?', '').trim();
            const b = prompt('На сколько вы его оцените?').trim();
            
            if (a != null && b != null && a !== '' && b != '' && a.length < 50 ) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
            
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номерои ${i + 1}`);
            if (personalMovieDB.genres[i] != null  && personalMovieDB.genres[i] !== ''  ) {
                // empty
            } else {
                
                i--;
            }
            
            }
            personalMovieDB.genres.forEach(function(genres, index) {
                console.log(`Любимый жанр под номером #${index + 1}  - это ${genres} `);
            });

    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы класический зритель');
        }else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        
        } else {
            alert('Произошла ошибка');
        }
    },
    ShowMyDB: function() {
        if (personalMovieDB.privat == true) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        
    }
    


};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
// personalMovieDB.toogleVisibleMyDB();
personalMovieDB.ShowMyDB();




