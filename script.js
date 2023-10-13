let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    updateOutput("-------------------------\b");
    updateOutput("A new movie is added");
}

let updateOutput = (message) => {
    let output = document.getElementById("output");
    output.innerHTML += message + "<br></br>";
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    updateOutput("-------------------------\b");
    updateOutput("Printing all movies....");
    for (let i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i];
        let watchedStatus = movie.haveWatched ? "true" : "false";
        updateOutput(`${movie.title}, rating of ${movie.rating}, havewatched: ${watchedStatus}`);
    }
    updateOutput("\b");
    updateOutput(`You have ${allMovies.length} movies in total`);
}

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    updateOutput("-------------------------\b");
    updateOutput(`printing movie that has a rating higher than ${rating}`);
    let highRatedMovies = allMovies.filter(movie => movie.rating > rating);

    for (let i = 0; i < highRatedMovies.length; i++) {
        let movie = highRatedMovies[i];
        updateOutput(`${movie.title} has a rating of ${movie.rating}`);
    }
    updateOutput("\b");
    updateOutput(`In total, there are ${highRatedMovies.length} matches`);
}

//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    updateOutput("-------------------------\b");
    updateOutput("changing the status of the movie...");
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
            break;
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);