// I. Property flags
    // Object properties, besides a "value" (key: value), have three special attrributes (so-called 'flags'):
        // - "writable" - if "true", the value can be changed, otherwise it's read-only.
        // - "enumerable" - if "true", then listed in loops, otherwise not listed.
        // - "configurable" - if "true", the property can be deleted, and these attributes can be modified, otherwise not.

    // When we create a property 'the usual way', all of these attributes are "true", but we can change them anytime.

    // Method below allows to query the full information about a property:
        // let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
    
        // let user = {
        //     name: "Arthur",
        // };

        // let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

        // console.log(JSON.stringify(descriptor, null, 2));
        /* {
            "value": "Arthur",
            "writable": true,
            "enumerable": true,
            "configurable": trrue
        } */

    // To change the flags:
        // Object.defineProperty(obj, propertyName, descriptor);

        // let user = {};

        // Object.defineProperty(user, "name", {
        //     value: "Arthur",
        // });

        // let descriptor = Object.getOwnPropertyDescriptor(user, "name");

        // console.log(JSON.stringify(descriptor, null, 2));
        /*
        {
            "value": "Arthur",
            "writable": false,
            "enumerable": false,
            "configurable": false
        }
        */

// II. Non-writable
        // let user = {
        //     name: "Arthur",
        // };

        // Object.defineProperty(user, "name", {
        //     writable: false,
        // });

        // user.name = "Liubomyr"; 
        // console.log(user.name); // Arthur

// III. Non-enumerable
    // let user = {
    //     name: "Arthur",
    //     toString() {
    //         return this.name;
    //     },
    // };

    // for (let key in user) console.log(key); // name, toString

    // Object.defineProperty(user, "toString", {
    //     enumerable: false,
    // });

    // for (let key in user) console.log(key); // name
    // console.log(Object.keys(user)); // ['name']

// VI. Non-configurable
    // let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

    // console.log(JSON.stringify(descriptor, null, 2));
    /* 
        {
            "value": 3.141592653589793,
            "writable": false,
            "enumerable": false,
            "configurable": false,
        }
    */

    // So no one is able to change the value of 'Math.PI' or overwrite it:
        // Math.PI = 3;

        // console.log(Math.PI); // 3.14...
    
    // We also can't change Math.PI to be writable again:
        // Object.defineProperty(Math, "PI", { writable: true }); // TypeError: Object.defineProperty called on non-object
    // So there's nothing we can do with 'Math.PI'.
    // Making a property non-configurable is a one-way road. We cannot change it back with 'defineProperty'.

    // Note! 'configurable: false' prevents changes of property and its deletion, while allowing to change it value:
        // let user = {
        //     name: "Arthur",
        // };

        // Object.defineProperty(user, "name", {configurable: false});

        // user.name = "Liubomyr";
        // console.log(user.name); // Liubomyr

        // delete user.name;
        // console.log(user.name); // Liubomyr
    
    // And here we make "user.name" as "forever sealed" constant, just like the built-in 'Math.PI':
        // let user = {
        //     name: "Arthur",
        // };

        // Object.defineProperty(user, "name", {
        //     writable: false,
        //     configurable: false,
        // });

        // user.name = "Liubomyr"; // Doesn't work, but ignored w/o 'user strict'
        // delete user.name; // Doesn't work, but ignored w/o 'user strict'
        // Object.defineProperty(user, "name", {value: "Pete"}); // TypeError: Cannot redefine property: name

// V. Object.defineProperties
        // Method below llows to define many properties at once:
            // Object.defineProperties(obj, {
            //     prop1: descriptor1,
            //     prop2: descriptor2,
            //     // ...
            // });

// VI. Object.getOwnPropertyDescriptors
    // To get all property descriptors at once.
    // Together with 'Object.defineProperties' it can be used as a "flags-aware" way of cloning an object:
        // let obj = {
        //     name: "Arthur",
        // };

        // let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

        // console.log(clone); // {name: 'Arthur'};
        // console.log(Object.getOwnPropertyDescriptor(clone));
        /*
            {
            name: {
                value: 'Arthur',
                writable: true,
                enumerable: true,
                configurable: true
            }
            }
        */
        
        // Another differrence is that it returns all property descriptions including symbolic and non-enumerable ones.

// VII. Sealing an object globally
    // Property descriptors work at the level of individual properties.
    // There are also methods that limit access to the whole object:
        // Object.preventExtensions(obj)
        // Forbids the addition of new properties to the object

        // Object.seal(obj)
        // Forbids adding/removing of properties.
        // Sets 'configurable: false' for all existing properties.

        // Object.freeze(obj)
        // Forbids adding/removing/changing of properties.
        // Sets 'configurable: false, writable: false' for all existing properties.

        // And also there are tests for them:
            // Object.isExtensible(obj)
            // Object.isSealed(obj)
            // Object.isFrozen(obj)