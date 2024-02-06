    // Modern methods instead of legacy "__proto__":
        // Object.getPrototypeOf(obj) - returns the "[[Prototype]]" of "obj".
        // Object.setPrototypeOf(obj, proto) - sets the "[[Prototype]]" of "obj" to "proto".

    // The only usage of "__proto__" is as a property when creating a new object:
        // Object.create(proto, [descriptors]) - creates an empty object with given "proto" as "[[Prototype]]" and optional property descriptors.

    // For instance:
        // let animal = {
        //     eats: true,
        // };

        // let rabbit = Object.create(animal);

        // console.log(rabbit.eats); // true
        // console.log(Object.getPrototypeOf(rabbit) === animal); // true

        // Object.setPrototypeOf(rabbit, {});
        // console.log(Object.getPrototypeOf(rabbit) === animal); // false

        // let monkey = Object.create(animal, {
        //     jumps: {
        //         value: true,
        //     },
        // });

        // console.log(monkey.jumps); // true

    // We can perform an object cloning like this:
        // let clone = Object.create(
        //     Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
        // );

// I. Brief history
    // The "prorotype" property of a constructor function has worked since very ancient times, which is the oldest way to create objects with a given property.

    // Later, in the year 2012, "Object.create" appeared in the standard. It gaves the ability to create objects with a given prototype, but did not provide the ability to get/set it. Some browsers implemented the non-standard "__proto__" accessor that allowed user to get/set a prototype at anytime, to give more flexibility to developers.

    // In the year 2015, "Object.getPrototypeOf" and "Object.setPrototypeOf" were added to the standard, to perform the same functionality as "__proto__".

    // In the year 2022, it was officially allowed to user "__proto__" in object literals {...}.

// II. "Very plain" objects
    // The "__proto__" property is special: it must be either an object or "null":
        // let obj = {};

        // obj.__proto__ = "test";

        // console.log(obj.__proto__); // [Object: null prototype] {}
    
    // "__proto__" is not a property of an object, but an accessor property of "Object.prototype", so if "obj.__proto__" is read/set, the corresponding getter/setter is called from it's prototype, and it gets/sets "[[Prototype]]":
        // let obj = Object.create(null);
        //     // or: obj = { __proto__: null };
        // obj.__proto__ = "something";

        // console.log(obj.__proto__); // "something" (actually a "very plain" object)

// Summary
    // To create an object with the given prototype, use:
        // - literal syntax: { __proto__: ... }, allows to specify multiple properties.
        // - Object.create(proto, [descriptors]), allows to specify property descriptors.
    
    // The "Object.create" provides an easy way to shallow-copy an object with all descriptors.

    // There are more modern methods to get/set the prototype of an Object.

    // Getting/setting the prototype using the built-in "__proto__" getter/setter isn't recommended, it's now in the Annex B of the specification.

    // We also covered prototype-less objects, created with "Object.create(null)" or "{ __proto__: null }".
        // These objects are used as dictionaries, to store any (possibly user-generated) keys.
        // Normally, objects inherit built-in methods and "__proto__" getter/setter from "Object.prototype", making corresponding keys "occupied" and potentially causing side effects. With "null" prototype, objects are truly empty.

// Tasks(2)
    // T01: Add toString to the dictionary
        // let dictionary = Object.create(null, {
        //     toString: {
        //         value() {
        //             return Object.keys(this).join();
        //         }
        //     }
        // });

        // dictionary.apple = "Apple";
        // dictionary.__proto__ = "Test"; // just a property named __proto__ (it's not a __proto__)

        // for (let key in dictionary) console.log(key); // apple, __proto__

        // console.log(dictionary); // [Object: null prototype] { apple: 'Apple', ['__proto__']: 'Test' }

    // T02: The difference between calls
        // function Rabbit(name) {
        //     this.name = name;
        // };

        // Rabbit.prototype.sayHi = function() {
        //     console.log(this.name);
        // }

        // let rabbit = new Rabbit("Rabbie");

        // rabbit.sayHi(); // Rabbie
        // Rabbit.prototype.sayHi(); // undefined
        // Object.getPrototypeOf(rabbit).sayHi(); // undefined
        // rabbit.__proto__.sayHi(); // undefined