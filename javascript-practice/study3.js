// forEach

const people = ["Benjamin", "José", "Jhonathan"];

people.forEach((person, index, array) => {
    console.log(person);
    console.log(index);
});

const users = [
  { name: 'Rodolfo', age: 33, contact: '(19) 94343-3434' },
  { name: 'Paulo', age: 21, contact: '(12) 93443-3434' },
  { name: 'Aline', age: 40, contact: '(13) 94566-3434' },
  { name: 'Maria', age: 12, contact: '(14) 94343-3476' },
];

users.forEach((user, index, array) => {
    if (user.age < 18) {
        console.log(`${user.name}, ${index}`); // Shows users under 18
    }
});

let counter = 0;
const words = ["sun", "moon", "star", "sky"];

words.forEach((word, index) => {
    counter++;
    console.log(counter);
});

const names = ["ana", "bruno", "carla"];

names.forEach((name) => {
    console.log(name.toUpperCase());
});
