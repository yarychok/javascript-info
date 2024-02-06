
    // An element receives the focus when the user either clicks on it or uses the Tab key on the keyboard. There's also an "autofocus" HTML attribute that puts the focus onto an element by default when a page loads and other means of getting the focus.

        // Focusing on an element generally means: "prepare to accept the data here", so that's the moment when we can run the code to initialize the required functionality.

    // The moment of losing the focus ("blur") can be even more important. That's when a user clicks somewhere else or pressed Tab to go to the next form field, or there are other means as well.

        // Losing the focus generally means: "the data has been entered", so we can run the code to check it or event to save it to the server and so on.

// I. Events focus/blur

    // The "focus" event is called on focusing, and "blur" - when the element losed the focus.

        /** For instance:
         * onblur handler checks if the field has an email entered, and if not - shows an error.
         * focus handler hides the error message (on "blur" it will be checked again).
         */

// II. Methods focus/blur

    // Methods "elem.focus()" and "elem.blur()" set/unset the focus on the element. 

        // If we enter something into the input and then try to use Tab or clock away from the <input>, then "onblur" returns the focus back.

// III. Allow focusing on any element: tabindex

    // By default, many elements do not support focusing.

    // The list varies a bit between browsers, but one thing is always correct: "focus"/"blur" support is guaranteed for elements that a visitor can interact with: <button>, <input>, <a> and so on.

        // On the other hand, elements that exist to format something, such as <div>, <span>, <table> - are unfocusable by default. The method "elem.focus()" doesn't work on them, and "focus"/"blur" events are never triggered.

        // This can be changed using HTML-attribute "tabindex".
    
    // Any element becomes focusable if it has "tabindex". The value of the attribute is the order number of the element when Tab (or something like that) is used to switch between them.

        // If we have two elements, the first has "tabindex="1"", and the second has "tabindex="2"", then pressing Tab while in the first element - moves the focus into the second one.

// VI. Delegation: focusin/focusout

    // Events "focus" and "blur" do not bubble; but it propagate down on the capturing phase.

    // Exactly the same "focusin" and "focusout" events, but they bubble.

        // Note that they must be assigned using "elem.addEventListener", bot "on<event>".
