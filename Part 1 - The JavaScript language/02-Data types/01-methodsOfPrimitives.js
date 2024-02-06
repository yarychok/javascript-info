// Primitive as an object:
let myString = "hi";
console.log(myString.toUpperCase()); // "HI"

let myNumber = 1.23456;
console.log(myNumber.toFixed(1)); // 1.2
console.log(myNumber.toFixed(2)); // 1.23

// Summary: 
// Primitives (except 'null' and 'undefined') provide many helpful methods.
// Formally, these methods work via temporary objects, but JavaScript engines are well tunes to optimize that internally, so they are not expensive to call