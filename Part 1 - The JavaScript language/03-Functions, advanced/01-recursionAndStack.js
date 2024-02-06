// I. Two ways of thinking:
// - Iterative thinking: the for loop
    // function pow(x, n) {
    //     let result = 1;

    //     for (let i = 0; i < n; i++) {
    //         result *= x;
    //     }

    //     return result;
    // }

    // console.log(pow(2, 3)); // 8

// - Recursive thinking: simplify the task and call self
    //     function recursivePow(x, n) {
    //         if (n == 1) {
    //             return x;
    //         } else {
    //             return x * pow(x, n - 1);
    //         }
    //     }

    //     console.log(recursivePow(2, 3)); // 8

    // ! Recursion is usually shorter than an iterative one:
        //     function pow(x, n) {
        //         return (n == 1) ? x: (x * pow(x, n - 1));
        //     }

        //     console.log(pow(2, 3)); // 8

// II. The execution context and stack
// - When a function makes a nested call:
    // The current function is paused
    // The execution context associated with it is remembered in a special data structure called execution context stack
    // The nested call executes
    // After it ends, the old execution context is retrieved from the skack, and outer function is resumed from where it stopped

    // Piece of code for example:
    // function pow(x, n) {
    //     if (n == 1) {
    //         return x;
    //     } else {
    //         return x * pow(x, n - 1);
    //     }
    // }

    // console.log(pow(2, 3));

    // It does these steps:
        // 1 - Context: {x: 2, n: 3, at line 1} call: pow(2, 3)
        // 2 - Context: {x: 2, n: 2, at line 5} call: pow(2, 2)
        // 3 - Context: {x: 2, n: 1, at line 5} call: pow(2, 1)
        // 4 - The exit returning 2, stack is over
        // 5 - Context: {x: 2, n: 2}, at line 5} call: pow(2, 2), returning 4
        // 6 - Context: {x: 2, n: 3, at line 5} call: pow(2, 3), returning 8

    // Recursion depth (maximal number of context in the stack) in this case is: 3


// III. Recursive traversals
    // let company = {
    //     sales: [{name: "Ivan",salary: 1000,}, {name: "Alice",salary: 1600,}],
    //     development: {
    //         sites: [{name: "Petro",salary: 2000,}, {name: "Oleksandr",salary: 1800,}],
    //         internals: [{name: "Yevhen",salary: 1300,}]
    //     }
    // };

    // function sumSalaries(department) {
    //     if (Array.isArray(department)) {
    //         return department.reduce((prev, current) => prev + current.salary, 0);
    //     } else {
    //         let sum = 0;
    //         for (let subdep of Object.values(department)) {
    //             sum += sumSalaries(subdep);
    //         }
    //         return sum;
    //     }
    // }

    // console.log(sumSalaries(company)); // 7700

// VI. Recursive structures
    // A recursive data structure is a structure that replicates itself in parts.
    // For example, HTML document, it contain an HTML-tag with a list of:
        // Text pieces.
        // HTML-comments
        // Other HTML-tags
    
    // 'Linked list' is one more recursive structure that might be better alternative for arrays in some cases
    // The 'delete element' and 'insert element' operations are expensive in arrays, the only structural array modifications that do not require mass-renumbering are those that operate with the end of array: 'arr.push()' / 'arr.pop()', so a linked list is an alternative for quick processing of that.
    // The linked list element is recursibely defined as an object with:
        // - value;
        // - 'next' property referencing the next linked list element or null if that's the end.

    // let linkedList = {
    //     value: 1,
    //     next: {
    //         value: 2,
    //         next: {
    //             value: 3,
    //             next: {
    //                 value: 4,
    //                 next: null
    //             }
    //         }
    //     }
    // };

    // console.log(linkedList); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }

    // // To join:
    // let secondLinkedList = linkedList.next.next;

    // console.log(linkedList); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }
    // console.log(secondLinkedList); // { value: 3, next: { value: 4, next: null } }

    // Updating value from the head of the list:
    // let linkedList = { value: 1 };
    // linkedList.next = { value: 2 };
    // linkedList.next.next = { value: 3 };
    // linkedList.next.next.next = { value: 4 };

    // console.log(linkedList); // { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }

    // linkedList = { value: 'new item', next: linkedList};

    // console.log(linkedList); // { value: 'new item', next: { value: 1, next: {value: 2, next: [Object] }}}
    
    // // Removing a value from the middle:
    // linkedList.next = linkedList.next.next;

    // console.log(linkedList); // { value: 'new item', next: { value: 2, next: {value: 3, next: [Object] }}}

    // We can't easily access an element in the middle, like with arrays: arr[n], but in the linked list we need to start from the first item and go next n times to get the n'th element.
    // But we don't need such operations with linked list cause, for instance, we are using it for making a queue or even deque ( double-ended queue ) - the ordered structure that must allow very fast adding/removing elements from the ends, but access to its middle is not needed.
     

// Summary
    // Terms:
        // - Recursion is a programming term that means calling a function from itself. Recursive function can be used to solve tasks in elegant ways.
        // When a function calls itself, that's called a recursion step. The basis of recursion is a function arguments that make the task so simple that the function does not make further calls.
        
        // - A recursively-defined data structure is a data structure that can be defined using itself.
        // For instance, the linked list can be defined as a data structure consisting of an object referencing a list (or null):
        // list = { value, next -> list }

        // Trees like HTML elements tree or the department tree from current chapter are also naturally recursive: they have branches and every branch can have other branches.
        // Recursive functions can be used to walk them as we've seens in the 'sumSalary' example.

    // Any recursive function can be rewritten into an iterative one. And that's sometimes required to optimize stuff. But for many tasks a recursive solution is fast enough and easier to write and support.

// Tasks
    // 01 Task - Sum all numbers till the given one:
    function sumToLoop(n) {
        let accumulator = 0;

        for (let i = 0; i <= n; i++) {
            accumulator += i;
        };

        return accumulator;
    }

    console.log(sumToLoop(100)); // 5050

    function sumToRecursive(n) {
        if (n == 1) {
            return n;
        } else {
            return n + sumToRecursive(n - 1);
        };
    }

    console.log(sumToRecursive(100)); // 5050

    // 02 Task - Factorial
    function factorial(number) {
        return (number == 1) ? number : number * factorial(number - 1);
    }

    console.log(factorial(5));

    // 03 Task - Fibonacci number
    function badRecursiveFibonacci(number) {
        return number <= 1 ? number : badRecursiveFibonacci(number - 1) + badRecursiveFibonacci(number - 2);
    }

    console.log(badRecursiveFibonacci(7));

    function goodNonRecursiveFibonacci(number) {
        let a = 1, b = 1;
        for (let i = 3; i <= number; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        return b;
    }

    console.log(goodNonRecursiveFibonacci(70)); 

    // 04 Task - A single-linked list
    let list = {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: null
            }
          }
        }
    };

    function loopPrintList(arrayLike) {
        let temporary = arrayLike;

        while (temporary) {
            console.log(temporary.value);
            temporary = temporary.next;
        }
    }

    loopPrintList(list);

    function recursivePrintList(arrayLike) {
        console.log(arrayLike.value);
        if (arrayLike.next) {
            recursivePrintList(arrayLike.next);
        }
    }

    recursivePrintList(list);

    // 05 Task - A reversed single-linked list 
    function reversedRecursivePrintList(arrayLike) {
        if(arrayLike.next) {
            reversedRecursivePrintList(arrayLike.next);
        }
        console.log(arrayLike.value);
    }

    reversedRecursivePrintList(list);

    function reversedLoopPrintList(arrayLike) {
        let arr = [];
        let temp = arrayLike;

        while (temp) {
            arr.push(temp.value);
            temp = temp.next;
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
    }

    reversedLoopPrintList(list);

    