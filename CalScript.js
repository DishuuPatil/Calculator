let firstOperand = null;
let operator = null;
let currentInput = '';

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    firstOperand = null;
    operator = null;
    currentInput = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    currentInput += value;
    display.innerText = currentInput;
}

function setOperator(op) {
    const display = document.getElementById('display');
    if (currentInput !== '') {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput += op;
        display.innerText = currentInput;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    if (operator && firstOperand !== null) {
        let result;
        const secondOperand = parseFloat(currentInput.split(operator)[1]);
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
        display.innerText = result;
        currentInput = result.toString();
        firstOperand = null;
        operator = null;
    }
}
