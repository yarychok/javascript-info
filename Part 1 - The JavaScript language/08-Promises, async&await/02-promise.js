// I. General info
    // The constructor syntax for a promise object:
        // let promise = new Promise(function(resolve, reject) {
        //     // executor (the producing code)
        // });

        // When new Promise is created, the executor function runs automatically.  It contains the producing code which should eventually produce the result.
        // When the executor obtains the result, it should call one of these callbacks:
            /**
             * resolve(value) - if the job is finished successfully, with result "value".
             * reject(error) - if an error has occurred, "error" is the error object.
             */
        
        // So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls "resolve" if it was successful or "reject" if there was an error.

        // The promise object returned by the "new Promise" constructor has these internal properties:
            /**
             * "state" - initially "pending", then changes to either "fulfilled" when "resolve" is called or "rejected" when "reject" is called.
             * "result" - initially "undefined", then changes to "value" when "resolve(value)" is called or "error" when "reject(error)" is called.
             */

        // A promise that is either resolved or rejected is called "settled", as opposed to an initially "pending" promise.

        // There can be only a single result or an error.
        // The executor should call only one "resolve" or one "reject". Any state changes is final. All further calls of "resolve" and "reject" are ignored.

        // In case something goes wrong, the executor should call "reject". That can be done with any type of argument, but it's recommended to use "Error" objects.

        // In practice, an executor usually does something asynchronously and calls resolve/reject after some time. But we can also call resolve/reject immediately.
        // For instance, this might happen when we start to do a job but then see that everything has already been completed and cached. And that's fine, cause we immediately have a resolved promise.

        // The properies "state" and "result" are internal. We can't directly access them, but we can use methods .then/.catch/.finally for that.

// II. Consumers: then, catch
    // A Promise object serves as a link between the executor ("producing code") and the consuming functions, which will receive the result or error. Consuming functions can be registered using methods ".then" and ".catch".

    // The most important and fundamental one is ".then":
        // Syntax:
            // promise.then(
            //     function(result) { /* handle a successful result */ },
            //     function(error) { /* handle an error */ },
            // );

        // For instance:
            // let resolvedPromise = new Promise(function(resolve, reject) {
            //     setTimeout(() => resolve("Done!"), 1000);
            // });

            // resolvedPromise.then(
            //     result => console.log(result),
            //     error => console.log(error),
            // ); // Done!


            // let rejectedPromise = new Promise(function(resolve, reject) {
            //     setTimeout(() => reject(new Error("Whoops!")), 1000);
            // })

            // rejectedPromise.then(
            //     result => console.log(result),
            //     error => console.log(error),
            // ); // Error: Whoops! <stack>


    // If we're interested only in errors, then we can use "null" as the first argument: ".then(null, errorHandlingFunction)". Or we can use ".catch(errorHandlingFunction)", which is the same:
        // let promise = new Promise(function(resolve, reject) {
        //     setTimeout(() => reject(new Error("Whoops!")), 1000);
        // });

        // promise.then(null, console.log); // Error: Whoops! <stack>

        // // ... and with ".catch", it's just a shorthand for ".then(null, f)":
        //     promise.catch(console.log); // Error: Whoops! <stack>

        // // or also like this:
        //     promise.then(console.log); // Error: Whoops! <stack>
        //     // but the same we can do with resolve

// III. Cleanup: finally
    // Just like there's a "finally" clause in a regular "try {...} catch {...}", there's a "finally" in promises.

    // The call ".finally(f)" is similar to ".then(f, f)" in the sense that "f" runs always, when the promise is settled: be it resolve or reject.

    // The idea of "finally" is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

    // E.g. stopping loading indicator:
        // new Promise((resolve, reject) => {
        //     do something that takes time, and then call resolve or reject
        // })
        //     runs when the promise is settled, doesn't matter successfully or not
        //     .finally(() => stop loading indicator)
        //     so the loading indicator is always stopped before we go on
        //     .then(result => show result, err => show error)

    // But there are important differences between finaly(f) and then(f, f):
        /**
         * A "finally" argument has no arguments, so we don't know wether the promise is successful or not. That's okay, as our task is usually to perform "general" finalizing procedures.
         * A "finally" handler "passes through" the result or error to the next suitable handler.
         */

        // For instance:
            // new Promise((resolve, reject) => {
            //     setTimeout(() => resolve("value"), 3000);
            // })
            //     .finally(() => console.log("Promise ready!"))
            //     .then(result => console.log(result));

        // We can even do something like this:
            // new Promise((resolve, reject) => {
            //     setTimeout(() => reject(new Error("Error!")), 3000);
            // })
            //     .finally(() => console.log("Promise ready!"))
            //     .catch(err => console.log(err));

            // Or also (FYI: code below shown faster then above):
                // new Promise((resolve, reject) => {
                //     throw new Error("Whoops!");
                // })
                //     .finally(() => console.log("Promise ready!"))
                //     .catch(err => console.log(err))

// VI. Example: loadScript
    // The code from previous chapter using Promises:
        // function loadScript(src) {
        //     return new Promise(function(resolve, reject) {
        //         let script = document.createElement('script');
        //         script.src = src;

        //         script.onload = () => resolve(script);
        //         script.onerror = () => reject(new Error(`Script load error for ${src}`));

        //         document.head.append(script);
        //     });
        // }

        // Usage:
            // let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

            // promise.then(
            //     script => console.log(`${script.src} is loaded!`),
            //     error => console.log(`Error: ${error.message}`)
            // );

            // promise.then(script => console.log('Another handler...'));

    // So we can see a few benefits over the callback-based pattern:
        /**
         * Promises allow us to do things in the natural order. First, we run "loadScript(src)", and ".then" we write what to do with the result.
         * We can call ".then" on a Promise as many times as we want.
         */

        /**
         * With callbacks we must have a "callback" function at our disposal when calling "loadScript(script, callback)". In other words, we must know what to do with the result before "loadScript" is called.
         * There can be only one callback.
         */

// Tasks(2)
    // Re-resolve a promise?
        // let promise = new Promise(function(resolve, reject) {
        //     resolve(1);

        //     setTimeout(() => resolve(2), 1000);
        // });

        // promise.then(console.log); // 1
        // The second call to "resolve" is ignored, because onle the first call of reject/resolve is taken into account. Futher calls are ignored.

    // Delay with a promise
        // function delay(ms) {
        //     return new Promise(function(resolve, reject) {
        //         setTimeout(() => resolve(), ms);
        //         setTimeout(() => reject(), ms);
        //     });
        // }

        // delay(3000).then(() => console.log('Please work')); // Please work

