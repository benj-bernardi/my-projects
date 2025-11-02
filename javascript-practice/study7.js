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

//-----------------------------------------------------------

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    authenticate(name, enteredPassword) {
        if (name !== this.name) {
            return "User not found!";
        }

        if (enteredPassword !== this.password) {
            return "Incorrect password!";
        }

        return `Password authenticated successfully! Welcome, ${this.name}`;
    }
}

// Creating users
const user1 = new User("John", 1234);
const user2 = new User("Mary", 4321);

// Testing authentication
console.log(user1.authenticate("John", 1234));
console.log(user2.authenticate("Mary", 9999)); 

//------------------------------------------

class Character { 
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
}

class Mage extends Character {
    constructor(name, health, attack, magic) {
        super(name, health, attack);
        this.magic = magic;
    }
    castSpell() {
        console.log(`${this.name} used a spell against the Goblin and dealt ${this.attack + this.magic} damage!`);
    }
}

class Warrior extends Character {
    constructor(name, health, attack, strength) {
        super(name, health, attack);
        this.strength = strength;
    }
    attack1() {
        console.log(`${this.name} attacked the Goblin with a sword and dealt ${this.attack + this.strength} damage!`);
    }
}

const newCharacter = new Mage("Merlin", 100, 30, 50);
const newCharacter2 = new Warrior("Arthur", 150, 50, 40);

newCharacter.castSpell();
newCharacter2.attack1();
