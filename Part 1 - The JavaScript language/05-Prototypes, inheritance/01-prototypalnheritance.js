// I. [[Prototype]]
    // "prototypal inheritance" of properties:
        // let animal = {
        //     eats: true,
        // };

        // let rabbit = {
        //     jumps: true,
        // };

        // rabbit.__proto__ = animal;
        // console.log(rabbit.eats); // true

    // "prorotypal inheritance" of methods:
        // let animal = {
        //     eats: true,
        //     walk() {
        //         console.log(`*walking*`);
        //     },
        // };

        // let rabbit = {
        //     jumps: true,
        //     __proto__: animal,
        // };

        // rabbit.walk(); // *walking*

    // Chains looks like this:
        // let animal = {
        //     eats: true,
        //     walk() {
        //         console.log(`*walking*`);
        //     },
        // };

        // let rabbit = {
        //     jumps: true,
        //     __proto__: animal,
        // };

        // let longEar = {
        //     earLength: 10,
        //     __proto__: rabbit,
        // };

        // longEar.walk(); // *walking*
        // console.log(longEar.jumps); // true

    // "__proto__" is a historical getter/setter for [[Prototype]]. 
    // Modern JavaScript suggests that we should use: "Object.getProrotypeOf" / "Object.setProrotypeOf".

// II. Writing doesn't use prototype
    // If method exists at the exact object, we are using it:
        // let animal = {
        //     eats: true,
        //     walk() {
        //         console.log(`I'll not be displayed`);
        //     },
        // };

        // let rabbit = {
        //     __proto__: animal,
        // };

        // rabbit.walk = function() {
        //     console.log(`It'll be displayed`);
        // };

        // rabbit.walk(); // It'll be displayed

    // Example with accessor properties:
        // let user = {
        //     name: "Arthur",
        //     surname: "Yarych",

        //     set fullName(value) {
        //         [this.name, this.surname] = value.split(" ");
        //     },

        //     get fullName() {
        //         return `${this.name} ${this.surname}`;
        //     },
        // };

        // let admin = {
        //     __proto__: user,
        //     isAdmin: true,
        // };

        // console.log(admin.fullName); // Arthur Yarych

        // admin.fullName = "Liubomyr Yarych";
        // console.log(admin.fullName); // Liubomyr Yarych
    
// III. The value of "this"
    // "this" is not affected by prototypes at all.

    // No matter where the method is found: in an object or its prototype.
    // In a method call, "this" is always the object before the dot.

        // let animal = {
        //     walk() {
        //         if (!this.isSleeping) {
        //             console.log(`I'm walking`);
        //         };
        //     },

        //     sleep() {
        //         this.isSleeping = true;
        //     },
        // };

        // let rabbit = {
        //     name: "White Rabbit",
        //     __proto__: animal,
        // };

        // rabbit.sleep(); // modifies rabbit.isSleeping
        // console.log(rabbit.isSleeping); // true

        // console.log(animal.isSleeping); // undefined (no such property in the prototype)

        // animal.sleep(); // modifies animal.isSleeping
        // console.log(animal.isSleeping); // true

// VI. for...in loop
    // Iterates over inherited properties too:
        // let animal = {
        //     eats: true,
        // };

        // let rabbit = {
        //     jumps: true,
        //     __proto__: animal,
        // };

        // console.log(Object.keys(rabbit)); // ['jumps']

        // for (let prop in rabbit) console.log(prop); // jumps, eats
    
    // If that's not what we want:
        // let animal = {
        //     eats: true,
        // };

        // let rabbit = {
        //     jumps: true,
        //     __proto__: animal,
        // };

        // for (let prop in rabbit) {
        //     let isOwn = rabbit.hasOwnProperty(prop);

        //     if (isOwn) {
        //         console.log(`Our: ${prop}`); // Our: jumps
        //     } else {
        //         console.log(`Inherited: ${prop}`); // Inherited: eats
        //     }
        // }

    // Almost all key/value-getting methods ignore inherited properties, 
    // such as "Object.keys" / "Object.values".

// Summary
    // In JavaScript, all objects have a hidden [[Prototype]] property that's either another object or null.

    // We can use "obj.__proto__" to access it.

    // The object referenced by [[Prototype]] is called a "prototype".

    // If we want to read a property of "obj" or call a method, and it doesn't exist, then JavaScript tries to find it in the prototype.

    // Write/delete operations acr directly on the object, they don't use the prototype (assuming it's a data property, not a setter).

    // If we call "obj.method()", and the "method" is taken from the prototype, "this" still references "obj". So methods always work with the current object even if they are inherited.

    // The "for...in" loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

// Tasks(4)
    // T01: Working with prototype
        // let animal = {
        //     jumps: null,
        // };

        // let rabbit = {
        //     __proto__: animal,
        //     jumps: true,
        // };

        // console.log(rabbit.jumps); // true

        // delete rabbit.jumps;
        // console.log(rabbit.jumps); // null

        // delete animal.jumps;
        // console.log(rabbit.jumps); // undefined

    // T02: Searching algorithm
        // let head = {
        //     glasses: 1,
        // };

        // let table = {
        //     pen: 3,
        // };

        // let bed = {
        //     sheet: 1,
        //     pillow: 2,
        // };

        // let pockets = {
        //     money: 2000,
        // };

        // pockets.__proto__ = bed;
        // bed.__proto__ = table;
        // table.__proto__ = head;

        // console.log(head.glasses);

    // T03: Where does it write?
        // let animal = {
        //     eat() {
        //         this.full = true;
        //     },
        // };

        // let rabbit = {
        //     __proto__: animal,
        // };

        // rabbit.eat();
        // console.log(rabbit.full); // true

    // T04: Why are both hamsters full?
        // let hamster = {
        //     stomach: [],

        //     eats(food) {
        //         this.stomach = [food];
        //     },
        // };

        // let speedy = {
        //     __proto__: hamster,
        // };

        // let slowy = {
        //     __proto__: hamster,
        // };

        // speedy.eats("apple");

        // console.log(speedy.stomach); // ['apple']
        // console.log(slowy.stomach); // []