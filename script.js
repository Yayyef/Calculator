let result;
let num1 = '';
let num2 = '';
let operator1 = '';
let operator2 = '';

// Sert a reset le display seulement si un operator a été défini. Ex 67 + (reset)3
let displayResetSwitch;

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

    // On reagarde si le boutton est un chiffre
    } else if (0 <= buttonValue && buttonValue <= 9){

        if (displayResetSwitch === true) {
            clear();
            displayResetSwitch = false;
        };

        // if (num1 !== '' && operator1 !== '') {
        //     clearButton();
        // }

        displayValue += buttonValue;
        display.innerHTML = displayValue;

    // Boutton CLEAR
    } else if (buttonValue === 'C') {
        clearButton();

    // Bouton DEL
    } else if (buttonValue === 'DEL') {
        clear();

    // Si le boutton est un opérateur.
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {

        // PREMIER OPERATEUR, phase d'initialisation  
        if (num1 === '' && displayValue !== '') {
            displayResetSwitch = true;
            operator1 = buttonValue;
            num1 = parseFloat(displayValue);
        
        } else if (operator1 !== '') {
            // Pour éviter un bug si on clique deux fois sur des operateurs. num1 !== '' && num2 === '' && 
            if (displayResetSwitch === true) {
                operator1 = buttonValue;

            } else if (displayResetSwitch === false) {                
                operator2 = buttonValue;
                updateDisplay(operator1);
                operator1 = '';                
            };
        
        } else if (operator2 !== '') {
            // Pour éviter un bug si on clique deux fois sur des operateurs.
            if (displayResetSwitch === true) {
                operator1 = buttonValue;

            } else if (displayResetSwitch === false) {                
                operator1 = buttonValue;            
                updateDisplay(operator2);
                operator2 = '';                
            };   

        };

        console.log(`1 ${operator1}`);  
        console.log(`2 ${operator2}`);

    } else if (buttonValue === '=') {

        if (operator2 === '') {

            // Si on fait + puis = l'operator est reset
            if (displayResetSwitch === true) {
                operator1 = '';
                return; 

            } else if (displayResetSwitch === false) {               
                updateDisplay(operator1);
                operator1 = '';
                num1 = '';
            };

        } else if (operator1 === '') {

            // Si on fait + puis = l'operator est reset
            if (displayResetSwitch === true) {
                operator2 = '';
                return; 

            } else {   
                updateDisplay(operator2);
                operator2 = '';
                num1 = '';
            };

        }    
    };

};

// Operates and updates display, met en mémoire num1 pour l'opération suivante, reset num2 pour la prochaine opération.
function updateDisplay(operatorX) {
    num2 = parseFloat(displayValue);
    operate(num1, num2, operatorX);
    displayValue = result;
    display.innerHTML = displayValue;
    num1 = parseFloat(displayValue);
    displayResetSwitch = true;
    num2 = '';
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