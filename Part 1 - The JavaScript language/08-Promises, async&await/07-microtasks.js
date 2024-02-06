// I. Microtasks
    // Promise handlers ".then/.catch/.finally" are always asyncrhonous.
    // The code on the lines below handlers will anyway execute before these handlers:
        // let promise = Promise.resolve();

        // promise.then(() => console.log("Promise done!")); // is shown second

        // console.log("Code finished!"); // is shown first

// II. Microtasks queue
    // ES specifies an internal queue "PromiseJobs" for asynchonous tasks proper management, also referred as "microtask queue":
        // The queue is first-in-first-out: tasks enqueued first are run first.
        // Execution of a task initiated only when nothing else is running.
    
    // In other words, when a promise is ready, its ".then/catch/finally" handlers are put into the queue; they are not executed yet.
    // And when JavaScript engine free from the current code, it takes a task from the queue and executes it.

    // That's why our code above shows "Code finished" first.
    
    // And what if the order matters for us: we can put it into the queue with ".then":
        // Promise.resolve()
        //     .then(() => console.log("promise done"))
        //     .then(() => console.log("code finished"));

// III. Unhandled rejection
    // An "unhandled rejection" occurs when a promise error is not handled at the end of the microtask queue.

    // Normally, if we expect an error, we add ".catch" to the promise chain to handle it:
        // let promise = Promise.reject(new Error("Promise failed"));
        // promise.catch(err => console.log("Caught")); // Caught

        // window.addEventListener('unhandledrejection', event => console.log(event.reason)); // doesn't run, because error is handled
    
        // But if we forget to add ".catch", then after the microtask queue is empty, the engine triggers the event:
            // let promise = Promise.reject(new Error("Promise failed"));

            // window.addEventListener('unhandledrejection', event => console.log(event.reason));
            // Error: Promise failed

            // And what if we handle the error later:
                // let promise = Promise.reject(new Error("Promise failed"));
                // setTimeout(() => promise.catch(err => console.log("caught")), 1000);

                // window.addEventListener('unhandledrejection', event => console.log(event.reason));

                // Firstly we have error, than we "caught" an error.
// Summary
    // Promise handling is always asynchonous, as all promise actions through the internal "promise jobs" queue, also called "microtask queue".

    // So "then/catch/finally" handlers are always called after the current code is finished.

    // If we need to guarantee that a piece of code is executed after handlers, we can add it into a chained "then" call.

    // In most JavaScript engines, incluiding browsers and Node.js, the concept of microtasks is closely tied with the "event loop" and "macrotasks". As these have no direct relation to promises.