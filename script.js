let result;
let num1 = '';
let num2 = '';
let operator1 = '';
let operator2 = '';

// Sert a reset le display seulement si un operator a été défini.
let operatorSet;

let displayValue = '';
const display = document.querySelector('.display');
const allButtons = document.querySelector('.allButtons');

// J'utilise l'event delegation.
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
        };

        displayValue += buttonValue;
        display.innerHTML = displayValue;

    } else if (buttonValue === 'C') {
        clearButton();

    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {

        // PREMIER OPERATEUR, phase d'initialisation
        if (num1 === '' && displayValue !== '') {
            operatorSet = true;
            operator1 = buttonValue;
            num1 = parseInt(displayValue);
        
        } else if (num1 !== '' && num2 === '' && operator1 !== '') {
            // Pour éviter un bug si on clique deux fois sur des operateurs.
            if (operatorSet === true) {
                operator1 = buttonValue;

            } else if (operatorSet === false) {                
                operator2 = buttonValue;
                num2 = parseInt(displayValue);
                operate(num1, num2, operator1);
                updateDisplay();
                num2 = '';
                operator1 = '';
                
            };
        
        } else if (operator2 !== '') {
            // Pour éviter un bug si on clique deux fois sur des operateurs.
            if (operatorSet === true) {
                operator1 = buttonValue;

            } else if (operatorSet === false) {                
                operator1 = buttonValue;            
                num2 = parseInt(displayValue);
                operate(num1, num2, operator2);
                updateDisplay();
                num2 = '';
                operator2 = '';
                
            };   

        };

        console.log(`1 ${operator1}`);  
        console.log(`2 ${operator2}`);

    } else if (buttonValue === '=') {

        if (operator2 === '') {

            if (operatorSet === true) {
                operator1 = '';
                return; 

            } else if (operatorSet === false) {               
                num2 = parseInt(displayValue);
                operate(num1, num2, operator1);
                updateDisplay();
                num2 = '';
                
            }

        } else if (operator1 === '') {

            if (operatorSet === true) {
                operator2 = 0;
                return; 

            } else {   
                num2 = parseInt(displayValue);
                operate(num1, num2, operator2);
                updateDisplay();
                num2 = '';
                
            };
        };        
    };

};

function updateDisplay() {
    displayValue = result;
    display.innerHTML = displayValue;
    num1 = parseInt(displayValue);
    operatorSet = true;
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
    };
    
};



// Reset uniquement le display quand un nombre est tapé après l'enregistrement de l'operateur
function clear() {
    displayValue = "";
    display.innerHTML = "";
    
};

// Reset toutes les données pour repartir a 0.
function clearButton() {
    displayValue = "";
    display.innerHTML = "";
    num1 = '';
    num2 = '';
    result = '';
    operator1 = '';
    operator2 = '';
};