// I. General info
    // Sequence of asynchronous tasks one after another:
        // new Promise(function(resolve, reject) {
        //     setTimeout(() => resolve(1), 1000);
        // }).then(function(result) {
        //     console.log(result); // 1
        //     return result * 2;
        // }).then(function(result) {
        //     console.log(result); // 2
        //     return result * 2;
        // }).then(function(result) { 
        //     console.log(result); // 3
        //     return result * 2;
        // });

        // The whole thing works, because every call to a .then returns a new promise, so that we can call the next .then on it.
        // When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

        // ! A classic newbie error: technically we can also add many .then to a single promise, but this is not chaining:
            // let promise = new Promise(function(resolve, reject) {
            //     setTimeout(() => resolve(1), 1000);
            // });

            // promise.then(result => { 
            //     console.log(result); // 1
            //     return result * 2;
            // });

            // promise.then(result => {
            //     console.log(result); // 1
            //     return result * 2;
            // });

            // promise.then(result => {
            //     console.log(result); // 1
            //     return result * 2;
            // });

            // What we did here is just several handlers to one promise. They don't pass the result to each other, instead they process it independently.

// II. Returning promises
    // A handler, used in ".then(handler)" may create and return a promise.
    // In that case further handlers wait unit it settles, and then get its result:
        // new Promise(function(resolve, reject) {
        //     setTimeout(() => resolve(1), 1000);
        // }).then(function(result) {
        //     console.log(result); // 1

        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => resolve(result * 2), 1000);
        //     });
        // }).then(function(result) {
        //     console.log(result); // 2

        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => resolve(result * 2), 1000);
        //     });
        // }).then(function(result) {
        //     console.log(result); // 4
        // });

        // Returning promises allows us to build chains of asynchronous actions.

// III. Example: loadScript
    // Let's use feature above with the promisified "loadScript":
        // function loadScript(src) {
        //     let script = document.createElement('script');
        //     script.src = src;

        //     script.onload = () => callback(null, script);
        //     script.onerror = () => callback(new Error(`Script load error for ${src}`));

        //     document.head.append(script);
        // }

        // loadScript("/article/promise-chaining/one.js")
        //     .then(function(script) {
        //         return loadScript("/article/promise-chaining/two.js");
        //     })
        //     .then(function(script) {
        //         return loadScript("/article/promise-chaining/three.js");
        //     })
        //     .then(function(script) {
        //         one();
        //         two();
        //         three();
        //     });

        //     // also a bit shorter with arrow functions:
        //         loadScript("/article/promise-chaining/one.js")
        //             .then(script => loadScript("/article/promise-chaining/two.js"))
        //             .then(script => loadScript("/article/promise-chaining/three.js"))
        //             .then(script => {
        //                 one();
        //                 two();
        //                 three();
        //             });

        //     // and also that will work:
                       // but it "grows to the right", so we have the same problem as with callbacks
        //             loadScript("/article/promise-chaining/one.js").then(script1 => {
        //                 loadScript("/article/promise-chaining/two.js").then(script2 => {
        //                     loadScript("/article/promise-chaining/three.js").then(script3 => {
        //                         one();
        //                         two();
        //                         three();
        //                     })
        //                 })
        //             })

    // Thenables: to be precise, a handler may return not exactly a promise, but a so-called "thenable" object - an arbitrary object that has a method ".then". It will be treated the same way as a promise.

// VI. Bigger example: fetch
    // In frontend programming, promises are often used for network requests.
    // So an extended example of that: "fetch" method to load the information about the user from the remote server. It has a lot of optional parameters, but the basic syntax is:
        // let promise = fetch(url);

    // This makes a network request to the url and returns a promise. The promise resolves with a response object when the remote server responds with headers, but before the full response is downloaded.

    // To read the full response, we should call the method "response.text()": it returns a promise that resolves when the full text is downloaded from the remote server, with that text as a result:
        // fetch('https://javascript.info/article/promise-chaining/user.json')
        //     .then(function(response) {
        //         return response.text();
        //     })
        //     .then(function(text) {
        //         console.log(text);
        //     }); // {"name": "iliakan", "isAdmin": true}
        
        // or also:
            // fetch('https://javascript.info/article/promise-chaining/user.json')
            //     .then(response => response.json())
            //     .then(user => console.log(user.name)); // iliakan
        
        // The response object returned from fetch also includes the method "response.json()" that reads the remote data and parses it as JSON:
            // fetch('https://javascript.info/article/promise-chaining/user.json')
            //     .then(response => response.json())
            //     .then(user => console.log(user.name)); // iliakan

    // We can make another request to GitHub, load the user profile and show the avatar:
        // fetch('https://javascript.info/article/promise-chaining/user.json')
        //     .then(response => response.json())
        //     .then(user => fetch(`https://api.github.com/users/${user.name}`))
        //     .then(response => response.json())
        //     .then(githubUser => {
        //         let img = document.createElement('img');
        //         img.src = githubUser.avatar_url;
        //         img.className = "promise-avatar-example";
        //         document.body.append(img);

        //         setTimeout(() => img.remove(), 10000);
        //     });
