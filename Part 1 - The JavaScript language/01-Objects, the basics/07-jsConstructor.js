// // function-constructor
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // Jack

// 01 - Task
// let someObject = {};

// function A() { return someObject; }

// function B() { return someObject; }
// The same object, but two function-constructors
// console.log( new A() == new B()); // true


// // 02 - Task
// function Calculator() {

//     this.read = function(a, b) {
//         this.a = a;
//         this.b = b;
//     },
    
//     this.sum = function() {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     }
// };

// let calculatedObject = new Calculator();

// calculatedObject.read(3, 2);
// console.log(calculatedObject.sum());
// console.log(calculatedObject.mul());

// 03 - Task
function Accumulator(startingValue) {
    
    this.value = startingValue;
    this.read = function(a) {
        value += a;
    }
}

let accumulated = new Accumulator(1);

console.log(accumulated.value);
