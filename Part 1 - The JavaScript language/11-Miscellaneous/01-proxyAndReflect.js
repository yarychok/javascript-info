// I. Proxy
    // A "Proxy" object wraps another object and intercepts operations, like reading/writing properties and others; optionally handling them on its own, or transparently allowing the object to handle them.
    // The syntax:
        // let proxy = new Proxy(target, handler);

        // target: is an object to wrap, can be anything, including functions.
        // handler: proxy configuration - an object with "traps", methods that intercept operations;

    // For operations on "proxy", if there's a corresponding trap in "handler", then it runs, and the proxy has a chance to handle it, otherwise the operation is performed on "target":
        // let target = {};
        // let proxy = new Proxy(target, {}); // empty handler

        // proxy.test = 5; // writing to proxy
        // console.log(target.test); // 5, the property appeared in target

        // console.log(proxy.test); // 5, we can read it from proxy too

        // for (let key in proxy) console.log(key); // test, iteration works

        /** As there are no traps, all operations on proxy are forwarded to target:
         * A writing operation "proxy.test=" sets the value on target.
         * A reading operation "proxy.text" returns the value from target.
         * Iteration over "proxy" returns value from target.
         */

    // So, proxy is a transparent wrapper around target.

// II. Default value with "get" trap: [[Get]]
    // The most common traps are for reading/writing properties.

    // To intercept reading, the handler should have a method:
        // get(target, property, receiver)
    
        /** It triggers when a property is read, with the following arguments:
         * target: is the target object, the one passed as the first argument to "new Proxy"
         * property: property name
         * receiver: if the target property is a getter, then receiver is the object that's going to be used as "this" in its call. Usually, that's the proxy object itself (or an object that inherits from it).
         */

    // Let's make a numeric array that returns 0 for nonexistent values.
    // Usually when one tries to get a non-existing array item, they get undefined, but we'll wrap a regular array into the proxy that traps reading and returns 0 if there's no such property:
        // let numbers = [0, 1, 2];

        // numbers = new Proxy(numbers, {
        //     get(target, prop) {
        //         if (prop in target) {
        //             return target[prop];
        //         } else {
        //             return 0; // default value
        //         }
        //     }
        // });

        // console.log(numbers[1]); // 1
        // console.log(numbers[123]); // 0

        // We can use Proxy to implement any logic for "default" values like that.

    // Note! It is very important that proxy replacing the target object everywhere; no one should ever reference the target object after it got proxied, otherwise it's easy to mess up.

// III. Validation with "set" trap: [[Set]]
    // The "set" trap triggers when a property is written:
        // set(target, property, value, receiver)

        /** Arguments:
         * target: is the target object
         * property: property name
         * value: property value
         * receiver: similar to get trap, matters only for setter properties
         */

    // The set trap should return true if setting is successful, and otherwise false (triggers TypeError).

    // Let's say we want an array for numbers, and if a value of another type is added, there should be an error:
        // let numbers = [];

        // numbers = new Proxy(numbers, {
        //     set(target, prop, val) {
        //         if (typeof val == 'number') {
        //             target[prop] = val;
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // });

        // numbers.push(1);
        // numbers.push(2);
        // numbers.push(3);
        // console.log(numbers.length); // 3

        // numbers.push("test"); // TypeError: 'set' on proxy: trap returned falsish for property '3' 

        // So, the built-in functionality of arrays is still working, and our proxy doesn't break anything.
        // And we don't have to override value-adding array methods like push/unshift, and so on, to add checks in there, because internally they use the [[Set]] operation that's intercepted by the proxy.

// VI. Iteration with "ownKeys" and "getOwnPropertyDescriptor":
    // [[OwnPropertyKeys]] and [[GetOwnProperty]]

    // Object.keys / for...in loop and most other methods that iterate over object properties use [[OwnPropertyKeys]] ( ownKeys ) internal method to get a list of properties.

    // In the example below we use "ownKeys" trap to make for...in loop over user, and also "Object.keys" and "Object.values" to skip properties starting with an undescore:
        // let user = {
        //     name: "John",
        //     age: 30,
        //     _password: "***",
        // };

        // user = new Proxy(user, {
        //     ownKeys(target) {
        //         return Object.keys(target).filter(key => !key.startsWith('_'));
        //     }
        // });

        // for (let key in user) console.log(key); // name, then: age

        // console.log(Object.keys(user)); // [ 'name', 'age' ]
        // console.log(Object.values(user)); // [ 'John', 30 ]

    // Although, if we return a key that doesn't exist in the object, "Obkect.keys" won't list it:
        // let user = {};

        // user = new Proxy(user, {
        //     ownKeys(target) {
        //         return ['a', 'b', 'c'];
        //     }
        // });

        // console.log(Object.keys(user)); // []

        // The reason why it returns an empty array is: "Object.keys" returns only properties with "enumerable" flag; to check for it, it calls the internal method [[GetOwnProperty]] for every property to get its descriptor, and here, as there's no property, its descriptor is empty, no "enumerable", so it's skipped.

            // So we can outplay it like that:
                // let user = {}; 

                // user = new Proxy(user, {
                //     ownKeys(target) {
                //         return ['a', 'b', 'c'];
                //     },

                //     getOwnPropertyDescriptor(target, prop) {
                //         return {
                //             enumerable: true,
                //             configurable: true,
                //         };
                //     }
                // });

                // console.log(Object.keys(user)); // ['a', 'b', 'c']

                // Once again: we onlt need to intercept [[GetOwnProperty]] of the property is absent in the object.
                
// V. Protected properties with "deleteProperty" and other traps: [[Delete]]
    // There's a widespread convention that properties and methods prefixed by an underscore are internal. They shouldn't be accessed from outside the object.
    // Technically that's possible though:
        // let user = {
        //     name: "Arthur",
        //     _password: "secret",
        // };

        // console.log(user._password); // secret

    // Let's use proxies to prevent any access to properties starting with undescore:

        // let user = {
        //     name: "John",
        //     _password: "***",
        // };

        // user = new Proxy(user, {
        //     get(target, prop) { // get: to throw an error when reading such property
        //         if (prop.startsWith('_')) {
        //             throw new Error("Access denied");
        //         }
        //         let value = target[prop];
        //         return (typeof value === 'function') ? value.bind(target) : value; // *
        //     },
        //     set(target, prop, val) { // set: to throw an error when writing
        //         if (prop.startsWith('_')) {
        //             throw new Error("Access denied");
        //         } else {
        //             target[prop] = val;
        //             return true;
        //         }
        //     },
        //     deleteProperty(target, prop) { // deleteProperty: to throw an error when deleting
        //         if (prop.startsWith('_')) {
        //             throw new Error("Access denied");
        //         } else {
        //             delete target[prop];
        //             return true;
        //         }
        //     },
        //     ownKeys(target) { // ownKeys: to exclude properties starting with underscode from iteration
        //         return Object.keys(target).filter(key => !key.startsWith('_'));
        //     }
        // });

        // try {
        //     console.log(user._password);
        // } catch(e) { console.log(e.message) }; // Access denied

        // try {
        //     user._password = "test";
        // } catch(e) { console.log(e.message) }; // Access denied

        // try {
        //     delete user._password;
        // } catch(e) { console.log(e.message) }; // Access denied

        // for (let key in user) console.log(key); // name

// VI. "In range" with "has" trap: [[HasProperty]]
    // The "has" trap intercepts "in" calls:
        // has(target, property)
        
    // Let's try to use "in" operator to check that a number in range:
        // let range = {
        //     start: 1,
        //     end: 10
        // };

        // range = new Proxy(range, {
        //     has(target, prop) {
        //         return prop >= target.start && prop <= target.end;
        //     }
        // });

        // console.log(5 in range); // true
        // console.log(20 in range); // false

        // Nice syntactic sugar, and very simple to implement.

// VII. Wrapping functions: "apply": [[Call]]
    // We can wrap a proxy around a function as well.

    /** The "apply(target, thisArg, args)" trap handles calling a proxy as function:
     * target: is the target object (function is still an object in JavaScript)
     * thisArg: is the value of "this"
     * args: is a list of arguments
     */

    // Recalling the "delay(f, ms)":
        // function delay(f, ms) {
        //     return function() {
        //         setTimeout(() => f.apply(this, arguments), ms);
        //     }
        // }

        // function sayHi(user) {
        //     console.log(`Hi, ${user}`);
        // }

        // sayHi = delay(sayHi, 3000);
        // sayHi("Arthur"); // Hi, Arthur

        // The delaying function performs call after timeout, but a wrapper function doesn't forward property read/write operations, etc; after wrapping the access is lot to properties of the original functions:

        // console.log(sayHi.length); // 0 (in the wrapper declaration, there are zero arguments)

        // So let's use proxy instead of wrapping function:

            // function delay(f, ms) {
            //     return new Proxy(f, {
            //         apply(target, thisArg, args) {
            //             setTimeout(() => target.apply(thisArg, args), ms);
            //         }
            //     });
            // }

            // function sayHi(user) {
            //     console.log(`Hi, ${user}`);
            // }

            // sayHi = delay(sayHi, 3000);

            // console.log(sayHi.length); // 1 (proxy forwards "get length" operation to the target)

            // sayHi("Arthur"); // Hi, Arthur (after 3 seconds)

            // The result is the same, but now not only calls, but all operations on the proxy are forwarded to the original function.

// VIII. Reflect
    // "Reflect" is a built-in object that simplifies creation of "Proxy".
    // Once again, internal methods, such as [[Get]], [[Set]] and others are specification-only, they can't be called directly;
    // but the "Reflect" object makes that somewhat possible: its methods are minimal wrappers around the internal methods:
        // let user = {};

        // Reflect.set(user, 'name', 'Arthur');

        // console.log(user.name); // Arthur

    // An interesting capability, that "Reflect" allows us to call operators like "new", "delete" as functions (Reflect.construct, Reflect.deleteProperty, ...).

    // ! For every internal method, trappable by Proxy, there's a corresponding method in Reflect, with the same name and arguments as the Proxy trap.
    // So we can use Reflect to forward an operation to the original object:
        // let user = {
        //     name: "Arthur",
        // };

        // user = new Proxy(user, {
        //     get(target, prop, receiver) {
        //         console.log(`GET ${prop}`);
        //         return Reflect.get(target, prop, receiver);
        //     },
        //     set(target, prop, val, receiver) {
        //         console.log(`SET ${prop} = ${val}`);
        //         return Reflect.set(target, prop, val, receiver);
        //     }
        // });

        // let name = user.name; // GET name
        // user.name = "Pete"; // SET name = Pete

// IX. Proxy limitations
    // Proxies provide a unique way to alter or tweak the behavior of the existing objects at the lowest level, but still there are limitations.

    // 1. Built-in objects: Internal slots

        // Many built-in objects, like Map, Set, Date, Promise and others make use of so-called "internal slots".

        // These are like properties, but reserved for internal, specification-only purposes. For instance, Map stores items in the internal slot [[MapData]]. Built-in methods access them directly, not via [[Get]]/[[Set]], so proxy can't intercept that:
            // let map = new Map();

            // let proxy = new Proxy(map, {});

            // proxy.set('test', 1); // TypeError: Method Map.prototype.set called on incompatible receiver #<Map>

    // 2. Private fields

        // A similar to built-in objects happens with private class fields:
            // class User {
            //     #name = "Guest";

            //     getName() {
            //         return this.#name;
            //     }
            // }

            // let user = new User();

            // user = new Proxy(user, {});

            // console.log(user.getName()); // TypeError: Cannot read private member #name from an object whose class did not declare it

    // 3. Proxy != target
        // So if we use the original object as a key, and then proxy it, then the proxy can't be found:
            // let allUsers = new Set();

            // class User {
            //     constructor(name) {
            //         this.name = name;
            //         allUsers.add(this);
            //     }
            // }

            // let user = new User("Arthur");

            // console.log(allUsers.has(user)); // true

            // user = new Proxy(user, {});

            // console.log(allUsers.has(user)); // false

// X. Revocable proxies
    // A recocable proxy is a proxy that can be disabled.

    // For example, we have a resource, and would like to close access to it any moment.
    // What we can do is to wrap it into a revocable proxy, without any traps; such a proxy will forward operations to object, and we can disable it at any moment:
        // let { proxy, revoke } = Proxy.revocable(target, handler)

        // The call returns an object with the proxy and revoke function to disable it:
            // let object = {
            //     data: "Valuable data",
            // };

            // let {proxy, revoke} = Proxy.revocable(object, {});

            // // pass the proxy somewhere instead of object...
            // console.log(proxy.data);

            // // later in our code
            // revoke();
            
            // // the proxy isn't working any more (revoked)
            // console.log(proxy.data); // TypeError: Cannot perform 'get' on a proxy that has been revoked

            // A call to 'revoke()' removes all internal references to the target object from the proxy, so they are no longer connected.

// Summary
    // Proxy is a wrapper around an object, that forwards operations on it to the object, optionally trapping some of them.
    // It can wrap any kind of object, including classes and functions.

    /** We can trap:
     * Reading(get), writing(set), deleting(deleteProperty) a property.
     * Calling a function(apply).
     * The "new" operator(construct).
     * Many other operations.
     */

    // That allows us to create "virtual" properties and methods, implement default values, observable objects, function decorators and so much more.

    // We can also wrap an object multiple times in different proxies, decorating it with various aspects of functionality.

    // The Reflect API is designed to complement Proxy. For any Proxy trap, there's a Reflect call with the same arguments; we should use those to forward calls to target objects.

    /** Proxies have some limitations:
     * Built-in objects have "internal slots", access to those can't be proxied.
     * The same holds true for private class fields, as they are internally implemented using slots. So proxies method calls must have the target object as "this" to access them.
     * Object equality tests "===" can't be intercepted.
     * Perfomance: benchmarks depend on an engine, but generally accessing a property using a simplest proxy takes a few times longer. 
     */

// Tasks(3)
    // Error on reading non-existent property
        // let user = {
        //     name: 'John',
        // }

        // function wrap(target) {
        //     return new Proxy(target, {
        //         get(target, prop) {
        //             if (target[prop]) {
        //                 return target[prop]
        //             } else {
        //                 return new ReferenceError(`Property doesn't exist: ${prop}`)
        //             }
        //         }
        //     });
        // }

        // user = wrap(user);

        // console.log(user.name);
        // console.log(user.age);

    // Accessing array[-1]
        // let array = [1, 2, 3];

        // array = new Proxy(array, {
        //     get(target, prop) {
        //         if (prop < 0) {
        //             prop = +prop + target.length;
        //         }
        //         return Reflect.get(target, prop);
        //     }
        // });

        // console.log(array[-1]); // 3

    // Observable
        let handlers = Symbol('handlers');

        function makeObservable(target) {
            target[handlers] = [];

            target.observe = function(handler) {
                this[handlers].push(handler);
            };

            return new Proxy(target, {
                set(target, property, value) {
                    let success = Reflect.set(...arguments);
                    if (success) {
                        target[handlers].forEach(
                            handler => handler(property, value)
                        );
                    }

                    return success;
                }
            });
        }

        let user = {};

        user = makeObservable(user);

        user.observe((key, value) => {
            console.log(`SET ${key} = ${value}`);
        });

        user.name = 'Arthur';
        