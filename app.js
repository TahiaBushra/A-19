"use strict"
//  Distructuring

// Example-1
// const numbers = [1, 58, 30, 54, 89];
// // const myNumber = numbers[1];
// const myNumber = numbers.at(-2);
// console.log(myNumber);
// const [num1, , b, d, num5, p] = numbers;
// console.log(num1, b, num5, d);

// Swicthing Result
// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(a, b);

// Nested Array

// Example-1
// const myArray = [23, 50, 45, [85, 27]];
// const [a, c, , [l]] = myArray;
// console.log(a, c, l);

// // Example-2
// const myFriend = ["Era", "Lili", ["Tom", "Jonas", ["Piter", "Mathew"]]];
// const [frnd1, frnd2, [frnd3, frnd4, [frnd5]]] = myFriend;
// console.log(frnd1, frnd3, frnd5);

// Object Distructuring

// Examle-1
// const animal = {
//     animalName: "Dog",
//     age: 5,
//     foods: ["Meat", "Dog Food"],
// };
// const { animalName, foods: [food1, food2] } = animal;
// console.log(animalName, food1);

// Examle-2
// const animal = {
//     animalName: "Dog",
//     age: 5,
//     foods: ["Meat", "Dog Food"],
//     enemies: {
//         enemy1: "Cat",
//         enemy2: "Bugs",
//     },
// };
// const { animalName: petName, age: petAge, foods: [food1, food2], enemies: { enemy2: Disgusting } } = animal;
// console.log(petName, petAge, food1, Disgusting);

// Spreed Operator

// Example-1
// const arr1 = [25, 30, 54];
// const arr2 = [59, 78, 13];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// // Example-2
// const obj1 = {
//     name: "Mimi",
//     roll: 24,
// };
// const obj2 = { ...obj1 }; // Spreed Operators Creat Different Memory For obj2
// obj2.name = "Lili";
// obj2.roll = 20;
// console.log(obj1);
// console.log(obj2);

// Rest Pattern
// const student = {
//     name: "Sara",
//     roll: 50,
//     address: "Dhaka",
// };
// const { roll, ...rest } = student;
// console.log(rest);

// // Rest Parameter
// function sum(a, b, ...args) {
//     console.log(args);
//     return a + b;
// };
// const arrTest = [8, 4];
// console.log(sum(...arrTest, 5, 9, 7, 1));

// Short Circuiting

// Example-1
const itsWinter = true;
const product = itsWinter && "Buy Hoddie";
console.log(product);

// Example-2
const number = 0;
const newNumber = number || 100;
console.log(newNumber);