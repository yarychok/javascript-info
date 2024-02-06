// III. Custom properties
    // Here we add the 'counter' property to track the total calls count:
        // function sayHi() {
        //     sayHi.counter++;

        //     return 'Hi';
        // }
        // sayHi.counter = 0;

        // console.log(sayHi()); // Hi
        // console.log(sayHi()); // Hi

        // console.log(sayHi.counter); // 2
        // Note! A property is not a variable
    
    // Function properties can replace closures sometimes:
        // function makeCounter() {

        //     function counter() {
        //         return counter.count++;
        //     }

        //     counter.count = 0;

        //     return counter;
        // }

        // console.log(makeCounter());
        // console.log(makeCounter());
    
// VI. Named Function Expression
    // Ordinary Function Expression:
        // let sayHi = function(who) {
        //     return `Hello, ${who}`;
        // }

        // console.log(sayHi('Arthur')); // Hello, Arthur
    
        // Adding name to it:
            // let sayHi = function func(who) {
            //     return `Hello, ${who}`;
            // }

            // console.log(sayHi('Arthur')); // Hello, Arthur

        // Or:
            // let sayHi = function f(person) {
            //     if (person) {
            //         return `Hi, ${person}`;
            //     } else {
            //         return f('Guest');
            //     }
            // };

            // console.log(sayHi('Arthur'));
            // console.log(sayHi());

// Summary:
    // Functions are objects.

    // If the function is declared as a Function Expression (not in the main code flow), and it carries the name,
    // then it's called a Named Function Expression.
    // The name can be used inside to reference itself, for recursive calls, etc.

    // Also, functions may carry additional properties.
    // Many well-known JavaScript libraries make great use of this feature.
    // They do it to lessen their pollution of the global space, 
    // so that a single library gives only gives only one global variable.

    // So, a function can do a useful job by itself,
    // and also carry a bunch of other functionality in properties.

// Tasks:
    // 01 Task - Set and decrease for counter
        // function getCounter() {

        //     counter.count = 0;

        //     counter.set = value => count = value;

        //     counter.decrease = () => count--;

        //     function counter() {
        //         return counter.count++;
        //     }

        //     return counter;
        // }

        // let count = getCounter();

        // console.log(count()); // 0
        // console.log(count()); // 1
        // console.log(count()); // 2
        // console.log(count()); // 3
    
    // 02 Task - Sum with an arbitrary amount of brackets
        // function sum(a) {
        //     let currentSum = a;

        //     function f(b) {
        //         currentSum += b;
        //         return f;
        //     }

        //     f.toString = function() {
        //         return currentSum;
        //     }

        //     return f;
        // }

        // console.log(sum(1)(2));


