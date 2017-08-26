	// Gets user entry

	// Generate computer number

	var computer = document.getElementById("computer-choice");
	var user = document.getElementById("user-choice");
	var wins = document.getElementById("won-games");
	var result = document.getElementById("game-result");
	var losses = document.getElementById("lost-games");
	var ties = document.getElementById("tied-games");

	var wonGames = 0;
	var tiedGames = 0;
	var lostGames = 0;
	var gameResult = "";


	document.onkeyup = function(event) {

	    // RANDOM LETTER GENERATOR
	    var computerNumber = Math.round(Math.random() * 2)

	    var computerSelection = "";

	    if (computerNumber == 0) {
	        computerSelection = "r";
	    } else if (computerNumber == 1) {
	        computerSelection = "p";
	    } else {
	        computerSelection = "s";
	    };

	    var computerChose = "";

	    if (computerSelection == "r") {
	    	computerChose = "Rock";
	    } else if (computerSelection == "p") {
	    	computerChose = "Paper";
	    } else {
	    	computerChose = "Scissors";
	    };

	    // DISPLAY COMPUTER CHOICE

	    computer.textContent = computerChose;

	    // DISPLAY AND STORE USER CHOICE
	    var userSelection = event.key;

	    var userChose = "";

	    if (userSelection == "r") {
	    	userChose = "Rock";
	    } else if (userSelection == "p") {
	    	userChose = "Paper";
	    } else {
	    	userChose = "Scissors";
	    };


	    user.textContent = userChose;

	    if (userSelection != "r" && userSelection != "p" && userSelection != "s") {
	        alert("Please select 'r','p', or's' only");
	    };

	    if (userSelection == computerSelection) {
	        tiedGames++;
	        gameResult = "Its a Tie!";
	    };

	    if (userSelection == "r") {
	        if (computerSelection == "s") {
	            wonGames++;
	            gameResult = "You Win!";
	        } else if (computerSelection == "p") {
	            lostGames++;
	            gameResult = "You Lose!";
	        }
	    };

	    if (userSelection == "p") {
	        if (computerSelection == "r") {
	            wonGames++;
	            gameResult = "You win!";
	        } else if (computerSelection == "s") {
	            lostGames++;
	            gameResult = "You Lose!";
	        }
	    };

	    if (userSelection == "s") {
	        if (computerSelection == "p") {
	            wonGames++;
	            gameResult = "You Win!";
	        } else if (computerSelection == "r") {
	            lostGames++;
	            gameResult == "You Lose!";
	        }
	    };

	    // DISPLAY STATS

	    wins.textContent = wonGames;
	    losses.textContent = lostGames;
	    ties.textContent = tiedGames;
	    result.textContent = gameResult;



	};