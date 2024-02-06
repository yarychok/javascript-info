// Iterable objects are a generalization of arrays. That's a concept that allows us to make any object useable in a 'for...of' loop.

// 'Symbol.iterator'
// let range = {
//     from: 1,
//     to: 5
// };

// range[Symbol.iterator] = function() {

//     return {

//         current: this.from,
//         last: this.to, 

//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };

// for (let num of range) {
//     console.log(num); // 1, 2, 3, 4, 5
// }

// // String is iterable
// for (let char of 'test') {
//     console.log(char); // t, e, s, t
// }

// // Calling an iterator explicitly
// let str = "Hello";

// let iterator = str[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     console.log(result.value);
// }

// // Iterables and array-likes
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// for (let item of arrayLike) {
//     console.log(item); // TypeError: arrayLike is not iterable ( no Symbol.iterator)
// }

// // 'Array.from'
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// let arr = Array.from(arrayLike);
// console.log(arr.pop()); // World
// console.log(arr); // [ 'Hello' ]

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++};
//         } else {
//             return { done: true };
//         }
//     }
// };

// let arr = Array.from(range);
// console.log(arr); // [1, 2, 3, 4, 5]

// let anotherArr = Array.from(range, num => num * num);
// console.log(anotherArr); // [1, 4, 9, 16, 25]

// console.log(typeof anotherArr); // object


// Summary:
// Objects that can be used in 'for...of' are called iterable.

// 1) Technically, iterables must implement the method named 'Symbol.iterator':
// - the result of obj[Symbol.iterator]() is called an iterator, it handles further iteration process;
// - an iterator must have the method named 'next()' that returns an object { done: Boolean, value: any }, here 'done: true' denotes the end of the iteration process, otherwise the value is the next value;

// 2) The 'Symbol.iterator' method is called automatically by 'for...of', but we also can do it directly.

// 3) Built-in iterables like strings or arrays, also implement 'Symbol.iterator'.

// 4) String iterator knows about surrogate pairs.

// Objects that have indexed properties and 'length' are called array-like. Such objects may also have other properties and methods, but lack the built-in methods of arrays.

// If we look inside the specification - we'll see that most built-in methods assume that they work with iterables or array-likes instead of "real" arrays, because that's more abstract.

// 'Array.from(obj[, mapFn, thisArg])' makes a real 'Array' from an iterable of array-like 'obj', and we can then use array methods on it. The optional arguments 'mapFn' and 'thisArg' allows us to apply a function to each item.




