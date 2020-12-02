
    
//Global variables declared:
let lastOperatorClicked = '=';
let num1 = 0;
let num2 = 0;
let sum = 0;


let calcDisplay = document.querySelector('#calculatorWindow');

//Number button listeners:
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => clearDisplay()); //on each of these, need to add a condition where if an operation was just performed, reset the display and then add the string
const digit1 = document.querySelector('#digit1');
digit1.addEventListener('click', ( () => calcDisplay.textContent += "1"));
const digit2 = document.querySelector('#digit2');
digit2.addEventListener('click', ( () => calcDisplay.textContent += "2"));
const digit3 = document.querySelector('#digit3');
digit3.addEventListener('click', ( () => calcDisplay.textContent += "3"));
const digit4 = document.querySelector('#digit4');
digit4.addEventListener('click', ( () => calcDisplay.textContent += "4"));
const digit5 = document.querySelector('#digit5');
digit5.addEventListener('click', ( () => calcDisplay.textContent += "5"));
const digit6 = document.querySelector('#digit6');
digit6.addEventListener('click', ( () => calcDisplay.textContent += "6"));
const digit7 = document.querySelector('#digit7');
digit7.addEventListener('click', ( () => calcDisplay.textContent += "7"));
const digit8 = document.querySelector('#digit8');
digit8.addEventListener('click', ( () => calcDisplay.textContent += "8"));
const digit9 = document.querySelector('#digit9');
digit9.addEventListener('click', ( () => calcDisplay.textContent += "9"));
const digit0 = document.querySelector('#digit0');
digit0.addEventListener('click', ( () => calcDisplay.textContent += "0"));

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    if (lastOperatorClicked == '=') {
        lastOperatorClicked = '+';
        num1 = parseInt(calcDisplay.textContent, 10);
        clearDisplay();
    } else {
        num2 = parseInt(calcDisplay.textContent, 10);
        operate();
        num1 = sum;
        lastOperatorClicked = '+';
    }
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (lastOperatorClicked !== '=') {
        num2 = parseInt(calcDisplay.textContent, 10);
        num1 = operate();
        lastOperatorClicked = '=';
    } else {
        clearDisplay();
    }    
});


//let's try something else for the buttons.
//what it comes down to, is that when an operator button is clicked, we do this:
    //if there's no number stored, we store it
        //then we store the operator that was clicked (in case the equals sign is clicked)
        //then we clear the display
    //if there is a number stored, we need to: 
        //operate that number with whatever is on the screen using the last clicked operator, and store the new number
        //clear the display

//then, when the equals button is clicked:
    //simply operate the stored number with the screen number, and store it
    //display the stored number
    //set the last operator clicked to '=', or nothing, or 0 or something.
    //reset the number variables so that we're ready for a new calculation.
    //THIS LEAVES US WITH A PROBLEM. BECAUSE WE USE THE SCREEN AS A VARIABLE, WE ARE NOT READY FOR ANOTHER CALCULATION

//How do we solve that? 
    //If we use two variables, we don't need to use the screen, and it's ready to display whatever we need, whenever.
        //if we do that, we should never operate using the screen content, only the second variable.
        //we can use num2 as a running total, which we can display as needed on the screen


//operator button click
    //if num1 == 0:
        //set num1 = displayNumber
        //lastOperatorClicked = 'clicked operator'
        //clear display
    //if num1 !== 0:
        //num2 = displayNumber
        //sum = operate() num1 and num2
        //set display to show sum
        //num1 = sum
        //set lastOperatorClicked to 'clicked operator




//Functions ready to be called:
function add() {
    let sum = num1 + num2;
    logVariables();
    calcDisplay.textContent = sum;
}

function subtract() {
    sum = num1 - num2;
}

function multiply() {
    sum = num1 * num2;
}

function divide() {
    sum = num1 / num2;
}

function clearDisplay() {
    calcDisplay.textContent = "";
}

// function calcReset() {
//     calcDisplay.textContent = "";
//     num1 = 0;
//     num2 = 0;
//     sum = 0;
// }



//Here is the operate function using a switch case. WIP
function operate() {
    switch (lastOperatorClicked) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        default:
            return "Something went horribly wrong!";
    }
}


function logVariables() {
    console.log("sum is " + sum);
    console.log("num1 is " + num1);
    console.log("num2 is " + num2);
    console.log("calcDisplay.textContent is " + calcDisplay.textContent);
}

calcDisplay.textContent = '';
