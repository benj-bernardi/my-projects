// forEach() Exercises

// display all numbers in an array
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((num) => {
  console.log("Number:", num);
});
// shows each number in the array


// sum all numbers in the array
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log("Total sum:", sum);
// sum: 150


// display only names with more than 4 letters
const names = ["Ana", "Lucas", "Peter", "John", "Mariana"];
names.forEach((name) => {
  if (name.length > 4) {
    console.log("Name with more than 4 letters:", name);
  }
});


// create a new array with each number doubled
const doubledNumbers = [];
numbers.forEach((num) => {
  doubledNumbers.push(num * 2);
});
console.log("Doubled numbers:", doubledNumbers);


// show indexes together with values
names.forEach((name, index) => {
  console.log(`Index ${index}: ${name}`);
});


// count how many numbers are greater than 25
let count = 0;
numbers.forEach((num) => {
  if (num > 25) count++;
});
console.log("Numbers greater than 25:", count);


// display the sum of even numbers only
let evenSum = 0;
numbers.forEach((num) => {
  if (num % 2 === 0) evenSum += num;
});
console.log("Sum of even numbers:", evenSum);


// display all names in uppercase
names.forEach((name) => {
  console.log("Uppercase:", name.toUpperCase());
});


// show products and their formatted prices
const products = [
  { name: "Shirt", price: 50 },
  { name: "Pants", price: 120 },
  { name: "Sneakers", price: 200 }
];

products.forEach((product) => {
  console.log(`${product.name} - $${product.price.toFixed(2)}`);
});


// calculate the total shopping cost
let total = 0;
products.forEach((product) => {
  total += product.price;
});
console.log("Total cost: $", total);


// display grades and pass/fail status
const grades = [7.5, 5.0, 9.0, 4.5];
grades.forEach((grade, i) => {
  const status = grade >= 6 ? "Passed" : "Failed";
  console.log(`Student ${i + 1}: Grade ${grade} - ${status}`);
});
