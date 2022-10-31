// Задание№1. Консольная программа

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
