let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = null;

 
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

const digitButtons = document.querySelectorAll('.digit-buttons .btn');
digitButtons.forEach(digitButton => {
    digitButton.addEventListener('click', () => {
        updateLowerDisplay(digitButton.textContent);
    });
});

const operatorButtons = document.querySelectorAll('.operator-buttons .btn');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        firstNumber = displayValue; 
        operator = operatorButton.textContent;
        displayValue = ''; 
        updateLowerDisplay(firstNumber);
        updateUpperDisplay(firstNumber, operator);
    });
});

const updateLowerDisplay = (value) => {
    const lowerDisplay = document.querySelector('.lower-display');
    if (lowerDisplay.textContent === '0' || displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    lowerDisplay.textContent = displayValue;
}

const updateUpperDisplay = (firstNumber, operator) => {
    const upperDisplay = document.querySelector('.upper-display');
    upperDisplay.innerHTML = `${firstNumber} ${operator}`;
}


const clearButtonInput = () => {
    const clearButton = document.querySelector('.special-btn#clear');
    clearButton.addEventListener('click', () => {
        firstNumber = null;
        operator = null;
        secondNumber = null;
        displayValue = '0';
        updateLowerDisplay(displayValue);
        updateUpperDisplay('&nbsp;', '&nbsp;');
    });
}



document.addEventListener('DOMContentLoaded', () => {
    
    clearButtonInput();
});

