// Summary:

// Array - is a special kind of object, suited to storing and managing ordered data is

// The declaration:
// 1) square brackets (usual)
// let arr = [i1, i2]
// 2) new Array (exceptionally rare)
// let arr = new Array(i1, i2)

// The call to 'new Array' creat an array with the given length, but w/o elements:
// The 'length' property is the array length or, to be precise, its last numeric index plus one. It's auto-adjusted  by array methods
// If we shorten 'length' manually, the array is truncated

// Getting the elements:
// 1) we can get element by its index, like 'arr[0]'
// 2) 'at(i)' method that allows negative indexes. For negative values of 'i', it steps back from the end of the array. If 'i >= 0', it works same as 'arr[i]'

// We can use an array as a deque with the following operations:
// 'push(...is)' adds 'is' to the end
// 'pop()' removes the element from the end and returns it
// 'shift()' removes the element from the beginning and returns it
// 'unshift(...is)' adds is to the beginning

// To loop over the elements of the array:
// 'for (let i = 0; i<arr.length; i++)' - works fastest, old-browser-compatible
// 'for (let i of arr)' - the modern syntax for is only
// 'for (let i in arr)' - never use :D

// To compare the arrays, don't use the '==' operator (as well as '>', '<' and others), as they have no special treatment for arrays. They handle them as any objects, and it's not what we usually want
// Instead you can use 'for...of' loop to compare arrays i-by-i


// // 01 Task
// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// console.log( fruits.length ); // 4


// // 02 Task
// let styles = ["Jazz", "Blues", ];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Reggae");
// console.log(styles);


// // 03 Task
// let arr = ["a", "b"];

// arr.push(function() {
//     console.log(this);
// });

// arr[2](); // [ 'a', 'b', [Function (anonymous)] ]


// // 04 Task 
// function sumInput(values) {
//     let counter = 0;

//     for (let i of values) {
//         counter += i;
//     }
//     return counter;
// };

// console.log(sumInput([1, 2, 3, 4, 5]));


// // 05 Task
// function getMaxSubSum(arr) {
//     let maxSubSum = 0;
//     let subSum = 0;

//     for (let item of arr) {
//         subSum += item;
//         maxSubSum = Math.max(maxSubSum, subSum);
//         if (subSum < 0) subSum = 0;
//     }; 
    
//     return maxSubSum;
// }

// console.log(getMaxSubSum([-1, -2, 3]));

// console.log(getMaxSubSum([100, 9, -1, -3, 101, -4, 1000, -3, 10,]))

