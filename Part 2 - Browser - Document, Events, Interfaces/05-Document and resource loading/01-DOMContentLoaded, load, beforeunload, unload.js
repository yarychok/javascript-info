    /** The lifecycle of an HTML page has three important events:
     * DOMContentLoaded: the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures and stylehseets may not yet have loaded.
     * load: not only HTML is loaded, but also all the external resources: images, styles etc.
     * beforeunload/unload: the user is leaving the page.
     */

    /** Each event may be useful:
     * DOMCOntentLoaded: DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
     * load: external resources are loaded, so styles are applied, image sizes are known etc.
     * beforeunload: the user is leaving: we can check if the user saved the changes and ask them whether they are really want to leave.
     * unload: the user almost left, but we still can initiate some operations, such as sending out statistics.
     */

// I. DOMContentLoaded

    // The "DOMContentLoaded" event happens on the "document" object; we must use "addEventListener" to catch it:
        // document.addEventListener("DOMContentLoaded", ready);

    // When the browser processes an HTML-document and come across a <script> tag, it needs to execute before continuing building the DOM. That's a precaution, as scripts may want to modify DOM, and even "document.write" into it, so "DOMContentLoaded" has to wait.
        // So DOMContentLoaded happens after such scripts.

    // External style sheets don't affect DOM, so DOMContentLoaded does not wait for them.
        // But there's a pitfall, if we have a script after the style, then that script must wait until the stylesheet loads.

        // The reason for this is that the script may want to get coordinates and other style-dependent properties of elements.

    // Firefox, Chrome and Opera autofill forms on "DOMContentLoaded".
        // For instance, if the page has a form with login and password, and the browser remembered the values, then on "DOMContentLoaded" it may try to autofill them (if approved by the user).

        // So if "DOMContentLoaded" is postponed by long-loading scripts, then autofill also awaits.

// II. window.onload

    // The "load" event on the "window" object triggers when the whole page is loaded including styles, images and other resources. This event is available via the "onload" property.

// III. window.onunload

    // When a visitor leaves the page, the "unload" event triggers on "window". We can do something there that doesn't involve a delay, like closing related popup windows.

// VI. window.onbeforeunload

    // If a visitor initiated navigation away from the page or tries to close the window, the "beforeunload" handler asks for additional confirmation.

// V. readyState
    // There are cases when we are not sure whether the document is ready or not. We'd like our function to execute when the DOM is loaded.

        /** The "document.readyState" property tells us about the current loading state, and there are 3 possible values:
         * loading: the document is loading
         * interactive: the document was fully read
         * complete: the document was fully read and all resources are loaded
         */

// Summary:

// Page load events:
    // The "DOMContentLoaded" event triggers on "document" when the DOM is ready.
        // We can apply JavaScript to elements at this stage, such as scripts, images and other resources.

    // The "load" event on "window" triggers when the page and all resources are loaded; rarely used since there's usually no need to wait so long.

    // The "beforeunload" event on "window" triggers when the user wants to leave the page; if we cancel the event, browser asks whether the user really wants to leave.

    // The "unload" event on "window" triggers when theuser is finally leaving, in the handler we can only do simple things that do not involve delayes os asking a user; because of that limitation, it's rarel used - but we can send out a network request with "navigator.sendBeacon".

    // "document.readyState" is the current state of the document, changes can be tracked in the "readystatechange" event: loading, interactive, complete states.



