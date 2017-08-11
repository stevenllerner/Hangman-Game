//Make selLetter a global variable

//	Set number of guesses allowed
	var guessRemain = 6
	//Pick a word
	var i=1;
	var wordBank = [
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
	//Convert the word to upper case
	var word = wordBank[i].toUpperCase();
	//Check
	console.log (word);

	//Determine the number of letters and spaces in the word
	console.log (word.length);

	//Set up display showing dashes where there are letters
	var display = ""
	for (j=0; j < word.length; j++){

		if (word[j] !== " ") {
			display = display + "_";
		} else {
			display = display + " ";
		}
	//Check
	console.log (display);
	}
	
	//Display dashes for word(s) and show how many guesses are initially remaining
	document.getElementById("wordStatus").innerHTML = display;
	document.getElementById("guessesRemaining").innerHTML = guessRemain;	


	//Capture letter entered by Player
//	var selLetter = "";
  // 	document.onkeydown = function(event) {
   //     selLetter = String.fromCharCode(event.keyCode);
     //   selLetter = selLetter.toUpperCase();
      //  console.log(selLetter);
   // }

	var guessLetter = "";
	document.onkeyup = function (event) {
		guessLetter = event.key.toUpperCase();
		console.log(guessLetter);
 	document.getElementById("welcome").innerHTML = "Welcome to the Game";
	}

	document.getElementById("guessedLetters").innerHTML = guessLetter;

//Compare selected letter to letters in word
	for (k=0; k < word.length; k++){

		if (word[k] === guessLetter) {
			display[k] = guessLetter;
			var match = true;
		} else {
			var match = false;
		}
	}
	console.log(match);
	console.log(display);

	if (match === false){
		guessRemain = guessRemain - 1; 
	}

//Update id="wordStatus" and id="guessesRemaining"
	document.getElementById("wordStatus").innerHTML = display;
	document.getElementById("guessesRemaining").innerHTML = guessRemain;

//	// update word

//	i = i + 1










