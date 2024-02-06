    // Regular functions return only one, single value (or nothing).

    // Generators can return ("yield") multiple values, one after another, on-demand; so they work great with iterables, allowing to create data streams with ease.

// I. Generator functions

    // Special syntax construct for "generator function" looks like this:
        // function* generateSequence() {
        //     yield 1;
        //     yield 2;
        //     return 3;
        // }

        // let generator = generateSequence();

        // console.log(generator); // Object [Generator] {}

        // Generator functions behave differently from regular ones; when such function is called, it doesn't run its code.
        // Instead it returns a special "generator object", to manage the execution.

    // The main method of a generator is "next()"; when called, it runs the execution until the neares "yield <value>" statement (value can be ommited, then it's undefined), then the function execution pauses, and the yielded value is returned to the outer code.
    /** The result of "next()" is always an object with two properties: 
     * value: the yielded value.
     * done: true if the function code has finished, otherwise false
     */
        // function *generateSequence() {
        //     yield 1;
        //     yield 2;
        //     return 3;
        // }

        // let generator = generateSequence();

        // let one = generator.next();
        // console.log(JSON.stringify(one)); // {"value": 1, "done": false}

        // let two = generator.next();
        // console.log(JSON.stringify(two)); // {"value": 2, "done": false}

        // let three = generator.next();
        // console.log(JSON.stringify(three)); // {"value": 3, "done": true}

        // let four = generator.next();
        // console.log(JSON.stringify(four)); // {"done": true}

        // New calls to "generator.next()" don't make sense, cause they'll return the same object: {done: true}

    // Note! function* f() / function *f() are both correct syntax, but usually the first syntax is preferred; cause it descrives the kind of function, not the name, so it should stick with the function keyword.
    
// II. Generators are iterable 

    // Based on "next()" method we can say that generators are iterable:
        // function* generateSequence() {
        //     yield 1;
        //     yield 2;
        //     return 3;
        // }

        // let generator = generateSequence();

        // for(let value of generator) {
        //     console.log(value); // 1, then 2
        // }

        // Looks much better than calling ".next().value", but it doesn't show returned value.
        // That's because "for..of" iteration ignores the last value, when "done: true"; so, if we want all results to be shown, we must return them with "yield":
            // function* generateSequence() {
            //     yield 1;
            //     yield 2;
            //     yield 3;
            // }

            // let generator = generateSequence();

            // for(let value of generator) {
            //     console.log(value); // 1, then 2, then 3
            // }

    // As generators are iterable, we can call all related functionality.
    // For example, the spread syntax:
        // function* generateSequence() {
        //     yield 1;
        //     yield 2;
        //     yield 3;
        // }

        // let sequence = [0, ...generateSequence()];
        // console.log(sequence); // [0, 1, 2, 3]
        
// III. Using generators for iterables
        // Some time ago we created an iterable "range" object, that returns value from..to; let's rewrite it using generator, which will be more compact:
            // let range = {
            //     from: 1,
            //     to: 5,

            //     *[Symbol.iterator]() {
            //         for(let value = this.from; value <= this.to; value++) {
            //             yield value;
            //         }
            //     }
            // }

            // console.log([...range]); // [1, 2, 3, 4, 5]

            /** So that works because "range[Symbol.iterator]()" now returns a generator, and generator methods are exactly what "for..of" expects:
             * it has a ".next()" method
             * that returns values in the form {value: ..., done: true/false}
             */

// VI. Generator composition
    // Generator composition is a special feature of generators that allows to transparently "embed" generators in each other:
        // function* generateSequence(start, end) {
        //     for (let i = start; i <= end; i++) yield i;
        // }

        // function* generatePasswordCodes() {

        //     yield* generateSequence(48, 57);
        //     // for (let i = 48; i <= 57; i++) yield i
        //     // 0..9

        //     yield* generateSequence(65, 90);
        //     // for (let i = 65; i <= 90; i++) yield i
        //     // A..Z

        //     yield* generateSequence(97, 122);
        //     // for (let i = 97; i <= 122; i++) yield i
        //     // a..z

        // }

        // let str = '';

        // for(let code of generatePasswordCodes()) {
        //     str += String.fromCharCode(code);
        // }

        // console.log(str);
        // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

        // The "yield*" directive delegates the execution to another generator. 
        // This term means that "yield* gen" iterates over the generator "gen" and transparently forwards its yields outside, as if the values were yielded by the outer generator.

    // So, a generator composition is a natural way to insert a flow of one generator into another; it doesn't use extra memore to store intermediate results.

// V. "yield" is a two-way street
    // "yield" is not only returns the result to the outside, but also can pass the value inside the generator.
    // To do so, we should call "generator.next(arg)"; that argument becomes the result of "yield":
        // function* gen() {
        //     let result = yield "2 + 2 = ?";

        //     console.log(result);
        // }

        // let generator = gen();

        // let question = generator.next().value;

        // generator.next(4); // 4

    // So, unlike regular functions, a generator and the calling code can exchange results by passing values in "next" and "yield".

// VI. generator.throw
    // function* gen() {
    //     try {
    //         let result = yield "2 + 2 = ?";

    //         console.log("Cannot be reached");
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }

    // let generator = gen();

    // let question = generator.next().value;

    // generator.throw(new Error("Not found"));

// VII. generator.return
    // function* gen() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // }

    // const g = gen();

    // g.next();
    // g.return('foo');
    // g.next();

// Tasks(1)
    // Pseudo-random generator
        // function* pseudoRandom(seed) {
        //     let value = seed;

        //     while(true) {
        //         value = value * 16807 % 2147483647;
        //         yield value;
        //     }
        // }

        // let generator = pseudoRandom(1);

        // console.log(generator.next().value);
        // console.log(generator.next().value);
        // console.log(generator.next().value);
        // YES
      
        // // range object
        // let range = {
        //     from: 1,
        //     to: 5,

        //     [Symbol.iterator]() {
        //         return {
        //             current: this.from,
        //             last: this.to,

        //             next() {
        //                 if (this.current <= this.last) {
        //                     return { value: this.current++, done: false};
        //                 } else {
        //                     return { done: true };
        //                 }
        //             }
        //         }
        //     }
        // };

        // console.log([...range]);

        // // range object using generator
        // let genRange = {
        //     from: 1,
        //     to: 5,

        //     *[Symbol.iterator]() {
        //         for(let value = this.from; value <= this.to; value++) {
        //             yield value;
        //         }
        //     }
        // };

        // console.log([...genRange]);


    function* generateSequence(start, end) {
        for(let i = start; i <= end; i++) yield i;
    }

    let gen = generateSequence(1, 10);

    console.log([...gen]);