function calculator(num1, num2, opr) {
    switch (opr) {
        case "+":
            return `${num1} + ${num2} = ${num1 + num2}`;

        case "-":
            return `${num1} - ${num2} = ${num1 - num2}`;

        case "x":
        case "*":
            return `${num1} x ${num2} = ${num1 * num2}`;

        case "/":
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return `${num1} / ${num2} = ${num1 / num2}`;

        default:
            return "Enter a valid option!";
    }
}

let result = calculator(); //Enter num1, num2 and an operator.
console.log(result);

