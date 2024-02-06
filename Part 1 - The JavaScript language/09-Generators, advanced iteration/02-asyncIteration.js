// I. Async iterables
    // Asyncronous iteration is needed when values come asynchronously: after "setTimeout" or another kind of delay.
    // The most common case is that the object needs to make a network request to deliver the next value.

    /** To make an object iterable asyncronously:
     * use "Symbol.asyncIterator" instead of "Symbol.iterator";
     * the "next()" method should return a promise: the "async" keyword handles it, we can simply make "async next()";
     * to iterate over such an object, we should use a "for await (let item of iterable)" loop.
     */

    // let range = {
    //     from: 1,
    //     to: 5,

    //     [Symbol.asyncIterator]() {
    //         return {
    //             current: this.from,
    //             last: this.to,

    //             async next() {
    //                 await new Promise(resolve => setTimeout(resolve, 1000));

    //                 if (this.current <= this.last) {
    //                     return { done: false, value: this.current++};
    //                 } else {
    //                     return { done: true };
    //                 }
    //             }
    //         }
    //     }
    // };

    // (async () => {
    //     for await (let value of range) {
    //         console.log(value);
    //     }
    // })();

// II. Recall generators
    // Using generator code above looks much shorter:
    // let range = {
    //     from: 1,
    //     to: 5,

    //     *[Symbol.iterator]() {
    //         for(let value = this.from; value <= this.to; value++) {
    //             yield value;
    //         }
    //     }
    // }

    // for(let value of range) {
    //     console.log(value);
    // }

// III. Async generators (finally)
    // For most practical applications, when we'd like to make an object that asynchronously generates a sequence of values:
        // async function* generateSequence(start, end) {

        //     for (let i = start; i <= end; i++) {

        //         await new Promise(resolve => setTimeout(resolve, 1000));

        //         yield i;
        //     }
        // }

        // (async () => {
        //     let generator = generateSequence(1, 5);
        //     for await (let value of generator) {
        //         console.log(value);
        //     }
        // })();

    // Async iterable range:
        // let range = {
        //     from: 1,
        //     to: 5,

        //     async *[Symbol.asyncIterator]() {
        //         for (let value = this.from; value <= this.to; value++) {
        //             await new Promise(resolve => setTimeout(resolve, 1000));

        //             yield value;
        //         }
        //     }
        // };

        // (async () => {
        //     for await (let value of range) {
        //         console.log(value);
        //     }
        // })();

// IV. Real-life example: paginated data
    async function* fetchCommits(repo) {
        let url = `https://api.github.com/repos/${repo}/commits`;

        while (url) {
            const response = await fetch(url, {
                headers: {'User-Agent': 'Our script'},
            });

            const body = await response.json();

            let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
            nextPage = nextPage?.[1];

            url = nextPage;

            for (let commit of body) {
                yield commit;
            }
        }
    }

    (async () => {
        let count = 0;

        for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
            console.log(commit.author.login);

            if (++count == 100) {
                break;
            }
        }
    })();