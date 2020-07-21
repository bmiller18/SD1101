"use strict"

var movieStar = {
  firstname: 'Avril',
  lastname: 'Lavigne',
  birthday: '04-27-1984',
  weight: 130,
  gender: 'Female',
  eyecolor: 'Brown',
  haircolor: 'Brown'
}

var movie = {
  moviename: 'My World',
  Yearreleased: '2003',
  moviestar:movieStar,
}

console.log(movieStar.birthday);
console.log(movie.moviestar);
console.log(movie.moviestar.firstname);

var boat = {
  boatname: 'HighWind',
  color: 'yellow',
  size: 'medium',
  SetSail : function(movieStar) {
    console.log(movieStar.firstname + " " + movieStar.lastname + " sets sail on the boat!")
  }
}

boat.SetSail(movieStar);