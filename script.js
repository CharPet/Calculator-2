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


const updateLowerDisplay = (digits) => {
    const lowerDisplay = document.querySelector('.lower-display');
    if (lowerDisplay.textContent === '0') {
        lowerDisplay.textContent = digits;
    } else {
        lowerDisplay.textContent += digits;
    }
}

