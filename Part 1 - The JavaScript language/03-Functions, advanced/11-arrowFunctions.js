// I. Arrow functions have no "this"
    // "this" is accessed from the outside.
    // For instance, we can use it to iterate inside an object:
        // let group = {
        //     title: "Our group",
        //     students: ["Arthur", "Liubomyr"],

        //     showList() {
        //         this.students.forEach(
        //             student => console.log(`${this.title}: ${student}`)
        //         );
        //     }
        // };

        // group.showList();
        // Our group: Arthur
        // Our group: Liubomyr

// II. Arrows have no "arguments"
    // That's great when we need to forward a call with current "this" and "arguments".
    // For instance, for decorators:
        // function defer(f, ms) {
        //     return function() {
        //         setTimeout(() => f.apply(this, arguments), ms)
        //     };
        // }

        // function sayHi(who) {
        //     console.log(`Hi ${who}`);
        // }

        // let sayHiDeferred = defer(sayHi, 2000);
        // sayHiDeferred("Arthur"); // Hi Arthur

// Summary:
    // Arrow functions:
        // - Do not have "this"
        // - Do not have "arguments"
        // - Can't be called with "new"
        // - Do not have "super"
    
    // That's because they're meant for short pieces of code that do not have their own 'context',
    // but rather work in the current one.


