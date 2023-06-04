document.addEventListener('DOMContentLoaded', function () {


  //gere le display
  let display = document.getElementById('display');
  //gere le boutton clear
  let clearButton = document.getElementById('clear');
  //gere le boutton diviser
  let divideButton = document.getElementById('divide');
  //gere le bouton multiplier
  let multiplyButton = document.getElementById('multiply');
  //gere le boutton soustraure
  let subtractButton = document.getElementById('subtract');
  //gere le boutton ajouter
  let addButton = document.getElementById('add');
  //gere le bouton egal
  let equalsButton = document.getElementById('equals');
  //gere le bouton des virgule
  let decimalButton = document.getElementById('decimal');
  //gere tout les boutons de chiffre
  let numberButtons = document.querySelectorAll('.calculator-button:not(#clear):not(#equals):not(#decimal):not(#delete)');
  //gere le bouton delete
  let deletebutton = document.getElementById('delete');

  //nombre actuel
  let currentNumber = '';
  let firstOperand = null;
  let operator = null;

  // Fonction pour mettre à jour l'affichage
  function updateDisplay() {
  //update l'affichage a 0
    display.textContent = currentNumber || '0';
  }
  // Fonction pour ajouter un chiffre
  function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) {
      return;
    }
    currentNumber += number;
  }
  // Fonction pour supprimer un chiffre
  function deleteNumber() {
    currentNumber = currentNumber.toString().slice(0, -1);
  }
  // Fonction pour gérer les opérations
  function performOperation() {
    let value = parseFloat(currentNumber);
    if (operator === '+') {
      currentNumber = (firstOperand + value).toString();
    } else if (operator === '-') {
      currentNumber = (firstOperand - value).toString();
    } else if (operator === '*') {
      currentNumber = (firstOperand * value).toString();
    } else if (operator === '/') {
      currentNumber = (firstOperand / value).toString();
    }
    operator = null;
    firstOperand = null;
  }
  // Gestionnaire d'événement pour les chiffres
    numberButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        appendNumber(button.textContent);
          updateDisplay();
    });
  });
  // Gestionnaire d'événement pour le bouton décimal
  decimalButton.addEventListener('click', function () {
    appendNumber(decimalButton.textContent);
    updateDisplay();
  });
  // Gestionnaire d'événement pour le bouton "C" (clear)
  clearButton.addEventListener('click', function () {
    currentNumber = '';
    operator = null;
    firstOperand = null;
    updateDisplay();
  });
  // Gestionnaire d'événement pour les boutons d'opérateur

  //division
  divideButton.addEventListener('click', function () {
    if (operator !== null) {
      performOperation();
    }
    operator = '/';
    firstOperand = parseFloat(currentNumber);
    currentNumber = '';
  });

  //multicplication
  multiplyButton.addEventListener('click', function () {
    if (operator !== null) {
      performOperation();
    }
    operator = '*';
    firstOperand = parseFloat(currentNumber);
    currentNumber = '';
  });

  //soustraction
  subtractButton.addEventListener('click', function () {
    if (operator !== null) {
      performOperation();
    }
    operator = '-';
    firstOperand = parseFloat(currentNumber);
    currentNumber = '';
  });

  //addition
  addButton.addEventListener('click', function () {
    if (operator !== null) {
      performOperation();
    }
    operator = '+';
    firstOperand = parseFloat(currentNumber);
    currentNumber = '';
  });

  //Supprimer
  deletebutton.addEventListener('click', function () {
    deleteNumber();
    updateDisplay();
    console.log(currentNumber)

  })

  // Gestionnaire d'événement pour le bouton "="
  equalsButton.addEventListener('click', function () {
    if (operator !== null) {
      performOperation();
      updateDisplay();
    }
  });
});
