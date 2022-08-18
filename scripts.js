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

// each number function pushes to the back of this array which is then joined and set as display value
let numberEntryArray = [];
let displayNumber = 0;
// hiddenNumber takes the same value as displayNumber when - + / * selected. display number is then reset to 0
let hiddenNumber = 0;

// alters which function the equals function performs. variable set to 1, 2, 3, 4 depending on whether + - / * has been selected
let calculationOption = 0;

//Variables
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

const buttonNumbersArray = [one, two, three, four, five, six, seven, eight, nine];








// Update displayNumber

//Default display
display.innerText = displayNumber;

//pushZero doesn't allow zero to be entered first unless a decimal follows which is handled in pushDecimal
//if statement limits number of digits that can be entered
const pushZero = () => {
    if(numberEntryArray.length < 7 && numberEntryArray.length > 0) {
        numberEntryArray.push(0);
        displayNumber = numberEntryArray.join('');
        display.innerText = displayNumber;
    } else {
        display.innerText = displayNumber;
    }    
}

//pushNumber handles 1-9 with forEach used to assign eventListener and push the button value
const pushNumber = (num) => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(num);
        displayNumber = numberEntryArray.join('');
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

//Zero button eventListener
zero.addEventListener('click', pushZero);

//1-9 button eventListener
buttonNumbersArray.forEach((button) => {
    button.addEventListener('click', function(){ pushNumber(parseInt(button.value)) });
})

//Decimal button eventListener
decimal.addEventListener('click', pushDecimal);








// Remove highlight on + - / * button when not selected - function passed into plus, minus, multiply, divide & equals function

const buttonReset = () => {
    divide.classList.remove('highlight');
    multiply.classList.remove('highlight');
    minus.classList.remove('highlight');
    plus.classList.remove('highlight');
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
    if(calculationOption == 0) {
        divide.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        calculationOption = 1;
    } else {
        equalsButtonClick();
        divide.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        calculationOption = 1;
    }
    
}

divide.addEventListener('click', divideCalculator);

//Multiply function

const multiplyCalculator = () => {
    if(calculationOption == 0) {
        multiply.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        calculationOption = 2;
    } else {
        equalsButtonClick();
        multiply.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        calculationOption = 2;
    }
    
}

multiply.addEventListener('click', multiplyCalculator);

//Minus function

const minusCalculator = () => {
    if(calculationOption == 0) {
        minus.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        calculationOption = 3; 
    } else {
        equalsButtonClick();
        minus.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        calculationOption = 3; 
    }
}

minus.addEventListener('click', minusCalculator);

//Plus function

const plusCalculator = () => {
    if(calculationOption == 0) {
        plus.classList.add('highlight');
        hiddenNumber = parseInt(displayNumber);
        numberEntryArray = [];
        calculationOption = 4;
    } else {
        equalsButtonClick();
            plus.classList.add('highlight');
            hiddenNumber = parseInt(displayNumber);
            numberEntryArray = [];
            calculationOption = 4;
    }
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
        displayNumber = parseInt(displayNumber);
        displayNumber += hiddenNumber;
        display.innerText = displayNumber;
        numberEntryArray = [];
    }
    buttonReset();
    calculationOption = 0;
}

equals.addEventListener('click', equalsButtonClick);