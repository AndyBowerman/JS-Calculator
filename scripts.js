/* 

displayNumber should only be a string after decimal is selected at which point nothing should work without another number being selected.

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
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(0);
        displayNumber = numberEntryArray.join('');
        display.style.fontSize = "60px";
        display.innerText = amendNumberLength(displayNumber);
    }   
}

//pushNumber handles 1-9 with forEach used to assign eventListener and push the button value
const pushNumber = (num) => {
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(num);
        displayNumber = numberEntryArray.join('');
        display.style.fontSize = "60px";
        display.innerText = amendNumberLength(displayNumber);
    }  
}

//if statement stops decimal being entered twice in the same number and adds a 0 in front if decmial is entered first.
const pushDecimal = () => {
    if(numberEntryArray.length < 7 && numberEntryArray.length > 0) {
        if(!numberEntryArray.includes('.')) {
            numberEntryArray.push('.');
            displayNumber = numberEntryArray.join('');
            display.innerText = displayNumber;
        }
    }
}

//Zero button eventListener
zero.addEventListener('click', pushZero);

//1-9 button eventListener
buttonNumbersArray.forEach((button) => {
    button.addEventListener('click', function(){ pushNumber(button.value) });
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


//shorten number to 7 digits including decimal - pass function to equalsButtonClick

const amendNumberLength = (num) => {
    //convert to string to find the length
    const str = num.toString();
    if(str.length > 7) {
        //convert to array to find the index of the decimal
        let arr = str.split('')
        if(!arr.includes('.')) {
            //if there's no decimal return error message
            display.style.fontSize = "40px";
            //Set displayNumber to 'Limit Exceeded' to stop the other functions running on it
            displayNumber = 'Limit Exceeded';
            return displayNumber;
        } else {
            decimalIndex = arr.indexOf('.') + 1;
            // * 1 turns the string back into a number, parseInt doesn't work
            let amendedNumber = arr.join('') * 1;
            // 7 minus the position of the decimal gives correct number of decimal places regardless of the position of the decimal.
            displayNumber = amendedNumber.toFixed(7 - decimalIndex);
            return displayNumber;
        }
    } else {
        displayNumber = str * 1;
        return displayNumber;
    }
}













// Clear Function

const clearAll = () => {
    display.style.fontSize = "60px";
    displayNumber = 0;
    hiddenNumber = 0;
    numberEntryArray = [];
    calculationOption = 0;
    display.innerText = displayNumber;
    buttonReset();
}

clear.addEventListener('click', clearAll);

// Positive / Negative Button

const negativePositiveToggle = () => {
        if(displayNumber == 0 || typeof displayNumber == "string") {
            display.innerText = displayNumber;
    }   else if(displayNumber > 0) {
            //turn the number into a negative
            let str = displayNumber.toString();
            let arr = str.split('');
            arr.unshift('-');
            displayNumber = arr.join('');
            display.innerText = amendNumberLength(displayNumber);
        } else {
            //turn the number into a positive
            let str = displayNumber.toString();
            let arr = str.split('');
            arr.shift();
            displayNumber = arr.join('');
            display.innerText = amendNumberLength(displayNumber);
        }
    }    

negative.addEventListener('click', negativePositiveToggle);

// Percentage function

const percentageCalculator = () => {
    if(typeof displayNumber == "number") {
        displayNumber = displayNumber / 100;
        display.innerText = amendNumberLength(displayNumber);
    }
}

percentage.addEventListener('click', percentageCalculator);


//Calculation functions - condense to one function? 

// Divide function

const divideCalculator = () => {
    if(typeof displayNumber != 'string') {
        equalsButtonClick();
        divide.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        displayNumber = 0;
        calculationOption = 1;
    }
}

divide.addEventListener('click', divideCalculator);

//Multiply function

const multiplyCalculator = () => {
    if(typeof displayNumber != 'string') {
        equalsButtonClick();
        multiply.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        displayNumber = 0;
        calculationOption = 2;
    }  
}

multiply.addEventListener('click', multiplyCalculator);

//Minus function

const minusCalculator = () => {
    if(typeof displayNumber != 'string') {
        equalsButtonClick();
        minus.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        displayNumber = 0;
        calculationOption = 3;
    }  
}

minus.addEventListener('click', minusCalculator);

//Plus function

const plusCalculator = () => {
    if(typeof displayNumber != 'string') {
        equalsButtonClick();
        plus.classList.add('highlight');
        hiddenNumber = displayNumber;
        numberEntryArray = [];
        displayNumber = 0;
        calculationOption = 4;
    }  
}

plus.addEventListener('click', plusCalculator);











const equalsButtonClick = () => {
    if(calculationOption == 1) {
        displayNumber = hiddenNumber / displayNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    } else if(calculationOption == 2) {
        displayNumber = hiddenNumber * displayNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    } else if(calculationOption == 3) {
        displayNumber = hiddenNumber - displayNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    } else if(calculationOption == 4) {
        displayNumber = parseInt(displayNumber);
        displayNumber += hiddenNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    }
    calculationOption = 0;
}

equals.addEventListener('click', equalsButtonClick);