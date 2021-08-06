'use strict';

const LoveFilm = prompt('Какой ваш любимый фильм?', '');

const FelmsGetDB = {
    love: LoveFilm,
    movie: {},
    actors: {},
    time: {},
    grade: {},
    genre: [],
    privt: false
};

const a = prompt('Какой фильм вы смотрели недавно'),
      b = prompt('Какой актер вам понравился?'),
      c = prompt('Какова ваша оценка на филм?'),
      d = prompt('Какой жанр фильма вам нравится?'),      
      g = prompt('Продолжительность фильма?');


      FelmsGetDB.movie = a;
      FelmsGetDB.actors = b;
      FelmsGetDB.grade = c;
      FelmsGetDB.genre = d;
      FelmsGetDB.time = g;
      
      console.log(FelmsGetDB);