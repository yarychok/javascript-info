// I. Losing "this"
    // Once a method is passed somewhere separately from the object
    // "this" is lost:
        // let user = {
        //     firstName: "John",
        //     sayHi() {
        //         console.log(`Hello, ${this.firstName}`);
        //     }
        // }

        // setTimeout(user.sayHi, 1000); // Hello, undefined

// II. Solution 1: a wrapper
    // let user = {
    //     firstName: "Arthur",
    //     sayHi() {
    //         console.log(`Hi, ${this.firstName}`);
    //     },
    // }

    // setTimeout(() => user.sayHi(), 1000); // Hi, Arthur
// III. Solution 2: bind
    // For instance:

        // let user = {
        //     firstName: "Arthur",
        // };

        // function func() {
        //     console.log(this.firstName);
        // }

        // func.bind(user)(); // Arthur

        // let funcUser = func.bind(user);
        // funcUser(); // Arthur

    // Example with arguments:
    
        // let user = {
        //     firstName: "Arthur",
        // };

        // function func(phrase) {
        //     console.log(phrase + ', ' + this.firstName);
        // }

        // let funcUser = func.bind(user);
        // funcUser('Hi'); // Hi, Arthur

    // Example with an object method:

        // let user = {
        //     firstName: "Arthur",
        //     sayHi() {
        //         console.log(`Hi, ${this.firstName}`);
        //     }
        // }

        // let sayHi = user.sayHi.bind(user);

        // sayHi();
        
        // setTimeout(sayHi, 1000);

    // bindAll

        // for (let key in user) {
        //     if (typeof user[key] == 'function') {
        //         user[key] = user[key].bind(user);
        //     }
        // }

// VI. Partial functions
    // We can bind not only "this", but also arguments.
    // Full syntax of "bind":
        // let bound = func.bind(context, [arg1], [arg2], ...);

    // For instance:

        // function mul(a, b) {
        //     return a * b;
        // }

        // let double = mul.bind(null, 2);

        // console.log(double(3)); // 6

// V. Going partial without context
    // Unlike previous example, we can implement "partial" function
    // for binding only arguments (w/o "null" context):
        // function partial(func, ...argsBound) {
        //     // func: user.say, ...argsBound: new Date().getHours() + ':' + new Date().getMinutes()
        //     return function(...args) {
        //         // ...args: "Hi"
        //         return func.call(this, ...argsBound, ...args);
        //         // this: user
        //     }
        // }

        // let user = {
        //     firstName: "Arthur",
        //     say(time, phrase) {
        //         console.log(`[${time}] ${this.firstName}: ${phrase}`);
        //     }
        // };

        // user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

        // user.sayNow('Hi'); // [7:44] Arthur: Hi

// Summary:
    // Method "func.bind(context, ...args)" returns a "bound variant"
    // of function "func" that fixes the context "this" and first arguments if given.

    // Usually we apply "bind" to fix "this" for an object methods, so that we can pass it somewhere.
    // For example. to "setTimeout".

    // When we fix some arguments of an existing function, the resulting (less universal) function
    // is called partially applied or partial.

    // Partials are convenient when we don't want to repeat the same argument over and over again.
    // Like if we have a "send(from, to)" function,
    // and "from" should always be the same for our task, we can get a partial and go on with it.

// Tasks (5):
    // T01: Bound function as a method:
        // function f() {
        //     console.log(this);
        // }

        // let user = {
        //     g: f.bind(null),
        // }

        // user.g(); // In Node.js it returns an object reference: <ref*1> Object [global] { ... }
                // But in browser: null

    // T02: Second bind:
        // function f() {
        //     console.log(this.name);
        // }

        // f = f.bind( {name: "Arthur"} ).bind( {name: "Liubomyr" });

        // f(); // "Arthur"
        // Bound function object returned by "f.bind(...)" remembers the context
        // (and arguments if provided) only at creation time and cannot be re-bound.

    // T03: Function property after bind:
        // function sayHi() {
        //     console.log(this.name);
        // }

        // sayHi.test = 5;

        // let bound = sayHi.bind({
        //     name: "Arthur",
        // });

        // console.log(bound.test); // undefined
        
    // T04: Fix a function that losed "this":
        // askPassword(user.loginOk.bind(user), user.loginFailed.bind(user));
        // or
        // askPassword(() => user.loginOk(), () => user.loginFail());

    // T05: Partial application for login:
        // askPassword(user.login.bind(user, true), user.login.bind(user, false));
        // or
        // askPassword(() => user.login(true), () => user.login(false));