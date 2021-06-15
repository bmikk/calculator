

//Global variables declared:
let lastOperatorClicked = '=';
let num1;
let num2;
let sum;
let operationJustPerformed = false;


let calcDisplay = document.querySelector('#calculatorWindow');



//Number button listeners:
const digit1 = document.querySelector('#digit1');
digit1.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "1";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "1";
    }
}));
const digit2 = document.querySelector('#digit2');
digit2.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "2";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "2";
    }
}));
const digit3 = document.querySelector('#digit3');
digit3.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "3";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "3";
    }
}));
const digit4 = document.querySelector('#digit4');
digit4.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "4";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "4";
    }
}));
const digit5 = document.querySelector('#digit5');
digit5.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "5";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "5";
    }
}));
const digit6 = document.querySelector('#digit6');
digit6.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "6";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "6";
    }
}));
const digit7 = document.querySelector('#digit7');
digit7.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "7";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "7";
    }
}));
const digit8 = document.querySelector('#digit8');
digit8.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "8";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "8";
    }
}));
const digit9 = document.querySelector('#digit9');
digit9.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "9";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "9";
    }
}));
const digit0 = document.querySelector('#digit0');
digit0.addEventListener('click', ( () => {
    if (operationJustPerformed) {
        clearDisplay();
        operationJustPerformed = false;
        calcDisplay.textContent += "0";
        console.log("condition successfully triggered");
    } else {
        calcDisplay.textContent += "0";
    }
}));



//Operation button listeners
const clearButton = document.querySelector('#clearBtn');
clearButton.addEventListener('click', () => clearDisplay()); 

const backspaceButton = document.querySelector('#backspaceBtn');
backspaceButton.addEventListener('click', () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
}); 

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    if (lastOperatorClicked == '=') {
        lastOperatorClicked = '+';
        num1 = parseInt(calcDisplay.textContent, 10);
        clearDisplay();
        console.log("add button - no operation triggered");
    } else {
        num2 = parseInt(calcDisplay.textContent, 10);
        operate();
        num1 = sum;
        lastOperatorClicked = '+';
    }
});

const subButton = document.querySelector('#subtract');
subButton.addEventListener('click', () => {
    if (lastOperatorClicked == '=') {
        lastOperatorClicked = '-';
        num1 = parseInt(calcDisplay.textContent, 10);
        clearDisplay();
        console.log("subtract button - no operation triggered");
    } else {
        num2 = parseInt(calcDisplay.textContent, 10);
        operate();
        num1 = sum;
        lastOperatorClicked = '-';
    }
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    if (lastOperatorClicked == '=') {
        lastOperatorClicked = '*';
        num1 = parseInt(calcDisplay.textContent, 10);
        clearDisplay();
        console.log("multiply button - no operation triggered");
    } else {
        num2 = parseInt(calcDisplay.textContent, 10);
        operate();
        num1 = sum;
        lastOperatorClicked = '*';
    }
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    if (lastOperatorClicked == '=') {
        lastOperatorClicked = '/';
        num1 = parseInt(calcDisplay.textContent, 10);
        clearDisplay();
        console.log("divide button - no operation triggered");
    } else {
        num2 = parseInt(calcDisplay.textContent, 10);
        operate();
        num1 = sum;
        lastOperatorClicked = '/';
    }
});


const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (lastOperatorClicked !== '=') {
        num2 = parseInt(calcDisplay.textContent, 10);
        operate();
        lastOperatorClicked = '=';
    } else {
        clearDisplay();
    }    
});


//Simple calculator number functions:
function add() {
    sum = num1 + num2;
    calcDisplay.textContent = sum;
    operationJustPerformed = true;
    logVariables();
}

function subtract() {
    sum = num1 - num2;
    calcDisplay.textContent = sum;
    operationJustPerformed = true;
    console.log("subtraction performed");
    logVariables();
}

function multiply() {
    sum = num1 * num2;
    calcDisplay.textContent = sum;
    operationJustPerformed = true;
    console.log("multiplication performed");
    logVariables();
}

function divide() {
    if (num2 == 0) {
        calcDisplay.textContent = "Learn to math!"
        operationJustPerformed = false;
    } else {
        sum = num1 / num2;
        calcDisplay.textContent = sum;
        operationJustPerformed = true;
        console.log("division performed");
        logVariables();
        }
}

function clearDisplay() {
    calcDisplay.textContent = "";
}

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
    console.log("Operation just performed? " + operationJustPerformed);
    console.log("Last Operator clicked is " + lastOperatorClicked);
    console.log("calcDisplay.textContent is " + calcDisplay.textContent);
}

calcDisplay.textContent = '';
