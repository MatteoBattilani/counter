var counter = 0;
var counterElement = document.getElementById("counter");
var decrementButton = document.getElementById("decrement-button");
var incrementButton = document.getElementById("increment-button");

decrementButton.addEventListener("click", function() {
  counter--;
  counterElement.innerHTML = counter;
});

incrementButton.addEventListener("click", function() {
  counter++;
  counterElement.innerHTML = counter;
});