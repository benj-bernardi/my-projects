/* -------> Native Readline Library <--------- */

const readline = require('readline'); // Importing the module

// Creating the "rl" variable for the interface
const rl = readline.createInterface({ 
    input: process.stdin,  // Terminal input
    output: process.stdout // Terminal output
});

rl.question("Name: ", (name) => {
    rl.question("Age: ", (age) => {
        rl.question("Country: ", (country) => {
            console.log(`Your name is ${name}, you are ${age} years old, and you are from ${country}.`);
            rl.close(); // Closing the interface
        });
    });
});
