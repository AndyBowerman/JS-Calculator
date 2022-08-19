// each number function pushes to the back of this array which is then joined and set as the value of displayNumber
let numberEntryArray = [];
// variable to hold the number visible in the calculator display
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

// arrays to loop through to apply multiple eventlisteners at once.
const buttonNumbersArray = [zero, one, two, three, four, five, six, seven, eight, nine];
const arithmeticArray = [divide, multiply, minus, plus];



//shortens displayNumber to 7 digits including decimal and converts any strings to a number unless length exceeded - passed into all other functions except pushDecimal

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
        //convert string to number;
        displayNumber = str * 1;
        return displayNumber;
    }
}



// INPUT NUMBERS & DECIMALS

//Default display
display.innerText = displayNumber;

//pushNumber handles 0-9 with forEach used to assign eventListener and push the button value
const pushNumber = (num) => {
    //limit number of digits entered to 7
    if(numberEntryArray.length < 7) {
        numberEntryArray.push(num);
        //num represents button.value which is the number required
        displayNumber = numberEntryArray.join('');
        display.style.fontSize = "60px";
        display.innerText = amendNumberLength(displayNumber);
    }  
}

/* push decimal place into number - displayNumber is a string following this function but can only
be followed by pushing a number which reverts displayNumber back to a string */
const pushDecimal = () => {
    //stop decimal being entered first
    if(numberEntryArray.length < 7 && numberEntryArray.length > 0) {
        //stop decimal being entered twice
        if(!numberEntryArray.includes('.')) {
            numberEntryArray.push('.');
            displayNumber = numberEntryArray.join('');
            display.innerText = displayNumber;
        }
    }
}



//0-9 button eventListener - passing the value of the button to give the relevant number
buttonNumbersArray.forEach((button) => {
    button.addEventListener('click', function(){ pushNumber(button.value) });
})

//Decimal button eventListener
decimal.addEventListener('click', pushDecimal);




// Remove highlight on + - / * button when not selected - function passed into clearall & equals function

const buttonReset = () => {
    //remove class highlight - could have passed button value as argument but only 4 buttons so typed out
    divide.classList.remove('highlight');
    multiply.classList.remove('highlight');
    minus.classList.remove('highlight');
    plus.classList.remove('highlight');
}



// CALCULATION FUNCTIONS

// Clear Function - resets everything

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
    //function won't run if the number is negative or a string - should only be a string following a decimal or if limit exceeded
    if(displayNumber == 0 || typeof displayNumber == "string") {
        display.innerText = displayNumber;
    } else if(displayNumber > 0) {
        //turn the number into a negative - split to array
        let str = displayNumber.toString();
        let arr = str.split('');
        //add - to the front of array
        arr.unshift('-');
        displayNumber = arr.join('');
        //join together and convert to number by running through amendNumberLength
        display.innerText = amendNumberLength(displayNumber);
    } else {
        //turn the number into a positive - as above but removes the "-"
        let str = displayNumber.toString();
        let arr = str.split('');
        arr.shift();
        displayNumber = arr.join('');
        display.innerText = amendNumberLength(displayNumber);
    }
}    

negative.addEventListener('click', negativePositiveToggle);

// Percentage function - divides number by 100

const percentageCalculator = () => {
    //only runs on numbers
    if(typeof displayNumber == "number") {
        displayNumber = displayNumber / 100;
        display.innerText = amendNumberLength(displayNumber);
    }
}

percentage.addEventListener('click', percentageCalculator);


//Calculation functions - accepts a button from arithmeticArray 

const calculationSelector = (button) => {
    //doesn't run on strings
    if(typeof displayNumber != 'string') {
        //runs equalsButtonClick so users can chain calculations. If calculationOption is set to 0 ie a calculationSelector hadn't been chosen before nothing happens
        equalsButtonClick();
        //Add class to selected button - alters style
        button.classList.add('highlight');
        //store the displayNumber at the point the selector is clicked in hiddenNumber variable
        hiddenNumber = displayNumber;
        //reset displayNumber & numberEntryArray so user can insert the 2nd number in the calculation
        numberEntryArray = [];
        displayNumber = 0;
        //calculationOption determines what calculation the equals function performs
        calculationOption = button.value;
    }
}

arithmeticArray.forEach((button) => button.addEventListener('click', function(){ calculationSelector(button) }))


const equalsButtonClick = () => {
    //calculationOption determines which of the below options is performed
    //displayNumber updated to the result of the calculation, run through amendNumberLength to ensure doesn't exceed 7 digits and displayed
    //numberEntryArray reset which will amend displayNumber when user inputs. Didn't reset now or would delete the result before the user can see it. 
    if(calculationOption == 'divide') {
        displayNumber = hiddenNumber / displayNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    } else if(calculationOption == 'multiply') {
        displayNumber = hiddenNumber * displayNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    } else if(calculationOption == 'minus') {
        displayNumber = hiddenNumber - displayNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    } else if(calculationOption == 'plus') {
        displayNumber = parseInt(displayNumber);
        displayNumber += hiddenNumber;
        display.innerText = amendNumberLength(displayNumber);
        numberEntryArray = [];
        buttonReset();
    }
    //calculationOption reset so equals won't continue to perform sums without reselecting + - * / 
    calculationOption = 0;
}

equals.addEventListener('click', equalsButtonClick);