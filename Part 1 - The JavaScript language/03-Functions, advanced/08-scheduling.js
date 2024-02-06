// I. setTimeout
    // let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...):
        // function sayHi(phrase, who) {
        //     console.log(`${phrase}, ${who}`);
        // }

        // setTimeout(sayHi, 1000, 'Hi', 'John'); // Hi, John (calls function after one second)

            // If the first argument is a string,
            // then JavaScript creates a function from it
            // (but it's not recommended):
                // setTimeout('console.log("Hello")', 1000); // weird error
                // probably works only in browser with 'alert()'
                
            // it's better to use arrow functions instead:
                // setTimeout(() => console.log('Hello'), 1000); // Hello
    // Cancelling with clearTimeout:
        // let timerId = setTimeout(() => console.log("Wouldn't print"), 1000);
        // console.log(timerId); 
        // returns 'Timeout' object with some additional methods
        // here '_idleTimeout': 1000

        // clearTimeout(timerId);
        // console.log(timerId);
        // the same 'Timeout' object, 
        // but '_idleTimeout': -1

// II. setInterval
    // Syntax is the same:
    // let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);

    // Unlike 'setTimeout' it runs function regularly, 
    // and stop further calls after 'clearInterval()':
    // let timerId = setInterval(() => console.log('one second passed', 1000));

    // setTimeout(() => {clearInterval(timerId); console.log('stop');}, 5000);
    // Actually, it doesn't work properly

// III. Nested setTimeout
    // Instead of:
        // let timerId = setInterval(() => console.log('tick'), 2000);
    // We can use:
        // let timerId = setTimeout(function tick() {
        //     console.log('tick');
        //     timerId = setTimeout(tick, 2000);
        // }, 2000); // works almost good, unlike the code from II section

    // Pseudocode below is sending request to server:
        // let delay = 5000;

        // let timerId = setTimeout(function request() {
        //     sending request...

        //     if(request failed due to server overload) {
        //         // increase interval to the next reuqest
        //         // delay *= 2;
        //     }
        //     timerId = setTimeout(request, delay);
        // }, delay);
    
    // Nested setTimeout allows to set the delay between the executions more precisely than setInterval
        // Using setInterval:
            // let i = 1;
            // setInterval(function() {
            //     func(i++);
            // }, 100);
        // Using setTimeout:
            // let i = 1;
            // setTimeout(function run() {
            //     func(i++);
            //     setTimeout(run, 100);
            // }, 100);

// VI. Zero delay setTimeout
    // There's a special use case: setTimeout(func, 0) / setTimeout(func)
        // setTimeout(() => console.log('World'));

        // console.log('Hello'); // Hello World  
// Summary:
    // - Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) 
    // allow us to run the func once/regularly after a delay milliseconds.

    // - To cancel the execution, we should call clearTimeout/clearInterval
    // with the value returned by setTimeout/setInterval.

    // - Nested setTimeout calls are a more flexible alternative to setInterval,
    // allowing us to set the time between executions more precisely.

    // - Zero delay schedulling with setTimeout(func, 0) (or the same setTimeout(func))
    // is used to schedule the call "asap, but after the current script is complete".

    // All scheduling methods do not guarantee the exact delay.
    // For example, the in-browser timer may slow down for a lot of reasons:
        // - The CPU is overloaded
        // - The browser tab is in the background mode
        // - The laptop is on battery saving mode

// Tasks (2):
    // T01: Output every second
        // Using setInterval
            // function printNumbers(from, to) {

            //     let current = from;

            //     let timerId = setInterval(() => {

            //         console.log(current);

            //         if (current == to) {
            //             clearInterval(timerId);
            //         }

            //         current++;
            //     }, 1000);
            // }

            // printNumbers(1, 10);

        // Using setTimeout
            // function printNumbers(from, to) {

            //     let current = from;

            //     let timerId = setTimeout(function nest() {
            //         console.log(current);
            //         if (current == to) {
            //             clearTimeout(timerId);
            //         } else {
            //             timerId = setTimeout(nest, 1000);
            //         }
                    
            //         current++;
            //     }, 1000);
            // }

            // printNumbers(1, 10);

    // T02: What will setTimeout show?
        // let i = 0;

        // setTimeout(() => console.log(i), 100); // 10000000

        // for (let j = 0; j < 10000000; j++) {
        //     i++;
        // }

