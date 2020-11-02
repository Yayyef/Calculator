let result;

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
    displayValue += buttonValue;
    display.innerHTML = displayValue;
    } else if (buttonValue === "C") {
        clear();
    } 
    // EN VRAI C'EST NUL CA
    else if (buttonValue === "+") {
        let firstNumber = parseFloat(displayValue);
        console.log(firstNumber);
        displayValue = "";
        if (buttonValue === "=") {
            let secondNumber = displayValue;
            operate(firstNumber, secondNumber);
            display.innerHTML = result;
        }
    }
    console.log(buttonValue);
};

function operate(num1, num2, operator1) {
    switch (operator1) {
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
}