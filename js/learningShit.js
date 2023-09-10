/* eslint-disable indent */
/* eslint-disable no-constant-condition */
'use strict';
 

// let result = '';
// const length = 10;

// for(let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
    
//     result += '\n';
// }



// console.log(result);




// first: for (let i = 0; i <3; i++){
//     console.log(`First level: ${i}`);
//     for (let j = 0; j <3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k <3; k++){
//             if (k=== 2) continue first; 
//             console.log(`Third level: ${k}`);
           
           
//         }
       
       
//     }
// }


const lines = 5; // Оставляем переменную lines равной 5
let result = ''; // Инициализируем строку для формирования фигуры

// for (let i = 1; i <= lines + 1; i++) { // Увеличиваем высоту фигуры на 1
//     // Добавляем пробелы перед звездочками
//     for (let j = 0; j < lines - i + 1; j++) {
//         result += ' ';
//     }

//     // Добавляем звездочки
//     for (let k = 0; k < 2 * i - 1; k++) {
//         result += '*';
//     }

//     // Добавляем перенос строки в конце каждой строки фигуры, кроме последней
//     if (i < lines + 1) {
//         result += '\n';
//     }
// }

// // Выводим результат в консоль
// console.log(result);







for (let i = 1; i <= lines + 1; i++) { // Увеличиваем высоту фигуры на 1
    // Добавляем пробелы перед звездочками
    for (let j = 0; j < lines - i + 1; j++) {
        result += ' ';
    }

    // Добавляем звездочки
    for (let k = 0; k < 2 * i - 1; k++) {
        result += '*';
    }

    // Добавляем перенос строки в конце каждой строки фигуры, кроме последней
    if (i < lines + 1) {
        result += '\n';
    }
}

// Выводим результат в консоль
console.log(result);


for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += '\n';
}
