const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function diceRoller() {
    console.log("");
    console.log("-- DICE ROLLER --");
    console.log("1 - Roll a 1d4");
    console.log("2 - Roll a 1d6");
    console.log("3 - Roll a 1d8");
    console.log("4 - Roll a 1d12");
    console.log("5 - Roll a 1d20");
    console.log("6 - Roll a 1d100");
    console.log("7 - Exit");

    rl.question("Choose which die you want to roll: ", (dice) => {
        switch (dice) {
            case "1":
                rl.question("How many times do you want to roll this die?: ", (rolls) => {
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d4 = ${Math.floor(Math.random() * (5 - 1) + 1)}`);
                    }
                    diceRoller();
                });
                break;
            case "2":
                rl.question("How many times do you want to roll this die?: ", (rolls) => {
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d6 = ${Math.floor(Math.random() * (7 - 1) + 1)}`);
                    }
                    diceRoller();
                });
                break;
            case "3":
                rl.question("How many times do you want to roll this die?: ", (rolls) => {
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d8 = ${Math.floor(Math.random() * (9 - 1) + 1)}`);
                    }
                    diceRoller();
                });
                break;
            case "4":
                rl.question("How many times do you want to roll this die?: ", (rolls) => {
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d12 = ${Math.floor(Math.random() * (13 - 1) + 1)}`);
                    }
                    diceRoller();
                });
                break;
            case "5":
                rl.question("How many times do you want to roll this die?: ", (rolls) => {
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d20 = ${Math.floor(Math.random() * (21 - 1) + 1)}`);
                    }
                    diceRoller();
                });
                break;
            case "6":
                rl.question("How many times do you want to roll this die?: ", (rolls) => {
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d100 = ${Math.floor(Math.random() * (101 - 1) + 1)}`);
                    }
                    diceRoller();
                });
                break;
            case "7":
                console.log("Exiting...");
                rl.close();
                break;
            default:
                console.log("Please choose a valid option!");
                diceRoller();
                break;
        }
    });
}

diceRoller();
