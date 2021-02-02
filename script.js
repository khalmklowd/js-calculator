var displayValue = [];
var operator = '';

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operated) {
    operator = operated
    return operator;
}

function display(input) {
    if (operator == '+') {
        displayValue += input;
    }else if (operator == '-') {
        displayValue -= input;
    }else if (operator == '*') {
        displayValue *= input;
    }else if (operator == '/') {
        displayValue /= input;
    }
    console.log(displayValue);
}

function reset() {
    displayValue = 0;
    console.log(displayValue);
}
