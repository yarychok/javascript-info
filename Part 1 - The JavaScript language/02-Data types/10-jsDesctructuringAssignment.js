// Array destructuring 
// let arr = ["Arthur", "Liubomyr"];

// let [brother, me] = arr;

// Using split()
// let [firstName, secondName] = "Liubomyr Yarych".split(' ');

// Ignore elements using commas
// let [firstName, , title] = ["Julius", 'Ceasar', 'Consul', 'of the Roman Republic'];
// console.log(title); // Consul

// Works with any iterable on the right side
// let [a, b, c] = 'abc';
// console.log(a, b, c); // a b c

// let [one, two, three, anotherThree] = new Set([1, 2, 3, 3]);
// console.log(one, two, three, anotherThree); // 1 2 3 undefined

// Assign to anything at the left side
// let user = {};

// [user.name, user.surname] = "Liubomyr Yarych".split(' ');

// console.log(user); // { name: 'Liubomyr', surname: 'Yarych' }

// Looping with .entries()
// let user = {
//     name: "Arthur",
//     age: 18,
// };

// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }

// Looping using Map
// let userMap = new Map();
// userMap.set('name', 'Ivan');
// userMap.set('age', '30');

// for (let [key, value] of userMap) {
//     console.log(`${key}: ${value}`);
// }

// Swap variables trick
// let guest = "Jane";
// let admin = "Pete";

// [guest, admin] = [admin, guest];

// console.log(`${guest}, ${admin}`);

// The rest '...'
// let [name1, name2, ...rest] = ["Julius", "Ceasar", "Consul", "of the Roman Republic"];

// console.log(name1); // Julius
// console.log(name2); // Ceasar
// console.log(rest); // ['Consul', 'of the Roman Republic']
// console.log(rest[0]); // Consul
// console.log(rest.length); // 2

// Default values
// let [firstName = 'Guest', surname = 'Anonymous'] = ['Julius'];

// console.log(firstName); // Julius
// console.log(surname); // Anonymous


// Object destructuring
// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200,
// };

// let {title, width, height} = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let {title: t, height: h, width: w} = options; // 'what: where it goes'

// console.log(t); // Menu
// console.log(w); // 100
// console.log(h); // 200

// let options = { title: 'Menu' };

// let {width: w = 100, height: h = 200, title} = options;

// console.log(title); // Menu
// console.log(w); // 100
// console.log(h); // 200

// The rest pattern '...'
// let options = {
//     title: 'Menu',
//     height: 100,
//     width: 200,
// };

// let {title, ...rest} = options;

// console.log(title); // Menu
// console.log(rest);  // { height: 100, width: 200}
// console.log(rest.height); // 100

// Usage w/o 'let' only inside brackets '()'
// let title, width, height;

// ({title, width, height} = {title: 'Menu', width: 200, height: 100});

// console.log(title); // Menu

// Nested destructuring
// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: ['Cake', 'Donnut'],
//     extra: true,
// };

// let {
//     size: {
//         width,
//         height,
//     },
//     items: [item1, item2],
//     title = 'Menu',
// } = options;

// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake

// Smart functions parameters
// function ( { incomingProperty: varName = defaultValue } )
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"],
// };

// function showMenu({
//     title = "Untitled",
//     width = 200,
//     height = 100,
//     items = [],
// }) {
//     console.log(`${title}, ${width}, ${height}`); // My menu, 200, 100
//     console.log(items); // [ 'Item1', 'Item2' ]
// }

// showMenu(options);


// Summary:
// - Destructuring assignment allows for instantly mapping an object or array into many variables.

// - The full object syntax:
// let {prop: varName = default, ...rest} = object
// This means that property 'prop' should go into the variable 'varName' and, if no such property exists, then the 'default' value should be used.
// Object properties that have no mapping are copied to the 'rest' object.

// - The full array syntax:
// let [item1 = default, item2, ...rest] = array
// The first item foes to 'item1'; the second foes into 'item2', all the rest makes the array 'rest'.

// It's possible to extract data from nested arrays/objects, for that left side must have the same structure as the right one.


// 01 Task
// let user = {
//     name: 'Arthur',
//     years: 18,
// };

// let {name, years: age, isAdmin = false} = user;

// console.log(name); // Arthur
// console.log(age); // 18
// console.log(isAdmin); // false

// 02 Task
let ourSalaries = {
    'Ivan': 100,
    'Petro': 300,
    'Mariya': 250,
};

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(ourSalaries));