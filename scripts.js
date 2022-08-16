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

// Clear Function

const clearAll = () => {
    displayNumber = 0;
    hiddenNumber = 0;
    numberEntryArray = [];
    display.innerText = displayNumber;
}

clear.addEventListener('click', clearAll);

