// I. BigInt
    // "BigInt" is a special numeric type that provides support for integers of arbitrary length.

    // A bigint is created by appending "n" to the end of an integer literal or call by the function "BigInt" that creates bigints from strings, numbers, etc:
        // const bigint = 1234567890123456789012345678901234567890n;

        // const sameBigint = BigInt(1234567890123456789012345678901234567890n);

        // const bigintFromNumber = BigInt(10); // same as 10n

// II. Math operators
    // Can be used like a regular number:
        // console.log(1n + 2n); // 3n

        // console.log(5n / 2n); // 2n

    // We can't mix with other types:
        // console.log(1n + 2); // TypeError: Cannot mix BigInt and other types, use explicit conversions

        // console.log(1n + '2'); // 12

        // console.log('2' + 1n); // 12

// III. Comparisons
    // Work with bigints and numbers just fine:
        // console.log(2n > 1n); // true
 
        // console.log(2n > 1); // true

// IV. Boolean operations
    // When inside "if" or other boolean operations, bigints behave like numbers:
        // if (0n) {
        //     console.log("Will never be shown!");
        // }

    // Boolean operators, such as "||", "&&" and others also work with bigints similar to numbers:
        // console.log(1n || 2); // 1n

        // console.log(0n || 2); // 2
