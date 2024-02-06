    // The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object.

    // All operations on the DOM start with the "document" object, which is the main "entry point" to DOM. From it we can access any node.

// I. On top: documentElement and body
    // The topmost tree nodes are available directly as "document" properties:
        // <html> = document.documentElement
        // "document.documentElement" is the DOM node of the <html> tag.

        // <body> = document.body

        // <head> = document.head

    // Note! In the DOM "null" means "doesn't exist" or "no such node".

// II. Children: childNodes, firstChild, lastChild
    // Child nodes: elements that are direct children; they're nested exactly in the given one. For instance, <head> and <body> are children of <html> element.

    // Descendants: all elements that are nested in the given one, including children, their children, etc.

    // The "childNodes" collection lists all child nodes, including text nodes.

        // For instance, children of "document.body":
            // <script>
            //     for (let i = 0; i < document.body.childNodes.length; i++) {
            //         console.log(document.body.childNodes[i]);
            //     }
            // </script>

        // Note! The last element shown is <script>, as it was the last one in document, so at the moment of the script execution the browser did not read it yet, and script doesn't see it.

    // Properties "firstChild" and "lastChild" give fast access to the first and last children:
        // elem.childNodes[0] === elem.firstChild
        // elemt.childNodes[elem.childNodes.length - 1] === elem.lastChild

    // There's also a special function "elem.hasChildNodes()" to check whether there any child nodes.

    // DOM collections:
        // As we can see, "childNodes" looks like array-like iterable object:
            // We can use "for..of" to iterate over it, because it provides the "Symbol.iterator" property:
                // for (let node of document.body.childNodes) {
                //     console.log(node);
                // }

            // Array methods won't work, because it's not an array:
                // console.log(document.body.childNodes.filter); // undefined (no filter method)

                // But still we can use "Array.from" to create a "real" array from the collection, if we want array methods:
                    // console.log(Array.from(document.body.childNodes).filter); // function <native code>
    
        // DOM collections are read-only:
            // We can't replace a child by assigning "childNodes[i] = ..."
            // Changing DOM needs other methods.
        
        // DOM collections are live:
            // In other words, they reflect the current state of DOM.
            // If we keep a reference to "elem.childNodes", and add/remove nodes into DOM, then they appear in the collection automatically.

        // Don't use "for..in" to loop over collections:
            // Because "for..in" loop iterates over all enumerable properties, and collections have some "extra" rarely used properties that we usually do not want to get.

// III. Siblings and the parent
    // Siblings are nodes that are children of the same parent.
        /** For instance, <head> and <body> are siblings:
         * <body> is said to be the "next" or "right" sibling of <head>.
         * <head> is said to be the "previous" or "left" sibling of <body>.
         */

    // The next sibling is in "nextSibling" property, and the previous one - in "previousSibling".

    // The parent is available as "parentNode":
        // console.log(document.body.parentNode === document.documentElement); // true

        // console.log(document.head.nextSibling); // HTMLBodyElement

        // console.log(document.body.previousSibling); // HTMLHeadElement
    
// VI. Element-only navigation
    // Navigation properties above refer to all nodes: text nodes, element nodes, comments, etc.

    /** Let's see navigation links that only take alement nodes into account:
     * children: only those children that are element nodes.
     * firstElementChild, lastElementChild: first and last element children.
     * previousElementSibling, nextElementSibling: neighbor elements.
     * parentElement: parent element.
     */

// V. More links: tables
    // Certain types of DOM elements may provide additional properties, specific to their type, for convenience.
    /** The <table> element supports:
     * table.rows: the collection of <tr> elements of the table
     * table.caption/tHead/tFoot: references to elements <caption>, <thead>, <tfoot>
     * table.tBodies: the collection of <tbody> elements
     */

        // <thead>, <tfoot>, <tbody> elements provide the rows property:
            // tbody.rows: the collection of <tr> inside
        
        // <tr>:
            // tr.cells: the collection of <td> and <th> cells inside the given <tr>
            // tr.sectionRowIndex: the position of the given <tr> inside the enclosing <thead>/<tbody>/<tfoot>
            // tr.rowIndex: the number of the <tr> in the table as a whole
        
        // <td> and <th>:
            // td.cellIndex: the number of the cell inside the enclosing <tr>

// Summary
    /** Given a DOM node, we can go to its immediate neighbors using navigation properties:
     * For all nodes: parentNode, childNodes, firstChild, previousSibling, nextSibling
     * For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementsSibling, nextElementSibling.
     */ 

// Tasks(3)
    // DOM children:
        // HTML
            // BODY
                // DIV
                // UL
                    // John
                    // Pete
                
        // Accessing <div> DOM node:
            // document.body.firstElementChild;

            // document.body.children[0];

            // document.body.childNodes[1];

        // Accessing <ul> DOM node:
            // document.body.lastElementChild;

            // document.body.children[1];

        // Accessing the second <li>:
            // document.body.lastElementChild.lastElementChild;
    
    // The sibling question:
        // elem.lastChild.nextSibling; // null
        // elem.children[0].previousSibling; // might be null; or some text node

    // Select all diagonal cells: see the separate folder
    // <script>
    //     let table = document.body.firstElementChild;

    //     for (let i = 0; i < table.rows.length; i++) {
    //         let row = table.rows[i];
    //         row.cells[i].style.backgroundColor = 'yellow';
    //     }
    // </script>

    
