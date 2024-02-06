// I. Events mouseover/mouseout, relatedTarget

    // The "mouseover" occurs when a mouse pointer comes over an elemenent, and "mouseout" - when it leaves:
        // mouseover -> <div> -> mouseout

    // These events are special, because they have property "relatedTarget". This property complements "target". When a mouse leave one element for another, one of them becomes "target", and the other one - "relatedTarget".

        /** For "mouseover":
         * event.target: is the element where the mouse came over
         * event.relatedTarget: is the element from which the mouse came 
         */

            // relatedTarget -> target
        
        // For "mouseout" the reverse: target -> relatedTarget

// II. Skipping elements

    // The "mouseover" event triggers when the mouse moves, but that doesn't mean that every pixel leads to an event.

        // The browser check the mouse position from time to time, and if it notices changes then triggers the events.

        // That means that if the user is moving the mouse very fast then some DOM-elements may be skipped. So the mouse pointer doesn't only "visit" the elements, but it can also "jump".

            // Note, if "mouseover" triggered, there must be "mouseout".

// III. Mouseout when leaving for a child

    // An important feature of "mouseout" - it triggers, when the pointer moves from an element to its descendant:
        // from #parent to #child:
        // <div id ="parent">
        //     <div id="child>...</div>"
        // </div>

        // That's because according to the browser logic, the mouse cursor may be only over a single element at any time - the most nested one and top by z-index.

    // Note! The "mouseover" event on a descendant bubbles up. So, if "#parent" has "mouseover" handler, it triggers.

// IV. Events mouseenter and mouseleave

    // Events "mouseenter"/"mouseleave" are like "mouseover"/"mouseout". They trigger when the mouse pointer enters/leaves the element.

        /** But there are two important differences:
         * Transitions inside the element, to/from descendants, are not counted.
         * Events "mouseenter"/"mouseleave" do not bubble.
         */

            /** So these events are extremely simple:
             * When the pointer enters an element - "mouseenter" triggers. The exact location of the pointer inside the element or its descendants doesn't matter.
             * When the pointer leave an element - "mouseleave" triggers.
             */

// V. Event delegation

    // If "mouseenter"/"mouseleave" do not bubble, so we can't use event delegation with them.

    /** The important features are:
     * We can use event delegation to handle entering/leaving of any child element inside parent, so it relies on "mouseover"/"mouseout" instead of "mouseenter"/"mouseleave" that don't bubble and hence allow no delegation.
     * Extra events, such as moving between descendants of child element are filtered out, so that "onEnter"/"onLeave" runs only if the pointer leaves or enters child element as a whole.
     */

// Summary

    // We covered events: "mouseover", "mouseout", "mousemove", "mouseenter" and "mouseleave".

    /** Note:
     * A fast mouse move may skip intermediate elements.
     * Events "mouseover"/"mouseout" and "mouseenter"/"mouseleave" have an additional property: "relatedTarget". That's the element that we are coming from/to, complementary to "target".
     */

    // Events "mouseover"/"mouseout" trigger even when we go from the parent element to a child element. The browser assumes that the mouse cna be only over one element at one time - the deepest one.

    // Events "mouseenter"/"mouseleave" are different in that aspect:

