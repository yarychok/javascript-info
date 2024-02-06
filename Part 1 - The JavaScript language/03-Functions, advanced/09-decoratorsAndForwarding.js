// I. Transparent caching
    // function slow(x) {
    //     console.log(`Called with ${x}`);
    //     return x;
    // }

    // function cachingDecorator(func) {
    //     let cache = new Map();

    //     return function(x) {
    //         if(cache.has(x)) {
    //             return cache.get(x);
    //         }

    //         let result = func(x);

    //         cache.set(x, result);
    //         return result;
    //     };
    // }

    // slow = cachingDecorator(slow);

    // console.log(slow(1));
    // console.log("Again: " + slow(1));

    // console.log(slow(2));
    // console.log("Again: " + slow(2));

    // - the cachingDecorator is reusable. We can apply it to another function
    // - the caching logic is separate, it did not increase the complexity of slow itself
    // - we can combine multiple decorators if needed

// II. Using "func.call" for the context
    // Syntax:
        // func.call(context, arg1, arg2, ...);

        // Example:
        // function sayHi() {
        //     console.log(`Hi, ${this.name}`);
        // }

        // let user = { name: "Liubomyr" };

        // sayHi.call(user); // Hi, Liubomyr

        // Example with arguments usage
        // function say(phrase) {
        //     console.log(this.name + ': ' + phrase);
        // }

        // let user = { name: "Arthur" };

        // say.call(user, 'Hi'); // Arthur: Hi

    // Caching from the previous chapter, but also for objects usage (this)
        // let worker = {
        //     someMethod() {
        //         return 1;
        //     },
        //     slow(x) {
        //         console.log(`Called with ${x}`);
        //         return x * this.someMethod();
        //     }
        // };

        // function cachingDecorator(func) {
        //     let cache = new Map();

        //     return function(x) {
        //         if (cache.has(x)) {
        //             return cache.get(x);
        //         }

        //         let result = func.call(this, x);
                
        //         cache.set(x, result);

        //         return result;
        //     }
        // }

        // worker.slow = cachingDecorator(worker.slow);

        // console.log(worker.slow(2));
        // console.log(worker.slow(2));

// III. Going multi-argument
    // let worker = {
    //     slow(min, max) {
    //         console.log(`Called with: ${min}, ${max}`);
    //         return min + max;
    //     }
    // };

    // function cachingDecorator(func, hash) {
    //     let cache = new Map();

    //     return function() {
    //         let key = hash(arguments);

    //         if (cache.has(key)) {
    //             return cache.get(key);
    //         }

    //         let result = func.call(this, ...arguments);

    //         cache.set(key, result);
    //         return result;
    //     }
    // }

    // function hash(args) {
    //     return args[0] + ', ' + args[1];
    // }

    // worker.slow = cachingDecorator(worker.slow, hash);

    // console.log(worker.slow(3, 5));
    // console.log("Again: " + worker.slow(3, 5));

// VI. "func.apply"
    // Instead of using func.call(this, ...arguments) we can use func.apply(this, arguments):
        // func.apply(context, arguments);

// V. Borrowing a method
    // Implementing better hash function from the previous chapter:
        // function hash() {
        //     console.log([].join.call(arguments));
        // }

        // hash(1, 2, 3, 4); // 1, 2, 3, 4

// VI. Decorators and function properties
    // Decorator may count how many times a function was invoked and how much time it took,
    // and expose this information via wrapper properties.
    
// Summary:
    // Decorator is a wrapper around a function that alters its behavior.
    // The main job is still carried out by the function.

    // Decorators can be seen as "features" or "aspects" that can be added to a function.
    // We can add one or add many. And all this without changing it's code.

    // To implement cachingDecorator, we studied methods:
        // - func.call(context, arg1, arg2...) - calls func with given context and arguments.
        // - func.apply(context, args) - calls func passing context as this
        // and array-like args into a list of arguments.

    // The generic call forwarding is usually done with apply:
        // let wrapper = function() {
        //     return original.apply(this, arguments);
        // }
    
    // We also saw an example of method borrowing when we take a method from an object
    // and call it in the context of another object.
    // It's quite common to take array methods and apply them to arguments.
    // The alternative is to use rest parameters object that is a real array.

// Tasks (4):
    // T01: Spy decorator
        // function work(a, b) {
        //     return a + b;
        // }

        // function spy(func) {

        //     function wrapper(...args) {
        //         wrapper.calls.push(args);
        //         return func.apply(this, args);
        //     }

        //     wrapper.calls = [];

        //     return wrapper;
        // }

        // work = spy(work);

        // console.log(work(1, 2));
        // console.log(work(4, 5));

        // for (let args of work.calls) {
        //     console.log(args.join());
        // }

    // T02: Delaying decorator
        // function delay(func, ms) {

        //     return function() {
        //         setTimeout(() => func.apply(this, arguments), ms);
        //     }
        // }

        // let oneSecondDelay = delay(console.log, 1000);
        // oneSecondDelay('test');

    // T03: Debounce decorator
        // function debounce(func, ms) {
        //     let timeout;

        //     return function() {
        //         clearTimeout(timeout);
        //         timeout = setTimeout(() => func.apply(this, arguments), ms);
        //     }
        // }


    // T04: Throttle decorator 
        // function throttle(func, ms) {

        //     let isThrottled = false,
        //     savedArgs,
        //     savedThis;
        
        //     function wrapper() {
        
        //     if (isThrottled) { 
        //         savedArgs = arguments;
        //         savedThis = this;
        //         return;
        //     }
        //     isThrottled = true;
        
        //     func.apply(this, arguments); 
        
        //     setTimeout(function() {
        //         isThrottled = false; 
        //         if (savedArgs) {
        //         wrapper.apply(savedThis, savedArgs);
        //         savedArgs = savedThis = null;
        //         }
        //     }, ms);
        //     }
        
        //     return wrapper;
        // }
