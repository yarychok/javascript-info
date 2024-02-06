    // The browser allows us to track the loading of external resources: scripts, iframes, pictures and so on.

    /** There are two events for it:
     * onload - successful load.
     * onerror - an error occurred.
     */

// I. Loading a script

    // How to run the function that is declared inside a third-party script: "load" event - it triggers after the script was loaded and executed.

        // So in "onload" we can use script variables, run functions, etc.

    // ... And what if the loading failed: no such script (error 404) or the server is down (unavailable).

        // Errors that occur during the loading of the script can be tracked in an "error" event; but it's not related to HTTP error details: we don't know whether error is 404 or 500 or something else.

    // Important! Event "onload"/"onerror" track only the loading itself.

        // Error that may occur during script processing and execution are out of scope for these events. That is: if a script loaded successfully, then "onload" triggers, even if it has programming error in it. To track script error, one can use "window.onerror" global handler.

// II. Other resources

    // The "load" and "error" events also work for other resources, basically for any resource that has an external "src".

    /** Some notes:
     * Most resources start loading when they are added to the document. But <img> is an exception: it starts loading when it gets a src.
     * For <iframe>, the "iframe.onload" event triggers when the iframe loading finished, both for successful load and in case of an error.
     */

// III. Cross-origin policy

    // There's a rule: scripts from one site can't access contents of the other site.
        
        // To be more precise, one origin (domain/port/protocol triplet) can't access the the content from another one. So even if we have a subdomain, or just another port, these are different origins with no access to each other.

    // To allow cross-origin access, the <script> tag needs to have the "crossorigin" attribute, plus the remote server must provide special headers.

    /** Three levels of cross-origin access:
     * No "crossorigin" attribute - access prohibited.
     * "crossorigin="anonymous"" - access allowed if the server responds with the header "Access-Control-Allow-Origin" with "*" or our origin. Browser does not send authorization information and cookies to remote server.
     * "crossorigin="use-credentials"" - access allowed if the server sends back the header "Access-Control-Allow-Origin" with our origin and "Access-Control-Allow-Credentials: true". Browser sends authorization information and cookies to remote server.
     */