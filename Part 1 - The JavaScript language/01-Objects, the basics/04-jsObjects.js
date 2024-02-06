// let user = {
//     "name": ["Liubomyr", "Yarych"],
//     "age": 23,
//     "work experience": [
//         "bartender",
//         "teacher",
//         "support",
//     ],
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }




// let someCountries = {
//     5: "Germany",
//     4: "France",
//     3: "Lithuania",
//     2: "Poland",
//     1: "Ukraine",
// };

// for (let smth in someCountries) {
//     console.log(someCountries[smth]);
// }



// let someCountryCodes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA",
// };

// for (let code in someCountryCodes) {
//     console.log(+code);
// }



// // 01 - Task
// let user = {};
// console.log(user);

// user.name = "Liubomyr";
// console.log(user);

// user.surname = "Yarych";
// console.log(user);

// user.name = "Arthur";
// console.log(user);

// delete user.name;
// console.log(user);

// // 02 - Task
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }


// let schedule = {};
// console.log(isEmpty(schedule));

// schedule["8:30"] = "Wakie-wakie";
// console.log(isEmpty(schedule));

// console.log(schedule["8:30"]);

// // 03 - Task
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// function sumOfSalaries(obj) {
//     let total = 0;

//     for (let key in obj) {
//         total += obj[key];
//     }
//     return total
// }

// console.log(sumOfSalaries(salaries));

// 04 - Task
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        } else {
            console.log("It doesn't work")
        }
    }
}

multiplyNumeric(menu);
console.log(menu);
