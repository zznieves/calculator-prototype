
// Step #1: explain to user how to use the program
console.log(`
Welcome to the calculator!

This program will ask you for 3 seperate pieces of data;

    1. A first number
    2. A second number
    3. A mathematical operator (+, -, *, /)

The progam will then apply the operator to the 2 numbers and produce a result.
-------------------------------------------------------------------------------
\n`);


// Step #2: get inputs from user
const functions = require('./modules/functions.js');

let num1 = Number(functions.getInput('Please enter the 1st number: '));
let num2 = Number(functions.getInput('Please enter the 2nd number: '));
let operator = functions.getInput('Please pick 1 of the following mathematical operators to use (+, -, *, /): ');


// Step #3: perform the proper calculation based off of input and display output to user
console.log(`
The 1st number: ${num1}
The 2nd number: ${num2}
The mathematical operator to be used: ${operator}

${num1} ${operator} ${num2} = ${functions.calculate(num1, num2, operator)}`);

