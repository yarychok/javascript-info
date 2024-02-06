// I. General info    
    // Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler.
    // For instance, in the code below the URL to "fetch" doesn't exist and ".catch" handles the error:
        // fetch('https://no-such-server/blabla')
        // .then(response => response.json())
        // .catch(err => console.log(err))
        // TypeError: fetch failed

    // We can ".catch" errors in the end of chain, after one or maybe several ".then".
    // Usually, such ".catch" doesn't trigger at all, but if any of the promises rehects(network problem or invalid json or whatever), then it would catch it.

// II. Implicit try...catch
    // The code of a promise executor and promise handlers has an "invisible try...catch" around it, so if an exception happens, it gets caught and treated as a rejection:
        // new Promise((resolve, reject) => {
        //     throw new Error("Whoops!");
        // }).catch(console.log); // Error: Whoops!

        // Works exactly the same as:
            // new Promise((resolve, reject) => {
            //     reject(new Error("Whoops!"));
            // }).catch(console.log); // Error: Whoops!
        
        // The "invisible try...catch" arount the executor automatically catches the error and turns it into rejected promise.

    // This happens not only in the executor, but in its handlers as well. If we "throw" inside a ".then" handler, that means a rejected promise, so the control jumps to the nearest error handler:
        // new Promise((resolve, reject) => {
        //     resolve("ok");
        // }).then((result) => {
        //     throw new Error("Whoops!");
        // }).catch(console.log); // Error: Whoops!

        // This happens for all error, not just caused by the "throw" statement:
            // new Promise((resolve, reject) => {
            //     resolve("ok");
            // }).then((result) => {
            //     blabla(); // no such function
            // }).catch(console.log); // ReferenceError: blabla is not defined
    
    // So, the final ".catch" not only catched explicit rejections, but also accidental errors in the handlers above.

// III. Rethrowing
    // To sum up, ".catch" at the end of the chain is similar to "try...catch". We may have as many ".then" handlers as we want, and then use a single ".catch" at the end to handle errors in all of them.

    // In a redular "try...catch" we can analyze the error and maybe rethrow it, if it can't be handled. The same thing is possible for promises.

    // If we "throw" inside ".catch", then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful ".then" handler.

    // Here we successfully ".catch" the error:
    // The execution: catch -> then
        // new Promise((resolve, reject) => {
        //     throw new Error("Whoops!");
        // }).catch(function(error) {
        //     console.log("The error is handled, continue normally!"); // is shown
        // }).then(() => console.log("Next successful handler runs!")); // is shown

        // Here the ".catch" block block finishes normally. So the next successful ".then" handler is called.

    // And here is other situation with ".catch". The handler catches the error and just can't handle it, so it throws it again:
        // new Promise((resolve, reject) => {
        //     throw new Error("Whoops!");
        // }).catch(function(error) { // (*)
        //     if (error instanceof URIError) {
        //         // handle it
        //     } else {
        //         console.log("Can't handle such error"); // is shown

        //         throw error; // throwing this or another error jumps to the next catch
        //     }
        // }).then(function() {
        //     // this doesn't run
        // }).catch(error => { // (**)
        //     console.log(`The unknown error has occured; ${error}`); // is shown
        // });

        // The execution jumps from the first catch* to the next one** down the chain.

// VI. Unhandled rejections
    // What happens when a regular error occurs and is not caught by "try...catch"? The script dies with e message in the console. A similar thing happens with unhandled promise rejections.
    // The JavaScript engine tracks such rejections and generates a global error in that case.

    // If an error occurs, and there's no ".catch", the "unhandledrejection" handler triggers, and gets object with the information about the error, so we can do something.

    // Usually such errors are unrecoverable, so our best way out is to inform the user about the problem and probably report the incident to the server.

    // In non-browser environments like Node.js there are other ways to track unhandled errors.

// Summary
    /**
     * ".catch" handles errors in promises of all kinds: be it a "reject()" call, or an error thrown in a handler.
     * ".then" also catches errors in the same manner, if given the second argument (which is the error handler).
     * We should place ".catch" exactly where we want to handle errors and know how to handle them. The handler should analyze errors (custom error classes help) and rethrow unknown ones (maybe they are programming mistakes).
     * It's ok not to use ".catch" at all, if there's no way to recover from an error.
     * In any case we should have the "unhandledrejection" event handler to track unhandled errors and inform the user and server about them, so that our app never "just dies".
     */

// Tasks(1)
    // Error in setTimeout
        // new Promise(function(resolve, reject) {
        //     setTimeout(() => {
        //         throw new Error("Whoops!")
        //     }, 1000);
        // }).catch(console.log);

        // Will the ".catch" trigger?
            // No, it won't.
            // FYI: Error is shown in Node.js

            // There's an "implicit try...catch" around the function code, so all asynchronous errors are handled.

            // But here the error is generated not while the executor is running, but later, so the promise can't handle it.
