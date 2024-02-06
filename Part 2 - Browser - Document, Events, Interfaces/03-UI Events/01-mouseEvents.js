// I. Mouse event type

    /** We've already seen some of these events:
     * mousedown/mouseup: mouse button is clicked/released over an element
     * mouseover/mouseout: mouse pointer comes over/out from an element
     * mousemove: every mouse move over an element triggers that event
     * click: triggers after "mousedown" and then "mouseup" over the same element if the lmb was used
     * dblclick: triggers after two click on the same element within a short timeframe
     * contextmenu: triggers after the right mouse button is pressed
     * and much more...
     */

// II. Events order

    // In cases when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order: 
        // for left click: mousedown -> mouseup -> click
        // for right click: mousedown -> mouseup -> contextmenu
        
// III. Mouse button

    // Click-related events always have the "button" property, which allows to get the exact mouse button.

        // mousedown/mouseup handlers may need "event.button", because these events trigger on any button, so "button" allows to distinguish between "right-mousedown" and "left-mousedown".

// IV. Modifiers: shift, alt, ctrl and meta

    // All mouse events include the information about pressed modifier keys.

        /** Event properties:
         * shiftKey: Shift
         * altKey: Alt / Opt for Mac
         * ctrlKey: Ctrl
         * metaKey: Cmd for Mac
         */

            // So they are "true" if the corresponding key was pressed during the event.

// V. Coordinates: clientX/Y, pageX/Y

    /** All mouse events provide coordinates in two flavours:
     * Window-relative: "clientX" and "clientY"
     * Document-relative: "pageX" and "pageY"
     */

// Summary

    /** Mouse events have the following properties:
     * Button: "button"
     * Modifier keys: "altKey", "ctrlKey", "shiftKey" and "metaKey"
     * Window-relative coordinates: "clientX"/"clientY"
     * Document-relative coordinates: "pageX"/"pageY"
     */

    // The default browser action of "mousedown" is text selection, if it's not good for the interface, then it should be prevented.

// Task(1)
    // Selectable list: separate folder