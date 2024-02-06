// I. The "try...catch" syntax
    // Two main blocks:
        // try {
        //     // code...
        // } catch(err) {
        //     // error handling 
        // }

    // It works like this:
        // First, the code in "try {...}" is executed.
        // If there were no errors, then "catch(err)" is ignored: the execution reaches the end of "try" and goes on, skipping "catch".
        // If an error occurs, then the "try" execution stopped, and control flows to the beginning of "catch(err)". The "err" variable (we can use any name of it) will contain an error object with details about what happened.

        // So, an error inside the "try {...}" block doesn't kill the script - we have a change to handle it in "catch".

    // Some examples:
        // An errorless example:
            // try {
            //     console.log("Start of try runs"); // will be shown
            //     console.log("End of try runs"); // will be shown
            // } catch (err) {
            //     console.log("Catch is ignored, because we have no error"); // will not be shown
            // }

        // An example with error:
            // try {
            //     console.log("Start of try runs"); // will be shown
            //     lineOfCodeThatCausesError; // error here
            //     console.log("End of try, that will not be reached"); // will not be shown
            // } catch (err) {
            //     console.log("Error has occured"); // will be shown
            // }

    // "try...catch" only works for runtime errors.
        // So to work, the code must be runnable, or in other words, it should be valid JavaScript code.
        // It won't work if the code is suntactically wrong.
        // The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called "parse-time" error and are unrecoverable.
        // So, "try...catch" can onlt handle errors that occur in valid code. Such errors are called "runtime errors" or, sometimes, "exceptions".

    // "try...catch" works synchronously.
            // If an exception happens in "scheduled" code, like in "setTimeout", then "try...catch" won't catch it:
                // try {
                //     setTimeout(function() {
                //         noSuchVariable; // script will die here
                //     }, 1000);
                // } catch (err) {
                //     console.log("won't work")
                // }

                // ReferenceError: noSuchVariable is not defined

            // That's because the function itself is executed later, when the engine has already left the "try...catch" construct.
            // To catch an exception inside a scheduled function, "try...catch" must be inside that function:
                // setTimeout(function() {
                //     try {
                //         noSuchVariable;
                //     } catch {
                //         console.log("error is caught");
                //     }
                // }, 1000); // error is caught

// II. Error object
    // When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to "catch".

    // For all built-in errors, the error object has two main properties:
        // "name". For instance, for an undefined variable that's "ReferenceError".
        // "message". Textual message about error details.

        // Other non-standard properties:
            // "stack". Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

            // For instance:
                // try {
                //     lalala;
                // } catch (err) {
                //     console.log(err.name); // ReferenceError
                //     console.log(err.message); // lalala is not defined
                //     console.log(err.stack); // ReferenceError: lalala is not defined at Oject.<anonymous>... (call stack)

                //     console.log(err); // "name: message"
                //     // ReferenceError: lalala is not defined
                // }

// III. Optional "catch" binding
    // If we don't need error details, "catch" may omit it:
        // try {
        //     error;
        // } catch {
        //     console.log("catched"); // catched
        // }

// VI. Using "try...catch"
    // A real-life use case:
        // let json = '{"name":"John", "age": 30}'; // data from the server

        // let user = JSON.parse(json); // convert the text representation to JS object

        // console.log(user.name); // John
        // console.log(user.age); // 30

        // If "json" is malformed, "JSON.parse" generates an error, so the script "dies".

        // So let's handle the error in case we had an invalid json input:
            // let json = "{bad json}";

            // try {
            //     let user = JSON.parse(json); // error occurs
            //     console.log(user.name); // doesn't work
            // } catch (err) { // execution jumps to catch
            //     console.log("Our apologies, the data has errors, we'll try to request it one more time."); // will be shown
            //     console.log(err.name); // SyntaxError
            //     console.log(err.message); // Unexpected token b in JSOn at position 1
            // }

            // Above we use the "catch" block only to show the message, but we can do much more: send a new network request, suggest an alternative to the visitor, send information about the error to a logging facility, etc.
            // Everything is better than just dying code execution.

// V. Throwing our own errors
    // What if "json" is syntactically correct, but doesn't have a required "name" property?
        // let json = '{"name": "Ly"}';

        // try {
        //     let user = JSON.parse(json); // no errors
        //     console.log(user.age); // just no such property
        // } catch (err) {
        //     console.log("doesn't execute"); // will not be shown
        //     // code above just returns undefined, cause no such property
        // }

        // Here "JSON.parse" runs normally, but the absence of "name" is actually an error for us.
        // To unify error handling, we'll use the "throw" operator.
            // throw <error object>

        // Technically, we can use anything as an error object, but it's better to use objects, preferably with "name" and "message" properties.

        // JavaScript has many built-in constructors for standard error: "Error", "SyntaxError", "ReferenceError", "TypeError" and others:
            // let error = new Error(message);
        
        // For built-in errors, the "name" property is exactly the name of the constructor, and "message" is taken from the argument:
            // let error = new Error("Things happen o_0");

            // console.log(error.name); // Error
            // console.log(error.message); // Things happen o_0

            // Kind of error "JSON.parse" generates:
                // try {
                //     JSON.parse("{bad json}");
                // } catch (err) {
                //     console.log(err.name); // SyntaxError
                //     console.log(err.message); // Unexpected token b in JSON at position 1
                // }
            
            // In case below, the absence of "name" is an error, as users must have a "name", so let's throw it:
                // let json = '{"age": 30}';

                // try {
                //     let user = JSON.parse(json);
                    
                //     if (!user.name) {
                //         throw new SyntaxError("Incomplete data: no name");
                //     }

                //     console.log(user.name);
                // } catch (err) {
                //     console.log("JSON Error: ", err.message); // JSON Error: Incomplete data: no name
                // }

// VI. Rethrowing
    // To avoid problems that, for example, was caused by a programming error (variable is not defined) or something else, we can employ the "rethrowing" technique.
        // The example of such code:
            // let json = '{"age": 30}'; // incomplete data

            // try {
            //     user = JSON.parse(json); // forgot to put "let" before user
            // } catch (err) {
            //     console.log("JSON Error: " + err); // in NodeJS nothing happens
            //     // but in browser JS it'll throw expected result:
            //     // JSON Error: ReferenceError: user is not defined
            //     // and it's not JSON Error actually
            // }
    
    // The rule is simple: catch should only process errors that it knows and "rethrow" all others.
    // The "rethrowing" technique can be explained as:
        // Catch gets all errors.
        // In the "catch (err) {...}" block we analuze the error object "err".
        // If we don't know how to handle it, we do "throw err".

        // Usually, we can check the error type using "instanceof" operator:
            // try {
            //     user = { /*...*/ };
            // } catch (err) {
            //     if (err instanceof ReferenceError) {
            //         console.log("ReferenceError");
            //     }
            // }

        // We can also get the error class name from "err.name" property.
        // In the code below, we use rethrowing so that "catch" only handles "SyntaxError":
            // let json = '{ "age": 30 }'; // incomplete data

            // try {
            //     let user = JSON.parse(json);

            //     if(!user.name) {
            //         throw new SyntaxError("Incomplete data: no name");
            //     }

            //     blabla(); // unexpected error

            // } catch (err) {
            //     if (err instanceof SyntaxError) {
            //         console.log("JSON Error: " + err.message);
            //     } else {
            //         throw err; // rethrow
            //     }
            // }

            // The error throwing from inside "catch" block "falls out" of "try...catch" and can be either caught by an outer "try...catch" construct, or it kills the script.
            // So the "catch" block actually handles only errors that it knows how to deal with and "skips" all others.

                // function readData() {
                //     let json = '{ "age": 30 }';

                //     try {
                //         blabla(); // error
                //     } catch (err) {
                //         if (!(err instanceof SyntaxError)) {
                //             throw err; // rethrow (don't know how to deal with it)
                //         }
                //     }
                // }

                // try {
                //     readData();
                // } catch (err) {
                //     console.log("External catch got: " + err); // External catch got: ReferenceError: blabla is not defined
                //     // Error is catched!
                // }

                // Here "readData" only knows how to handle "SyntaxError", while outer "try...catch" knows how to handle everything.

// VII. try...catch...finally
    // The "try...catch" construct may have one more code clause: "finally"
    // If it exists, it runs in all cases:
        // after "try", if there were no errors
        // after "catch", if there were no errors

    // The extended syntax looks like this:
        // try {
        //     ... try to execute the code ...
        // } catch (err) {
        //     ...handle errors ...
        // } finally {
        //     ... execute always ... 
        // }
    
    // Try running this code:
        // try {
        //     console.log("try"); // shown
        //     BAD_CODE();
        // } catch (err) {
        //     console.log("catch"); // shown
        // } finally {
        //     console.log("finally"); // shown
        // }

    // The "finally" clause works for any exit from "try...catch", inclusing an explicit "return".
        // function func() {
        //     try {
        //         return 1; // shown
        //     } catch (err) {

        //     } finally {
        //         console.log("finally"); // shown
        //     }
        // }
        
        // console.log(func());

    // The "try...finally" construct is also usefull. We apply it when we don't want to handle errors here, but want to be sure that processes that we started are finalized.

// VIII. Global catch
// ! Environment-specific
    // Node.js has "process.on("uncaughtException")" or in browser we can assign a function to the special "windows.onerror" property, that will run in case of an uncaught error.
    
// Summary
    // The "try...catch" construct allows to handle runtime errors. It literally allows to "try" running the code and "catch" errors that may occur in it.

    // There may be no "catch" section or no "finally", so shorter constructs "try...catch" and "try...finally" are also valid.

    /** Error objects have following properties:
     * message - the human-readable error message
     * name - the string with error name
     * stack - the stack at the moment of error creation
     */

    // If an error object is not needed, we can omit it by using "catch {}" instead of "catch (err) {}".

    // We also generate our own error using the "throw" operator. Technically, the argument of "throw" can be anything, but usually it's an error object inheriting from the buil-in "Error" class.

    // Rethrowing is avery important pattern of error handling: a "catch" block usually expects and knows how to handle the particular error type, so it should rethrow errors it doesn't know.

    // Even if we don't have "try...catch", most environments allows us to setup a "global" error handler to catch errors that "fall out". 

// Tasks(1)
    // Finally or just the code?
        // 1.
            // function f() {
            //     try {
            //         console.log("start"); // shown
            //         return "result";
            //     } catch (err) {

            //     } finally {
            //         console.log("cleanup!"); // shown
            //     }
            // }

            // f();

        // 2.
            // function ff() {
            //     try {
            //         console.log("start"); // shown
            //         throw new Error("an error");
            //     } catch (err) {
            //         if ("can't handle the error") {
            //             throw err; // Error: an error
            //         }
            //     } finally {
            //         console.log("cleanup!"); // shown
            //     }
            // }

            // ff();