// // Find non-existing property

// let user = {};

// // Not valid code
// console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')

// // Valid code, but looks bad
// console.log(user.address ? user.address.street : undefined); // undefined


// // Usage of "?."

// let user = {};

// // "?." works the same, as value?.prop (if value exists)
// // but if value is undefined/null, it returns "undefined"
// console.log(user?.address?.street); // undefined


// // "?," is not operator, but syntax construction, so it works with 1) functions

// let userAdmin = {
//     admin() {
//         console.log("I'm admin");
//     },
// };

// let userGuest = {};
// // Again, code works
// userAdmin.admin?.(); // I'm admin
// userGuest.admin?.(); // no output, but it returns undefined


// // and also it works with 2) square brackets

// let userOne = {
//     firstName: "Liubomyr",
// };

// let userTwo = null;

// let key = "firstName";

// console.log(userOne?.[key]); // Liubomyr
// console.log(userTwo?.[key]); // undefined


// Summary:
// 1. obj?.prop - returns obj.prop if obj exists, otherwise returns undefined
// 2. obj?.[prop] - returns obj[prop] if obj exists, otherwise returns undefined
// 3. obj.method?.() - calls obj.method() if obj.method exists, otherwise returns undefined

// In other words, "?." checks the left part (before "?.") for null/undefined and allows the evaluation to proceed if it's not so

// Also, a chain of "?." allows to safely access nested properties, without getting an error

