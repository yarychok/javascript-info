// I. Event loop

    // Browser JavaScript execution flow, as well as in Node.js, is based on an event loop.

    // The event loop concept: there's an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

    /** The general algorithm of the engine:
     * While there are tasks: execute them, starting with the oldest task
     * Sleep until a task appears, then go to 1
     */

        /** Example of tasks:
         * When an external script <script src="..."> loads, the tasks it to execute it.
         * When a user moves their mouse, the task is to dispatch "mousemove" event and execute handlers.
         * When the time is due for a scheduled "setTimeout", the task is to run its callback.
         */

        // Tasks are set - the engine handles them - then waits for more tasks (while sleeping and consuming close to zero CPU).

        // It may happen that a task comes while the engine is busy, then it's unqueued.

    // The tasks form a queue, so-called "macrotask queue" (v8 term).

        // For instance, while the engine is busy executing a script, user may move their mouse causing "mousemove", and "setTimeout" may be due and so on, these tasks form a queue.

        // Task from the queue are processed on "first come - first served" basis. When the engine browser is done with the script, it handles mouse move event, then "setTimeout" handler, and so on.

    /** Two more details:
     * Rendering never gappens while the engine executes a task.
     * If a task takes too long, the browser can't do other tasks, such as processing user events. So after a time, it raises an alert like "Page Unresponsive", suggesting killing the task with the whole page.
     */

// II. Use-case 1: splitting CPU-hungry tasks

    // For example, syntax-highlighting is quite CPU-heavy: it performs analysis, creates many colored elements, adds them to the document - for a large amount of text that takes a lot of time.

    // So while the engine is busy with code highlighting, it can't do other DOM-related stuff, process user events, etc - it may even cause the browser to "hiccup" or even "hang", which is unacceptable.

        // It can be avoided by splitting the big task into pieces - highlight first 100 lines, then schedule "setTimeout" (with zero-delay) for the next 100 lines, and so on.

// III. Use-case 2: progress indication

    // Another benegit of splitting heavy tasks for browser scripts is that we can show progress indication.

// VI. Use-case 3: doing something after the event

    // In an event handler we may device to postpone some actions until the event bubbled up and was handled on all levels. We can do that by wrapping the code in zero delay "setTimeout".

// V. Macrotasks and Microtasks

    // Along with macrotasks, there are microtasks: they come solely from our code, created by promises (an execution of ".then/catch.finally" handler). Microtasks are used "under the cover" of "await" as well, as it's another form of promise handling.

        // There's also a special function "queueMicrotask(func)" that queues "func" for execution in the microtask queue.

    // Immediately after every macrotask, the engine xecutes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else.


    /** To sum up event loop:
     * Dequeue and run the oldest task from the macrotask queue (eg, script)
     * Execute all microtasks:
        * While the microtask queue is not empty
            * Dequeue and run the oldest microtask
     * Render changes if any
     * If the macrotask queue is empty, wait till a macrotask appears
     * Go to the start    
     */

    const imagesList = {
        'a': [1, 2, 3, 4, 5],
        'b': [1, 2, 3],
        'c': [1, 2, 3, 4]
    }

    const projects = [
        {
            id: 'a',
            images: imagesList.a
        },
        {
            id: 'b',
            images: imagesList.b,
        },
        {
            id: 'c',
            images: imagesList.c,
        }
    ]
