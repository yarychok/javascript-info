// ! JSON.stringify
// let student = {
//     name: "Liubomyr",
//     age: 23,
//     isAdmin: false,
//     courses: ["html", "css", "js"],
//     wife: null,
// };

// let json = JSON.stringify(student);

// console.log(typeof json); // string
// console.log(json); // {"name":"Liubomyr","age":23,"isAdmin":false,"courses":["html","css","js"],"wife":null}

// let user = {
//     sayHi() { // methods are ignored
//         console.log('Hello');
//     },
//     [Symbol('id')]: 123, // symbols are ignored
//     something: undefined, // properties with undefined are ignored
// };

// console.log(JSON.stringify(user)); // {}

// let meetup = {
//     title: 'Conference',
//     room: { // nested objects are supported
//         number: 23,
//         participants: ['Liubomyr', 'Arthur']
//     },
// };

// console.log(JSON.stringify(meetup)); // {"title":"Conference","room":{"number":23,"participants":["Liubomyr","Arthur"]}}

// Restriction: no circular references
// let room = {
//     number: 21,
// };

// let meeting = {
//     title: 'Conference',
//     participants: ['Arthur', 'Liubomyr'],
// };

// meeting.place = room;
// room.occupiedBy = meeting;

// console.log(JSON.stringify(meeting)); // TypeError: Converting circular structure to JSON

// ! Excluding and transforming: replacer
// Full syntax: JSON.stringify(value, [, replacer, space])
// value - a value to encode
// replacer - an array of properties to encode or a mapping function(key, value)
// space - amount of spaces to use for formatting
// let room = {
//     number: 23,
// };

// let meetup = {
//     title: 'Conference',
//     participants: [
//         {name: 'Liubomyr'},
//         {name: 'Arthur'},
//     ],
//     place: room, // restricted for JSON.stringify()
// };

// room.occupiedBy = meetup; // restricted for JSON.stringify()

// Replacer with the arrays
// console.log(JSON.stringify(meetup, ['title', 'participants'])); // {"title":"Conference","participants":[{},{}]}

// console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'])); // {"title":"Conference","participants":[{"name":"Liubomyr"},{"name":"Arthur"}],"place":{"number":23}}

// Replacer with mapping function
// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined: value;
// }));

// : [object Object]
// title: Conference
// participants: [object Object],[object Object]
// 0: [object Object]
// name: Liubomyr
// 1: [object Object]
// name: Arthur
// place: [object Object]
// number: 23
// occupiedBy: [object Object]
// {"title":"Conference","participants":[{"name":"Liubomyr"},{"name":"Arthur"}],"place":{"number":23}}

// ! Formating: space
// let user = {
//     name: 'Ivan',
//     age: 25,
//     roles: {
//         isAdmin: false,
//         isEditor: true,
//     },
// };

// console.log(JSON.stringify(user, null, 2)); // more spaces for pretty formatting

// ! Custom 'toJSON'
// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     },
// };

// let meetup = {
//     title: 'conference',
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room,
// };

// console.log(JSON.stringify(meetup));

// ! 'JSON.parse'
// JSON.parse(str, [reviver]);
// str - JSON-string to parse
// reviver - optional function(key, value) that will be called for each (key, value) pair and can transform the value.

// let numbers = "[0, 1, 2, 3]";

// numbersParsed = JSON.parse(numbers);

// console.log(numbersParsed); // [0, 1, 2, 3]
// console.log(typeof numbersParsed); // object
// console.log(numbersParsed[1]); // 1


// let userData = `{ 
//     "name": "ivan", 
//     "age": 35, 
//     "isAdmin": false, 
//     "friends": [0, 1, 2] 
// }`;

// let user = JSON.parse(userData);

// console.log(user.name); // ivan

// Typical mistakes in hand-written JSON:
// let json = `{
//     name: "Ivan", // property name without quotes
//     "surname": 'Smith', // single quotes in value (must be double)
//     'isAdmin': false, // single quotes in key (must be double)
//     "birthday": new Date(2000, 2, 3), // no "new" is allowed, only bare values
//     "friends": [0, 1, 2, 3], // here all fine
// }`

// Also, JSON doesn't support comments


// ! Using reviver
// let str = `{
//     "title": "Conference",
//     "date": "2017-11-30T22:00:00.000Z"
// }`;

// let meetup = JSON.parse(str);

// console.log(typeof meetup.date); // string
// console.log(meetup.date); // 2017-11-30T22:00:00.000Z

// let anotherMeetup = JSON.parse(str, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// });

// console.log(typeof anotherMeetup.title); // string
// console.log(typeof anotherMeetup.date); // object
// console.log(anotherMeetup); // { title: 'Conference', date: 2017-11-30T22:00:00.000Z }
// console.log(anotherMeetup.date.getFullYear()); // 2017

// The same is for nested objects
// let schedule = `{
//     "meetups": [
//         {"title": "Conference", "date": "2017-11-30T22:00:00.000Z"},
//         {"title": "Birthday", "date": "2017-04-18T22:00:00.000Z"}
//     ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// });

// console.log(schedule.meetups[1].date.getDate()); // 19

// Summary:
// - JSON is a data format that has its own independent standard and libraries for most programming languages
// - JSON support plain objects, arrays, strings, numbers, booleans and 'null'
// - JavaScript provides methods 'JSON.stringify()' to serialize into JSON and 'JSON.parse()' to read from JSON
// - Both methods support transformer functions for smart reading / writing
// - If an object has 'toJSON', then it's called by 'JSON.stringify()'

// 01 Task
// let user = {
//     name: "Ivan Parasiuk",
//     age: 35,
// };

// let anotherUser = JSON.parse(JSON.stringify(user));

// console.log(typeof anotherUser); // object
// console.log(anotherUser.age); // 35

// 02 Task
// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     occupiedBy: [
//         {name: "Ivan"},
//         {name: "Alisa"},
//     ],
//     place: room,
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function(key, value) {
//     return (key != "" && value == meetup) ? undefined: value;
// }));
// {"title":"Conference","occupiedBy":[{"name":"Ivan"},{"name":"Alisa"}],"place":{"number":23}}


