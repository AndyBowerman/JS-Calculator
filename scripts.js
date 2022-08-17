/* 

display
    - global variable holding the number in the display
    - global variable holding the hidden number 

AC - function to return displayNumber & hiddenNumber to 0

+/- - if number in display isn't a 0 make poisitive or negative depending what is already showing

% - function to divide displayNumber by 100

numbers - push to an array and joined so not back to front

limit length of the number that can be entered

*/

let displayNumber = 0;
let hiddenNumber = 0;
let numberEntryArray = [];
let calculationOption = 0;

const display = document.querySelector(".calculator__display--p");
const clear = document.getElementById("calculator__clear");
const negative = document.getElementById("calculator__negative");
const percentage = document.getElementById("calculator__percentage");
const divide = document.getElementById("calculator__divide");
const multiply = document.getElementById("calculator__multiply");
const minus = document.getElementById("calculator__minus");
const plus = document.getElementById("calculator__plus");
const equals = document.getElementById("calculator__equals");
const zero = document.getElementById("calculator__0");
const one = document.getElementById("calculator__1");
const two = document.getElementById("calculator__2");
const three = document.getElementById("calculator__3");
const four = document.getElementById("calculator__4");
const five = document.getElementById("calculator__5");
const six = document.getElementById("calculator__6");
const seven = document.getElementById("calculator__7");
const eight = document.getElementById("calculator__8");
const nine = document.getElementById("calculator__9");
const decimal = document.getElementById("calculator__decimal");


// Update displayNumber

//Default display
display.innerText = displayNumber;

//pushZero doesn't allow zero to be entered first unless a decimal follows which is handled in pushDecimal
const pushZero = () => {
    if(numberEntryArray.length < 7 && numberEntryArray.length > 0) {
        numberEntryArray.push(0);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushOne = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(1);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushTwo = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(2);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushThree = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(3);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushFour = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(4);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushFive = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(5);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushSix = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(6);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushSeven = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(7);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushEight = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(8);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

const pushNine = () => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(9);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

//if statement stops decimal being entered twice in the same number and adds a 0 in front if decmial is entered first.
const pushDecimal = () => {
    if(numberEntryArray.length < 7 && numberEntryArray.length > 0) {
        if(numberEntryArray.indexOf('.') < 0) {
            numberEntryArray.push('.');
            displayNumber = numberEntryArray.join('');
            display.innerText = displayNumber;
        }
    } else {
        numberEntryArray.push('0.');
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    }    
}

zero.addEventListener('click', pushZero);
one.addEventListener('click', pushOne);
two.addEventListener('click', pushTwo);
three.addEventListener('click', pushThree);
four.addEventListener('click', pushFour);
five.addEventListener('click', pushFive);
six.addEventListener('click', pushSix);
seven.addEventListener('click', pushSeven);
eight.addEventListener('click', pushEight);
nine.addEventListener('click', pushNine);
decimal.addEventListener('click', pushDecimal);

//Change button colour back to original styling. + - / * change colour when selected.

const buttonReset = () => {
    divide.style.backgroundColor = 'orange';
    divide.style.color = 'white';
    multiply.style.backgroundColor = 'orange';
    multiply.style.color = 'white';
    minus.style.backgroundColor = 'orange';
    minus.style.color = 'white';
    plus.style.backgroundColor = 'orange';
    plus.style.color = 'white';
}

// Clear Function

const clearAll = () => {
    displayNumber = 0;
    hiddenNumber = 0;
    numberEntryArray = [];
    display.innerText = displayNumber;
    buttonReset();
}

clear.addEventListener('click', clearAll);

// Positive / Negative Button

const negativePositiveToggle = () => {
    if(displayNumber == 0) {
        display.innerText = displayNumber;
    } else if(displayNumber > 0) {
        let str = displayNumber.toString();
        let arr = str.split('');
        arr.unshift('-');
        displayNumber = arr.join('');
        display.innerText = displayNumber;
    } else {
        let str = displayNumber.toString();
        let arr = str.split('');
        arr.shift();
        displayNumber = arr.join('');
        display.innerText = displayNumber;
    }
}

negative.addEventListener('click', negativePositiveToggle);

// Percentage function

const percentageCalculator = () => {
    displayNumber = displayNumber / 100;
    display.innerText = displayNumber;
}

percentage.addEventListener('click', percentageCalculator);

// Divide function

const divideCalculator = () => {
    divide.style.backgroundColor = 'white';
    divide.style.color = 'orange';
    hiddenNumber = displayNumber;
    numberEntryArray = [];
    calculationOption = 1;
}

divide.addEventListener('click', divideCalculator);

//Multiply function

const multiplyCalculator = () => {
    multiply.style.backgroundColor = 'white';
    multiply.style.color = 'orange';
    hiddenNumber = displayNumber;
    numberEntryArray = [];
    calculationOption = 2;
}

multiply.addEventListener('click', multiplyCalculator);

//Minus function

const minusCalculator = () => {
    minus.style.backgroundColor = 'white';
    minus.style.color = 'orange';
    hiddenNumber = displayNumber;
    numberEntryArray = [];
    calculationOption = 3;
}

minus.addEventListener('click', minusCalculator);

//Plus function

const plusCalculator = () => {
    plus.style.backgroundColor = 'white';
    plus.style.color = 'orange';
    hiddenNumber = displayNumber;
    numberEntryArray = [];
    calculationOption = 4;
}

plus.addEventListener('click', plusCalculator);


/* + - x / just need to push displayNumber to hiddenNumber and reset diplay number
           = function then performs the calculation. */

const equalsButtonClick = () => {
    if(calculationOption == 1) {
        displayNumber = hiddenNumber / displayNumber;
        display.innerText = displayNumber;
        numberEntryArray = [];
    } else if(calculationOption == 2) {
        displayNumber = hiddenNumber * displayNumber;
        display.innerText = displayNumber;
        numberEntryArray = [];
    } else if(calculationOption == 3) {
        displayNumber = hiddenNumber - displayNumber;
        display.innerText = displayNumber;
        numberEntryArray = [];
    } else if(calculationOption == 4) {
        displayNumber = hiddenNumber + displayNumber;
        display.innerText = displayNumber;
        numberEntryArray = [];
    }
    buttonReset();
    calculationOption = 0;
}

equals.addEventListener('click', equalsButtonClick);