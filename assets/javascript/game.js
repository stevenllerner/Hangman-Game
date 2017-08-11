//Define variables
var guessRemain = 12; 	// Number of guesses remaining
var i = 1;				// Index
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
var numOfMatches;
var numOfWins = 0;

//FUNCTIONS
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
			display[k] = guessLetter;
			numOfMatches = numOfMatches + 1;
		} 
	}
	document.getElementById("wordStatus").innerHTML = display;
	return display, numOfMatches;
}

//Function updates guesses remaining
function guessesRemaining (guessRemain, numOfMatches) {
	if (numOfMatches === 0) {
		guessRemain = guessRemain -1;
	} else {
		guessRemain = guessRemain;
	}
	document.getElementById("guessesRemaining").innerHTML = guessRemain;
	return guessRemain;
}

//Function undates list of guessed letters
function allGuessedLetters (guessedLetters, guessLetter) {
	guessedLetters = guessedLetters + guessLetter;
	return guessedLetters;
}

document.onkeyup = function (event) {
	document.getElementById("welcome").innerHTML = "Welcome to the game";
	document.getElementById("instructions").innerHTML = "Please select a letter";
	document.getElementById("numberOfWins").innerHTML = "Number of Wins";
	document.getElementById("totNumOfWins").innerHTML = numOfWins;
	document.getElementById("currentWord").innerHTML = "Current Word";
	display = initialDisplay(word);
	document.getElementById("wordStatus").innerHTML = display;
	document.getElementById("numOfGuessesRemaining").innerHTML = "Number of Guesses Remaining";
	document.getElementById("guessesRemaining").innerHTML = guessRemain;	
	document.getElementById("lettersAlreadyGuessed").innerHTML = "Letters Already Guessed";
	document.onkeyup = function (event) {
		guessLetter = event.key.toUpperCase();
	}


}
/*	document.onkeyup = function (event) {
		document.getElementById("welcome").innerHTML = "Welcome to the game";
		document.getElementById("instructions").innerHTML = "Please select a letter";
			if (guessRemain > 0) {
				
					guessedLetters = guessedLetters + guessLetter;
					document.getElementById("guessedLetters").innerHTML = guessedLetters;
					//Compare selected letter to letters in word
					numOfMatches = 0;
					for (k=0; k < word.length; k++){

						if (word[k] === guessLetter) {
							display[k] = guessLetter;
							numOfMatches = numOfMatches + 1;
							console.log(display);
						} 
					}
					//Update display
					console.log(display);
					document.getElementById("wordStatus").innerHTML = display;
					//Update remaining guesses
					if (numOfMatches < 1) {
						guessRemain = guessRemain -1;
					}
					document.getElementById("guessesRemaining").innerHTML = guessRemain;		
				}		
			}

*/







