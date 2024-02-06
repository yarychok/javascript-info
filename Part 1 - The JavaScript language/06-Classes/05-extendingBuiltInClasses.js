// I. Built-in classes like Array, Map and others are extendable also
    // class PowerArray extends Array {
    //     isEmpty() {
    //         return this.length === 0;
    //     }
    // }

    // let arr = new PowerArray(1 ,2, 5, 10, 50);

    // console.log(arr.isEmpty()); // false

    // let filteredArr = arr.filter(item => item >= 10);

    // console.log(filteredArr.isEmpty()); // false

    // Interesting thing is that built-in methods like filter, map, etc return new objects of exactly the inherited type using "arr.constructor":
        // console.log(filteredArr); // PowerArray(2) [ 10, 50 ]

        // console.log(arr.constructor === PowerArray); // true
        
    // Also we can customize such behavior:
        // class PowerArray extends Array {
        //     isEmpty() {
        //         return this.length === 0;
        //     }

        //     // built-in methods will use this as the constructor
        //     static get [Symbol.species]() {
        //         return Array;
        //     }
        // }
        
        // let arr = new PowerArray(1, 2, 5, 10, 50);

        // console.log(arr.isEmpty()); // false
        // console.log(arr); // PowerArray(5) [ 1, 2, 5, 10, 50 ]

        // let filteredArr = arr.filter(item => item >= 10);
        // console.log(filteredArr.constructor); // [Function: Array]
        // console.log(filteredArr.isEmpty()); // TypeError: filteredArr.isEmpty is not a function

    // Other collections, such as Map and Set, work alike. 
    // They also use Symbol.species.

// II. No static inheritance in built-ins
    // Built-in objects have their own static methods, for instace Object.keys, Array.isArray etc.

    // And as we already know, native classes extend each other. For instance, Array extends Object.

    // Normally, when one class extends another, both static and non-static methods are inherited. 

    // But build-in classes are an exception. They don't inherit statics from each other.

    