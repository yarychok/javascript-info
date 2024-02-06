// I. Preventing browser actions

    /** There are two ways to tell the browser we don't want it to act:
     * The main way is to use the "event" object: "event.preventDecault()"
     * If the handler is assigned using "on<event>", then returning "false" also works the same.
     */

        // In this HTML code, a click on a link doesn't lead to navigation, the browser doesn't do anything:

            // <a href='/' onclick="return false">Click here</a>
            // <a href='/' onclick="event.preventDefault()">Or click here</a>

                // Note! The value returned by an event handler is ususally ignored, but the only exception is "return false" from a handler assigned using "on<event>".

    // Certain events flow one into another, so if we prevent the first event, there will be no second.

// II. The "passive" handler option

    // The optional "passive: true" option of "addEventListener" signals the browser that the handler is not going to call "preventDefault()".

        // There are some events like "touchmove" on mobile devices (when the user moves their finger across the screen), that cause scrolling by default, but that scrolling can be prevented using "preventDefault()" in the handler.

// III. event.defaultPrevented

    // The property "event.defaultPrevented()" is "true" if the default action was prevented, and "false" otherwise.

        // Interesting use case: instead of "event.stopPropagation()" that stopping bubbling, we can use "event.defaultPrevented" to signal other event handlers that hte event was handled.

            // Example: by default the browser on "contextmenu" event (right mouse click) shows a context menu with standard options. We can prevent it and show our own, like this:

                // <button>Right-click shows browser context menu</button>

                // <button oncontextmenu="alert('Draw our menu'); return false">
                //     Right-click shows our context menu
                // </button>

// Summary

    /** There are many default browser actions:
     * mousewodn: starts the selections
     * click on <input type="checkbox">: checks/unchecks the "input"
     * submit: click an <input type="submit"> or hitting "Enter" inside a form field causes this event to happen, and the browser submits the form after it
     * keydown: pressing a key may lead to adding a character into a field, or ther actions
     * contextmenu: the event happens on a right-click, the actions is to show the browser context menu
     * ... and much more ...
     */ 

    // All the default actions can be prevented if we want to handle the event exclusively by JavaScript.

    // To prevent a default action - use either "event.preventDefault()" or "return: false". THe second method works only for handlers assigned with "on<event>".

    // The "passive: true" option of "addEventLustener" tells the browser that the action is not going to be prevented. That's useful for some mobile events, like "touchstart" and "touchmove", to tell the browser that it should not wait for all handlers to finish before scrolling.

    // If the default actions was prevented, the value of "event.defaultPrevented" becomes "true", otherwise it's false.
 
// Tasks (3) todo