// I. General information
    // One of the real-world examples of asynchronous actions (it also may be already known "setTimeout"): loading scripts and modules:
        // function loadScript(src) {
        //     let script = document.createElement('script');
        //     script.src = src;
        //     document.head.append(script);
        // }

        // It inserts into the document a new, dynamically created, tag <script src="..."> with the given "src". The browser automatically starts automatically starts loading it and executes when complete.

        // Usage of function above will looks like this:
            // loadScript('/my/script.js');

        // The script is executed asynchronously, as it starts loading now, but runs later, when the function has already finished.
        
        // So, if there's any code below "loadScript()", to doesn't wait until the script loading finishes.

        // Let's say we need to use the new script as soon as it loads. It declares new functions, and we want to run them. But id we do that immediately after the "loadScript()" call, that wouldn't work:
            // loadScript('/my/script.js'); // script includes "newFunction() {}"

            // newFunction(); // no such function!

            // The browser didn't have time to load the script. As of now, the "loadScript()" function doesn't provide a way to track the load completion. But we'd like to know when it happens, to use new functions and variables from that script.
            
            // So lets add a "callback" function as a second argument to "loadScript()" that should execute when the script loads:
                // function loadScript(src, callback) {
                //     let script = document.createElement('script');
                //     script.src = src;

                //     script.onload = () => callback(script);

                //     document.head.append(script);
                // }

                // The "onload" event basically executes a function after the script is loaded and executed.

                // Now if we want to call new functions from the script, we should write that in the callback:
                    // loadScript('/my/script.js', function() {
                    //     // the callback runs after the script is loaded
                    //     newFunction(); // so now it works
                    // });

                // So the idea is: the second argument is usually anonymous function that runs when the action is completed.
                // Here's a runnable example with a real script:
                    // function loadScript(src, callback) {
                    //     let script = document.createElement('script');
                    //     script.src = src;
                    //     script.onload = () => callback(script);
                    //     document.head.append(script);
                    // }

                    // loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
                    //     console.log(`Cool, the script ${script.src} is loaded`);
                    //     console.log( _ ); // _ is a function declared in the loaded script
                    // });

                    // That's called a "callback-based" style of asynchronous programming. A function that does something asynchronously should provide a "callback" argument where we put the function to run after it's complete.

// II. Callback in callback
    // The narural solution for loading two scripts sequentially one-by-one would be to put the second function call inside the callback, like this:
        // loadScript('/my/script.js', function(script) {
        //     console.log(`Cool, the ${script.src} is loaded, let's load one more`);

        //     loadScript('/my/script.js', function(script) {
        //         console.log(`Cool, the second script is loaded`);
        //     })
        // });

        // After the outer function is complete, the callback initiates the inner one.

        // The same we can do with one more script, that's fine for few actions, but not good for many.
        // We'll see usage with many nested scripts with Promises.

// III. Handling errors
    // Our callback should be able to react on errors.
    // For example, here's improved version of "loadScript" that tracks loading errors:
        // function loadScript(src, callback) {
        //     let script = document.createElement('script');
        //     script.src = src;

        //     script.onload = () => callback(null, script);
        //     script.onerror = () => callback(new Error(`Script load error for ${src}`));

        //     document.head.append(script);
        // }

        // It calls "callback(null, script)" for successful load and "callback(error)" otherwise.

        // The usage:
            // loadScript('/my/script.js', function(error, script) {
            //     if (error) {
            //         // handle error
            //     } else {
            //         // script loaded successfully
            //     }
            // });

        // Example above called "error-first-callback" style, what is quite common:
            /**
             * The first argument of the callback is reserved for an error if it occurs. Then callback(err) is called.
             * The second argument are for the successful result. Then callback(null, result1, result2, ...) is called.
             */
            
