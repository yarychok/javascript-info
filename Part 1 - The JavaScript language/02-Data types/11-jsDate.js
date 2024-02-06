// Creating
// let now = new Date();
// console.log(now); // 2022-12-05T07:49:34.992Z

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970); // 1970-01-01T00:00:00.000Z

// // new Date(year, month, date, hours, minutes, seconds, ms)
// let someDate = new Date(2011, 0, 1, 0, 0, 0, 0);
// console.log(someDate); // 2010-12-31T22:00:00:000Z 

// let anotherDate = new Date(2011, 0, 1);
// console.log(anotherDate); // 2010-12-31T22:00:00:000Z


// Access date components
// let date = new Date();

// console.log(date.getHours()); // 19 (hour in current time zone)
// console.log(date.getUTCHours()); // 17 (hour in UTC+0 time zone - London)

// console.log(date.getTimezoneOffset()); // -120 (returns the difference between UTC+0 and local time zone in minutes - 2 hours)

// Setting date components
// let today = new Date();

// today.setHours(0)
// console.log(today); // 2022-12-04T22:23:26.955Z (today, but 0 hour)

// Autocorrection
// let date = new Date(2013, 0, 32);

// console.log(date); // 2013-01-31T22:00:00.000Z

// date.setDate(date.getDate() + 2);
// console.log(date); // 2013-02-02T22:00:00.000Z

// date.setSeconds(date.getSeconds() + 70);
// console.log(date); // 2013-02-02T22:01:10.000Z

// date.setDate(0);
// console.log(date); // 2013-01-30T22:01:10.000Z

// Date to number, date diff
// let date = new Date();

// both are numbers in ms passed from the Date(0) - 1970-01-01T00:00:00.000Z
// console.log(date.getTime()); // 1670261707871
// console.log(+date); // 1670261707871

// Time measurements
// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;
//     console.log(doSomething);
// }

// let end = new Date();

// console.log(`Loop took ${end - start} ms`);

// Date.now()
// let start = Date.now();

// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i;
//     console.log(doSomething);
// }

// let end = Date.now();

// console.log(`Loop took ${end - start} ms`);

// Benchmarking
// function diffSubstract(date1, date2) {
//     return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2)
    
//     return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubstract);
//     time2 += bench(diffGetTime);
// };

// console.log('Time diffSubstract ' + time1);
// console.log('Time diffGetTime ' + time2);

// Date.parse(str)
// String format: YYYY-MM-DDTHH:mm:ss.sssZ / YYYY-MM-DD / YYYY-MM / YYYY
// let ms = Date.parse('2012-01-16T13:51:50.417-07:00');
// console.log(ms); // 1326747110417 (timestamp)
// !Once again: timestamp - number of milliseconds from 1 Jan 1970 UTC+0

// let date = new Date(Date.parse('2012-01-16T13:51:50.417-07:00'))
// console.log(date); // 2012-01-16T13:51:50.417Z


// Summary: 
// Date and time in JavaScript are represented with the Date object. We can't create 'only date' or 'only time': Date objects always carry both.

// Months are counted from zero (January).

// Days of week in getDay() are also counted from zero (Sunday).

// Date auto-corrects itself when out-of-range components are set. Good for adding/substracting days/months/hours.

// Dates can be substracted, giving their difference in milliseconds. That's because a Date becomes the timestamp when converted to a number.

// Use Date.now() to get the current timestamp fast.

// Unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds!

// Methods for accessing date components:
// getFullYear() - four digits
// getMonth() - 0-11
// getDate() - 1-31
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// getDay() - 0-6
// getTime() - timestamp (milliseconds passed from 1970-01-01)
// getTimezoneOffset - difference betweenUTC and local time zone

// Methods for setting date components:
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(ms)

// 01 Task
// let dateOne = new Date(2012, 1, 20, 3, 12);
// console.log(dateOne); // 2012-02-20T01:12:00.000Z 

// let dateTwo = new Date('February 20, 2012 03:12:00');
// console.log(dateTwo); // 2012-02-20T01:12:00.000Z 

// let dateThree = new Date('2012-02-20T03:12:00.000Z');
// console.log(dateThree); // 2012-02-20T03:12:00.000Z

// 02 Task
// let myDate = new Date(2012, 0, 8);

// function getLocalDay(date) {
//     let day = date.getDay();

//     if (day == 0) day = 7;

//     return day;
// }

// console.log(getLocalDay(myDate));

// 03 Task
// let myDate = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);

//     dateCopy.setDate(date.getDate() - days);

//     return dateCopy.getDate();
// }

// console.log(getDateAgo(myDate, 1)); // 2014-12-31T22:00:00.000Z
// console.log(getDateAgo(myDate, 2)); // 2014-12-30T22:00:00.000Z
// console.log(getDateAgo(myDate, 365)); // 2014-01-01T22:00:00.000Z

// 04 Task
// function getLastDayOfMonth(year, month) {
//     let ourDate = new Date(year, month + 1, 0);
//     return ourDate.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));

// 05 Task
// function getSecondsToday() {
//     let now = new Date();

//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     return Math.round( (now - today) / 1000);
// }

// console.log(getSecondsToday()); // 52310
// or alternative:
// function anotherGetSecondsToday() {
//     let date = new Date();
//     return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }

// console.log(anotherGetSecondsToday()); // 52310

// 06 Task
// function getSecondsToTomorrow() {
//     let now = new Date();

//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//     return Math.round( ( tomorrow - now ) / 1000 );
// }

// console.log(getSecondsToTomorrow());

// 07 Task
function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'right now';
    }

    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + ' seconds ago';
    }

    let min = Math.floor(diff / 60000);
    if (min > 60) {
        return min + ' minutes ago';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2) + ' ' + d.slice(3).join(':'));
}

console.log(formatDate(new Date(new Date - 1)));

