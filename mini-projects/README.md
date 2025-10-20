#1 First Project: JavaScript Calculator

A simple calculator built with JavaScript that performs basic arithmetic operations: addition, subtraction, multiplication, and division.
This project was created for learning purposes and demonstrates the use of functions, switch statements, and basic error handling.

Features

Addition (+)
Subtraction (-)
Multiplication (x or *)
Division (/) with zero-check error handling
Returns results in a readable format (5 + 3 = 8)

Clean and easy-to-understand code

How It Works:

The calculator() function takes three parameters:
num1: The first number
num2: The second number
opr: The operator (+, -, x, *, /)

Depending on the operator, it performs the corresponding operation and returns the formatted result as a string.

Example:
console.log(calculator(10, 5, "+"));
// Output: "10 + 5 = 15"

console.log(calculator(8, 2, "/"));
// Output: "8 / 2 = 4"

Technologies Used
JavaScript (ES6)

How to Run:
Copy the code into a .js file (e.g., calculator.js).
Run it using Node.js or directly in your browser’s console.
Call the calculator() function with your desired parameters.
