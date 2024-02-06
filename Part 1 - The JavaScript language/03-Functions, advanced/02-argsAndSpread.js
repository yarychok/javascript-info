// I. Rest paremeters ...
    // function sumAll(...args) {
    //     let sum = 0;

    //     for (let arg of args) sum += arg;

    //     return sum;
    // }

    // console.log(sumAll(1, 2, 3, 4, 5)); // 15

    // function showName(firstName, lastName, ...titles) {
    //     console.log(firstName + ' ' + lastName); // Liubomyr Yarych
    //     console.log(titles); // ['HTML', 'CSS', 'JavaScript']
    // }

    // showName('Liubomyr', 'Yarych', 'HTML', 'CSS', 'JavaScript');

// II. The 'arguments' variable
    // function anotherShowName() {
    //     console.log(arguments); // [Arguments] {'0': 'Liubomyr', '1': 'Yarych'}
    //     console.log(arguments.length); // 2
    // }

    // anotherShowName('Liubomyr', 'Yarych');

// III. Spread '...' syntax
    // let arr1 = [3, 5, 1];
    // let arr2 = [8, 3, 8, -1];

    // console.log(Math.max(...arr1)); // 5
    // console.log(Math.max(...arr1, ...arr2)); // 8
    // console.log(Math.max(1, ...arr1, ...arr2, 10)); // 10

    // let merged = [0, ...arr1, 2, ...arr2];

    // console.log(merged); // [0, 3, 5, 1, 2, 8, 3, 8, -1]

    // let str = 'Hello';

    // console.log([...str]); // ['H', 'e', 'l', 'l', 'o']

// VI. Copy an array / object
    // let arr = [1, 2, 3];

    // let arrCopy = [...arr];
    // // do the arrays have the same content?
    // console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
    // // are the arrays equal?
    // console.log(arr === arrCopy); // false
    // // modyfying doesn't affect the copy
    // arr.push(4);
    // console.log(arr); // [1, 2, 3, 4]
    // console.log(arrCopy); // [1, 2, 3]

// Summary
    // When we see '...' in the code, it's either rest paremeters or the spread syntax.
    // There's an easy way to distinguish between them:
        // - When '...' is at the end of function parameters, it's 'rest parameters' and gather the rest of the list of arguments into an array
        // - When '...' occurs in a function call or alike, it's called 'spread syntax' and expands an array into a list

    // Use patterns:
        // - Rest parameters are used to create function that acceptn any number of arguments
        // - The spread syntax is used to pass an array to functions that normally require a list of many arguments

    // Together they help to travel between a list and an array of parameters with ease

    // All arguments of function call are also available in 'old-style' arguments: array-like iterable object


