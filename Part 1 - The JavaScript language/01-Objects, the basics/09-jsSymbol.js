// let id = Symbol("id");
// let anotherID = Symbol("id");

// console.log(id == anotherID); // false
// console.log(id.toString()); // Symbol(id)


// let user = {
//     name: "Liubomyr",
// };

// let id = Symbol("id");

// user[id] = 1;

// console.log(user[id]); // 1


// // Symbols are ignored by "for...in" loop
// let id = Symbol("id"); // idk the difference between Symbol("id") and Symbol() - Output is the same

// let user = {
//     name: "Liubomyr",
//     age: 23,
//     [id]: 123,
// };

// for (let key in user) console.log(key); // name, age

// console.log("Access to: " + user[id]); // Access to: 123

// // The same is for Object.keys()
// console.log(Object.keys(user)); // [ 'name', 'age' ]

// // But Object.assign is copying properties of string and symbols
// let clone = Object.assign({}, user);

// console.log("Another access to cloned object: " + clone[id]); // Another access to cloned object: 123


// // Global symbols
// // read from the global registry
// let id= Symbol.for("id"); // if usch symbols doesn't exist, it'll be created

// // read again, but assigning to another variable 
// let idAgain = Symbol.for("id"); //

// // the same symbol is created with different for different variables and code pieces
// console.log(id == idAgain); // true


// // Symbol.keyFor() that works for reading global symbols
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// let sym3 = Symbol("unknown");

// // if such symbols doesn't exists in global registry, it'll return 'undefined'
// console.log(Symbol.keyFor(sym)); // name
// console.log(Symbol.keyFor(sym2)); // id
// console.log(Symbol.keyFor(sym3)); // undefined
// console.log(Symbol.for(sym3)); // such code doesn't work, cause it cannot convert a Symbol to a string


// Well-known system symbols:
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive



// Summary:
// Symbol - is primitive data type for unique identifiers
// Symbols are created with 'Symbol()' call with an optional description (name)

// Symbols are always different values, even if they have the same name
// If we want same-named symbols to be equal, then we should use global registry
// 'Symbol.for(key)' returns (creates if needed) a global symbol with 'key' as the name
// Multiple calls of of 'Symbol.for' with the same 'key' return exactly the same symbol

// Two main use cases: "hidden" object properties and to alter some built-in behaviors

// Technically, symbols aren't 100% hidden, 
// cause we have built-in method 'Object.getOwnPropertySymbols(obj)' that allows us to get all symbols

// Also we have 'Reflect.ownKeys(obj)' that returns all keys of an object