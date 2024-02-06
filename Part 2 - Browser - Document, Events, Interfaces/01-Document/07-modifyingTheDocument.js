    // DOM modification is the key to creating "live" pages.

// I. Example: show a message
    // Let's demonstrate an example of adding a message on the page that looks nicer than "alert":
        // <style>
        //     .alert {
        //         padding: 15px;
        //         border: 1px solid #d6e9c6;
        //         border-radius: 4px;
        //         color: #3c763d;
        //         background-color: #dff0d8;
        //     }
        // </style>

        // <div class="alert">
        //     <strong>Hi there!</strong> You've read an important message.
        // </div>

            // Really good looking alert message! :)

// II. Creating an element
    /** To create DOM nodes there are two methods:
     * document.createElement(tag): creates a new element node with the given tag
     * document.createTextNode(text): creates a new text node with the given text
     */

    // Now let's create the same div with JavaScript, assuming that the styles are in the HTML/CSS already.
        // let div = document.createElement('div');

        // div.className = 'alert';

        // div.innerHTML = "<strong>Hi there!</strong> You've read an important message";

// III. Insertion methods
    // Now, to make the div above visible in the page, we need to insert it somewhere into document.

        // There's a special method "append" for that: document.body.append(div)

    /** Here are more insertion methods, they specify different places where to insert:
     * node.append(...nodes or strings): append nodes or strings at the end of node
     * node.prepend(...nodes or strings): insert nodes or strings at the beginning of node
     * node.before(...nodes or strings): insert nodes or strings before node
     * node.after(...nodes or strings): insert nodes or strings after node
     * node.replaceWith(...nodes or strings): replaces node with the given nodes or strings
     */

    // An example of inserted string and element:
        // <script>
        //     div.before('<p>Hello</p>', document.createElement('hr'));
        // </script>

        // Output on the string: <p>Hello</p> (inserted "as text", not HTML)
        // and a break line below string.

        // So, these methods can only be used to insert DOM nodes or text pieces in a safe way, just like "elem.textContent" doest it.

// VI. insertAdjacentHTML/Text/Element
    // But what if we would like to insert an HTML string "as HTML", with all tags and stuff working, in the same manner as "elem.innerHTML" does it.

        /** Pretty versatile method: elem.insertAdjacementHTML(where, html), where the first parameter is a code word:
         * beforebegin: insert HTML immediately before elem
         * afterbegin: insert HTML into elem, at the beginning
         * beforeend: insert HTML into elem, at the end
         * afterend: insert HTML immediately after elem
         */
    
            // <script>
            //     div.insertAdjacementHTML('beforebegin', '<p>Hello</p>');
            //     div.insertAdjacementHTML('afterend', '<p>Bye</p>');
            // </script>

        // the same as:

            // <p>Hello</p>
            // <div></div>
            // <p>Bye</p>

    /** And the method has two brothers:
     * elem.insertAdjacentText(where, text): the same syntax, but a string of "text" is inserted "as text" instead of HTML
     * elem.insertAdjacentElement(where, elem): the same syntax, but inserts an element
     */

        // But still, for elements and text we have better methods (append/prepend/before/after) - they are shorter to write and can insert nodes/text pieces

// V. Node removal
    // To remove a node: node.remove();

    // Please note: if we want to move an element to another place - there's no need to remove it from the old one.

    // Note!All insertion methods automatically remove the node from the old place.

// VI. Cloning nodes: cloneNode
    // The call to "elem.cloneNode(true)" creates a "deep" clone of the element - with all attributes and subelements.
    // If we call "elem.cloneNoze(false)", it will create the clone without child elements.

// VII. DocumentFragment
    // "DocumentFragment" is a special DOM node that serves as a wrapper to pass around lists of nodes.
    // We can append other nodes to it, but when we insert it somewhere, then its content is inserted instead.

// Tasks(9)
    // 1. createTextNode vs innerHTML vs textContent
        // Which commands will do an empty DOM element "elem" and a string "text":

        // elem.append(document.createTextNode('<b>text</b>'));

        // elem.textContent = '<b>text</b>';

    // 2. Clear the element
        // function clear(elem) {
        //     elem.innerHTML = '';
            
        //     // or

        //     for (let i = 0; i < elem.childNodes.length; i++) {
        //         elem.childNodes[i].remove();
        //     }
        // }

    // 3. Why does some elements remain after table remove
        // There may be no text inside the <table>: according to spec only table-specific tags are allowed, so browser shows an element before the table and doesn't remove it after table removal.

    // 4. Create a list: separate folder

    // 5. Create a tree from the object: separate folder
    
    // 6. Show descendants in a tree: separate folder

    // 7. Create a calendar: separate folder

    // 8. Insert the HTML in the list
        // one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

    // 9. Sort the table: separate folder



    