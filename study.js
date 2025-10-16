// sum of variables:
let num1 = 59;
let num2 = 31;

console.log(`${num1} + ${num2} = ${num1 + num2}`); // sum of num1 and num2
console.log(`${num1} - ${num2} = ${num1 - num2}`); // subtraction of num2 from num1
console.log(`${num1} / ${num2} = ${num1 / num2}`); // division of num1 by num2
console.log(`${num1} x ${num2} = ${num1 * num2}`); // multiplication of num1 and num2

// add and assign to variables:
let balance = 250;

balance += 25; // deposit of 25
balance -= 50; // purchase of 50
balance += 30; // another deposit of 30

console.log(balance);

// function with one parameter:
function greet(name) {
    return `Hi ${name}! Welcome!`; // returns a greeting message
}

let result = greet("Benjamin");
console.log(result);

// function sum:
function sum(num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`; // returns the sum of num1 and num2
}

console.log(sum(59, 32)); // 91

// arrow function double:
const double = (num1) => {
    return `${num1} x 2 = ${num1 * 2}`; // returns the double of num1
};

console.log(double(5)); // 10

// if, else:
let age = 20;

if (age > 18) {
    console.log(`You can enter.`);
} else {
    console.log(`You can't enter!`);
}
