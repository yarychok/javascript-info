// I. About Drag'n'Drop

    // Taking something and dragging and dropping it's a clear and simple way to do many things, from copying and moving documents (as in file managers) to ordering (dropping items into a cart).

    // In the modern HTML standard there's a section about Drag and Drop with special events such as: dragstart, dragend, etc.

        // These events allow us to support special kinds of drag'n'drop, such as handling dragging a file from OS file manager and dropping it into the browser window. Then JavaScript can access the contents of such files.

        // But native Drag Events also have limitations: we can't prevent dragging from a certain area, we can't make the dragging "horizontal" or "vertical" only, mobile device support for such event is weak.

// II. Drag'n'Drop algorithm

    /** The basic Drag'n'Drop algorithm looks like this:
     * mousedown: prepare the element for moving, if needed (maybe create a clone of it, add a class to it or whatever).
     * mousemove: move it by changing "left"/"top" with "position: absolute".
     * mouseup: perform all actions related to finishing the drag'n'drop.
     */

        // The implementation may looks like this:

            // element.onmousedown = function(event) {

            //     let shiftX = event.clientX - element.getBoundingClientRect().left;
            //     let shiftY = event.clientY - element.getBoundingClientRect().top;

            //     // prepare to moving: make absolute and on top by z-index
            //     element.style.position = 'absolute';
            //     element.style.zIndex = 1000;

            //     // move it out of any current parents directly into body to make it positioned relative to the body
            //     document.body.append(element);

            //     // centers the element at (pageX, pageY) coordinates
            //     function moveAt(pageX, pageY) {
            //         element.style.left = pageX - shiftX + 'px';
            //         element.style.left = pageY - shiftY + 'px';
            //     }

            //     // move our absolutely positioned element under the pointer
            //     moveAt(event.pageX, event.pageY);

            //     function onMouseMove(event) {
            //         moveAt(event.pageX, event.pageY);
            //     }

            //     // move the element on mousemove
            //     document.addEventListener('mousemove', onMouseMove);

            //     // drop the element, remove unneeded handlers
            //     element.onmouseup = function() {
            //         document.removeEventListener('mousemove', onMouseMove);
            //         element.onmouseup = null;
            //     };

            //     // disable browser's drag'n'drop support for images or some other elements to make the correct behavior
            //     element.ondragstart = function() {
            //         return false;
            //     } 
            // };

// III. Potential drop targets (droppables)

    // The previous example the element could be dropped just anywhere to stay, but in real-life we usually want to take one element and drop it onto another: file into a golder or something else.

        // In other words, we take a "draggable" element and drop it onto "droppable" element.

        /** We need to know:
         * where the element was dropped at the end of Drag'n'Drop to do the corresponding action
         * and preferably, know the droppable we're dragging over, to highlight it.
         */

    // document.elementFromPoint(clientX, clientY) returns the most element on given window-relative coordinates (or null if given coordinates are out of the window); if there are multiple overlapping elements on the same coordinates, then the topmost one is returned.

        // We can use it in any of our mouse event handlers to detec the potential droppable under the pointer:

            // element.hidden = true;

            // let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            // element.hidden = false;

                // We need to hide the element before the call, otherwise we'll usually have an element on these coordinates, as it's the top element under the pointer: elemBelow=elem (we hide it and immediately show again).

    // See the separate folder: Drag the ball

// Summary

    /** The key components of basic Drag'N'Drop algorithm:
     * Events flow: elem.mousedown -> document.mousemove -> elem.mouseup (do not forget about canceling native "ondragstart").
     * At the drag start - remember the initial shift of the pointer relative to the element: "shiftX"/"shiftY" and keep it during the dragging.
     * Detect droppable elements under the pointer using "document.elementFromPoint".
     */

    /** We can lay a lot on this foundation:
     * On "mouseup" we can intellectually finalize the drop: change data, move element around.
     * We can highlight the elements we're flying over.
     * We can limit dragging by a certain area or direction.
     * We can use event delegation for "mouseup"/"mousedown". A large-area event handler that checks "event.target" can manage Drag'N'Drop for hundreds of elements.
     * etc...
     */

    // There are frameworks that build architecture over it: "DragZone", "Droppable", "Draggable" and other classes. Most of them do the similar stuff to what's described above, so it shoul be easy to understand them now.

// Tasks(1)

    // Slider: separate folder
