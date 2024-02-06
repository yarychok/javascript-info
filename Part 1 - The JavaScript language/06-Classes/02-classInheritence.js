// I. The "extends" keyword
    // For instance:
        // class Animal {
        //     constructor(name) {
        //         this.speed = 0;
        //         this.name = name;
        //     }
        //     run(speed) {
        //         this.speed = speed;
        //         console.log(`${this.name} runs with ${this.speed} speed`);
        //     }
        //     stop() {
        //         this.speed = 0;
        //         console.log(`${this.name} stopped`);
        //     }
        // }

        // class Rabbit extends Animal {
        //     hide() {
        //         console.log(`${this.name} is hiding`);
        //     }
        // }

        // let rabbit = new Rabbit("White Rabbit");

        // rabbit.run(5); // White Rabbit runs with 5 speed
        // rabbit.hide(); // White Rabbit is hiding

    // Any expression is allowed after "extends":
        // function f(phase) {
        //     return class {
        //         sayHi() { console.log(phase); }
        //     };
        // }

        // class User extends f("Hello") {}

        // let user = new User();

        // console.log(user.sayHi()); // Hello (and returned undefined)

// II. Overriding a method
    // By default, all methods that are not specified in parental class are taken directly "as is" from child class.
    // For instance, overriding method from previous class Rabbit:
        // class Rabbit extends Animal {
        //     stop() {
                    // ... now this will be used for rabbit.stop()
                    // instead of stop() from class Animal
        //     }
        // }

    // However, we usually don't want to totally replace a parental method, but rather to build on top of it to tweak or extend its functionality.
    // So, we do something with out method, but call the parent method before/after it or in the process.
    // Classes provide "super" keyword for that:
        // - "super.method(...)" to call a parental method
        // - "super(...)" to call a parent constructor (inside our constructor only)

        // For instance, let our rabbit autohide when stopped:
            // class Animal {

            //     constructor(name) {
            //         this.speed = 0;
            //         this.name = name;
            //     }

            //     run(speed) {
            //         this.speed = speed;
            //         console.log(`${this.name} runs with ${this.speed} speed`);
            //     }

            //     stop() {
            //         this.speed = 0;
            //         console.log(`${this.name} stands still`)
            //     }

            // }

            // class Rabbit extends Animal {
            //     hide() {
            //         console.log(`${this.name} hides`);
            //     }

            //     stop() {
            //         super.stop(); // call parent stop
            //         this.hide(); // and then hide
            //     }
            //     test() {
            //         setTimeout(() => super.stop(), 1000);
            //     }
            // }

            // let rabbit = new Rabbit("White Rabbit");

            // console.log(rabbit); // Rabbit { speed: 0, name: 'White Rabbit' }

            // rabbit.run(5); // White Rabbit runs with 5 speed
            // rabbit.stop(); // White Rabbit stands still
            // White rabbit hides

    // Arrow functions have no "super".
        // If accessed, it's taken from the outer function:
            // class Rabbit extends Animal {
            //     stop() {
            //         setTimeout(() => super.stop(), 1000); // call parent stop after 1 sec
            //     }
            // }

// III. Overriding constructor
    // If a class extends another class and has no constructor, then the following "epmty" constructor is generated:
        // class Rabbit extends Animal {
        //     // generated for extending classes without own constructors
        //     constructor(...args) {
        //         super(...args);
        //     }
        // }

        // As we can see, it basically calls the parent constructor passing it all the arguments. That happens if we don't write a constructor of our own.

    // Let's add a custom constructor to Rabbit. It will specify the "earLength":
        // class Animal {
        //     constructor(name) {
        //         this.speed = 0;
        //         this.name = name;
        //     }
        // }

        // class Rabbit extends Animal {
        //     constructor(name, earLength) { // *why - [[ConstructorKind]]: "derived"
        //         this.speed = 0;
        //         this.name = name;
        //         this.earLength = earLength;
        //     }
        // }

        // let rabbit = new Rabbit("Whittie", 10);
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.

        // Why?
            // Constructors in inheriting classes must call "super(...)", and do it before using "this".

        // Correct code will be:
            // class Animal {
            //     constructor(name) {
            //         this.speed = 0;
            //         this.name = name;
            //     }
            // }
    
            // class Rabbit extends Animal {
            //     constructor(name, earLength) { 
            //         super(name);
            //         this.earLength = earLength;
            //     }
            // }
    
            // let rabbit = new Rabbit("Whittie", 10);

            // console.log(rabbit.name); // Whittie
            // console.log(rabbit.earLength); // 10
            // console.log(rabbit.speed); // 0
        
// Summary
    // To extend a class: "class Child extends Parent":
        // That means "Child.property.__proto__" will be "Parent.prototype", so methods are inherited.
    
    // When overriding a constructor:
        // We must call parent constructor as "super()" in "Child" constructor before using "this".
    
    // When overriding another method:
        // We can use "super.method()" in a "Child" method to call "Parent" method.

    // Internals:
        // Methods remembers their class/object in their internal "[[HomeObject]]" property. That's how super resolves parent methods.
        // So it's not safe to copy a method with "super" from one object to another.

    // Also:
        // Arrow functions don't have their own "this" or "super", so they transparently fit into the surrounding context.

// Task(2)
    // T01: Error creating an instance
        // class Animal {
        //     constructor(name) {
        //         this.name = name;
        //     }
        // }

        // class Rabbit extends Animal {
        //     constructor(name) {
        //         super(name);
        //         this.created = Date.now();
        //     }
        // }

        // let rabbit = new Rabbit("White Rabbit");
        // console.log(rabbit.name); // White Rabbit

    // T02: Extended clock
        import {Clock} from "./01-classBasicSyntax"

        class ExtendedClock extends Clock {
            constructor(options) {
                super(options);
                let { precision = 1000 } = options;
                this.precision = precision;
            }

            start() {
                this.render();
                this.timer = setInterval(() => this.render(), this.precision);
            }
        }

        let clock = new ExtendedClock({ template: 'h:m:s'}, 1000);
        clock.start();
