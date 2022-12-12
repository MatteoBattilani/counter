var counter = 0;
var counterElement = document.getElementById("counter");
var decrementButton = document.getElementById("decrement-button");
var incrementButton = document.getElementById("increment-button");
var resetButton = document.getElementById("reset-button");

// Listener for add or subtract 1 to the counter

decrementButton.addEventListener("click", function() {
  counter--;
  counterElement.innerHTML = counter;
  showOrHideCounter();
});

incrementButton.addEventListener("click", function() {
  counter++;
  counterElement.innerHTML = counter;
  showOrHideCounter();
});


// Listener and function for reseting the counter via the reset button

resetButton.addEventListener("click", resetCounter);

function resetCounter() {
  counter = 0;
  counterElement.innerHTML = counter;
  showOrHideCounter();
}

function showOrHideCounter() {

  // Se il contatore è uguale a 0, nascondi il pulsante di reset
  if (counter === 0) {
    resetButton.style.display = 'none';
  } else {
    // Altrimenti, mostra il pulsante di reset
    resetButton.style.display = 'flex';
  }
}