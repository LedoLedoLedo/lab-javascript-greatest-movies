//const movies = require(".data");


 //`movies`  array from the file `src/data.js`.
//console.log('movies: ',);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map(function(movie) {
    return movie.director;
  });

 //let allDirectors = arr.map(movie => movie.director);

     return allDirectors;
}
   // getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(list) {
  let spielbergMovies = list.filter( function(name){
    return name.director === `Steven Spielberg` && name.genre.includes(`Drama`);
  })
  console.log(spielbergMovies);
  return spielbergMovies.length
}
 //howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(list) {
  if(list.length===0){
    return 0
  }
  let movieAvg = list.reduce(function(total, nextVal){
    return total + nextVal.score
  },0)
   console.log (Number((movieAvg/list.length).toFixed(2)))
  return Number((movieAvg/list.length).toFixed(2))
}
//scoresAverage (movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
let scoresAvgDrama  =  arr.filter(function(movie){
return movie.genre.includes(`Drama`)
})
 return scoresAverage (scoresAvgDrama)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
 let sortedMovies = [...arr]
 sortedMovies.sort(function(a,b){
  if(a.year===b.year){
    return a.title.localeCompare(b.title);
  }
  return a.year - b.year 
 })
 return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  if (arrayOfMovies.length < 20){
    return arrayOfMovies.map(movie => movie.title).sort();
  }
  let newArray = arrayOfMovies.map(movie => movie.title).sort();
  return newArray.slice(0, 20);
}

// console.log(orderAlphabetically(movies));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically
  };
}

