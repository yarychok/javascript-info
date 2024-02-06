// I. Export before declarations
    // We can label any declaration as exported by placing "export" before it:
        // export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', ];

        // export const MODULES_BECAME_STANDARD_YEAR = 2015;

        // export class User {
        //     constructor(name) {
        //         this.name = name;
        //     }
        // }

// II. Export apart from declarations
    // Also we can put "export" separately:
        // function sayHi(user) {
        //     console.log(`Hello, ${user}`);
        // }

        // function sayBye(user) {
        //     console.log(`Bye, ${user}`);
        // }

        // export { sayHi, sayBye }; // a list of exported variables

// III. Import *
    // Usually, we put a list of what to import in curly braces:
        // import { sayHi, sayBye } from "../script";

        // sayHi("John");
        // sayBye("John");

        // But if there's a lot to import, we can import everything as an object:
            // import * as say from "../script";

            // say.sayHi("John");
            // say.sayBye("John");

// VI. Import "as"
    // We can also use "as" to import under different names:
        // import {sayHi as hi, sayBye as bye} from '../script';

        // hi("John");
        // bye("John");

// V. Export "as"
    // And the similar with export:
        // function sayHi(user) {
        //     console.log(`Hi, ${user}`);
        // }

        // export {sayHi as hi};

        // Usage in imports:
            // import * as say from '../script';

            // say.hi("John");

// VI. Export default
    /** In practice, there are mainly two kinds of modules:
     * Modules that contain a library, pack of functions.
     * Modules that declare a single entity.
     */
    // Mostly, the second approach is preferred, so that every "thing" resides in its own module.
    // Naturally, that requires a lot of files, as everything wants its own module, but code navigation becomes easier if files are well-named and structured into folders.

    // "export default" allows us to use export without curly braces:
        // export default class User {
        //     constructor(name) {
        //         this.name = name;
        //     }
        // }

        // // Usage in import:
        //     import User from '../script';

        //     new User("Arthur");

// VII. Re-export
    // "Re-export" syntax "export ... from ..." allows to import things and immediately export them:
        // import {login, logout} from './module.js';
        // export {login, logout};


