// I. General info
    // The built-in "eval" function allows to execute a string of code:
        // let code = 'console.log("Hello")';
        // eval(code); // Hello

    // A string of code may be long, contain line breaks, function declarations, variables and so on:
        // let code = eval('let i = 0; ++i');
        // console.log(code); // 1
    
    // The eval'ed code is executed in the current lexical environment, so it can see outer variables:
        // let a = 1;

        // function f() {
        //     let a = 2;

        //     eval('console.log(a)');
        // }

        // f(); // 2

    // It can change outer variables as well:
        // let x = 5;
        // eval('x = 10');

        // console.log(x); // 10

    // In strict mode, "eval" has its own lexical environment; so functions and variables, declared inside eval, are not visible outside.
   
// Summary
    /** A call to "eval(code)" runs the string of code and returns the result of the last statement: 
     *  Rarely used in modern JavaScript.
     * Can access outer local variables. That's considered bad practice.
     */
