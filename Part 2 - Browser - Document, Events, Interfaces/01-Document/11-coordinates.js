    /** Most JavaScript methods deal with one of two coordinate systems:
     * Relative to the window: similar to "position:fixed", calculated from the window top/left edge.
        * we'll denote these coordinates as "clientX/clientY".
     * Relative to the document: similar to "position:absolute" in the document root, calculated from the document top/left edge.
        * we'll denote them "pageX/pageY".    
     */

    // When the page is scrolled to the very beginning, so that top/left corner of the window is exactly the document top/left corner, these coordinates equal eath other.
    // But after the document shifts, window-relative coordinates of elements change, as element move across the window, while document-relative coordinates remain the same.

// I. Element coordinates: getBoundingClientRect
    // The method "elem.getBoundingClientRect()" returns window coordinates for a minimal rectangle that encloses "elem" as an object of built-in DOMRect class.

    /** Main DOMRect properties:
     * x/y: X/Y-coordinates of the rectangle origin relative to window.
     * width/height: width/height of the rectangle (can be negative).
     */

        /** Additionally, there are delivered properties:
         * top/bottom: Y-coordinate for the top/bottom rectangle edge.
         * left/right: X-coordinate for the left/rifht rectangle edge.
         */

    // Note! Coordinates right/bottom are different from CSS position properties:
        // There are obvious similarities between window-relative coordinates and CSS "position:fixed".

        // But in CSS positioning, "right" property means the distance from the right edhe, and "bottom" property means the distance from the bottom edge.

        // In JavaScript all window coordinates are counted from the top-left corner:
            // left = x
            // top = y
            // right = x + width
            // bottom = y + height

// II. elementFromPoint(x, y)
    // The call to "document.elementFromPoint(x, y)" returns the most nested element at window coordinates (x, y).

        // For instance, the code below highlights and outputs the tag of the element that is now in the middle of the window:
            // let centerX = document.documentElement.clientWidth / 2;
            // let centerY = document.documentElement.clientHeight / 2;

            // let elem = document.elementFromPoint(centerX, centerY);

            // elem.style.background = "red";
            // alert(elem.tagName);

// III. Using for "fixed" positioning
    // Most of time we need coordinates in order to position something.

    // To show something near an element, we can use "getBoundingClientRect" to get its coordinates, and then CSS "position" together with "left/top" (or "right/bottom").

        // For instance, the function below shows the message under "elem":
            // let elem = document.getElementById('coords-show-mark');

            // function createMessageUnder(elem, html) {
            //     let message = document.createElement('div');

            //     message.style.cssText = 'position:fixed; color:red';

            //     let coords = elem.getBoundingClientRect();
                
            //     message.style.left = coords.left + 'px';
            //     message.style.top = coords.bottom + 'px';

            //     message.innerHTML = html;

            //     return message;
            // }

            // and usage:
            
            // let message = createMessageUnder(elem, 'Hello world!');
            // document.body.append(message);
            // setTimeout(() => message.remove(), 5000);

// VI. Document coordinates
    // Document-relative coordinates start from the upper-left corner of the document, not the window.

    // In CSS, window coordinates correspond to "position:fixed", while document coordinates are similar to "position:absolute" on top.

        // We can use "position:absolute" and "top/left" to put something at a certain place of the document, so that it remains there during a page scroll.

        // But we need the right coordinates first; there is no standard method to get the document coordinates, but it's easy to write it.

            /** The two coordinate systems are connected by the formula:
             * pageY = clientY + height of the scrolled-out vertical part of the document
             * pageX = clientX + width of the scrolled-out horizontal part of the document
             */

            // The function "getCoords(elem)" will take window coordinates from "elem.getBoundingClientRect()" and add the current scroll to them:

                // function getCoords(elem) {
                //     let box = elem.getBoundingClientRect();

                //     return {
                //         top: box.top + window.pageYOffset,
                //         right: box.right + window.pageXOffset,
                //         bottom: box.bottom + window.pageYOffset,
                //         left: box.left + window.pageXOffset,
                //     };
                // }

                    // If in the example above we used it with "position:absolute", then the message would stay near the element on scroll.

// Summary

    /** Any point on the page has coordinates:
     * Relative to the window: elem.getBoundingClientRect()
     * Relatice to the document: elem.getBoundingClientRect() plus the current page scroll
     */

    // Window coordinates are great to use with "position:fixed", and document coordinates do well with "position:absolute".

    // Both coordinate systems have their pros and cons; there are times we need one or the other one.



