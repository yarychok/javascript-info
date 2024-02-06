// I. 'var' has no block scope
    // Variables are visible through blocks:
    // if (true) {
    //     var test1 = true;
    // }

    // console.log(test1); // true

    // if (true) {
    //     let test2 = true;
    // }

    // console.log(test2); // ReferenceError: test2 is not defined

    // The same thing for loops:
    // for (var i = 0; i < 10; i++) {
    //     var one = 1;
    // }

    // console.log(i, one); // 10 1 

    // If a code block is inside a function,
    // then 'var' becomes a function-level variable:
    // function sayHi() {
    //     if (true) {
    //         var phrase = "Hello";
    //     }
    //     console.log(phrase);
    // }

    // sayHi(); // Hello
    // console.log(phrase); // ReferenceError: phrase is not defined

// II. 'var' tolerates redeclarations
    // If we declare the same variable with 'let' twice 
    // in the same scope, that's an error:
    // let user = 1;
    // let user = 2; // SyntaxError: Identifier 'user' has already declared
    
    // With 'var', we can redeclare a variable:
    // var user = 1;

    // var user = 2;

    // console.log(user); // 2

// III. 'var' variables can be declared at any place
    // function sayHi() {
    //     phrase = 'Hello';

    //     console.log(phrase);

    //     var phrase;
    // }

    // sayHi(); // Hello

// VI. IIFE (immediately-invoked function expressions)

    // (function() {

    //     var message = 'Hello';
    
    //     console.log(message); // Hello
    
    // })();

    // (function() {
    //     console.log('Hello');
    // })(); // Hello

// Summary
// There are two main differences of 'var' compared to 'let'/'const':
    // 1.'var' variables have no block scope,
    // their visibility is scoped to current function,
    // or global, if declared outside function.
    // 2.'var' declarations are processed at function start
    // (script start for globals).

// These differences make 'var' worse than 'let' most of the time.
