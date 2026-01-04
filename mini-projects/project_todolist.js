import readline from "readline";
// or const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function toDoList() {
    console.log("");
    console.log("=== TO-DO LIST ===");
    console.log("1 - View tasks");
    console.log("2 - Add a task");
    console.log("3 - Remove a task");
    console.log("4 - Exit");

    rl.question("Choose an option: ", (option) => {
        switch (option) {
            case "1":
                if (tasks.length === 0) {
                    console.log("No tasks yet!");
                } else {
                    tasks.forEach((task, index) => {
                        console.log(`${index} - ${task}`);
                    });
                }
                toDoList();
                break;

            case "2":
                rl.question("Write your task: ", (task) => {
                    tasks.push(task);
                    console.log("Task added successfully!");
                    toDoList();
                });
                break;

            case "3":
                if (tasks.length === 0) {
                    console.log("No tasks to remove!");
                    toDoList();
                    break;
                }

                tasks.forEach((task, index) => {
                    console.log(`${index} - ${task}`);
                });

                rl.question("Enter the number of the task you want to remove: ", (remove) => {
                    const index = Number(remove);
                    if (index >= 0 && index < tasks.length) {
                        tasks.splice(index, 1);
                        console.log("Task removed successfully!");
                    } else {
                        console.log("Invalid index!");
                    }
                    toDoList();
                });
                break;

            case "4":
                console.log("Exiting...");
                rl.close();
                break;

            default:
                console.log("Please enter a valid option!");
                toDoList();
        }
    });
}

toDoList();
