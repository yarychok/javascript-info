// I. Async functions
    // The word "async" before a function means: a function always returns a promise. Other values are wrapped in a resolved promise automatically:
        // async function f() {
        //     return 1;
        // }

        // f().then(console.log); // 1

        // We could return a promise, which would be the same:
            // async function f() {
            //     return Promise.resolve(1);
            // }

            // f().then(console.log); // 1
        
    // So, "async" ensures that the function returns a promise, and wraps non-promises in it.

// II. Await
    // The keyword "await" can be used only inside async funciton; makes JavaScript wait until promise settles and returns its result:
        // async function f() {

        //     let promise = new Promise((resolve, reject) => {
        //         setTimeout(() => resolve("Done"), 1000)
        //     });

        //     let result = await promise; // execution stopped here until the promise resolves

        //     console.log(result);
        // }

        // f(); // Done

    // Note! "await" literally suspends the function execution until the promise settles, and then resumes it with the promise result.
    // That doesn't cost any CPU resources, because we can do other jobs in the meantime: execute other scripts, handle events, etc.

    // So, it's just more elegant syntax of getting the promise result than "promise.then", which is easier to read and write.

    // Let's rewrite one of our previous function using async/await:
        // async function showAvatar() {
            
        //     let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
        //     let user = await response.json();

        //     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
        //     let githubUser = await githubResponse.json();

        //     let img = document.createElement('img');
        //     img.src = githubUser.avatar_url;
        //     img.className = "promise-avatar-example";
        //     document.body.append(img);

        //     return githubUser;
        // };

        // showAvatar();

        // Much more easier to read and write :)

    // Modern browsers allow top-level await in modules:
        // let response = await fetch('/article/promise-chaining/user.json');
        // let user = await response.json();

        // console.log(user);
        
        // For some reason doesn't work for me in Google Chrome

        // And in older browser it must be supported with wrapping it into an anonymous async function:
            // (async () => {let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
            // let user = await response.json();

            // console.log(user);
            // })();

            // It works for me: {name: "iliakan", isAdmin: true}

    // "Thenables" are accepted by await:
        // class Thenable {

        //     constructor(num) {
        //         this.num = num;
        //     }

        //     then(resolve, reject) {
        //         console.log(resolve);
                
        //         setTimeout(() => resolve(this.num * 2), 1000);
        //     }
        // }

        // async function f() {
        //     let result = await new Thenable(2);
        //     console.log(result);
        // }

        // f();

        // [Function (anonymous)]
        // 4

// III. Error handling

    // If a promise resolves normally, then "await promise" returns the result; but in case of a rejection, it throws the error, just as if there were a "throw" statement at that line:
        // So, this:
            // async function f() {
            //     await Promise.reject(new Error("Whoops 1"));
            // }

            // f(); // Error: Whoops 1 at <stack>

        // ... is the same as:    
            // async function f() {
            //     throw new Error("Whoops 2");
            // }

            // f(); // Error: Whoops 2 at <stack>

    // Sometimes, the promise may take some time before it rejects; in such case there will be a delay before "await" throws an error:
        // async function f() {
        //     try {
        //         let response = await fetch('http://no-such-url');
        //     } catch (err) {
        //         console.log(err); // TypeError: fetch failed
        //     }
        // }

        // f();

// Tasks(3)
    // Rewrite using async/await
        // async function loadJson(url) {

        //     let response = await fetch(url);

        //     if (response.status == 200) {
        //         let json = await response.json();

        //         return json;
        //     }
            
        //     throw new Error(response.status);
        // };

        // loadJson('https://javascript.info/no-such-user.json');
        // loadJson('https://javascript.info/article/promise-chaining/user.json');

    // Rewrite "rethrow" with async/await
        // class HttpError extends Error {
        //     constructor(response) {
        //         super(`${response.status} for ${response.url}`);
        //         this.name = 'HttpError';
        //         this.response = response;
        //     }
        // }

        // async function loadJson(url) {
        //     let response = await fetch(url);

        //     if (response.status == 200) {
        //         let json = await response.json();
        //         return json;
        //     }

        //     throw new HttpError(response);
        // }

        // async function demoGithubUser() {
        //     let user;
        //     let name = "iliakan";

        //     try {
        //         user = await loadJson(`https://api.github.com/users/${name}`);
        //     } catch(err) {
        //         if (err instanceof HttpError && err.response.status == 404) {
        //             console.log("No such user");
        //         } else {
        //             throw err;
        //         }
        //     }

        //     console.log(`Full name: ${user.name}`);
        //     return user;
        // }

        // demoGithubUser();

    // Call async from non-async
        // async function wait() {
        //     await new Promise(resolve => setTimeout(resolve, 1000));

        //     return 10;
        // }

        // function f() {
        //     wait().then(result => console.log(result));
        // }

        // f(); // 10