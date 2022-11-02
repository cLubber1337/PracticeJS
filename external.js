"use strict";

// Задание№1. Консольная программа
/*
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let lastWachedfilms = prompt("Один из последних просмотренных фильмов?", "");

let filmScore = prompt("На сколько оцените его?", "");

let lastWachedfilms2 = prompt("Один из последних просмотренных фильмов?", "");

let filmScore2 = prompt("На сколько оцените его?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[lastWachedfilms] = filmScore;
personalMovieDB.movies[lastWachedfilms2] = filmScore2;

console.log(personalMovieDB);
*/

/*
Задание№2. Сделать Елочку
*
**
***
****
*****
******
let result = "";
const lenght = 7;

for (let i = 1; i < lenght; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
*/
/* Цикл в цикле + метки
first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);

  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);

    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
}
*/

//Перепишите цикл  for на вариант с while.
//Результат должен остаться точно таким же.
//Не создайте бесконечный цикл! Иначе браузер может зависнуть
/*
for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}
РЕШЕНИЕ:
function fourthTask() {
  let i = 2;
  while (i < 16) {
    i++;
    if (i % 2) 
    console.log(i);
  }
}
fourthTask();
*/

/*
Задание. При помощи цикла выведите числа от 5 до 10 в консоль. 
5 и 10 включительно. 
Цикл можно использовать любой
РЕШЕНИЕ:
*/
/*
function firstTask() {
for (let i = 5; i <= 10; i++) {
    console.log(i);
}
}
*/
/*
Задание. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
Когда цикл дойдет до числа 13 - остановить весь цикл
РЕШЕНИЕ:
*/
/*
function secondTask() {
  for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i <= 14) {
      break;
    }
  }
}
*/
/*
Задание. При помощи цикла for выведите чётные числа от 2 до 10 включительно
РЕШЕНИЕ:
*/
/*
function thirdTask() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
  }
}
*/
/*
Задание. Заполните массив цифрами от 5 до 10 включительно. 
Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
РЕШЕНИЕ:
*/
/*
function fifthTask() {
  const arrayOfNumbers = [];
  let num = 5;
  while (num <= 10) {
    arrayOfNumbers.push(num++);
  }
  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}
*/
/* Задание 
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
РЕШЕНИЕ
*/
/*
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// База данных
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let lastWachedfilms;
  let filmScore;
  do {
    lastWachedfilms = prompt("Один из последних просмотренных фильмов?", "");
  } while (
    lastWachedfilms === null ||
    lastWachedfilms === "" ||
    lastWachedfilms.length > 50
  );
  do {
    filmScore = prompt("На сколько оцените его?", "");
  } while (filmScore === null || filmScore === "");

  personalMovieDB.movies[lastWachedfilms] = filmScore;
}
if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}
console.log(personalMovieDB);
*/

//Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив
//из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

//Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
/*
function returnNeighboringNumbers(a) {
  let b = a - 1;
  let c = a + 1;
  return [b, a, c];
}
console.log(returnNeighboringNumbers(8));
*/
/*
Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
После последнего числа их не должно быть.
Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof).
Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20
*/
/*
function getMathResult(num, times) {
  if (typeof times !== "number" || times <= 0) {
    return num;
  }
  let str = "";
  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
    } else {
      str += `${num * i}---`;
    }
  }

  return str;
}
*/
let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
// База данных
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyfilms() {
  for (let i = 0; i < 2; i++) {
    let lastWachedfilms;
    let filmScore;
    do {
      lastWachedfilms = prompt("Один из последних просмотренных фильмов?", "");
    } while (
      lastWachedfilms === null ||
      lastWachedfilms === "" ||
      lastWachedfilms.length > 50
    );
    do {
      filmScore = prompt("На сколько оцените его?", "");
    } while (filmScore === null || filmScore === "");

    personalMovieDB.movies[lastWachedfilms] = filmScore;
  }
}
rememberMyfilms();

function detectPersonalLvl() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
detectPersonalLvl();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 4; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}"`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
