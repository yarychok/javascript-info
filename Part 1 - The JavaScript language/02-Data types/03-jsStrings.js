// // Backticks
// let guestsList = `Guests:
// * Liubomyr
// * Dariya
// * Vlad
// `;
// console.log(guestsList); // expected multi-line string


// // Special symbols
// let myString = "Hi\nWorld!";
// let anotherString = `Hi
// World!`;
// console.log(myString == anotherString); // true


// // Unicode
// console.log("\u{1F60D}"); // emoji


// // String length
// console.log('My\n'.length); // 3


// // Accessing characters
// let myString = "Hi";

// console.log(myString[0]); // H
// console.log(myString.charAt(0)); // H

// console.log(myString[myString.length - 1]); // i


// // the difference between '[]' and 'charAt()'
// console.log('Divider');
// console.log(myString[10]); // undefined
// console.log('Divider');
// console.log(myString.charAt(10)); // '' (empty string)
// console.log('Divider');


// // 'for..of'
// for (let char of 'Hello') {
//     console.log(char);
// }


// // Strings are immutable
// let myString = 'Hi';

// myString[0] = 'h'; // doesn't work
// console.log(myString[0]); // H

// // but it's posible to create new string instead of old one, assigning it to the same variable
// myString = 'h' + myString[1];
// console.log(myString); // hi


// // Changing the case
// console.log('Interface'.toUpperCase()); // INTERFACE
// console.log('Interface'.toLowerCase()); // interface
// console.log('Interface'[0].toLowerCase()); // i


// // Searching for a substring
// let myString = 'Widget with identificator';

// console.log(myString.indexOf('Widget')); // 0
// console.log(myString.indexOf('widget')); // -1 (not found)
// console.log(myString.indexOf('id')); // 1 ('wIDget')
// console.log(myString.indexOf('id', 2)); // 12

// let anotherString = 'As sly as a fox, as strong as an ox';

// let target = 'as';

// let pos = 0;
// while (true) {
//     let foundPos = anotherString.indexOf(target, pos);
//     if (foundPos == -1) break;

//     console.log(`'${target}' was found at: ${foundPos}`);
//     pos = foundPos + 1;
// }
// 'as' was found at: 7
// 'as' was found at: 17
// 'as' was found at: 27

// // the same algorithm cab be layed out shorter
// let anotherString = 'As sly as a fox, as strong as an ox';
// let target = 'as';

// let pos = -1;

// while ((pos = anotherString.indexOf(target, pos + 1)) != -1) {
//     console.log(pos);
// }


// // 'str.lastIndexOf(substr, pos)'
// let myString = 'My String';
// console.log(myString.lastIndexOf('String')); // 3 (idk)
// console.log(myString.lastIndexOf('ing')); // 6 (idk)

// // ~n == -(n+1)
// console.log(~2); // -3
// console.log(~0); // -1
// console.log(~-1); // 0

// // '~str.indexOf()' with 'if..else'
// let str = 'Widget';

// if (~str.indexOf('Widget')) { // w/o '~' it wouldn't work, cause it'll return '0' index (false)
//     console.log('Good');
// }


// // More modern methods: 'includes', 'startsWith' and 'endsWith'
// console.log('Widget with identifier'.includes('Widget')); // true
// console.log('Widget'.includes('id', 1)); // true
// console.log('Widget'.includes('id', 3)); // false

// console.log('Widget'.startsWith('Wid')); // true
// console.log('Widget'.endsWith('get')); // true


// // Getting a substring: 'slice', 'substring' and 'substr'
// // str.slice(start [, end])
// let str = 'stringify';

// console.log(str.slice(0, 5)); // strin (from 0 to 4)
// console.log(str.slice(5)); // gify (from 5 to the end)
// console.log(str.slice(-4, -1)); // gif

// // str.substring(start [, end])
// console.log(str.substring(2, 6)); // ring
// console.log(str.substring(6, 2)); // ring (idk, but it's feature :D)

// // str.substr(start [, length])
// console.log()


// // Comparing strings
// console.log('z' > 'Z'); // true - 122 > 90 (UTF-16) 
// console.log('z'.codePointAt(0)); // 122
// console.log('Z'.codePointAt(0)); // 90
// console.log(String.fromCodePoint(90)); 'Z'


// let str = '';

// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// console.log(str); // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


// // str.localeCompare(anotherStr)
// console.log('ABCD'.localeCompare('abcd')); // 1  ('ABCD' > 'abcd')



// Summary:
// Three types of quotes: '', "" and ``
// Backticks (``) allow a string to span multiple lines and embed expressions ${}

// We can use special characters, like \n

// To get a character, use: '[]' or 'at' method

// To get a substring, use: 'slice' or 'substring'

// To lowercase/uppercase a string, use: 'toLowerCase()'/'toUpperCase()'

// To look for a substring, use: 'indexOf', or 'includes'/'startsWith'/'endsWith'

// To compare strings accordingly to the language, use: 'localeCompare()'

// Several helful methods in strings:
// 'str.trim()' removes ("trims") spaces from the beginning and end of the string
// 'str.repeat(n)' repeats the string n times


// // 01 Task
// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst('onetwothreefourfivesixseveneightnineten'));


// // 02 Task
// function checkSpam(str) {
//     return str.toLowerCase().includes('viagra', 'xxx');
// }

// console.log(checkSpam('ViAGRA XXX'));


// // 03 Task
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength) + '...': str;
// }

// console.log(truncate('My name is Liubomyr. My age is 23', 10));


// 04 Task
function extraCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extraCurrencyValue("$120"));