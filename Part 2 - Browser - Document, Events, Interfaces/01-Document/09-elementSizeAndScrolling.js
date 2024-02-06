    // There are many JavaScript properties that allow us to read information about element width, height and other geometry featues.

    // We often need them when moving or positioning elements.

// I. Sample element
    /** Usual properties are:
     * width
     * height
     * border
     * padding
     * overflow: for scrolling
     */

    // There are no margins, as they are not the part of the element itself, and there are no special properties for them.

// II. Geometry: Geometry of an element folder

// III. offsetParent, offsetLeft/Top
    // The "offsetParent" is the nearest ancestor that the browser uses for calculating coordinates during rendering.

    // Properties "offsetLeft/offsetTop" provide x/y coordinates relative to "offsetParent" upper-left corner: Geometry of an element folder

    /** There are several occasions when "offsetParent" is "null":
     * For not shown elements (display: none or not in the document)
     * For <body> and <html>
     * For elements with position: fixed
     */

// IV. offsetWidth/Height
    // "offsetWidth/offsetHeight" are providing the "outer" width/height of the element; in other words, its full size including borders: Geometry of an element folder

    // Geometry properties are zero/nulll for elements that are not displayed.

// V. clientTop/Left
    // Inside the element, we have the borders.
    // To measure them, there are properties "clientTop" and "clientLeft": Geometry of an element folder

    // To be more precisely - these properties are not border width/height, but rather relative coordinates of the inner side from the outer side.

        // It becomes visible with scrollbar: "clientLeft" also includes the scrollbar width.

// VI. clientWidth/Height
    // These properties provide the size of the are inside the element borders: Geometry of an element folder.

    // They include the content width together with paddings, without scrollbar.

    // If there are no paddings, then "clientWidth/cliendHeight" is exactly the content are, inside the borders and the scrollbar.

// VII. scrollWidth/Height
    // These properties are like "clientWidth/clientHeight", but they also include the scrolled out (hidden) parts: Geometry of an element folder.

        // We can use these properties to expand the element wide to its full width/height:
            // element.style.height = `${element.scrollHeight}px`;

// VIII. scrollLeft/scrollTop
    // These properties are the width/height of the hidden, scrolled out part of the element: Geometry of an element folder.

    // Most of the geometry properties here are read-only, but "scrollLeft/scrollTop" can be changed, and the browser will scroll the element.

// IX. Don't take width/height from CSS
    /** Two reasons why we use geometry properties instead:
     * CSS width/height depend on another property: "box-sizing" that defines what is CSS width and height - a change in "box-sizing" for CSS purposes may break such JavaScript.
     * CSS width/height may be "auto", for instance for an inline element.
     */

    // Also, sometimes "getComputedStyle" may return us, for instance, width of an element without scrollbar, which would be bad for our purposes.

// Tasks(4)
    // 1. What's the scroll from the bottom?
        // let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

    // 2. What is the scrollbar width?
        // let div = document.createElement('div');

        // div.style.overflowY = 'scroll';
        // div.style.width = '50px';
        // div.style.height = '50px';

        // document.body.append(div);

        // let scrollWidth = div.offsetWidth - div.clientWidth;

        // div.remove();

        // alert(scrollWidth);

    // 3. Place the ball in the field center: separate folder

    // 4. The difference: CSS width versus clientWidth
        /** Differences between "getComputedStyle(elem).width" and "elem.clientWidth":
         * "clientWidth" is numeric, while "getComputedStyle" returns a string with "px" at the end.
         * "getComputedStyle" may return non-numeric width like "auto" for an inline element.
         * "clientWidth" is the inner content are of the element plus paddings, while CSS width is the inner content are without paddings.
         * If there's a scrollbar and the browser reserves the space for it, some browser substract that space from CSS width, and some do not; the "clientWidth" property is always the same: scrallbar size is substracted if reserved.
         */