const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 15) + 1;

console.log("==== GUESS THE NUMBER ====");
console.log("There is a specific number between 1 and 15. Try to find it!");

function guessNumber() {
    rl.question("Choose a number between 1 and 15: ", (number) => {
        console.log("");
        if (Number(number) === randomNumber) {
            console.log("You got it! Congratulations!");
            rl.close();
        } else if (Number(number) < randomNumber) {
            console.log("Try a higher number!");
            guessNumber();
        } else if (Number(number) > randomNumber) {
            console.log("Try a lower number!");
            guessNumber();
        }
    });
}

guessNumber();
