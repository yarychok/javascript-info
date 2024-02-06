// I. Bubbling

    // When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

    // The process is called "bubbling", because events "bubble" from the inner element up through parents like a bubble in the water.

    // Alsmost all events bubble.

        // The keyword is "almost": a "focus" event does not bubble, and much more, but still it's an exception rather than a rule.

// II. event.target

    // A handler on a parent element can always get the details about where it actually happened.

    // The most deeply nested element that caused the event is called a target element, accessible as "event.target".

    /** Note the differences from "this" (="event.currentTarget")
     * event.target: is the "target" element that initiated the event, it doesn't change through the bubbling.
     * this: is the "current" element, the one that has a currently running handler on it.
     */

// III. Stopping bubbling

    // A bubbling events goes upwarts till <html>, and then to "document" object, and some events can even reach "window", calling all handlers on the path.

        // But any handler may device that the event has been fully processed and stop the bubbling. The method for it is:
            // even.stopPropagation();

            // For instance:

                // <body onclick="alert(`the bubbling doesn't reach here`)">
                //     <button onclick="event.stopPropagation()">Click me</button>
                // </body>

    // Note! If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

        // In other words, "event.stopPropagation()" stops the move upwards, but on the current element all other handlers will run.

        // To stop the bubbling and prevent handlers on the current element from running, there's a method "event.stopImmediatePropagation()". After it no other handlers execute.

    // Note! Do not stop bubbling without a need!

// VI. Capturing

    // Another phase of event processing that is rarely used in real code called "capturing".

    /** The standard DOM Events describes 3 phases of event propagation:
     * Capturing phase: the event goes down to the element.
     * Target phase: the even reached the target element.
     * Bubbling phase: the event bubbles up from the element.
     */


