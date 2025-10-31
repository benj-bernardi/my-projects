// Study about JS classes

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    honk() {
        return `${this.model} honked!`;
    }
}

const uno = new Car("Fiat", "Uno", 2001);
const rav4 = new Car("Toyota", "Rav4", 2018);

console.log(uno);
console.log(rav4.honk());

//-----------------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Your name is ${this.name}, and your age is ${this.age}`;
    }
}

const person1 = new Person("Benjamin", 15);
const person2 = new Person("Arthur", 16);

console.log(person1.introduce());
console.log(person2.introduce());

//------------------------------------------------

class BankAccount {
    constructor(holder, balance) {
        this.holder = holder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `${amount}$ has been deposited.`;
    }

    withdraw(amount) {
        if (this.balance <= 0) {
            return `Not enough balance to withdraw.`;
        } else {
            this.balance -= amount;
            return `${amount}$ withdrawn.`;
        }
    }

    checkBalance() {
        return `Balance: ${this.balance}$`;
    }
}

const user = new BankAccount("Benjamin", 1500);

console.log(user.deposit(50));
console.log(user.withdraw(150));
console.log(user.checkBalance());
