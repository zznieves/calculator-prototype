
// tool for user input in Node.js
const input = require('prompt-sync')();

// get user input + verification
function getInput(question) {


    while(true) {

        let userInput = input(question);

        // conditions for user input to be considered 'invalid'

        // number
        if( question.includes('number') && (isNaN(Number(userInput)))) {
            console.log('Invalid input. Must be a number.');
        }
        // mathematical operator
        else if( question.includes('operators') && (userInput !== '+' && userInput !== '-' && userInput !== '*' && userInput !== '/')) {
            console.log('Invalid input. Must be 1 of the 4 mathematical operators (+, -, *, /)')
        }

        // input is valid if it makes it to this point, return the value to the caller to be saved
        else {
            return userInput;
        }
    }
}


// calculate product
function calculate(num1, num2, operator) {

    // if trying to divide by zero
    if((operator === '/') && (num2 === 0)) {
        console.log("\nCan't divide by zero. Please try again with a different number.");
        return undefined;
    }

    // perform the proper calculation depending on the operator
    switch(operator) {

        case '+':
            // perform addition (careful with implicit type conversion)
            return num1 + num2;
        case '-':
            // perform subtraction
            return num1 - num2;
        case '*':
            // perfrom multiplication
            return num1 * num2;
        default:
            // perform division
            return num1 / num2;

    }
}


// export functions to be used in other programs
module.exports.getInput = getInput;
module.exports.calculate = calculate;
