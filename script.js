let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = '0';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

function operate(a, op, b) {
    switch(op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);    
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);    
    }
}

const lowerDisplay = document.querySelector('.lower-display');

const numberButtons = document.querySelectorAll('.number-buttons .btn');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedNumber = button.textContent;

        if (operator === null) {
            if (displayValue === '0') {
                displayValue = clickedNumber;
            } else {
                displayValue += clickedNumber;
            }
        } else {
            displayValue += clickedNumber;
            secondNumber = parseFloat(displayValue);
        }
        lowerDisplay.textContent = displayValue;
    });
});

const operatorButtons = document.querySelectorAll('.operator-buttons .btn');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(displayValue);
            operator = operatorButton.textContent;
            displayValue = `${firstNumber} ${operator} `;
        } else if (firstNumber !== null && operator !== null && secondNumber === null) {
            operator = operatorButton.textContent;
            displayValue = `${firstNumber} ${operator} `;
        } else if (firstNumber !== null && operator !== null && secondNumber !== null) {
            secondNumber = parseFloat(displayValue);
            const result = operate(firstNumber, operator, secondNumber);
            displayValue = result.toString();
            firstNumber = result;
            secondNumber = null;
            operator = operatorButton.textContent;
        }
        lowerDisplay.textContent = displayValue;
    });
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (firstNumber !== null && operator !== null && secondNumber !== null) {
        const result = operate(firstNumber, operator, secondNumber);
        lowerDisplay.textContent = result;
        displayValue = result.toString();
        firstNumber = result;
        operator = null;
        secondNumber = null;
    }
});
