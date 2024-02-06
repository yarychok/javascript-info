// I. General info
    // Export and import statements that we covered in previous chapters are called "static". The syntax is simple and strict.

    // That's because import/export aim to provide a backbone for the code structure. That's a good thing, as code structure can be analyzed, modules can be gathered and bundled into one file by special tools, unused exports can be removed.

// II. The import() expression
    // The "import(module)" expression loads the module on-demand and returns a promise that resolves into a module object that contains all its exports.

    // We can use it dynamically in any place of the code:
        // let modulePath = prompt("Which module to load?");

        // import(modulePath)
        //     .then(obj => <module object>)
        //     .catch(err => <loading error, if no such module>)

    // Full example can be found in "Example with dynamic import"

    // Dynamic imports work in regular scripts, they don't require module script type.

    // Although "import()" looks like a function call, it's a special syntax that just happens yo use parentheses (just like super()).
    // So we can't copy "import" toa variable or use call/apply with it. It's not a function.
    