// I. Code blocks
    // If a varible is declared inside a code block '{...}', tis only visible inside that block
    // It works for all block of code, such as 'if', 'for', 'while', etc

// II. Nested functions
    // A function is called 'nested' when it's created inside another function
    // function makeCounter() {
    //     let count = 0;

    //     return function() {
    //         return count++;
    //     };
    // }

    // let counter = makeCounter();

    // console.log(counter); // [Function (anonymous)] (idk why)

// III. Lexical environment
    // Step 1. Variables
    // In JavaScript, every running function, code block '{...}', and the script as a whole 
    // have an internal (hidden) associated object 
    // known as the Lexical Environment, which consists of two parts:
        // - Environment Record - an object that stores all local variables as it's properties
        // (and some other information like the value of 'this')
        // - A reference to the outer environment, the one associated with the outer code
    // A 'variable' is just a property of the special internal object, Environment Record.
    // 'To get or change a variable' means 'to get or change a property of that object'

    // let phrase = 'Hello';
    //     [Lexical Environment], (outer) -> null

    // Step 2. Function Declarations
    // A functions is also a value, like a variable
    // The difference is that a Function Declaration is instantly fully initialized

    // Step 3. Inner and outer Lexical Environment
    // let phrase = 'Hello';

    // function say(name) {
    //     console.log(`${phrase}, ${name}`);
    // }

    // say('John'); // Hello, John
    // During the function call we have two Lexical Environments:
        // - The inner Lexical Environment corresponds to the current execution of 'say'.
        // It has a single property: name, the function argument. 
        // We called 'say('John')', so the value of the 'name' is 'John'.
        // - The outer is the global Lexical Environment.
        // It has the 'phrase' variable and the function itself.
    // When the code wants to access a variable - the inner Lexical Environment is searched first, then the outer one, then the more outer and so on until the global one.

    // Step 4. Returning a function
    // All functions remember the Lexical Environment in which they were made.
    // The caused by hidden property '[[Environment]]', that keeps the reference to the Lexical Environment where the function was created.
    // A variable is updated in the Lexical Environment where it lives.

    // Closure:
    // A general programming term, which is a function that remembers its outer variables and can access them.
    // In JavaScript all functions are naturally closures.

// VI. Garbage collection
    // Lexical Environment is removed from memory with all the variables after the function call finishes.
    // That's because there are no references to it.
    // As any JavaScript object, it's only kept in memory while it's reachable.

// Tasks

// Task 1 - Does a function pickup latest changes?
    // let name = 'Arthur';

    // function sayHi() {
    //     console.log('Hi, ' + name);
    // }

    // name = 'Liubomyr';

    // sayHi(); // Hi, Liubomyr

// Task 2 - Which variables are available?
    // function makeWorker() {
    //     let name = 'Petro';

    //     return function() {
    //         console.log(name);
    //     }
    // }

    // let name = 'Ivan';

    // let work = makeWorker();

    // work(); // Petro

// Task 3 - Are counter independent?
    // function makeCounter() {
    //     let count = 0;

    //     return function() {
    //         return count++;
    //     }
    // }

    // let counter = makeCounter();
    // let anotherCounter = makeCounter();

    // console.log(counter()); // 0
    // console.log(counter()); // 1
    
    // console.log(anotherCounter()); // 0
    // console.log(anotherCounter()); // 1

// Task 4 - Counter object
    // function Counter() {
    //     let count = 0;

    //     this.up = function() {
    //         return ++count;
    //     };

    //     this.down = function() {
    //         return --count;
    //     };
    // }

    // let counter = new Counter();

    // console.log(counter.up()); // 1
    // console.log(counter.up()); // 2
    // console.log(counter.down()); // 1

// Task 5 - Function in 'if'
    // let phrase = 'Hi';

    // if (true) {
    //     let user = 'Ivan';

    //     function sayHi() {
    //         console.log(`${phrase}, ${user}`);
    //     }
    // }

    // sayHi(); // Hi, Ivan

// Task 6 - Sum with closures
    // function sum(a) {
    //     return function(b) {
    //         return a + b;
    //     }
    // }

    // console.log(sum(1)(2)); // 3

// Task 7 - Is variable visible?
    // let x = 1;

    // function func() {
    //     console.log(x); // ReferenceError: Cannot access 'x' before initialization

    //     let x = 2; // W/o that line of code, it would print '1'
    // }

    // func();

// Task 8 - Filter through function
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    // function inBetween(start, end) {
    //     return function(x) {
    //         return x >= start && x <= end;
    //     }
    // }

    // console.log( arr.filter(inBetween(3, 6)) ); // [3, 4, 5, 6]

    // function inArray(array) {
    //     return function(x) {
    //         return array.includes(x);
    //     }
    // }

    // console.log( arr.filter(inArray([1, 2, 9])) ); // [1, 2]

// Task 9 - Sort by field
    // let users = [
    //     { name: "John", age: 20, surname: "Johnson" },
    //     { name: "Pete", age: 18, surname: "Peterson" },
    //     { name: "Ann", age: 19, surname: "Hathaway" }
    // ];

    // function byField(prop) {
    //     return (a, b) => a[prop] > b[prop] ? 1: -1;
    // }

    // console.log( users.sort(byField('age')) ); // Pete, Ann, John

// Task 10 - Army of functions
    // function makeArmy() {
    //     let shooters = [];

    //     for (let i = 0; i < 10; i++) {
    //         let shooter = () => {
    //             console.log(i);
    //         }

    //         shooters.push(shooter);
    //     }

    //     return shooters;
    // }

    // let army = makeArmy();

    // army[0](); // 0
    // army[1](); // 1
    // army[2](); // 2

