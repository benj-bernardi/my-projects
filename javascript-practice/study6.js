// Exercises: setTimeout() and setInterval()

console.log("Starting the program...");

setTimeout(() => {
    console.log("Hello!");
}, 6000);

setTimeout(() => {
    console.log("How are you?");
}, 7000);

setTimeout(() => {
    console.log("Goodbye!");
}, 8000);

let i = 0;

const timer = setInterval(() => {
    if (i < 5) {
        i++;
        console.log(i);
    } else {
        clearInterval(timer);
    }
}, 1000);

// clearTimeout

const timeout = setTimeout(() => {
    console.log("This will never appear.");
}, 1000);

clearTimeout(timeout);
