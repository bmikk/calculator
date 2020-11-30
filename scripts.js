//when digits are clicked, need them to concatenate in the display.
//when an operator is clicked, need to:
    //store the display number as a variable, 
    //store the operator clicked,
    //clear the dsplay
//when clear is clicked, need to clear the display and all stores variables.
//when equals is clicked, need to run the operation and display the results.

//wow this should be way easier to do with strings.
//a running total storing all numbers and strings ought to do it.
    //if we use an array of strings, we can reduce the array all at once to get the result.
    //nope, problem is that there is no good way to convert the string of an operator to an actual operator. back to functions...

//so we still need a running total variable that starts at 0. Digits do the same thing.
//when an operator is clicked, we can perform that function on the running total with whatever number is currently in the display?

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
let num1 = "";
let num2 = "";
let operator = 0;
let operationsArray = [];


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
        num1 = operate();
        lastOperatorClicked = '+';
        calcDisplay.textContent = num1.toString();
    }
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    operate();
});



//Functions ready to be called:
function add() {
    return num1 + num2;
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
    switch (lastOperatorClicked) {
        case '+':
            add();

        case '-':
            subtract();
            
        case '*':
            multiply();

        case '/':
            divide();

        default:
            return "Something went horribly wrong!";
    }
}


function equals() {
    
}



calcDisplay.textContent = "Now the results are different";
