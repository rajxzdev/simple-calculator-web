let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

function addOperator(op) {
    const inputValue = parseFloat(displayValue);
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        calculate();
        firstOperand = inputValue;
    }
    operator = op;
    waitingForSecondOperand = true;
}

function calculate() {
    if (operator === null || firstOperand === null) return;
    
    const secondOperand = parseFloat(displayValue);
    let result;
    
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    
    displayValue = String(result);
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

updateDisplay();