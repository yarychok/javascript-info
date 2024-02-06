// Reference type is an internal type of the language.

// A dynamically evaluated method call can lose "this":
    // let user = {
    //     name: "John",
    //     hi() { console.log(this.name) },
    //     byt() { console.log("Bye") },
    // };

    // user.hi(); // John

    // (user.name == "John" ? user.hi : user.bye)(); //undefined

    // Reading a property, such as with dot "." in "obj.method()" returns not exactly value, but a special "reference type" value that stores both the property value and the object it was taken from.

    // That's for the subsequent method call "()" to get the object and set "this" to it.

    // For all other operations, the reference type automatically becomes the property value (a function in our case).

// The whole mechanics is hidden from our eyes. It only matters in substle cases, such as when a method is obtained dynamically from the object, using an expression.

// Task(1)
    // Explain the value of "this"
        // let obj, method;

        // obj = {
        //     go: function() { console.log(this); },
        // };

        // // A regular method call works as expected.
        // obj.go();
        
        // // The same, parentheses do not change the order of operations here; the dot is first anway.
        // (obj.go)();

        // // "(expression)()"; the call works as if it were split into two lines:
        //     // f = obj.go; // calculate the expression
        //     // f(); // call what we have
        // (method = obj.go)();

        // // The similar as (3), to the left of the parentheses () we have an expression.
        // (obj.go || obj.stop)();