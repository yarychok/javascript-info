// There are two kinds of object properties.

// - The first kind is a data properties (all properties that we've been using until now).
// - The second kind of property is a new one - accessor property.
// They are essentially functions that execute on getting and setting a value,
// but look like regular properties to an external code.

// I. Getters and setters
    // Accessor properties are represented by 'getter' and 'setter' methods.
    // In an object literal they are denoted by 'get' and 'set':
        // let obj = {
        //     get propName() {
        //         // getter, the code executed on getting obj.propName
        //     },

        //     set propName(value) {
        //         // setter, the code executed on setting obj.propName = value
        //     },
        // };

    // For instance:
        // let user = {
        //     name: "Arthur",
        //     surname: "Yarych",

        //     get fullName() {
        //         return `${this.name} ${this.surname}`;
        //     },

        //     set fullName(value) {
        //         [this.name, this.surname] = value.split(" ");
        //     }
        // };

        // console.log(user.fullName); // Arthur Yarych 

        // user.fullName = "Liubomyr Yarych"; // lets use our setter
        // console.log(user.fullName); // Liubomyr Yarych

        // console.log(user.name); // Liubomyr (setter have changed our properties)

// II. Accessor descriptors
    // For accessor properties, there is no "value" or "writable":
        // - get - a function w/o arguments, that works when a property is read.
        // - set - a function with one argument, that is called when the property is set.
        // - enumerable - same as for data properties.
        // - configurable - same as for data properties.

        // let user = {
        //     name: "Arthur",
        //     surname: "Yarych",
        // };
    
        // Object.defineProperty(user, "fullName", {
        //     get() {
        //         return `${this.name} ${this.surname}`;
        //     },
    
        //     set(value) {
        //         [this.name, this.surname] = value.split(" ");
        //     }
        // });
    
        // console.log(user.fullName); // Arthur Yarych
    
        // user.fullName = "Liubomyr Yarych";
        // console.log(user.fullName); // Liubomyr Yarych

    // If we try to supply both "get" and "value" in the same descriptor, there will be an error:
        // Object.defineProperty({}, "prop", {
        //     get() {
        //         return 1;
        //     },

        //     value: 2,
        // });
        // TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute.
    
// III. Smarter getters/setters
    // Getters / setters can be used as wrapper over "real" property values to gain more control over operations with them.
    // For instance, if we want to forbid too short names for "user", we can have a setter "name" and keep the value in a separate property "_name":
        // let user = {
        //     get name() {
        //         return this._name;
        //     },

        //     set name(value) {
        //         if (value.length < 4) {
        //             console.log("Name is too short");
        //             return;
        //         }
        //         this._name = value;
        //     }
        // };

        // user.name = "Eve";
        // console.log(user.name); // Name is too short, undefined
    
// VI. Using for compatability
    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;

        Object.defineProperty(this, "age", {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        })
    };

    let liubomyr = new User("Liubomyr", new Date(1999, 1, 26));
    console.log(liubomyr);
    console.log(liubomyr.age);


