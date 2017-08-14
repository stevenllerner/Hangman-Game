//Define variables
var guessRemain = 12; 	// Number of guesses allowed


var i = getRandomInt(1,10);		// Randomly generated index
var wordBank = [		// List of words to be guesses
	'Guggenheim Museum',
	'Central Park',
	'Freedom Tower',
	'Hayden Planetarium',
	'Metropolitan Museum of Art',
	'Naked Cowboy',
	'Empire State Building',
	'Central Park',
	'Wollman Skate Rink',
	'The Cooper Union for the Advancement of Science and Art'
];
var word = wordBank[i].toUpperCase();	// Current word in all upper case letters
var display;			// Displays dashes and letters to show current game status

var guessLetter = "";		// Letter picked by player
var guessedLetters = "";	// Keeps track of all guessed letters
var numOfMatches;			// Number of times selected letter matches letters in word
var numOfWins = 0;			// Number of games won by player

//FUNCTIONS

//Random integer generator for word selection
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Sets up initial sequence of dashes
function initialDisplay (word) {
	display = "";
	for (j=0; j < word.length; j++){

		if (word[j] !== " ") {
			display = display + "_";
		} else {
			display = display + " ";
		}
	}
	document.getElementById("wordStatus").innerHTML = display;
	return display;
}

//Function replaces dashes with letttters for correct guesses
function updateDisplay (guessLetter, word, display){
	numOfMatches = 0;
	for (k=0; k < word.length; k++){
		if (word[k] === guessLetter) {
			console.log(display);
			display = display.substring(0,k) + guessLetter + display.substring(k+1,word.length);
			console.log(display);
			numOfMatches = numOfMatches + 1;
			console.log(guessLetter);
			console.log(display[k]);
			x = display;
		} else {
			x = display;
		}
	}
	document.getElementById("wordStatus").innerHTML = display;
	return x, numOfMatches;
}

//Function updates guesses remaining
function guessesRemaining (guessRemain, numOfMatches) {
	if (numOfMatches === 0) {
		guessRemain = guessRemain -1;
		y = guessRemain
	} else {
		y= guessRemain
	}
	document.getElementById("guessesRemaining").innerHTML = y;
	return y;
}

//Function undates list of guessed letters
function allGuessedLetters (guessedLetters, guessLetter) {
	z = guessedLetters + guessLetter;
	document.getElementById("guessedLetters").innerHTML = z;
	return z;
}

document.onkeyup = function (event) {
	document.getElementById("welcome").innerHTML = "Welcome to the game";
	document.getElementById("instructions").innerHTML = "Please select a letter";
	document.getElementById("numberOfWins").innerHTML = "Number of Wins";
	document.getElementById("totNumOfWins").innerHTML = numOfWins;
	document.getElementById("currentWord").innerHTML = "Current Word";
	display = initialDisplay(word);
	document.getElementById("numOfGuessesRemaining").innerHTML = "Number of Guesses Remaining";
	document.getElementById("guessesRemaining").innerHTML = guessRemain;	
	document.getElementById("lettersAlreadyGuessed").innerHTML = "Letters Already Guessed";
	document.onkeyup = function (event) {
		guessLetter = event.key.toUpperCase();
		updateDisplay (guessLetter, word, display);
		display = x;
		guessesRemaining (guessRemain, numOfMatches);
		guessRemain = y;
		allGuessedLetters (guessedLetters, guessLetter);
		guessedLetters = z;

		if (y === 0) {
			document.getElementById("outcome").innerHTML = "Sorry, you lost this game. Try again!";
		}
		if (display.includes("_") !== true) {
			document.getElementById("outcome").innerHTML = "Congratulations! You've won this game!";
		}
	}
}
