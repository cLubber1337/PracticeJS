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