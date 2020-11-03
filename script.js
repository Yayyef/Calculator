let result;
let num1 = '';
let num2 = '';
let operator1 = '';
let operator2 = '';

// Sert a reset le display seulement si un operator a été défini.
let operatorSet;

let displayValue = "";
const display = document.querySelector('.display');
const allButtons = document.querySelector('.allButtons');

allButtons.onclick = function(e) {
    let targetButton = e.target;
    let buttonValue = targetButton.dataset.index;

    // CHECKS IF TARGET IS A BUTTON
    if (!targetButton.matches('button')) {
        return

    } else if (0 <= buttonValue && buttonValue <= 9){

        if (operatorSet === true) {
            clear();
            operatorSet = false;
        }

        displayValue += buttonValue;
        display.innerHTML = displayValue;

    } else if (buttonValue === 'C') {
        clearButton();

    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {

        // operator1 = buttonValue;
        operatorSet = true;

        if (num1 === '') {
            operator1 = buttonValue;
            num1 = parseInt(displayValue);

        } else if (num1 !== '' && num2 === '') {
            operator2 = buttonValue;
            num2 = parseInt(displayValue);
            operate(num1, num2, operator1);
            operator1 = '';
            displayValue = result;
            display.innerHTML = displayValue;
            num1 = displayValue;
            // num2 = '';

        } else if (operator2 !== '') {            
            num2 = parseInt(displayValue);
            operate(num1, num2, operator2);
            displayValue = result;
            display.innerHTML = displayValue;
            num1 = parseInt(displayValue);
            num2 = '';
            operator2 = '';
            operator1 = buttonValue;
        }

    } else if (buttonValue === '=') {

        num2 = parseInt(displayValue);
        operate(num1, num2, operator1);
        displayValue = result;
        display.innerHTML = displayValue;
        num1 = parseInt(displayValue);
        num2 = '';
        // operator1 = undefined;
        

        console.log(`Num1 is ${num1}`);
        console.log(`Num2 is ${num2}`);
        console.log(`Operator1 is ${operator1}`);
    }

};

function operate(num1, num2, op) {
    switch (op) {
        case '+':
            return result = num1 + num2;
            break;
        case '-':
            return result = num1 - num2;
            break;
        case '*':
            return result = num1 * num2;
            break;
        case '/':
            return result = num1 / num2;
            break;
        default:
            alert('Select operator');
    }
    
};

function clear() {
    displayValue = "";
    display.innerHTML = "";
    
    console.log(`Num1 is ${num1}`);
    console.log(`Num2 is ${num2}`);
    console.log(`Operator1 is ${operator1}`);
}

function clearButton() {
    displayValue = "";
    display.innerHTML = "";
    num1 = '';
    num2 = '';
    result = '';
    operator1 = undefined;
}