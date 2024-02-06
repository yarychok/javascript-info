// I. Event: change

    // The "change" event triggers when the element has finished changing.

        // For text inputs that means that the event occurs when it loses focus.

        // For other elements: "select", "input type="checkbox/radio"" it trigges right after the selection changes.

// II. Event: input

    // The "input" triggers every time after a value is modified by the user.

        // Unlike keyboards events, it triggers on any value change, even those that does not involve keyboard actions: pasting with a mouse or using speech recognition to dictate the text
        // So this event is the best choice if we want to handle every modification of an <input>.

// III. Events: cut, copy, paste

    // These events occur on cutting/copying/pasting a value.

        // They belong to ClipboardEvent class and provide access to the data that is cut/copied/pasted.

        // We also can use "event.preventDefault()" to abort the action, then nothing gets copied/pasted.

    // Safety restrictions

        // The clipboard is a "global" OS-level thing, so user could switch between various applications, copy/paste different things, and a browser page shouldn't see all that.

        // So most browser allow seamless read/write access to access to the clipboard only in the scope of certain user actions, such as copying/pasting etc.

        // It's forbidden to generate "custom" clipboard events with "dispatchEvent" in all browser except Firefox. And even if we manage to dispatch such event, the specification clearly states that such "syntetic" events must not provide access to the clipboard.