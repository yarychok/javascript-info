// // Map
// let firstMap = new Map();

// firstMap.set('1', 'firstString');
// console.log(firstMap); // Map(1) {'1' => 'firstString'}

// console.log(firstMap.get('1')); // firstString

// console.log(firstMap.has('1')); // true
// console.log(firstMap.has('123')); // false

// firstMap.set('2', 'willBeRemoved');
// console.log(firstMap); // Map(2) {'1' => 'firstString', '2' => 'willBeRemoved'}

// firstMap.delete('2');
// console.log(firstMap); // Map(1) {'1' => 'firstString'}


// let secondMap = new Map();

// secondMap.set('1', 'someString');

// secondMap.clear();
// console.log(secondMap); // Map(0) {}

// console.log(firstMap.size); // 1
// console.log(secondMap.size); // 0


// let thirdMap = new Map();

// thirdMap.set('1', 'str1');
// thirdMap.set(1, 'num1');
// thirdMap.set(true, 'bool1');

// console.log(thirdMap); // Map(3) {'1' => 'str1', 1 => 'num1', true => 'bool1'}

// console.log(thirdMap.get(1)); // 'num1'
// console.log(thirdMap.get(true)); // 'bool1'

// console.log(thirdMap.size); // 3


// let objectForMap = { name: 'Object'};

// let ourMap = new Map();

// ourMap.set(objectForMap, 123);

// console.log(ourMap); // Map(1) { {name: 'Object' } => 123}


// let firstUser = { name: "Liubomyr" };
// let secondUser = { name: "Arthur" };

// let coupleOfUsers = {};

// coupleOfUsers[firstUser] = 123;
// coupleOfUsers[secondUser] = 234;

// console.log(coupleOfUsers); // { '[object Object]': 234} (firstUser object is overwritten)


// // Iteration over Map
// let someMap = new Map([
//     ['cucumber', 500],
//     ['tomato', 350],
//     ['onion', 50],
// ]);

// console.log(someMap); // Map(3) { 'cucumber' => 500, 'tomato' => 350, 'onion' => 50}

// for (let item of someMap.keys()) {
//     console.log(item); // cucumber, tomato, onion
// }

// for (let item of someMap.values()) {
//     console.log(item); // 500, 350, 50
// }

// for (let item of someMap.entries()) {
//     console.log(item); // ['cucumber', 500], ['tomato', 350], ['onion', 50]
// }

// for (let item of someMap) {
//     console.log(item); // the same [key: value]
// }


// // 'Object.entries': Map from Object
// let obj = {
//     name: "Arthur",
//     age: 18,
// };

// let map = new Map(Object.entries(obj));

// console.log(map); // Map(2) { 'name' => 'Arthur', 'age' => 18}
// console.log(obj); // { name: 'Arthur', age: 18}
// console.log(map.get('name')); // "Arthur"


// // 'Object.fromEntries': Object from Map
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['apple', 3],
// ]);

// console.log(prices); // { banana: 1, orange: 2, apple: 3}
// console.log(prices.banana); // 1


// let map = new Map();
// map.set('chicken', 1);
// map.set('eggs', 2);
// map.set('cheese', 3);

// let obj = Object.fromEntries(map);
// console.log(obj); // { chicken: 1, eggs: 2, cheese: 3}


// // Set
// let firstSet = new Set([1, 2, 3, 4, 5, 6, 1, 5, 4, 6, 3]);
// console.log(firstSet); // Set(6) { 1, 2, 3, 4, 5, 6}

// console.log(firstSet.add(7)); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// console.log(firstSet.delete(1)); // true (more then one 1)
// console.log(firstSet.delete(7)); // false (only one 7)

// console.log(firstSet.add(1)); // Set(6) { 2, 3, 4, 5, 6, 1 }

// console.log(firstSet.has(5)); // true

// console.log(firstSet.size); // 6

// firstSet.clear();
// console.log(firstSet); // Set(0) {}


// // Set doesn't allow duplicates
// let anotherSet = new Set();

// let ivan = {name: "Ivan"};
// let petro = {name: "Petro"};
// let mariya = {name: "Mariya"};

// anotherSet.add(ivan);
// anotherSet.add(petro);
// anotherSet.add(mariya);
// anotherSet.add(petro);
// anotherSet.add(mariya);
// anotherSet.add(mariya);

// console.log(anotherSet.size); // 3

// for (let user of anotherSet) {
//     console.log(user.name); // Ivan, Petro, Mariya
// }


// // Iteration over Set
// let anotherSet = new Set([
//     "oranges",
//     "apples",
//     "bananas",
// ]);

// anotherSet.forEach((value, valueAgain, anotherSet) => { 
//     // two optional arguments, for compatibility with Map where callback passed
//     console.log(value); // oranges, apples, bananas
// });

// for (let item of anotherSet) console.log(item); // the same


// Summary

// Map - is a [key:value] collection.

// Map's methods and properties:
// - new Map([iterable]) - creates the map, with optional iterable of [key, value] pairs for initialization.
// - map.set(key, value) - stores the value by the key, returns the map itself.
// - map.get(key) - returns the value by the key, undefined if key doesn't exist.
// - map.has(key) - return true if the keu exists, false otherwise.
// - map.delete(key) - removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
// - map.clear() - removes everything from the map.
// - map.size - returns the current element count.

// The differences from a regular Object:
// - Any keys, objects can be keys.
// - Additional convenient methods, the size property.

// Set - is a collection of unique values.

// Set's methods and properties:
// - new Set([iterable]) = creates the set, with optional iterable of values for initialization.
// - set.add(value) - adds a value (does nothing if value exists), returns the set itself.
// - set.delete(value) - removes the value, returns true of value existed at the moment of the call, otherwise false.
// - set.has(value) - returns true if the value exists in the set, otherwise false.
// - set.size - is the elements count.

// Iteration over Map and Set is always in the insertion order, so we can't say that these collections are unordered, but we can't reorder elements or directly get an element by its index.


// 01 Task
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna", ":)"];

// console.log(unique(values)); // ['Hare', 'Krishna', ':)']


// 02 Task
// function aclean(someArr) {
//     let map = new Map();

//     for (let word of someArr) {
//         let sorted = word
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
//         map.set(sorted, word);
//     }

//     return Array.from(map.values());
// }

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// console.log(aclean(arr)); // ['PAN', 'hectares', 'era']


// 03 Task
// let map = new Map();

// map.set('name', 'John'); // Map(1) { 'name' => 'John}

// let keys = Array.from(map.keys()); // ['name']

// keys.push('more'); // ['name', 'more']
