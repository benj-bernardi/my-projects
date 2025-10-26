let name = "Benjamin";

console.log(`Hello, ${name}`);

let num1 = 5;
let num2 = 5;

console.log(`${num1} + ${num2} = ${num1 + num2}`);

let evenOrOdd = 15;

if (evenOrOdd % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

const numbers = [12, 23];

function getMaxNumber(array) {
    return Math.max.apply(null, array);
}

console.log(getMaxNumber(numbers));

const names = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

names.forEach((name) => {
    console.log(name);
});

const grades = [7, 5, 8, 6, 9];

function calculateAverage(arr, periods) {
    const sum = arr.reduce((acc, grade) => acc + grade, 0);
    return sum / periods;
}

console.log(calculateAverage(grades, 5)); // Result: 7
