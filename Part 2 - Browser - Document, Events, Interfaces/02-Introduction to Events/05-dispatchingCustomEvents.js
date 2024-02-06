    // We can not only assign handlers, but also generate events from JavaScript.

        // Custom events can be used to create "graphical components". For instance, a root element of our own JS-based menu may trigger events telling what happens with the menu: "open" (menu open), "select" (an item is selected) and so on. Another code may listen for the events and observe what's happening with the menu.

        // We can generate not only completely new events, that we invent for our own purposes, but also built-in ones, such as "click", "mousedown", etc.
        // That may be helpful for automated testing.

// I. Event constructor

    // Built-in event classes form a hierarchy, similar to DOM element classes:
        // let event = new Event(type[, options]);

        /** Arguments:
         * type: event type, a string like "click" or our own like "my-event"
         * options: the object with two optional properties:
            * bubbles: true/false
            * cancelable: true/false (default actions may be prevented) 
         */

            // By default both are false: {bubbles: false, cancelable: false}.


// II. dispatchEvent

    // After an event object is created, we should "run" it on an element using the call "elem.dispatchEvent(event)".

        // Then handlers react on it as if it were a regular browser event. If the event was created with the "bubbles" flag, the in bubbles.

            // There is a way to tell a "real" user event from a script-generated one.
            // The property "event.isTrusted" is "true" for events that come from real user actions and "false" for script-generated events.

// III. Bubbling example

    // <h1 id="elem">Hello from the script</h1>

    // <script>
    //     document.addEventListener("hello", function(event) {
    //         alert("Hello from " + event.target.tagName);
    //     });

    //     let event = new Event("hello", {bubbles: true});
    //     elem.dispatchEvent(event);
    // </script>

        /** Notes:
         * We should use "addeventListener" for our custom events, because "on<event>" only exists for built-in events: "document.onhello" doesn't work.
         * Must set "bubbles: true", otherwise the event won't bubble up.
         */

// IV. MouseEvent, KeyboardEvent, and others

    /** Here's a short list of classes for UI Events from the UI Event specification:
     * UIEvent
     * FocusEvent
     * MouseEvent
     * WheelEvent
     * KeyboardEvent
     * ...
     */

    // We should use them insted of "new Event" if we want to create such events:
        // let mouseEvent = new MouseEvent("click");

        // The right constructor allows to specify standard properties for that type of event, like "clientX/clientY".

// V. Custom events

    // For our own, completely new events types like "hello" we should use "new CustomEvent". 
    // Technically, "CustomEvent" is the same as "Event", with one exception.

        // In the second argument (object) we can add an additional property "detail" for any custom information that we want to pass with the event.
        

// VI. event.preventDefault()

    // For new, custom events, there are definitely no default browser acitons, but a code that dispatches such event may have its own plans what to do after triggering the event.

        // By calling "event.preventDefault()", an event handler may send a signal that those actions should not be canceled.
        // In that case the call to "elem.dispatchEvent(event)" returns "false". And the code that dispatched it knows that it shouldn't continue.

// VII. Events-in-events are synchronous

    // Usually events are processed in a queue. That is: if the browser is processing "onclick" and a new event occurs, then it is queued up, and will be called after first event processing is finished.

        // The notable exception is when one event is initiated from within another one. Such events are processed immediately: the new event handlers are called, and then the current ebent handling is resumed.
            // todo example

// Summary

    // To generate an event from code, we first need to create an event object.

    // Constructors of native events like "MouseEvent", "KeyboardEvent" and so on accept properties specific to that event type. For instance, "clientX" for mouse events.

    // For custom events we should use "CustomEvent" constructor. It has an additional option named "detail", we should assign the event-specific data to it. Then all handlers can access it as "event.detail"

    // Despite the techinal possibility of generating browser events like "click" or "keydown", we should use them with great care.

        // We shouldn't generate browser events as it's a hacky way to run handlers. That's bad architecture most of the time.

    /** Native events might be generated:
     * As a dirty hack to make 3rd-party libraries work the needed way, if the don't provide other means of interaction.
     * For automated testing, to "click the button" in the script and see if the interface reacts correctly.
     */

    // Custom events with our own names are often generated for architectural purposes, to signal what happens inside our menus, cliders, carousels, etc.