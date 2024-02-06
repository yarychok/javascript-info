// I. Object.prototype
    // let obj = {};

    // console.log(obj.__proto__ === Object.prototype); // true
    // console.log(obj.__proto__ === Object.__proto__); // false
    // console.log(Object.prototype.__proto__); // null

    // console.log(obj.toString === obj.__proto__.toString); // true
    // console.log(obj.toString === Object.prototype.toString); // true

// II. Other built-in prototypes
    // let arr = [1, 2, 3];

    // console.log(arr.__proto__ === Array.prototype); // true
    // console.log(arr.__proto__.__proto__ === Object.prototype); // true
    // console.log(arr.__proto__.__proto__.__proto__); // null

    // function f() {}

    // console.log(f.__proto__ === Function.prototype); // true
    // console.log(f.__proto__.__proto__ === Object.prototype); // true
    // console.log(f.__proto__.__proto__.__proto__); // null
    
// III. Primitives
    // Primitives are not objects, but if we try to access their properties, temporary wrapper objects are created using built-in constructor "String", "Number" or "Boolean":
        // let num = 35;

        // console.log(num.toExponential()); // 3.5e+1
        // console.log(num.__proto__ === Number.prototype); // true

        // let str = "test";

        // console.log(str.length); // 4
        // console.log(str.__proto__ === String.prototype); // true

        // let bool = true;

        // console.log(bool.__proto__ === Boolean.prototype); // true

    // Values "null" and "undefined" have no object wrappers.

// VI. Changing native prototypes
    // Native prototypes can be modified:
        // String.prototype.show = function() {
        //     console.log(this);
        // };

        // "Wow!".show(); // [String: 'Wow!']

    // But in modern programming, there is only one case where modifying native prototypes is approved - polyfilling:
        // if (!String.prototype.repeat) {

        //     String.prototype.repeat = function(n) {
        //         return new Array(n).join(this);
        //     };
        // }

        // console.log("La".repeat(3));

// V. Borrowing  from prototypes
    // let obj = {
    //     0: "Hello",
    //     1: "World",
    //     length: 2,
    // };

    // obj.join = Array.prototype.join;

    // console.log(obj.join(', ')); // Hello, World

// Summary
    // All built-in objects follow the same pattern:
        // - The methods are stored is the prototype.
        // - The object itself stores only the data (array items, object properties, the date, etc).
    
    // Primitives are store methods in prototypes of wrapper objects.

    // Built-in prototypes can be modified or populated with new methods. But it's not recommended to change them. The only allowable case is probably when we add-in a new standard, but it's not yet supported by the JavaScript engine.

// Task (2)
    // T01: Add method "f.defer(ms)" to functions
        // Function.prototype.defer = function(ms) {
        //     setTimeout(this, ms);
        // };

        // function myFunc() {
        //     console.log("Hello");
        // };

        // myFunc.defer(1000);

    // T02: Add the decorating "defer()" to functions
        Function.prototype.defer = function (ms) {
            let f = this;

            return function(...args) {
                setTimeout(() => f.apply(this, args), ms);
            };
        };

        function f(a, b) {
            console.log(a + b);
        };
        
        f.defer(1000)(1, 2);