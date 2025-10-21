const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("");
  console.log("-- CALCULATOR --");
  console.log("1 - ADDITION");
  console.log("2 - SUBTRACTION");
  console.log("3 - MULTIPLICATION");
  console.log("4 - DIVISION");
  console.log("5 - MULTIPLICATION TABLE");
  console.log("6 - EXIT");

  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        rl.question("Enter the first number: ", (num1) => {
          rl.question("Enter the second number: ", (num2) => {
            console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
            menu();
          });
        });
        break;

      case "2":
        rl.question("Enter the first number: ", (num1) => {
          rl.question("Enter the second number: ", (num2) => {
            console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
            menu();
          });
        });
        break;

      case "3":
        rl.question("Enter the first number: ", (num1) => {
          rl.question("Enter the second number: ", (num2) => {
            console.log(`${num1} x ${num2} = ${Number(num1) * Number(num2)}`);
            menu();
          });
        });
        break;

      case "4":
        rl.question("Enter the first number: ", (num1) => {
          rl.question("Enter the second number: ", (num2) => {
            if (Number(num2) === 0) {
              console.log("Error: division by zero!");
            } else {
              console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
            }
            menu();
          });
        });
        break;

      case "5":
        rl.question("Enter a number for the multiplication table: ", (table) => {
          for (let i = 0; i <= 10; i++) {
            console.log(`${table} x ${i} = ${Number(table) * i}`);
          }
          menu();
        });
        break;

      case "6":
        console.log("Exiting...");
        rl.close();
        break;

      default:
        console.log("Please enter a valid option!");
        menu();
        break;
    }
  });
}

menu();