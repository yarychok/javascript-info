// I. Extending Error
    // Lets create the "readUser(json)" function that will not only read syntactically correct "json", but also check (validate) the data.
    // For example, if there are no required fields, or the format is wrong, then that should be another kind of error, not "SyntaxError".
    // It will be "ValidationError" that should inherit from the built-in "Error" class.
        // "Pseudocode" for the buil-in Error class:
            // class Error {
            //     constructor(message) {
            //         this.message = message;
            //         this.name = name;
            //         this.stack = <call stack>;
            //     }
            // }
    
        // class ValidationError extends Error {
        //     constructor(message) {
        //         super(message);
        //         this.name = "ValidationError";
        //     }
        // }

        // function test() {
        //     throw new ValidationError("Whoops!");
        // }

        // try {
        //     test();
        // } catch (err) {
        //     console.log(err.message); // Whoops!
        //     console.log(err.name); // ValidationError
        //     console.log(err.stack); // ValidationError: Whoops! at test ...
        // }

        // Lets implement our "readUser()" function:
            // function readUser(json) {
            //     let user = JSON.parse(json);

            //     if (!user.age) {
            //         throw new ValidationError("No field: age");
            //     }

            //     if (!user.name) {
            //         throw new ValidationError("No field: name");
            //     }

            //     return user;
            // }

            // try {
            //     let user = readUser('{ "age": 25 }');
            // } catch (err) {
            //     if (err instanceof ValidationError) {
            //         console.log("Invalid data: " + err.message);
            //     } else if (err instanceof SyntaxError) {
            //         console.log("JSON Syntax Error: " + err.message);
            //     } else {
            //         throw err; // unknown error, rethrow it
            //     }
            // }

// II. Further inheritance
    // Lets extend our "ValidationError" class, as it's very generic. Many things may go wrong: the property may absent or it may be in a wrong format.
    // So we can make a more concrete class "PropertyRequiredError" exactly for absent properties.
        // class ValidationError extends Error {
        //     constructor(message) {
        //         super(message);
        //         this.name = "ValidationError";
        //     }
        // }

        // class PropertyRequiredError extends ValidationError {
        //     constructor(property) {
        //         super("No property: " + property);
        //         this.name = "PropertyRequiredError";
        //         this.property = property;
        //     }
        // }

        // function readUser(json) {
        //     let user = JSON.parse(json);

        //     if (!user.age) {
        //         throw new PropertyRequiredError("age");
        //     }

        //     if (!user.name) {
        //         throw new PropertyRequiredError("name");
        //     }

        //     return user;
        // }

        // try {
        //     let user = readUser('{ "age": 25 }');
        // } catch (err) {
        //     if (err instanceof PropertyRequiredError) {
        //         console.log("Invalid data: " + err.message); // is shown
        //     } else if (err instanceof SyntaxError) {
        //         console.log("JSON Syntax Error: " + err.message);
        //     } else {
        //         throw err;
        //     }
        // }

        // So all we need to do is to pass the property name to our class: "new PropertyRequiredError(property)", and the human-readable "message" is generated by the constructor.

// III. Wrapping exceptions
    // Code above can handle only two types of errors, but there can be more.
    // We don't really want to check for all error types ony-by-one every time, so we can use technique like "wrapping exceptions":
        /**
         * we'll make a new class "ReadError" to represent a generic "data reading" error;
         * the function "readUser" will catch data reading errors that occur inside it, such as "ValidationError" and "SyntaxError", and generate a "ReadError" instead;
         * the "ReadError" object will keep the reference to the original error in its "cause" property.
         */

        // class ReadError extends Error {
        //     constructor(message, cause) {
        //         super(message);
        //         this.cause = cause;
        //         this.name = "ReadError";
        //     }
        // }

        // class ValidationError extends Error {
        //     constructor(message) {
        //         super(message);
        //         this.name = "ValidationError";
        //     }
        // }

        // class PropertyRequiredError extends ValidationError {
        //     constructor(property) {
        //         super("No property: " + property);
        //         this.name = "PropertyRequiredError";
        //         this.property = property;
        //     }
        // }

        // function validateUser(user) {
        //     if (!user.age) {
        //         throw new PropertyRequiredError("age");
        //     }

        //     if (!user.name) {
        //         throw new PropertyRequiredError("name");
        //     }
        // }

        // function readUser(json) {
        //     let user;

        //     try {
        //         user = JSON.parse(json);
        //     } catch (err) {
        //         if (err instanceof SyntaxError) {
        //             throw new ReadError("Syntax Error", err);
        //         } else {
        //             throw err;
        //         }
        //     }

        //     try {
        //         validateUser(user);
        //     } catch (err) {
        //         if (err instanceof ValidationError) {
        //             throw new ReadError("Validation Error", err);
        //         } else {
        //             throw err;
        //         }
        //     }
        // }

        // try {
        //     readUser('{bad json}');
        // } catch (e) {
        //     if (e instanceof ReadError) {
        //         console.log(e);
        //         console.log("Original error: " + e.cause);
        //     } else {
        //         throw e;
        //     }
        // }
// Summary
    // We can inherit from "Error" and other built-in error classes normally. We just need to take acare of the "name" property and don't forget to call "super".

    // We can use "instanceof" to check for particular errors. It also works with inheritance. But sometimes we have an error object coming from a 3rd-party library and there's no easy way to get its class. Then "name" property can be used for such checks.

    // Wrapping exceptions is a widespread technique: a function handles low-level exceptions and creates higher-level errors instead of various low-level ones. Low-level exceptions sometimes become properties of that object like "err.cause" in the examples above, but that's not strictly required.

// Tasks(1)
    // Inherit from SyntaxError
        class FormatError extends SyntaxError {
            constructor(message) {
                super(message);
                this.name = this.constructor.name;
            }
        }

        let err = new FormatError("Formatting error");

        console.log(err.message);
        console.log(err.name);
        console.log(err.stack);

        console.log(err instanceof FormatError);
        console.log(err instanceof SyntaxError);
