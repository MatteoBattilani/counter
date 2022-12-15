
// Variabili
var counter = 0;
var counterElement = document.getElementById("counter");
var decrementButton = document.getElementById("decrement-button");
var incrementButton = document.getElementById("increment-button");
var resetButton = document.getElementById("reset-button");

var autoButton = document.getElementById("auto-button");
var intervalId = 0;  // inizializza l'ID dell'intervallo a 0
var isRunning = false;  // inizializza lo stato del contatore a non in esecuzione

// prendere riferimento al tasto "timer"
const timerButton = document.getElementById('timer-button');


// Listener for add or subtract 1 to the counter
decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

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

// Listener and function for reseting the counter via the reset button
resetButton.addEventListener("click", resetCounter);

function resetCounter() {
  counter = 0;
  counterElement.innerHTML = counter;
  showOrHideCounter();
}

function showOrHideCounter() {
  resetButton.style.display = (counter === 0) ? 'none' : 'flex';
}


/*
   -------------CODE FOR AUTO COUNT---------------
*/


// Aggiungi un event listener per il pulsante "auto"
autoButton.addEventListener("click", toggleAutoCounter);

// Funzione per avviare/interrompere il contatore automatico
function toggleAutoCounter() {
  if (isRunning) {
    // Se il contatore è in esecuzione, interrompi l'intervallo
    autoButton.innerHTML = "AUTO";
    clearInterval(intervalId);
    isRunning = false;  // imposta lo stato del contatore a non in esecuzione
    showOrHideCounter();
  } else {
    // Altrimenti, avvia l'intervallo del contatore
    autoButton.innerHTML = "STOP";
    intervalId = setInterval(() => {
      counter++;
      counterElement.innerHTML = counter;
      if (counter === 10000) {
        // Se il contatore raggiunge 10000, interrompi l'intervallo
        clearInterval(intervalId);
        isRunning = false;  // imposta lo stato del contatore a non in esecuzione
      }
    }, 1000);  // esegui il contatore ogni secondo (1000ms)
    isRunning = true;  // imposta lo stato del contatore a in esecuzione
  }
}











// variabile che contiene la funzione di callback per il conto alla rovescia
let countdownCallback = null;

// funzione che inizializza o interrompe il conto alla rovescia
function toggleCountdown() {
  // se il conto alla rovescia non è stato avviato, avviarlo
  if (countdownCallback === null) {
    // prendere l'importo inserito dall'utente (in secondi)
    const amount = parseInt(prompt('Inserisci un importo in secondi (massimo 120):'));

    // assicurarsi che l'importo sia valido e non superi i 120 secondi
   
    if (isNaN(amount) || amount < 1 || amount > 120) {
      alert('Importo non valido, inserisci un numero tra 1 e 120.');
      return;
      }

      timerButton.innerHTML = "STOP";

    // impostare il contatore sul valore inserito dall'utente
    let counter = amount;
 
    // funzione che esegue il conto alla rovescia
    function countdown() {
      // aggiornare il contenuto del div con il valore attuale del contatore
      counterElement.textContent = counter;

      // decrementare il contatore di 1
      counter--;

      // se il contatore è arrivato a zero o il conto alla rovescia è stato interrotto, interrompere il conto alla rovescia
      if (counter < 0 || countdownCallback === null) {
        countdownCallback = null;
        return;
      }

      // altrimenti, richiamare questa funzione dopo 1 secondo
      setTimeout(countdown, 1000);
    }

    // assegnare la funzione countdown() alla variabile countdownCallback
    countdownCallback = countdown;

    // iniziare il conto alla rovescia
    countdownCallback();
    }
    // altrimenti, se il conto alla rovescia è stato avviato, interromperlo
    else {
    // impostare countdownCallback su null per interrompere il conto alla rovescia
    countdownCallback = null;
    timerButton.innerHTML = "TIMER";
    }
    }


    // assegnare all'evento "click" del tasto la funzione toggleCountdown()
    timerButton.addEventListener('click', toggleCountdown);

