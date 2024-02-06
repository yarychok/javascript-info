// Add/remove element 

// // arr.splice(start[, deleteCount, elem1, ..., elemN])
// let arr = ['I', 'study', 'JavaScript'];

// arr.splice(1, 1, 'love', '<3');
// console.log(arr); // [ 'I', 'love', '<3', 'JavaScript' ]


// let anotherArr = ['I', 'study', 'JavaScript', 'right', 'now'];

// let removed = anotherArr.splice(0, 2);
// console.log(removed); // [ 'I', 'study' ]
// console.log(anotherArr); // ['JavaScript', 'right', 'now]


// let anotherOneArr = ['I', 'study', 'JavaScript'];

// anotherOneArr.splice(2, 0, 'complex', 'language');
// console.log(anotherOneArr); // ['I', 'study', 'complex', 'language', 'JavaScript']

// let anotherTwoArr = [1, 2, 5];

// anotherTwoArr.splice(-1, 0, 3, 4);
// console.log(anotherTwoArr); // [1, 2, 3, 4, 5]


// // arr.slice([start], [end])
// let arr = ['t', 'e', 's', 't'];

// console.log(arr.slice(1, 3)); // ['e', 's']
// console.log(arr.slice(-2)); // ['s', 't']

// let slicedArr = arr.slice();

// arr.slice(1, 3);
// slicedArr.slice(1, 3);

// console.log(arr); // ['t', 'e', 's', 't']
// console.log(slicedArr);  // ['t', 'e', 's', 't']


// // arr.concat(arg1, arg2...)
// let arr = [1, 2];

// console.log(arr.concat([3, 4])); // [1, 2, 3, 4]
// console.log(arr.concat([3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(arr.concat([3, 4], 5, 6)); // [1, 2, 3, 4, 5, 6]


// let arrayLike = {
//     0: 'something',
//     length: 1
// };

// console.log(arr.concat(arrayLike)); // [ 1, 2, { '0': 'something', length: 1 } ]


// let isConcatSpreadableArray = {
//     0: 'something',
//     1: 'else',
//     [wordbol.isConcatSpreadable]: true,
//     length: 2
// };

// console.log(arr.concat(isConcatSpreadableArray)); // [ 1, 2, 'something', 'else' ]



// Iterate: arr.forEach(function(item, index, array){ })

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// arr.forEach(console.log);
// // Bilbo 0 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
// // Gandalf 1 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
// // Nazgul 2 [ 'Bilbo', 'Gandalf', 'Nazgul' ]

// arr.forEach(element => console.log(element));
// // Bilbo
// // Gandalf
// // Nazgul

// arr.forEach((item, index, array) => {
//     console.log(`${item} has position ${index} in array ${array}`);
// });
// // Bilbo has position 0 in array Bilbo,Gandalf,Nazgul
// // Gandalf has position 1 in array Bilbo,Gandalf,Nazgul
// // Nazgul has position 2 in array Bilbo,Gandalf,Nazgul



// Searching in array

// // 'indexOf' / 'lastIndexOf' / 'includes'
// let arr = [1, 0, false];

// console.log(arr.indexOf(0)); // 1
// console.log(arr.indexOf(false)); // 2
// console.log(arr.indexOf(null)); // -1

// console.log(arr.includes(1)); // true


// 'find' / 'findIndex'
// let result = arr.find(function(item, index, array) { ... });

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];

// let user = users.find(item => item.id == 1);
// console.log(user); // { id: 1, name: 'John' }


// 'filter'
// let results = arr.filter(function(item, index, array) {...});
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];

// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers); // { id: 1, name: 'John' }, {id: 2, name: 'Pete' }



// Transform an array
// 'map'
// let result = arr.map(function(item, index, array)) {...});

// let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
// console.log(lengths); // [ 5, 7, 6]


// 'sort'
// let arr = [15, 10, 1, 3];

// arr.sort();
// console.log(arr); // [ 1, 10, 15, 3] (strings compare - function needed)


// 'reverse'
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log(arr); // [5, 4, 3, 2, 1]


// 'split' / 'join'
// let names = 'Vasya, Petya, Masha';

// let arr = names.split(', ');
// console.log(arr);

// for (let name of arr) {
//     console.log(`A message to ${name}`);
// }

// let str = arr.join(', ');
// console.log(str);


// 'reduce' / 'reduceRight'
// let value = arr.reduce(function(accumulator, item, index, array) {...}, [initial] )
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);


// // Array.isArray
// console.log(Array.isArray({})); // false
// console.log(Array.isArray([])); // true


// thisArg, or 'this' in functions
// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };

// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30},
// ];

// let soldiers = users.filter(army.canJoin, army); // 'army' is the one optional argument 'thisArg'

// console.log(soldiers.length); // 2
// console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23



// Summary
// 1) To add/remove elements:
// 'push(...items)' adds items to the end
// 'pop()' extracts and item from the end
// 'shift()' extracts and item from the beginning
// 'unshift()' adds items to the beginning
// 'splice(pos, deleteCount, ...items)' at index 'pos' deletes 'deleteCount' elements and iserts 'items'
// 'slice(start, end)' creates a new array, copies elements from index 'start' till 'end' into it
// 'concat(...items)' returns a new array: copies all members of the current one and adds 'items' to it ( if any of 'items' is an array, then its elements are taken).

// 2) To search among elements:
// 'indexOf/lastIndexOf(item, pos)' look for 'item' starting from position 'pos', return the index of '-1' if not found
// 'includes(value)' return true if the array has value, otherwise false
// 'find/filter(func)' filter elements throught the function, return first/all values that make it return true
// 'findIndex' is like 'find', but return the index instead of a value.

// 3) To iterate over elements:
// 'forEach(func)' calls 'func' for every element, does not return anything.

// 4) To transform the array:
// 'map(func)' creates a new array from results of calling 'func' for every element
// 'sort(func)' sorts the array in-place, then returns it
// 'reverse()' reverses the array to array and back
// 'split/join' convert a string to array and back
// 'reduce/reduceRight(func, initial)' calculate a single value over the array by calling 'func' for each element and passing an intermediate result between calls.

// 5) Additionally:
// 'Array.isArray(value)' checks 'value' for being an array, if so returns true, otherwise false.

// Note! 'sort', 'reverse' and 'splice' modify the array itself.


// // 01 Task
// function camelize(str) {
//     return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }

// console.log(camelize('background-color')); // backgroundColor
// console.log(camelize('-webkit-transition')); // WebkitTransition

// // 02 Task
// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && b >= item));
// }

// let someArray = [5, 3, 8, 1];

// console.log(filterRange(someArray, 1, 4)); // [3, 1]
// console.log(someArray); // [5, 3, 8, 1]

// // 03 Task
// function filterRangeInPlace(arr, a, b) {
    
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];

//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let someArray = [5, 3, 8, 1];

// filterRangeInPlace(someArray, 1, 4);
// console.log(someArray); // [3, 1]

// // 04 Task
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);

// console.log(arr); // [8, 5, 2, 1, -10]

// // 05 Task
// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let someArray = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(someArray);

// console.log(sorted); // ['CSS', 'HTML', 'JavaScript']
// console.log(someArray); // ['HTML', 'JavaScript', 'CSS']

// // 06 Task
// function Calculator() {

//     this.methods = {
//         '-': (a, b) => a - b,
//         '+': (a, b) => a + b
//     };

//     this.calculate = function(str) {

//         let splitted = str.split(' '), 
//             a = +splitted[0],
//             op = splitted[1],
//             b = +splitted[2];
        
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     }
// }

// let calc = new Calculator;

// console.log(calc.calculate('3 + 7')); // 10

// // 07 Task
// let ivan = { name: 'Ivan', age: 25};
// let petro = { name: 'Petro', age: 30};
// let mariya = { name: 'Mariya', age: 28};

// let users = [ivan, petro, mariya];

// let names = users.map(item => item.name);

// console.log(names); // [ 'Ivan', 'Petro', 'Mariya' ]

// // 08 Task
// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ivan, petro, mariya];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
// }));

// console.log(usersMapped);

// // 09 Task
// function sortByAge(users) {
//     return users.sort((a, b) => a.age - b.age);
// }

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [petro, ivan, mariya];

// sortByAge(arr);

// console.log(arr[0].name); // Іван
// console.log(arr[1].name); // Марія
// console.log(arr[2].name); // Petro

// // 10 Task
// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];

// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

// // 11 Task
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log(getAverageAge(arr)); // 28

// // 12 Task
// function unique(arr) {
//     let uniqueArr = [];

//     for (let i of arr) {
//         if (!uniqueArr.includes(i)) {
//             uniqueArr.push(i);
//         }
//     };

//     return uniqueArr;
// }

// let strings = ["Hi", "World", "Hello", "World", "Hey", ";-O"];

// console.log(unique(strings)); // [ 'Hi', 'World', 'Hello', 'Hey', ';-O' ]

// // 13 Task
// function groupById(arr) {
//     return arr.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {});
// }

// let users = [
//     {id: 'іван', name: "Іван Іванко", age: 20},
//     {id: 'ганна', name: "Ганна Іванко", age: 24},
//     {id: 'петро', name: "Петро Петренко", age: 31},
//   ];


// console.log(groupById(users));
// {
//     'іван': { id: 'іван', name: 'Іван Іванко', age: 20 },
//     'ганна': { id: 'ганна', name: 'Ганна Іванко', age: 24 },
//     'петро': { id: 'петро', name: 'Петро Петренко', age: 31 }
// }