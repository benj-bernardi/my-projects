// Math native library:

console.log(Math.floor(Math.random() * 100) + 1); // a number between 1 and 100

console.log(Math.sqrt(81)); // square root of 81

console.log(Math.round(4.7)); // 4.7 rounded

const biggest_number = (array) => {
    return Math.max.apply(null, array);
};

console.log(biggest_number([10, 25, 3, 99, 48])); // biggest number in an array

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(`Random number between 5 and 10: ${random(5, 10)}`);

// Objects:

const person = {
    name: "Benjamin",
    age: 15,
    profession: "Developer",
    present: function() {
        return `My name is ${this.name}, I am ${this.age} years old, and I am a ${this.profession}.`;
    }
};

console.log(person.present());



