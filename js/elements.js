// JS CODE IN ORDER TO CREATE THE BODY OF THE HTML PAGE

const body = document.body;
body.classList.add(
  "d-flex",
  "align-items-center",
  "justify-content-center",
  "vw-100",
  "vh-100",
  "bg-color"
);

// RESET BUTTON
var resetButtonDiv = document.createElement("div");
resetButtonDiv.innerHTML = "Reset";
resetButtonDiv.setAttribute("id", "reset-button");
resetButtonDiv.classList.add("show-reset");
resetButtonDiv.setAttribute("style", "top: -5px; display: none;");
document.body.appendChild(resetButtonDiv);

// MAIN DIV FOR COUNTER
var counterDiv = document.createElement("div");
counterDiv.classList.add(
  "d-flex",
  "flex-column",
  "flex-md-row-reverse",
  "align-items-center",
  "justify-content-center",
  "h-75",
  "w-75",
  "pb-5",
  "mb-5",
  "position-relative"
);

// PLUS BUTTON
var incrementButton = document.createElement("button");
incrementButton.setAttribute("id", "increment-button");
incrementButton.classList.add(
  "button-color",
  "shape-plus",
  "desktop-width",
  "desktop-height",
  "btna",
  "mobile-width",
  "col-md-3"
);

var operandTextPlusSpan = document.createElement("span");
operandTextPlusSpan.classList.add("operands-text");
operandTextPlusSpan.innerHTML = "+";

incrementButton.appendChild(operandTextPlusSpan);
counterDiv.appendChild(incrementButton);

var numbersDiv = document.createElement("div");
numbersDiv.classList.add(
  "d-flex",
  "align-items-center",
  "justify-content-center",
  "counter-color",
  "h-50",
  "mobile-width",
  "desktop-width"
);

var numbersSpan = document.createElement("span");
numbersSpan.setAttribute("id", "counter");
numbersSpan.classList.add("counter-text", "ms-3", "me-3", "text-break", "lh-1");
numbersSpan.innerHTML = "0";

numbersDiv.appendChild(numbersSpan);
counterDiv.appendChild(numbersDiv);

// MINUS BUTTON
var decrementButton = document.createElement("button");
decrementButton.setAttribute("id", "decrement-button");
decrementButton.classList.add(
  "button-color",
  "shape-minus",
  "btna",
  "mobile-width",
  "desktop-width",
  "desktop-height",
  "col-md-3"
);

var operandTextMinusSpan = document.createElement("span");
operandTextMinusSpan.classList.add("operands-text");
operandTextMinusSpan.innerHTML = "-";

decrementButton.appendChild(operandTextMinusSpan);
counterDiv.appendChild(decrementButton);

// FUNCTIONS DIV
var functionsDiv = document.createElement("div");
functionsDiv.classList.add("show-functions", "functions-buttons-position");

var autoButton = document.createElement("button");
autoButton.setAttribute("id", "auto-button");
autoButton.classList.add("rounded-pill", "button-color", "btna", "me-5", "p-3");
autoButton.innerHTML = "AUTO";

var timerButton = document.createElement("button");
timerButton.setAttribute("id", "timer-button");
timerButton.classList.add(
  "rounded-pill",
  "button-color",
  "btna",
  "ms-5",
  "p-3"
);
timerButton.innerHTML = "TIMER";

functionsDiv.appendChild(autoButton);
functionsDiv.appendChild(timerButton);
counterDiv.appendChild(functionsDiv);

document.body.appendChild(counterDiv);
