/* eslint-disable indent */
/* eslint-disable no-constant-condition */
'use strict';

// ОБЬЕКТНО ОРИЕНТИРОВАНОЕ 


let str = 'some';
let strObj = new String(str);

 

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const solder = {
    healt: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};


const john = Object.create(solder);

// const john = {
//     healt: 100,

// };


// john.__proto__ = solder;


// Object.setPrototypeOf(john, solder);

john.sayHello();

































// const someString = 'This is some strange string';

// function reverse(str) {
//     if ( typeof(str) !== 'string') {
//         return 'Ошибка!';
//     }
//     let string = '';
//     for (let i = str.length -1; i >= 0; i--) {
//         string += str[i];
//     }
//     return string;
// }
// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== missingCurr) {
//             str += ` ${arr[i]}\n`;
//         }   
//     }
//     return str.trim();
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'));




// const arr = [10, 26, 6, 9, 1];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// let a = 5,
//     b = a;


// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };


// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };



// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

//  const byby = Object.assign({}, add);
//  byby.d = 20;
// console.log(byby);
// console.log(add);


// const aldArray = ['a', 'b', 'c' ];
// const newArray = aldArray.slice();

// newArray[1] = 'fvrbtrb';

// console.log(newArray);
// console.log(aldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejornal', 'blogger'],
//       intenet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(intenet);



// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];


// log(...num);


// const array = ['a', 'b'];

// const copyArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };


// const newObjc = {...q};

// console.log(newObjc);



// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(6);

// console.log(arr);

// ;

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('\n '));