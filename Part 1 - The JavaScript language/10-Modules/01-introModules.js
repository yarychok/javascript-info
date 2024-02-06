// I. What is a module
    // Module is just a file; one script is one module.
    /** Modules can load each other and use special directives "export" and "import" to interchange functionality, call functions of one module from another one: 
         * export keyword labels variables and functions that should be accessible from outside the current module;
         * import allows the import of functionality from other modules.
    */

// II. Core module features
    // There are core features, valid both for browser and server-side JavaScript:
        /**
         * Modules always work in "use strict" mode.
         * Each module has its own top-level scope, that's why we use import/export.
         * A module code is evaluated only the first time when imported.
         */

    // The object "import.meta" contains the information about the current module.

    // In a module top-level "this" is undefined.

// III. Browser-specific features
    /** There are also several browser-specific differences of scripts with module type: 
     * Module scripts are deferred:
        * downloading external module scripts doesn't block HTML processing, they load in parallel with other resources;
        * module scripts wait until the HTML document is fully ready
        * relative order of scripts is maintained: scripts that go first in the document, execute first.
     * Async works on inline scripts.
     * External scripts that have module type are different with:
        * external scripts with the same "src" run only once.
        * if a module script is fetched from another origin, the remote server must supply a header "Access-Control-Allow_Origin" allowing to fetch.
     * No "bare" modules allowed.
     * Old browser don't understand module type.  
     */

// VI. Build tools
    // Browser modules are rarely used in their "raw" form, so usually we bundle them together with a special tool "Webpack".
    // On of the benefits suing bundlers - they give more control over how modules are resolved, allowing bare modules and much more, like CSS/HTML modules.
    /** Such tools do the following:
         * Take a "main" module, the one intended to be put in HTML.
         * Analyze its dependencies: imports and then imports of imports, etc.
         * Build a single file with all modules, replacing native "import" calls with bundler functions, so that it works.
         * In the process, other transformations and optimizations may be applied:
         * Unreacheble code removed.
         * Unused exports removed ("tree-shaking").
         * Development-specific statements like "console" and "debugger" removed.
         * Modern JavaScript may be transformed to older one using Babel.
         * The resulting file is minified (spaces removed, variables replaced with shorter names, etc.).
     */