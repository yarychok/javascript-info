// I. Promisification
    // It's the conversion of a function that accepts a callback into a function that returns a promise.

    // Such transformations are often required for callback-based functions and libraries. Promises are more convenient, so it makes sense to promisify them.
    // For instance:
        // function loadScript(src, callback) {
        //     let script = document.createElement('script');
        //     script.src = src;

        //     script.onload = () => callback(null, script);
        //     script.onerror = () => callback(
        //         new Error(`Script load error for ${src}`));
            
        //     document.head.append(script);
        // }

        // Function loads a script with the given "src", and then calls "callback(err)" in case of an error, or "callback(null, script)" on case of successful loading.

        // We'll make a function with only "src" (no callback) and get a promise in return, that resolves with "script" when the load is successful, and rejects with the error otherwise.
        // So let's promisify it:
            // let loadScriptPromise = function(src) {
            //     return new Promise((resolve, reject) => {
            //         loadScript(src, (err, script) => {
            //             if (err) reject(err);
            //             else resolve(script);
            //         });
            //     });
            // };

            // Usage: loadScriptPromise('path/script.js').then(...)

            // So our new function is a wrapper around the original "loadScript" function. It calls it providing its own callback that translates to promise "resolve/reject".

    // In practice we may need to promisify more than one function, so it makes sense to use a helper:
        function promisify(f) {

            return function(...args) {

                return new Promise((resolve, reject) => {
                    function callback(err, result) {
                        if (err) reject(err);
                        else resolve(result);
                    }

                    args.push(callback);

                    f.call(this, ...args);
                });
            }
        }

        // Usage: 
        // let loadScriptPromise = promisify(loadScript);
        // loadScriptPromise(...).then(...);

    // So promisification is a great approach, especially when you use "async/await", but not a total replacement for callbacks.
    // A promise may have only one result, but a callback technically be called many times, so promisification is only meant for function that call the callback once; further calls will be ignored.