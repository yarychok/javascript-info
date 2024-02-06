// I. Introduction

    // Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

        // The idea is that if we have a lot of element handled in a similar way, then instead of assigning a handler to each of them - we put a single handler on their common ancestor.

        // In the handler we get "event.target" to see where the event actually happened and handle it.

            // For example, our task it to highlight a cell <td> on click:

                // let selectedTd;

                // table.onclick = function(event) {
                //     let target = event.target;

                //     if(target.tagName != 'TD') return;

                //     highlight(target);
                // }

                // function highlight(td) {
                //     if (selectedTd) {
                //         selectedTd.classList.remove('highlight');
                //     }
                //     selectedTd = td;
                //     selectedTd.classList.add('highlight');
                // }

                // Such a code doesn't care how many cells there are in the table. We can add/remove <td> dynamically at any time and the highlighting will still work.

    /** So, advantages of delegation:
     * We don't need to write the code to assign a handler to each button. Just make a method and pul it in the markup.
     * The HTML structure is flexible, we can add/remove buttons at any time.
     */

// II. The "behavior" pattern

    // We can also use event delegation to add "behavior" to elements declaratively, with special attributes and classes.

        /** The pattern has two parts:
         * We add a custom attribute to an element that describes its behavior.
         * A document-wide handler tracks events, and if an event happens on an attributed element - performs the action.
         */

    // No need to write JavaScript for every element, just use the behavior.
        // The document-level handler makes it work for any element.

            // Note! For document-level handlers - always "addEventListener":
                // When we assign an event handler to the "document" object, we should always use "addEventListener", not "document.on<event>", because the latter will cause conflicts: new handlers overwrite old ones.

// Tasks (4) todo