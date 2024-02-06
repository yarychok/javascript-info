// I. The instanceof operator
    // The "instanceof" operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.

    // Such a check may be necessary in cases, like building a polymorphic function, the one that treats arguments differently depending on their type.

    // The instanceof operator:
        // class Rabbit {}

        // let rabbit = new Rabbit();

        // console.log(rabbit instanceof Rabbit); // true

        // The same with constructor functions:
            // function Rabbit() {}

            // console.log(new Rabbit() instanceof Rabbit); // true

        // And with built-in classes:
            // let arr = [1, 2, 3];

            // console.log(arr instanceof Array); // true
            // console.log(arr instanceof Object); // true

        // The algorithm of "obj instanceof Class" works as follows:
            // - If there's a static method "Symbol.hasInstance", then just call it:
                // Class[Symbol.hasInstance](obj) that returns true or false.
                // We can customize the behavior like this:
                    // class Animal {
                    //     static [Symbol.hasInstance](obj) {
                    //         if (obj.canEat) return true;
                    //     }
                    // }

                    // let obj = { canEat: true };

                    // console.log(obj instanceof Animal); // true
            
            // - Most classes do not have "Symbol.hasInstance", so standard logic is used: "obj instanceof Class" checks whether "Class.prototype" is equal to one of the prototypes in the "obj" prototype chain:
                // class Animal {}
                // class Rabbit extends Animal {}

                // let rabbit = new Rabbit();

                // console.log(rabbit instanceof Animal); // true

                // Here match will be at the second step.
                // If some of them are true, it gives the answer immediately.
                    // console.log(rabbit.__proto__ === Animal.prototype); // false
                    // console.log(rabbit.__proto__.__proto__ === Animal.prototype); // true
                    // console.log(rabbit.__proto__.__proto__.__proto__ === Animal.prototype); // false

                    
// II. Object.prototype.toString for the type
    // let obj = {};

    // console.log(obj); // {} (using Web (alert()) it'll be: [object Object])
    // console.log(obj.toString()); // [object Object]
        // So that's depend on their implementation of "toString":

        // let objectToString = Object.prototype.toString;

        // let arr = [];

        // console.log(objectToString.call(arr)); // [object Array]

    // The behavior of Object toString can be customized:
        // let user = {
        //     [Symbol.toStringTag]: "User"
        // };

        // console.log({}.toString.call(user)); // [object User]

// Summary
    // typeof works for primitives and returns string
    // {}.toString works for primitives, built-in objects, objects with Symbol.toStringTag and returns string
    // instanceof works for objects and returns true/false

    // So, {}.toString is just "more advanced" typeof.

    // And instanceof operator really shines when we are working with a class hierarchy and want to check for the class taking into account inheritance.

// Tasks(1)
    // Strange instanceof 
        function A() {}
        function B() {}

        A.prototype = B.prototype = {};

        let a = new A();

        console.log(a instanceof B); // true

        // instanceof doesn't care about the function, but rather about it's prototype.
        // Here a.__proto__ == B.prototype.