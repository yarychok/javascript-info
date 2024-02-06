// I. Scrolling 

    // The "scroll" event allows reacting to a page or element scrolling. 
    /** There are quire a few good things we can do here:
     * Show/hide additional controls or information depending on where in the document the user is.
     * Load more data when the user scrolls down till the end of the page.
     */

// II. Prevent scrolling

    // We can't prevent scrolling by using "event.preventDefault()" in "onscroll" listener, because it triggers after the scroll has already happened.

        // But we can prevent scrolling by "event.preventDefault()" on an event that causes the scroll, for instance "keydown" event for "pageUp" and "pageDown".

        // If we add an event handler to these events and "event.preventDefault()" in it, then the scroll won't start.

    // The most reliable way to initiate a scroll is to use CSS, "overflow" property.