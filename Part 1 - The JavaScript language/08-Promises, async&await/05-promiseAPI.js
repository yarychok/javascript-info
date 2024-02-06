// I. Promise.all
    // Usage: if we want many promises to execute in parallel and wait until all of them are ready.
    // Syntax:
        // let promise = Promise.all(iterable)

        // An iterable is usually an array of promises.

        // The newly returned promise resolves when all listed promises are resolved, and the array of their results becomes its result.

    // For instance:
        // Promise.all([
        //     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
        //     new Promise(resolve => setTimeout(() => resolve(2), 1000)),
        //     new Promise(resolve => setTimeout(() => resolve(3), 1000)),
        // ]).then(console.log); // [ 1, 2, 3 ]

        // The order of resulting array is the same as in its source promises, even though the first promise takes the longest time to resolve.

    // A common trick is to map an array of job data into an array of promises, and then wrap that into "Promise.all":
        // let urls = [
        //     'https://api.github.com/users/iliakan',
        //     'https://api.github.com/users/remy',
        //     'https://api.github.com/users/jeresig'          
        // ];

        // let requests = urls.map(url => fetch(url));

        // Promise.all(requests)
        //     .then(responses => responses.forEach(
        //         response => console.log(`${response.url}: ${response.status}`)
        //     ));

    // A bigger example with fetching user information for an array of GitHub users by their names:
        // let names = ['iliakan', 'remy', 'jeresig'];

        // let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

        // Promise.all(requests)
        //     .then(responses => {
        //         for(let response of responses) {
        //             console.log(`${response.url}: ${response.status}`);
        //         }

        //         return responses;
        //     })

        //     .then(responses => Promise.all(responses.map(r => r.json())))
        //     .then(users => users.forEach(user => console.log(user.name)));

        // If any of the promises is rejected, the promise returned by "Promise.all" immediately rejects with that error:
            // Promise.all([
            //     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
            //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
            //     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
            // ]).catch(console.log); // Error: Whoops!

            // Here the second promise rejects in two seconds, that leads to an immediate rejection of "Promise.all", so ".catch" executs: the rejection error becomes the outcome of the entire "Promise.all".

        // So, in case of an error, other promises are ignored.

        // "Promise.all(iterable)" allows non-promise "regular" values in iterable:
            // Promise.all([
            //     new Promise((resolve, reject) => {
            //         setTimeout(() => resolve(1), 1000)
            //     }),
            //     2,
            //     3
            // ]).then(console.log); // [ 1, 2, 3]

            // So it's passed to the resulting array "as is", and we are able to pass ready values to "Promise.all" where convenient.

// II. Promise.allSettled
    // "Promise.all" rejects as a whole if any promise rejects, so that's good for "all or nothing" cases, when we need all results successful to proceed:
        // Promise.all([
        //     fetch('/template.html'),
        //     fetch('/style.css'),
        //     fetch('/data.json'),
        // ]).then(render); // render method needs results of all fetches
    
    // "Promise.allSettled" just waits for all promises to settle, regardless of the result. The resulting array has:
        // {status:"fulfilled", value:result} for successfull responses
        // {status:"rejected", reason:error} for errors

    // For instance:
        // let urls = [
        //     'https://api.github.com/users/iliakan',
        //     'https://api.github.com/users/remy',
        //     'https://no-such-url' 
        // ];

        // Promise.allSettled(urls.map(url => fetch(url)))
        //     .then(results => {
        //         results.forEach((result, num) => {
        //             if (result.status == "fulfilled") {
        //                 console.log(`${urls[num]}: ${result.value.status}`);
        //             }
        //             if (result.status == "rejected") {
        //                 console.log(`${urls[num]}: ${result.reason}`);
        //             }
        //         });
        //     });

            // https://api.github.com/users/iliakan: 200
            // https://api.github.com/users/remy: 200
            // https://no-such-url: TypeError: fetch failed

    // If the browser doesn't support "Promise.allSettled", it's easy to polyfill:
        // if (!Promise.allSettled) {
        //     const rejectHandler = reason => ({status: 'rejected', reason});

        //     const resolveHandler = value => ({status: 'fulfilled', value});

        //     Promise.allSettled = function(promises) {
        //         const convertedPromises = promises.map(
        //             p => Promise.resolve(p).then(resolveHandler, rejectHandler)
        //         );

        //         return Promise.all(convertedPromises);
        //     }
        // }
    
// III. Promise.race
    // Similar to "Promise.all", but waits only for the first settled promise and gets its result or error:
        // Promise.race([
        //     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        //     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))  
        // ]).then(console.log); // 1 

        // The first promise here was fastest, so it became the result.
        // After the first settled promise, all further results/errors are ignored.

// VI. Promise.any
    // Similar to "Promise.race", but waits for the first fulfilled promise and gets its result.
    // If all of the given promises are rejected, then the returned promise is rejected with "AggregateError" - a special error object that stores all promise errors in its "errors" property.
    // For instance:
        // Promise.any([
        //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
        //     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
        //     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
        // ]).then(console.log); // 1

    // And example when all promises fail:
        // Promise.any([
        //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
        //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 1000)),
        // ]).catch(error => {
        //     console.log(error.constructor.name); // AggregateError
        //     console.log(error.errors[0]); // Error: Ouch!
        //     console.log(error.errors[1]); // Error: Error
        // });
    
// V. Promise.resolve/reject
    // FYI: "Promise.resolve" and "Promise.reject" are rarely needed in modern code, because "async/await" syntax makes the somewhat obsolete.

    // "Promise.resolve(value)" creates a resolved promise with the result "value".
    // The method is used for compatibility, when a function is expected to return a promise:
        // let cache = new Map();

        // function loadCached(url) {
        //     if (cache.has(url)) {
        //         return Promise.resolve(cache.get(url));
        //     }

        //     return fetch(url)
        //     .then(response => response.text())
        //     .then(text => {
        //         cache.set(url,text);
        //         return text;
        //     });
        // }

        /**
         * Function above fetches a URL and remembers (caches) its content.
         * For future calls with the same URL it immediately gets the previous content from cache.
         * But uses "Promise.resolve" to make a promise of it, so the returned value is always a promise.
         */

    // "Promise.reject(error)" creates a rejected promise with "error".
        // let promise = new Promise((resolve, reject) => reject(error));

        // Never used in practice.
