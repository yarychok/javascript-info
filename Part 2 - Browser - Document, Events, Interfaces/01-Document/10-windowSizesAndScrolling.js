// I. Width/height of the window
    // To get window width and height, we can use:
        // document.documentElement.clientHeight / 
        // document.documentElement.clientWidth

        // Note! window.innerWidth/innerHeight wouldn't work, it includes the scrollbar.

// II. Width/height of the document
    // So theoretically, we could measure the document's full size as:
        // document.documentElement.scrollWidth/scrollHeight.
    // But that's not correct.

    // To reliably obtain the full document height, we should take the maximum of there properties:
        // let scrollHeight = Math.max(
        //     document.body.scrollHeight, document.documentElement.scrollHeight,
        //     document.body.offsetHeight, document.documentElement.offsetHeight,
        //     document.body.clientHeight, document.documentElement.clientHeight
        // );

        // console.log('Full document height, with scrolled out part: ' + scrollHeight);

        // Not a smart logic, but these inconsistencies come from ancient times.

// III. Get the current scroll
    // DOM elements have their current scroll state "scrollLeft/scrollTop" properties.

    // For document scroll, "document.documentElement.scrollLeft/scrollTop" works in most browser.

        // But much easier would be to use the special properties, they are read-only:
            // console.log('Current scroll from the top: ' + window.pageYOffset);
            // console.log('Current scroll from the left: ' + window.pageXOffset);

// VI. Scrolling: scrollTo, scrollBy, scrollIntoView
    // Note! To scroll the page with JavaScript, its DOM must be fully built.
    // For instance, if we try to scroll the page with a script in <head>, it won't work.

    // Regular elements can be scrolled by changing "scrollTop/scrollLeft".

        // We can do the same for the page using "document.documentElement.scrollTop/scrolLeft".

    /** Alternatively, there's a simpler universal solution:
     * The method "window.scrollBy(x, y)" scrolls the page relative to its current position.
     * The method "window.scrollTo(pageX, pageY)" scrolls the page to absolute coordinates, so that the top-left corner of the visible part has coordinates.
     */

// V. scrollIntoView
    /** The call to "elem.scrollIntoView(top)" scrolls the page to make "elem" visible:
     * If "top=true", which is default, then the page will be scrolled to make "elem" appear on the top of the window. The upper edge of the element will be aligned with the window top.
     * If "top=false", then the page scroll to make "elem" appear at the bottom. THe bottom edge of the element will be alligned with the window bottom.
     */

// VI. Forbid the scrolling
    // Sometimes we need to make the document "unscrollable". For instance, when we need to cover the page with a large message requiring immediate attention, and we want the visitor to interact with that message, not with the document.

        // To make the document unscrollable, it's enough to set:
            // document.body.style.overflow = "hidden"

            // The page will "freeze" at its current scroll position.
