// I. Briefly about

    // Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen.

    // The standard Pointer Events provides a sinsgle set of events for all kinds of pointing devices.

        // There's no point in using mouse or touch events any more - we can switch to pointer events that will work well with both touch and mouse devices.

// II. Pointer events types

    /** Naming are similar to mouse events:
     * pointerdown: mousedown
     * pointerup: mouseup
     * pointermove: mousemove
     * pointerover: mouseover
     * pointerout: mouseout
     * pointerenter: mouseenter
     * pointerleave: mouseleave
     * ...
     */

// III. Pointer events properties

    /** Pointer events have the same properties as mouse events, such as "clientX"/"clientY", "target", etc:
     * pointerId: the unique identifier of the pointer causing the event.
        Browser-generated; allows us to handle multiple pointers, such as a touchscreen with stylus and multi-touch.
     * pointerType: the pointing device type, must be a string, like "mouse", "pen" or "touch".
     * isPrimary: is "true" for the primary pointer (the first finger in multi-touch).
     */

    /** Some pointer devices measure contact area and pressure; e.g. for a finger on the touchscreen, there are additional properties for that:
     * width: the width of the area where the pointer (finger) touches the device; for a mouse it's always "1".
     * height: the height of the area where the pointer touches the device; for a mouse it's always "1".
     * pressure: the pressure of the pointer tip, in range from 0 to 1; for devices that don't support pressure must be either "0.5" for pressed or "0".
     * tangentialPressure: the normalized targential pressure.
     * tiltX, tiltY, twist: pen-specific properties that descrive how the pen is positioned relative to the surface.
     */

// IV. Multi-touch

    // On of the things that mouse events totally don't support is multi-touch: a usec can touch in several places at once on their phone or tablet, or perform special gestures.

        // Pointer Events allow handling multi-touch with the help of the "pointerId" and "isPrimary" properties.

        // What happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it:

            /** At the first finger touch:
             * "pointerdown" with "isPrimary=true" and some "pointerId"
             */
            /** For the seconds finger and more fingers (assuming the first one is still touching)
             * "pointerdown" with "isPrimary=false" and a different "pointerId" for every finger.
             */


// V. Event: pointercancel

    /** The "pointercancel" event fires when there's an ongoing pointer interaction, adn then something happens that causes it to be aborted, so that no more pointer events are generated:
     * The pointer device hardware was physically disabled.
     * The device orientation changed (tablet rotated).
     * The browser decided to handle the interaction on its own, considering it a mouse gesture or zoom-and-pan action or something else.
     */

    /** The flow of user actions with events:
     * pointerdown: the user presses on an element. e.g. to start dragging.
     * pointermove: then they start moving the pointer (thus dragging the element).
     * pointercancel: if we forgot to prefent browser's native drag'n'drop support (ondragstart). 
     */

// VI. Pointer capturing

    // elem.setPointerCapture(pointerId): binds events with the given "pointerId" to "elem". After the call all pointer events with the same "pointerId" will have "elem" as the target (as if happened on "elem"), no matter where in document they really happened.

        // In other words, it retargets all subsequent events with the given "pointerId" to "elem".

        /** The binding is removed:
         * Automatically when "pointerup" or "pointercancel" events occur.
         * Automatically when "elem" is removed from the document.
         * When "elem.releasePointerCapture(pointerId)" is called.
         */

    // Pointer capturing can be used to simplify drag'n'drop kind of interactions.

    /** Pointer capturing events:
     * gotpointercapture: fires when an element uses "setPointerCapture" to enable capturing.
     * lostpointercapture: fires when the capture is released: either explicitly with "releasePointerCapture" call, or automatically on "pointerup"/"pointercancel". 
     */
    
// Summary

    // Pointer events allow handling mouse, touch and pen events simultaneously, with a single piece of code.

    // Pointer events extend mouse events. We can replace "mouse" with "pointer" in event names and expect our code to continue working for mouse, with better support for other device types.

    // For drag'n'drops and complex touch interactions that the vrowser may decide to hijack and handle on its own - we should cancel the default action on events and set "touch-action: none" in CSS for elements that we engage.

    /** Additional abilities of pointer events are:
     * Multi-touch support using "pointerId" and "isPrimary".
     * Device-specific properties, such as "pressure", "width", "height", etc.
     * Pointer capturing: we can retarget all pointer events to a specific element until "pointerup"/"pointercancel".
     */

















