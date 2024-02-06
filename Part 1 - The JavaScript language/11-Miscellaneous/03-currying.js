// Currying is an advanced technique of working with functions. It's used not only in JavaScript, but in other languages as well.

// Currying is a transformation of functions that translates a function from callable as "f(a, b, c)" into callable as "f(a)(b)(c)".

// Note! Currying doesn't call a function, it just transforms it.

// Let's create a helper function "curry(b)" that performs currying for a two-argument "f"; in other words, "curry(f)" for two-argument "f(a, b)" translates it into that runs as "f(a)(b)":
    // function curry(f) {
    //     return function(a) {
    //         return function(b) {
    //             return f(a, b);
    //         };
    //     };
    // }

    // function sum(a, b) {
    //     return a + b;
    // }

    // let curriedSum = curry(sum);

    // console.log(curriedSum(1)(2)); // 3

    /** The implementation seems straightforward: it's just two wrappers:
     * The result of "curry(func)" is a wrapepr "function(a)".
     * When it is called like "curriedSum(1)", the argument is saved in the Lexical Environment, and a new wrapper is returned "function(b)".
     * Then this wrapper is called with "2" as an argument, and it passes the call to the original "sum".
     */

// A worthy real-life exmaple: we have the logging function "log(date, importance, message)" that formats and outputs the information. Such functions have many useful features like sending logs over the network:
    // function log(date, importance, message) {
    //     console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] [${message}]`);
    // }

    // log(new Date(), "debug", "debug2");
