

var wins = 0;
var losses = 0;
var guesses = 7;
var guessedLetters = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var randomLetterGuess = Math.floor(Math.random() * letters.length);
// var answer = letters[randomLetterGuess];

//This code will generate a random letter that the computer guesses
function randomLetter() {
    return ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26))];
}

// setting random letter
var rLetter = randomLetter();

/// when a key is pressed, run game logic
document.onkeyup = function (event) {
    var inputLetter = event.key.toLowerCase();
    if (rLetter === inputLetter) {
        wins++; // +1 win
        guessedLetters = []; // reset to blank guesses
        rLetter = randomLetter(); // computer picks new letter
    }
}





// testing console
// console.log("key pressed " + event.key);
