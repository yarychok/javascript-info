// Differences between Map and Object for entries usage
// Map returns an Iterator, Object returns an array
// let map = new Map();

// map.set({'key': 'value'});
// console.log(map.keys()); // [Map iterator] { {key: 'value'} }
// console.log(map.values());  // [Map iterator] {undefined}
// console.log(map.entries()); // [Map iterator] { [ {key: 'value'}, undefined ] }

// let obj = {key: 'value'};
// console.log(Object.entries(obj)); // [[ 'key', 'value' ]]


// Note! Object.keys/values/entries ignore sy,bolic properties
// Just like a 'for...in' loop, these methods ignore properties that use Symbol() as keys.


// Transforming objects
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };

// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrices);
// console.log(doublePrices.meat); // 8


// 01 Task
// let salaries = {
//     "Dariya": 100,
//     "Arthur": 200,
//     "Liubomyr": 250,
// };

// let emptyObject = {};

// function sumSalaries(obj) {
//     let sumOfSalaries = 0; 

//     for (let value of Object.values(obj)) {
//         sumOfSalaries += value;
//     };

//     return sumOfSalaries;
// }

// console.log(sumSalaries(salaries)); // 550
// console.log(sumSalaries(emptyObject)); // 0

// 02 Task
// let user = {
//     name: "Arthur",
//     age: 18,
// };

// function count(obj) {
//     return Object.keys(obj).length;
// }

// console.log(count(user)); // 2