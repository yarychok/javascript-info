// I. Syntax
    // let func = new Function([arg1, arg2, ...argN], functionBody);
        // let sum = new Function('a', 'b', 'return a + b');

        // console.log(sum(1, 2)); // 3

        // let sayHi = new Function('console.log("Hi")');

        // sayHi(); // Hi

// II. Closure
    // Usually, a function remembers where it was born in the special property [[Environment]].
    // It references the Lexical Environment from where it's created.
    // But when a function is created using new Function, 
    // it's [[Environment]] is set to reference not the current Lexical Environment,
    // but the global one.
    
    // So, such function doesn't have access to outer variables,
    // only to the global onces.
        // function getFunc() {
        //     let value = 'test'; // declared, but its value is never read

        //     let func = new Function('console.log(value)');

        //     return func;
        // }

        // getFunc()(); // ReferenceError: value is not defined

    // Compared with regular behavior
        // function regularFunc() {
        //     let value = 'test';

        //     let func = function() {console.log(value)};

        //     return func;
        // }

        // regularFunc()(); // test

