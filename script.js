"use strict";

/* let num = +prompt('Enter number');

function sum(num) {
    let sum = 0;
    if (typeof num === 'number') {
        let a = num.toString();
        for (let i = 0; i < a.length; i++) {
            sum += +a[i];
        }
        return sum;
    }
}

console.log(sum(num)); */

/* 1. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число */

/* function doSomething(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a * b;
    } else if (a % 2 != 0 && b % 2 != 0) {
        return a + b;
    } else {
        return a % 2 != 0 ? a : b;
    }
}

console.log(doSomething(2, 6)) */

/* 2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой. */

/* let str = 'var_text_hello';
let arr = str.split('_');

for (let i = 0; i < arr.length; i++) {
    if (i != 0) arr[i] = ucfirst(arr[i]);
}

function ucfirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}
console.log(arr.join('')); */

/* 3. Реализуйте функцию flatten(), которая в случае, если массив обладает уровнями вложенности, приведёт его к элементарному виду (вложенность может быть любой глубины). Пример: flatten([1, [2], [3, [4]]]) вернёт [1, 2, 3, 4] */

let arr = [1, [2], [3, [4]]];

function flatten(arr) {
    let res = arr.join(',').split(',');
    for (let i = 0; i < res.length; i++) {
        res[i] = +res[i];
    }
    return res;
}
console.log(flatten(arr));

/* 4. Дана строка, например, '123456'. Сделайте из нее '214365'.
Если количество элементов непарное вывести ошибку. */

let numbers = '123456';

function changePosition(str) {
    if (str.length % 2 === 0) {
        let arr = str.split('');
        for (let i = 0; i < arr.length; i += 2) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
        return arr.join('');
    }
    return 'Error'
}
console.log(changePosition(numbers)); 
