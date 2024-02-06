// // Clone of object
// let user = {
//     name: "Liubomyr",
//     age: 23,
// };

// let clone = {};

// for (let key in user) {
//     clone[key] = user[key];
// }

// clone.name = "Arthur";
// console.log(clone);

// // Clone of object - Object.assign
// let permissionOne = { canView: true};
// let permissionTwo = { canEdit: true};

// Object.assign(clone, permissionOne, permissionTwo, {name: "Liubomyr"});
// console.log(clone);

// // Deep cloning - _.cloneDeep(obj)
// // will check if (for ... in) loop will create the link to the same object
// let objectWithObject = {
//     name: "Arthur",
//     age: 18,
//     countries: {
//         first: "Italy",
//         second: "Poland",
//         third: "Canada",
//     },
// };

// let subjectObject = {};

// for (let key in objectWithObject) {
//     subjectObject[key] = objectWithObject[key];
// }

// console.log(subjectObject);
// console.log(objectWithObject.countries === subjectObject.countries); // true - objects are the same
// // so code below requires library 'Lodash' to work, but it's valid anyway
// let anotherSubjectObject = _.cloneDeep(objectWithObject);
// console.log(anotherSubjectObject.countries === objectWithObject.countries); // false - at least should be

// // Merged objects
// function marriage(man, woman) {
//     woman.husband = man;
//     man.wife = woman;

//     return {
//         father: man,
//         mother: woman
//     }
// };

// let family = marriage({
//     name: "Ivan"
// }, {
//     woman: "Inna"
// });
// console.log(family);

// delete family.father;
// delete family.mother.husband;
// console.log(family); // only mother left in object


