var counter = 0;
var counterElement = document.getElementById("counter");
var decrementButton = document.getElementById("decrement-button");
var incrementButton = document.getElementById("increment-button");
var resetButton = document.getElementById("reset-button");

decrementButton.addEventListener("click", function() {
  counter--;
  counterElement.innerHTML = counter;
});

incrementButton.addEventListener("click", function() {
  counter++;
  counterElement.innerHTML = counter;
});

resetButton.addEventListener("click", resetCounter);

function resetCounter() {
  counter = 0;
  counterElement.innerHTML = counter;
}