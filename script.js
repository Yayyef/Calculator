let result;
const allButtons = document.querySelector('.allButtons');

allButtons.onclick = function(e) {
    let target = e.target;
    console.log(target.textContent);
};

function operate(firstNumber, secondNumber) {
    return result = firstNumber + secondNumber;
}

// function captureButton(event) {
//     console.log(this);

//     console.log(event.target);
// }