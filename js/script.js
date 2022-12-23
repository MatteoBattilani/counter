// VARIABLES
var counter = 0;
var counterElement = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");
var intervalId = 0; // initialises the interval ID to 0 --> This is used in toggleAutoCounter()
var isRunning = false; // initialises the counter status to not running --> This is used in toggleAutoCounter()

// LISTENERS
decrementButton.addEventListener("click", decrementCounter); // Listener for add or subtract 1 to the counter
incrementButton.addEventListener("click", incrementCounter); // Listener for add or subtract 1 to the counter
resetButton.addEventListener("click", resetCounter); // Listener and function for reseting the counter via the reset button
autoButton.addEventListener("click", toggleAutoCounter); // Listener and function for activate the auto function
timerButton.addEventListener("click", toggleCountdown); // Listener and function for activate the timer function

function decrementCounter() {
  counter--;
  counterElement.innerHTML = counter;
  showOrHideCounter();
}

function incrementCounter() {
  counter++;
  counterElement.innerHTML = counter;
  showOrHideCounter();
}

function resetCounter() {
  counter = 0;
  counterElement.innerHTML = counter;
  showOrHideCounter();
}

function showOrHideCounter() {
  resetButton.style.display = counter === 0 ? "none" : "flex";
}

/*
   -------------CODE FOR AUTO COUNT---------------
*/

// Function to start/stop the automatic counter
function toggleAutoCounter() {
  if (isRunning) {
    // If the counter is running, interrupt the interval
    autoButton.innerHTML = "AUTO";
    timerButton.disabled = false;
    decrementButton.disabled = false;
    incrementButton.disabled = false;
    clearInterval(intervalId);
    isRunning = false;
    showOrHideCounter();
  } else {
    // Otherwise, start the counter interval
    autoButton.innerHTML = "STOP";
    timerButton.disabled = true;
    decrementButton.disabled = true;
    incrementButton.disabled = true;
    intervalId = setInterval(() => {
      counter++;
      counterElement.innerHTML = counter;
      if (counter === 10000) {
        // If the counter reaches 10000, interrupt the interval
        clearInterval(intervalId);
        isRunning = false;
      }
    }, 1000); // run the counter every second (1000ms) --> to avoid delay in showing numbers
    isRunning = true;
  }
}

/*
   -------------CODE FOR TIMER FUNCTION---------------
*/

// create the audio object for the alarm sound
const alarmSound = new Audio();
alarmSound.src = "./assets/audio/alarm.mp3";
alarmSound.volume = 0.5;

// variable containing the callback function for the countdown
let countdownCallback = null;

// function that initialises or interrupts the countdown
function toggleCountdown() {
  // if the countdown has not been started, start it
  if (countdownCallback === null) {
    const amount = parseInt(
      prompt("Enter an amount in seconds (maximum 120):")
    );

    // ensure that the amount is valid and does not exceed 120 seconds
    if (isNaN(amount) || amount < 1 || amount > 120) {
      alert("Invalid amount, please enter a number between 1 and 120.");
      return;
    }

    // set the counter to the value entered by the user
    let counter = amount;

    // countdown function
    function countdown() {
      counterElement.textContent = counter;
      counter--;

      // if the counter has reached zero or the countdown has been interrupted, interrupt the countdown
      if (counter < 0 || countdownCallback === null) {
        countdownCallback = null;
        if (counter < 0) {
          alarmSound.play(); // play the alarm
        }
        timerButton.innerHTML = "TIMER";
        autoButton.disabled = false;
        return;
      }

      // otherwise, call up this function after 1 second
      setTimeout(countdown, 1000);
    }

    // assign the countdown() function to the countdownCallback variable
    countdownCallback = countdown;

    // start the countdown
    countdownCallback();

    timerButton.innerHTML = "STOP";
    autoButton.disabled = true;
    decrementButton.disabled = true;
    incrementButton.disabled = true;
  }
  // otherwise, if the countdown has been started, interrupt it
  else {
    // set countdownCallback to null to abort countdown
    countdownCallback = null;
    timerButton.innerHTML = "TIMER";
    resetButton.style.display = "flex";
    autoButton.disabled = false;
    decrementButton.disabled = false;
    incrementButton.disabled = false;
  }
}
