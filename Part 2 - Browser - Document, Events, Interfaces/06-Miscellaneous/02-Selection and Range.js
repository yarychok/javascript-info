    // JavaScript can access an existing selection, select/deselect DOM nodes as a whole or partially, remove the selected content from the document, wrap it into a tag, and so on.

// I. Range

    // The basic concept of selection is Range, that is essentially a pair of "boundary points": range start and range end:
        
        // let range = new Range();

        // Then we can set the selection boundaies using "range.setStart(node, offset)" and "range.setEnd(node, offset)".

    // Selecting the text partially:

        // The interesting thing is that the first argument "node" in both methods can be either a text node or an element node, and the meaning of the second argument depends on that.

            // If "node" is a text node, then "offset" must be the position in its text:

                // <p id="p">Hello</p>
                // <script>
                //     let range = new Range();
                //     range.setStart(p.firstChild, 2);
                //     range.setEnd(p.firstChild, 4);

                //     console.log(range); // ll
                // </script>

    // Selecting element nodes:

        // Alternatively, if "node" is an element node, then "offset" must be the child number.

            // For example:

                // <p>Example: <i>italic</i> and <b>bold</b></p>
                    //     0        1         2       3

                // <script>
                //     let range = new Range();

                //     range.setStart(p, 0);
                //     range.setEnd(p, 2);

                //     console.log(range); // Example: italic

                //     document.getSelection().addRange(range);
                // </script>

// II. Selection

    // "Range" is a generic object for managing selection ranges. Although, creating a "Range" doesn't mean tthat we see a selection on screen.

    // We may create "Range" objects, pass the around - they do not visually select anything on their own.

    // The document selection is represented by "Selection" object, that can be obtained as "window.getSelection()" or "document.getSelection()". A selection amy include zero or more ranges.

        