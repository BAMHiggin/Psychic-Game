

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
function varReset() {
    guessedLetters = []; // reset to blank guesses
    rLetter = randomLetter(); // computer picks new letter
    guesses = 7; // guests reset 
}

function isLetter(letter) {

    if (letters.indexOf(letter) >= 0) { //checking letter array to make sure that only strings with letters a-z are passed- if no index then not in letters
        return true;
    }
    else {

        return false;
    }
}

function isDuplicateGuess(letter) {


    if (guessedLetters.indexOf(letter) >= 0) { //checking if guessed letter was entered twice
        return true;
    }
    else {

        return false;
    }
}



function logAllVars() {
    console.log("computer generated random letter: " + rLetter);
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("guesses: " + guesses);
    console.log("guessed letters--");
    guessedLetters.forEach(element => {
        console.log(element);
    });
}

// setting random letter
var rLetter = randomLetter();

/// when a key is pressed, run game logic
document.onkeyup = function (event) {
    var inputLetter = event.key.toLowerCase();
    if (isLetter(inputLetter) && !isDuplicateGuess(inputLetter)) { // checking if input is an a-z, and not a duplicate guess
        if (rLetter === inputLetter) {
            wins++; // +1 win
            varReset();
        }
        if (rLetter !== inputLetter) {
            guesses--; // one less guess
            if (guesses < 1) {
                losses++; // +1 loss
                varReset();
            }
            else {
                guessedLetters.push(inputLetter);
            }


        }
        logAllVars();
    }
}





// testing console
// console.log("key pressed " + event.key);
