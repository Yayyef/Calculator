let result;
let displayValue = "";
const display = document.querySelector('.display');
const allButtons = document.querySelector('.allButtons');

allButtons.onclick = function(e) {
    let targetButton = e.target;
    // CHECKS IF TARGET IS A BUTTON
    if (!targetButton.matches('button')) {
        return
    } else if (0 <= targetButton.dataset.index && targetButton.dataset.index <= 9){
    displayValue += targetButton.textContent;
    display.innerHTML = displayValue;
    }
    console.log(typeof(targetButton.dataset.index));
};

function operate(firstNumber, secondNumber) {
    return result = firstNumber + secondNumber;
};

function clear() {
    display.innerHTML = "";
}