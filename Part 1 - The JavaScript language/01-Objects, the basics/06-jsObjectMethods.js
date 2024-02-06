// // Adding new method to object using function expression
// let user = {
//     name: "Liubomyr",
//     age: 23,
// };

// user.sayHi = function() {
//     console.log("Hi!");
// };
// user.sayHi();

// // More simple examples of adding method to object
// let secondUser = {
//     sayHi: function() {
//         console.log("Hi!");
//     },
// };
// secondUser.sayHi();

// let thirdUser = {
//     sayHi() {
//         console.log("Hi!");
//     },
// };
// thirdUser.sayHi();


// // "this" in methods are used to access information inside objects
// let user = {
//     name: "Liubomyr",
//     age: 23,

//     sayHi() {
//         console.log(`Hi, ${this.name}!`);
//     },
// };

// user.sayHi(); // Hi, Liubomyr!

// // w/o using "this", but it's a bad practice
// let secondUser = {
//     name: "Arthur",

//     sayHi() {
//         console.log(`Hi, ${secondUser.name}!`)
//     },
// };

// secondUser.sayHi(); // Hi, Arthur!

// // "this" can be used in functions to multiple objects
// let someUser = { name: "Liubomyr", };
// let someAdmin = { name: "Admin", };

// function sayHi() {
//     console.log(`Hi, ${this.name}`);
// }

// someUser.someFunction = sayHi;
// someAdmin.someFunction = sayHi;

// someUser.someFunction(); // Hi, Liubomyr
// someAdmin.someFunction(); // Hi, Admin

// someAdmin["someFunction"](); // Hi, Admin

// // Arrow functions have no "this"
// let user = {
//     name: "Liubomyr",
//     sayHi() {
//         let arrow = () => console.log(this.name); // name is getting from outter function
//         arrow();
//     }
// };

// user.sayHi(); // Liubomyr



// // 01 - Task
// function makeUser() {
//     return {
//         name: "Ivan",
//         ref: this,
//     };
// }

// let user = makeUser();

// console.log(user.ref.name); // undefined

// // 02 - Task
// let calculator = {
//     read(first, second) {
//         calculator.a = first;
//         calculator.b = second;
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },
// };

// console.log(calculator.read(3, 2));
// console.log(calculator.sum());
// console.log(calculator.mul());


// 03 - Task
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
};

ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0












