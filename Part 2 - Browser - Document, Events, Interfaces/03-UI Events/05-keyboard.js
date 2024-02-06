// I. Keydown and keyup

    // event.code and event.key

        // The "key" property of the event object allows to get the character, while the "code" property of the event object allows to ge the "physical key code".
            // For instance, copying (Ctrl + C) will look like this:

                // keydown key=Control code=ControlLeft ctrlKey
                // keydown key=c code=KeyC ctrlKey
                // keyup key=c code=KeyC ctrlKey
                // keyup key=Control code=ControlLeft

// II. Auto-repeat

    // If a key is being pressed for a long enough time, it starts to "auto-repeat": the "keydown" triggers again and again, and then when it's released we finally get "keyup".
        // So that's normal to have many "keydown" and a single "keyup".

    // For events triggered by auto-repeat, the event object has "event.repeat" property set to "true". 

// III. Default actions

    /** Default actions vary, as there are many possible things that may be initiated by the keyboard:
     * A character appears on the screen.
     * A character is deleted (Delete key).
     * The page is scrolled (PageDown key).
     * The browser opens the "Save Page" dialog (Ctrl + S).
     * etc...
     */

        // Preventing the default action on "keydown" can cancel most of them, with the exception of OS-based special keys.

// IV. Legacy

    // In the past, there was a "keypress", "keyCode", "charCode" and "which" properties of the event object; but there were many browser incompatibilities while working with them, so that developers had to create new, modern events instead of them.

// V. Mobile keyboards

    // When using virtual/mobile keyboards, formally known as IME (Input-Method Editor), the W3C standard states that a KeyboardEvent's "e.keyCode" should be "229" and "e.key" should be "Unidentified".

