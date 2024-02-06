// I. Browser environment
    /** window - Global object: 
     * DOM:
        * document
        * ...
     * BOM:
        * navigator
        * screen
        * location
        * frames
        * history
        * XMLHttpRequest
     * JavaScript:
        * Object
        * Array
        * Function
        * ...     
     */

// II. DOM ( Document Object Model )
    // The Document Object Model represents all page content as objects that can be modified.

    // The "document" object is the main "entry point" to the page. We can change or create anything on the page using it:
        // document.body.style.background = "red";

    // Note! DOM is not only for browsers: it explains the structure of a document and provides objects to manipulate it, so there are non-browser instruments that use DOM too.

// III. BOM ( Browser Object Model )
    /** The Browser Object Model represents additional objects provided by the browser (host environment) for working with everything except the document:
     * The "navigator" object provides background information about the browser and the operating system. For example, "navigator.userAgent": about the current browser; and "navigator.platform": about the platform (Windows/Linux/MacOS).
     * The "location" object allows us to read the current URL and can redirect the browser to a new one:
        alert(location.href);
        if (confirm("Go to Wikipedia?")) {
            location.href = "https://wikipedia.org";
        }  
     */

    // The functions alert / confirm / prompt are also a part of the BOM: they are not directly related to the document, but represent pure browser methods for communicating with the user.

// Summary
    // DOM specification: describes the document structure, manipulations, and events.
    // CSSOM specifitation: describes stylesheets and style rules, manipulations with them, and their binding to documents.
    // HTML specification: describes the HTML language and also the BOM - various browser functions (setTimeout, alert, locaiton); it take the DOM specification and extends it with many additional properties and methods.