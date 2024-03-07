// Add a functionality that keeps tracks of the number of guesses the user has made and show how many guesses the user has left. After 5 guesses, then disable the button and alert "You have exhausted your chances!".


//Get your guess number from the input value
const getUserGuessValue = document.querySelector("input");

//Get your Check button element
const getCheckBtn = document.getElementsByTagName("button")[0];

//Get your Reset button
const getResetBtn = document.getElementsByTagName("button")[1];

//Generate a guess
const actualGuess = 10;

//Get your paragraph to display high or low guess
let highOrLowGuess = document.querySelector("#para-2");

//Get your paragraph to display number of guesses left
let guessCount = document.querySelector("#para-3");

//Keep track of of number of guesses
let trackGuess = 5;

//Failure message
let message = "";

//Track Guess
function trackingGuess() {
  trackGuess--;
  guessCount.innerHTML = `You have ${trackGuess} chances left`;
  if (trackGuess === 1) {
    guessCount.innerHTML = `You have ${trackGuess} chance left`;
  } else if (trackGuess === 0) {
    message = `You have used up your chances`;
    guessCount.innerHTML = message;
    guessCount.style.color = "red";
    getCheckBtn.disabled = true;
    getCheckBtn.style.color = "grey";
    getCheckBtn.style.backgroundColor = "lightgrey";
  }
  
}


//Check if input is correct
function checkGuess(userGuess, actualGuess) {
  
  // Assign the value of trackGuess to trackGuessMonitor;
  let trackGuessMonitor = trackGuess;

  if (userGuess) {
    //Check if guess is the same with user guess
    //If guess is the same, user wins
    if (userGuess === actualGuess) {
      highOrLowGuess.innerHTML = `Correct guess! Congratulations!<br />&#127881; &#127881; &#127882; &#127882;`;
      highOrLowGuess.style.color = "green";
      highOrLowGuess.style.fontWeight = "bold";
      message = "";
      guessCount.innerHTML = message;
      getUserGuessValue.style.borderColor = "green";
      getCheckBtn.disabled = true;
      getCheckBtn.style.backgroundColor = "green";
    }
    //Else if guess is not the same, user loses
    else if (userGuess !== actualGuess && trackGuessMonitor === 0) {
      message = `You lost. Better luck next time! <br/>&#128542; &#128542; &#128542;`;
      highOrLowGuess.innerHTML = message;
      highOrLowGuess.style.color = "red";
      highOrLowGuess.style.fontWeight = "bold";
      getUserGuessValue.style.borderColor = "red";
    } else if (userGuess !== actualGuess && userGuess < actualGuess) {
      highOrLowGuess.innerHTML = "Guess again. Your number is low";
      highOrLowGuess.style.color = "#ffcc00";
      highOrLowGuess.style.fontWeight = "bold";
      getUserGuessValue.style.borderColor = "#ffcc00";
    } else {
      highOrLowGuess.innerHTML = "Guess again. Your number is high";
      highOrLowGuess.style.color = "#ffcc00";
      highOrLowGuess.style.fontWeight = "bold";
      getUserGuessValue.style.borderColor = "#ffcc00";
    }
  }
  
}

//Track Guess
getCheckBtn.addEventListener("click", trackingGuess);

//Check if input is correct
getCheckBtn.addEventListener("click", () => {
  checkGuess(Number(getUserGuessValue.value), actualGuess);
});

//Reset
getResetBtn.addEventListener("click", () => {
  location.reload();
});


// function checkEmptyInput() {
//   if (getUserGuessValue.value === '') {
//       getCheckBtn.disabled = true;
//   }
// }

// getCheckBtn.addEventListener("click", checkEmptyInput);



//Try Again Function
// function tryAgain(checkGuess, trackingGuess) {
//    getResetBtn.disabled = true;
//   if (checkGuess && trackingGuess) {
//      getResetBtn.disabled = false;
//      getResetBtn.style.backgroundColor = "yellow";
//     }
//    }
