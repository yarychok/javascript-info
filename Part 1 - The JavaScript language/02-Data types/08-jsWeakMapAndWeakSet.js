// Garbage collection with Array
// let john = {name:"Yura"};

// let array = [ john ];

// console.log(john); // { name:"Yura"}
// console.log(array); // [ { name:"Yura"} ]

// john = null;

// console.log(john); // null
// console.log(array); // [ {name:"Yura"} ]


// Garbage collection with Map
// let yura = {name:'John'};

// let map = new Map();
// map.set(yura, 'value');

// console.log(yura); // {name:'John'}
// console.log(map); // Map(1) { { name:'John'} => 'value' }

// yura = null;

// console.log(yura); // null
// console.log(map); // Map(1) { {name:'John'} => 'value' }


// WeakMap
// let weakMap = new WeakMap();

// let obj = {someKey: 'someValue'};

// weakMap.set(obj, 'ok');
// console.log(weakMap); // WeakMap { <items unknown> }

// weakMap.set('test', 'whoops'); // TypeError: Invalid value as weak map key


// obj = null;
// console.log(weakMap); // WeakMap { <items unknown> }


// Use case: additional data
// Example with Map:
// let visitsCountMap = new Map();

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let john = {name: "John"};

// countUser(john);

// john = null;

// console.log(visitsCountMap); // Map(1) { {name: 'John'} => 1}


// Example with WeakMap:
// let visitsCountMap = new WeakMap();

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let john = {name: "John"};

// countUser(john);
// console.log(visitsCountMap);

// john = null;
// console.log(visitsCountMap);


// Use case: caching
// let cache = new WeakMap();

// function process(obj) {
//     if (!cache.has(obj)) {
//         let result = obj;

//         cache.set(obj, result);
//     }

//     return cache.get(obj);
// }

// let someObject = {name: "Liubomyr"};

// let someResult = process(someObject);
// let anotherResult = process(someObject);

// someObject = null;

// console.log(cache.size); // undefined ???


// WeakSet
// let visitedSet = new WeakSet();

// let john = {name: "John"};
// let pete = {name: "Peter"};
// let mary = {name: "Mary"};

// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);

// console.log(visitedSet.has(john)); // true

// john = null;

// console.log(visitedSet.has(john)); // false



// Summary
// WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

// WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

// Their main advantage are that they have weak reference to objects, so they can easily be removed by garbage collector.

// That comes at the cost of not having support for clear(), size, keys(), etc.

// WeakMap and WeakSet are used as 'secondary' data structures is addition to the 'primary' object storage. Once object is removed from the primary storage, if it's only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.


// 01 Task
// let messages = [
//     {text: "Hi", from: "Arthur"},
//     {text: "What's up?", from: "Arthur"},
//     {text: "Bye", from: "Dariya"},
// ];

// let readSet = new WeakSet();

// readSet.add(messages[0]);
// readSet.add(messages[1]);

// readSet.add(messages[0]);

// console.log(readSet.has(messages[0])); // true

// messages.shift();

// console.log(readSet.has(messages[0])); // true 


// 02 Task
// let anotherMessages = [
//     {text: "Hi", from: "Arthur"},
//     {text: "What's up?", from: "Arthur"},
//     {text: "Bye", from: "Dariya"},
// ];

// let readMap = new WeakMap();

// readMap.set(anotherMessages[0], new Date(2017, 1, 1));

// console.log(readMap.get(anotherMessages[0])); // 2017-01-31T22:00:00.000Z

