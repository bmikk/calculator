    //hmm. Or we could track the last operator clicked, and operate as needed?
        //so it starts as nothing. user clicks 123, display shows 123. Then they click add. Then...
            //if lastOperatorClicked == 0, 
                //set lastOperatorClicked to '+' and...
                //display number gets set as num1.
                //clear the display.
            //if lastOperatorClicked == (anything but 0)...
                //this means that there is a num1 already, so set num2 to current display number
                //operate num1 and num2 by appropriate operator
                    //result becomes the new num1
                //set the display to num1
    
//Global variables declared:
let lastOperatorClicked = 0;
let num1 = 0;
let num2 = 0;
let sum = 0;


let calcDisplay = document.querySelector('#calculatorWindow');

//Number button listeners:
const clear = document.querySelector('#clear');
clear.addEventListener('click', ( () => calcDisplay.textContent = "")); //on each of these, need to add a condition where if an operation was just performed, reset the display and then add the string
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
    if (lastOperatorClicked == 0) {
        lastOperatorClicked = '+';
        num1 = parseInt(calcDisplay.textContent, 10);
        clearDisplay();
    } else {
        num2 = parseInt(calcDisplay.textContent, 10);
        operate();
        lastOperatorClicked = '+';
    }
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (lastOperatorClicked !== 0) {
        num2 = parseInt(calcDisplay.textContent, 10);
        num1 = operate();
        lastOperatorClicked = 0;
    }    
});



//Functions ready to be called:
function add() {
    console.log('num1 is ' + num1);
    console.log('num2 is ' + num2);
    let sum = num1 + num2;
    console.log(sum);
    calcDisplay.textContent = sum;
}

function subtract() {
    return num1 - num2;
}

function multiply() {
    return num1 * num2;
}

function divide() {
    return num1 / num2;
}

function clearDisplay() {
    calcDisplay.textContent = "";
}

    //hmm. Or we could track the last operator clicked, and operate as needed?
        //so it starts as nothing. user clicks 123, display shows 123. Then they click add. Then...
            //if lastOperatorClicked == 0, 
                //set lastOperatorClicked to '+' and...
                //display number gets set as num1.
                //clear the display.
            //if lastOperatorClicked == (anything but 0)...
                //this means that there is a num1 already, so set num2 to current display number
                //operate num1 and num2 by appropriate operator
                    //result becomes the new num1
                //set the display to num1
                //set lastOperatorClicked to 0

//when equals is clicked, need to operate with existing values.



//Here is the operate function using a switch case. WIP
function operate() {
    console.log(lastOperatorClicked);
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


calcDisplay.textContent = "";
