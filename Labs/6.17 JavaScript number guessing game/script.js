// Your solution goes here 

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let attempts = 0;
    let correctGuess = false;
    let promptText = "Enter a number between 1 and 100.";
    while (attempts < totalGuesses) {
        let guess = prompt(promptText);
        console.log(guess);
        attempts++;

        if (guess == numToGuess) {
            correctGuess = true;
            break;
        }

        if (guess == null) {
            correctGuess = false;
            break;
        } else if (guess === "" || isNaN(guess)) {
            promptText = "Please enter a number.";
            attempts--;
        } else if (guess < numToGuess) {
            promptText = guess + " is too small. Guess a larger number.";
        } else if (guess > numToGuess) {
            promptText = guess + " is too large. Guess a smaller number.";
        }

    }
    if (!correctGuess) {
        attempts = 0;
    }
    //console.log("attempts: " + attempts);
    return attempts;
}

/*window.onload = function (event){
    playGuessingGame(20, 3);
}*/