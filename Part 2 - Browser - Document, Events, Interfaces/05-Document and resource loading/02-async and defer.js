    // When the browser loads HTML and comes across a <script> tag, it can't continue building the DOM - it must execute script right now: the browser waiting for the script to download, execute the downloaded script, and only then can it process the rest of the page.

    /** That leads to 2 importand issues:
     * Scripts can't see DOM elements below them, so they can't add handlers, etc
     * If there's a bulky script at the top of the page, it "block the page". Users can't see the page content till it downloads and runs.
     */

    // There are some workarounds to that: we can put a script at the bottom of the page, then it can see elements above it.
        // But this solution is far from perfect: the browser notices the script ( and can start downloading it) only after it downloaded the full HTML document - for long HTML documents there may be a noticeable delay.

        // Such things are invisible for people using very fast connections, but many people in the world still have slow internet speeds and use a for-from-perfect mobile internet connection - so there are two <scripts> attributes for us: "defer" and "async".

// I. defer

    // The "defer" attribute tells the browser not to wait for the script; instead, the browser will continue to process the HTML, build DOM. The scripts loads "in the background", and then runs when the DOM is fully built.

        /** So:
         * Scripts with "defer" never block the page.
         * Scripts with "defer" always execute when the DOM is ready ( but before DOMContentLoaded event: the page content shows up immediately; event handler waits for the deferred scripts, and only triggers when the scripts is downloaded and executed).
         */

    // Deferred scripts keep their relative order, just like regular scripts.

// II. async

    /** The "async" is somewhat like "defer": it also makes the script non-blocking, but has important differences - it's completely independent:
     * The browser doesn't block on "async" scripts (like "defer").
     * Other scripts don't wait for "async" scripts, and "async" scripts don't wait for them.
     * "DOMContentLoaded" and async scripts don't wait for each other:
        * "DOMContentLoaded" may happen both before (if an async script finishes loading after the page is complete) and after an async scripts (if an async script is short or was in HTTP-cache). 
     */

        // In other words, "async" scripts load in the background and run when ready. The DOM and other scripts don't wait for them, and they don't wait for anything.

    /** So:
     * The page content shows up immediately: "async" doesn't block it.
     * "DOMContentLoaded" may happen both before ans after "async", no guarantees here.
     * A smaller scripts goes second, but probably loads before first one, so "small.js" would run first. Although, it might be that "long.js" loads first, if cached, then it runs first. In other words, async scripts run in the "load-first" order (not relative).
     */

    // Async scripts are great when we integrate an independent third-party script into the page: counters, ads, and so on, as they don't depend on our scripts, and our scripts shouldn't wait for them.

    // Note! Just like "defer", the "async" attribute is ignored if the <script> tag has no "src" - it's only for external scripts.

// III. Dynamic scripts

    // One more important way of adding a script to the page: we can create a script and append it to the document dynamically using JavaScript:

        // let script = document.createElement('script');
        // script.src = "/article/script-async-defer/long.js";
        // document.body.append(script);

        // The script starts loading as soon as it's appended to the document.
    
    // Dynamic scripts behave as "async" by default.

        /** That is:
         * They don't wait for anything, nothing waits for them.
         * The script loads first - runs first ("load-first" order).
         */

        // But this can be changed if we explicitly set "script.async=false". Then script will be executed in the docuremtn order, just like "defer".