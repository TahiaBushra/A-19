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