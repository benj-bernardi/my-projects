import readline from "readline";
// or const readline = require("readline");

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
    console.log("7 - Leave the tavern");

    rl.question("Choose your fate, adventurer (1-7): ", (dice) => {
        switch (dice) {
            case "1":
                rl.question("How many times shall I roll the 1d4 for you?: ", (rolls) => {
                    console.log("Rolling the bones...");
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d4 = ${Math.floor(Math.random() * (5 - 1) + 1)}`);
                    }
                    console.log("The dice have spoken.");
                    diceRoller();
                });
                break;
            case "2":
                rl.question("How many times shall I roll the 1d6 for you?: ", (rolls) => {
                    console.log("Rolling the bones...");
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d6 = ${Math.floor(Math.random() * (7 - 1) + 1)}`);
                    }
                    console.log("The dice have spoken.");
                    diceRoller();
                });
                break;
            case "3":
                rl.question("How many times shall I roll the 1d8 for you?: ", (rolls) => {
                    console.log("Rolling the bones...");
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d8 = ${Math.floor(Math.random() * (9 - 1) + 1)}`);
                    }
                    console.log("The dice have spoken.");
                    diceRoller();
                });
                break;
            case "4":
                rl.question("How many times shall I roll the 1d12 for you?: ", (rolls) => {
                    console.log("Rolling the bones...");
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d12 = ${Math.floor(Math.random() * (13 - 1) + 1)}`);
                    }
                    console.log("The dice have spoken.");
                    diceRoller();
                });
                break;
            case "5":
                rl.question("How many times shall I roll the 1d20 for you?: ", (rolls) => {
                    console.log("Rolling the bones...");
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d20 = ${Math.floor(Math.random() * (21 - 1) + 1)}`);
                    }
                    console.log("The dice have spoken.");
                    diceRoller();
                });
                break;
            case "6":
                rl.question("How many times shall I roll the 1d100 for you?: ", (rolls) => {
                    console.log("Rolling the bones...");
                    for (let i = 0; i < rolls; i++) {
                        console.log(`1d100 = ${Math.floor(Math.random() * (101 - 1) + 1)}`);
                    }
                    console.log("The dice have spoken.");
                    diceRoller();
                });
                break;
            case "7":
                console.log("You sheathe your dice and leave the tavern...");
                rl.close();
                break;
            default:
                console.log("That’s not a valid option, traveler!");
                diceRoller();
                break;
        }
    });
}

diceRoller();
