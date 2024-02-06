// I. The "class" syntax
    // Basic syntax is:
        // class MyClass {
        //     constructor() { ... }
        //     method1() { ... }
        //     method2() { ... }
        //     method3() { ... }
        //     ...
        // }

        // The "constructor()" method is called automatically by "new",
        // so we can initialize the object there.

        // For example:
            // class User {
            //     constructor(name) {
            //         this.name = name;
            //     }

            //     sayHi() {
            //         console.log(`Hi, ${this.name}`);
            //     }
            // }

            // let user = new User("Arthur");
            // user.sayHi(); // Hi, Arthur
            // console.log(user); // User { name: 'Arthur' }
        
    // No comma between class methods!

// II. What is a class
    // In JavaScript, a class is a kind of function:
        // class User {
        //     constructor(name) { this.name = name }
        //     sayHi() { console.log(this.name) }
        // }

        // console.log(typeof User); // function

        // What "class User {...}" construct really does is:
            // - creates a function named "User", that becomes the result of the class declaration.
            // The function code is taken from the "constructor" method.
            // - stores class methods, such as "sayHi", in "User.prototype".
        
        // After "new User" object is created, when we call its method, it's taken from the prototype.

        // The code to introspect it:
            // class User {
            //     constructor(name) { this.name = name; }
            //     sayHi() { console.log(this.name); }
            // }

            // console.log(typeof User); // function

            // console.log(User === User.prototype.constructor); // true

            // console.log(User.prototype.sayHi); // [Function: sayHi]

            // console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]

// III. Not just a syntactic sugar
    // "Syntactic sugar" - syntax that is designed to make things easier to read,
    // but doesn't introduce anything new.

    // Important differences between class and constructor function:
        // - a function created by class is labelled by a special internal property
        // "[[IsClassConstructor]]: true"

        // For example, unlike a regular function, it must be called with "new":
            // class User {
            //     constructor() {}
            // }

            // console.log(typeof User); // function
            // User(); // TypeError: Class constructor User cannot be invoked without "new"
            // console.log(User); // [class User]
        
        // - class methods are non-enumerable.
        // A class definition sets "enumerable" flax to "false" for all methods in the "prototype".

        // - classes always "use strict".

// VI. Class Expression
    // Just like functions, classes can be defined inside another expression,
    // passed around, returned, assigned, etc:
        // let User = class {
        //     sayHi() {
        //         console.log("Hello");
        //     }
        // };

        // console.log(User); // [class User]
        // console.log(typeof User); // function
        // console.log(User.prototype.sayHi()); // Hello // undefined

    // Similar to NFE, class expressions may have a name,
    // which is visible inside the class only:
        // let User = class MyClass {
        //     sayHi() {
        //         console.log(MyClass);
        //     }
        // };

        // new User().sayHi(); // [class MyClass]

        // console.log(MyClass); // ReferenceError: MyClass is not defined

    // We can even make classes dynamically "on-demand":
        // function makeClass(phrase) {

        //     return class {
        //         sayHi() {
        //             console.log(phrase);
        //         }
        //     };
        // }

        // let User = makeClass("Hello");

        // new User().sayHi(); // Hello

// V. Getters/setters
    // Just like literal objects, classes may include getters/setters, computed propertied etc:
        // class User {
        //     constructor(name) {
        //         this.name = name;
        //     }

        //     get name() {
        //         return this._name;
        //     }

        //     set name(value) {
        //         if (value.length < 4) {
        //             console.log("Name is too short");
        //             return;
        //         }
        //         this._name = value;
        //     }
        // }

        // let user = new User("Arthur");
        // console.log(user.name); // Arthur

        // user = new User("Joe"); // Name is too short

// VI. Computed names [...]
    // Example with a computed method name using brackets "[...]":
        // class User {
        //     ['say' + 'Hi']() {
        //         console.log("Hi");
        //     }
        // }

        // new User().sayHi(); // Hi
    
// VII. Class fields
    // "Class fields" is a syntax that allows to add any properties:
        // class User {
        //     name = "John";

        //     sayHi() {
        //         console.log(`Hello, ${this.name}`);
        //     }
        // }

        // new User().sayHi(); // Hello, John

    // The difference of class fields is that they are set on individual objects,
    // not "User.prototype":
        // class User {
        //     name = "John";
        // }

        // let user = new User();
        
        // console.log(User.name); // User
        // console.log(user.name); // John
        // console.log(User.prototype.name); // undefined
    
    // Two approaches to fix losing "this":
        // - pass a wrapper-function, such as:
            // setTimeout(() => button.click(), 1000);
        // - bind the method to object, e.g. in the constructor

        // class Button {
        //     constructor(value) {
        //         this.value = value;
        //     }
        //     click = () => {
        //         console.log(this.value);
        //     }
        // }

        // let button = new Button("Hello");

        // setTimeout(button.click, 1000); // Hello

// Summary
    // Class is technically a function ( the one that we provide as constructor ), while methods, getters and setters are written to Class.prototype.

// Task(1)
    // T01: Rewrite to class
        export class Clock {
            constructor({ template }) {
                this.template = template;
            }

            render() {
                let date = new Date();

                let hours = date.getHours();
                if (hours < 10) hours = '0' + hours;

                let mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;

                let secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;

                let output = this.template
                    .replace('h', hours)
                    .replace('m', mins)
                    .replace('s', secs);

                console.log(output);
            }

            stop() {
                clearInterval(this.timer);
            }

            start() {
                this.render();
                this.timer = setInterval(() => this.render(), 1000)
            }
        }

        // let clock = new Clock({template: 'h:m:s'});
        // clock.start();

