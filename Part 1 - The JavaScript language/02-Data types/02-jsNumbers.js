// let billion = 1_000_000_000; // syntactic sugar
// console.log(billion); // 1000000000

// let anotherBillion = 1e9; // 'e9' = 0 zeros
// console.log(anotherBillion); // 1000000000

// console.log(7.3e9); // 7300000000 (the same as 7300000000 or 7_300_000_000)

// console.log(1e3 === 1 * 1000); // true (e3 means *1000);

// console.log(1e-6 === 0.000001); // true

// // Hexadecimal numbers (hex)
// console.log(0xff); // 255

// // Binary and octal numbers (rarely used)
// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255

// console.log(a == b); // true

// // toString(base)
// // 'base' could be from 2 to 36, but 10 is by default
// let num = 255;

// console.log(num.toString(16)); // ff
// console.log(num.toString(2)); // 11111111
// console.log(num.toString()); // 255

// // Rounding
// // These functions cover all of the possible ways to deal with the decimal part of a number
// console.log(Math.floor(3.1)); // 3 (rounds down)
// console.log(Math.floor(-1.1)); // -2

// console.log(Math.ceil(3.1)); // 4 (rounds up)
// console.log(Math.ceil(-1.1)); // -1

// console.log(Math.round(3.1)); // 3 (rounds to the nearest integer)
// console.log(Math.round(3.6)); // 4 

// console.log(Math.trunc(3.1)); // 3 (removes everything after the decimal point)
// console.log(Math.trunc(-1.1)); // -1

// // But we'd like to round the number to 'n' digit after the decimal
// // Multiply-and-divide
// let num = 1.23456;
// console.log(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23;
// // toFixed(n)
// console.log(num.toFixed(3)); // 1.235 (3 digits after decimal point + rounding to nearest integer)
// console.log(num.toFixed(10)); // 1.2345600000
// // 'toFixed(n)' is a string, but we can converty iy to a number using unary plys or a 'Number()'
// let someNumber = 1.4;
// console.log(typeof(someNumber.toFixed())); // string
// console.log(+someNumber.toFixed(5)); // 1.4 (caused of rounding, cause it's no longer a string)


// // Imprecise calculations
// // If a number is really huge, it may overflow 64-bit storage and become a special numeric value 'Infinity'
// console.log(1e500); // Infinity
// // Loss of precision
// console.log(0.1 + 0.2 == 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1.toFixed(10)); // 0.1000000000
// console.log(0.3 + 0.3 == 0.6); // true (the same numbers will return expectable result)


// // Tests: 'isFinite()' and 'isNaN()'
// // 'isNaN(value)' returns true if value is not a number
// console.log(isNaN("str")); // true
// console.log(isNaN(NaN)); // true
// console.log(isNaN(10)); // false
// console.log(NaN === NaN); // false (just a friendly reminder what is JavaScript :D)

// // 'isFinite(value)' returns true if value is a number
// console.log(isFinite("15")); // true
// console.log(isFinite("str")); // false (NaN) *
// console.log(isFinite(Infinity)); // false (Infinity) *
// console.log(isFinite(-Infinity)); // false (-Infinity) *
// // * are special values


// // Comparison with 'Object.is'
// // It's a special built-in method that compares values like '===', but is more reliable cause it works with 1)'NaN'
// console.log(Object.is(NaN, NaN)); // true
// // and with 2) '0' and '-0'
// console.log(Object.is(0, -0)); // false (yes, they're not the same)


// // Numeric conversion suing an unary '+' or 'Number()' are strict, and if value is not a number, it fails
// console.log(+'100px'); // NaN

// // parseInt()' and 'parseFloat()'
// console.log(parseInt('100px')); // 100
// console.log(parseFloat('12.5em')); // 12.5

// console.log(parseInt('12.3')); // 12 (only the integer part is returned)
// console.log(parseFloat('12.3.4')); // 12.3 (the second point stops the reading)

// console.log(parseInt('a123')); // NaN (the first symbol stops the process)
// console.log(parseFloat('a123')); // NaN (the same)


// // Built-in 'Math' object contains a small library of mathematical functions and constants
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.max(1, 2, 5, 100, 1)); // 100
// console.log(Math.min(100, 1, -2, 1, 2)); // -2
// console.log(Math.pow(2, 10)); // 2 powered to 10


// Summary:
// Append 'e' with the zeroes count to the number
// A negative number after 'e' causes the number to be divided by 1 with given zeroes

// Different numeral systems: hex(0x), octal(0o) and binary (0b)

// Regular number tests: 'isNaN()', 'isFinite()', 'parseInt()' and 'parseFloat()'

// For fractions (rounding): 'Math.floor()', 'Math.ceil()', 'Math.round()', 'Math.trunc()' and '.toFixed(precission)'

// // 01 Task
// function mySummary(a, b) {
//     if (isFinite(a && b)) {
//         return a + b;
//     } return "Please input only numbers"
// }

// console.log(mySummary(2, 2));

// // 02 Task
// console.log(1.35.toFixed(1)); // 1.4
// console.log(Math.round(1.35)); // 1
// console.log(6.35.toFixed(1)); // 6.3
// console.log(Math.round(6.35)); // 6

// console.log(Math.round(6.35 * 10) / 10); // 6.4

// // 03 Task
// let i = 0;
// while (i < 9.8 || i > 10.2) {
//     i += 0.2;
//     console.log(i);
// }

// // 04 Task
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }

// console.log(random(1, 5));

// // 05 Task
// function randomInteger(min, max) {
//     let random = min + Math.random() * (max + 1 - min);
//     return Math.round(random);
// }

// console.log(randomInteger(1, 3));