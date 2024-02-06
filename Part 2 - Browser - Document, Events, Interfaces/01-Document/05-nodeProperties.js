// I. DOM node classes
    /** The classes are:
     * EventTarget: is the root "abstract" class for everything.
        Objects of that class are never created. It serves as a base, so that all DOM nodes support so-called "events".
     * Node: as also an "abstract" class, serving as a base for DOM nodes.
        It provides the core tree functionality: parentNode, nestSibling, childNodes and so much more getters. Objects of "Node" class are never created, but there are other classes that inherit from it (and so inherit the Node functionality).
     * Document: or "HTMLDocument": is a document as a whole. The "document" global object belongs exactly to this class, which is serves as an entry point to the DOM.
     * CharacterData: an "abstract" class, inherited by:
        * Text: the class corresponding to a text inside elements
        * Comment: the class for comments; they are not shown, but each comment becomes a member of DOM.    
     * Element: is the base class for DOM elements
        It provides element-level navigation like: nextElementSibling, children or getElementByTagName, querySelector.
     * HTMLElement: is tha basic class for all HTML elements:
        * HTMLInputElement: <input>
        * HTMLBodyElement: <body>
        * etc.  
     */

    // There are many other tags with own classes that may have specific properties and methods, while some elements, such as <span>, <section>, <article> do not have any specific properties, so they are instances of HTMLElement class.

// II. The "nodeType" property
    /** An "old-fashioned" way to get type of a DOM node: 
     * elem.nodeType == 1: for element nodes
     * elem.nodeType == 3: for text nodes
     * elem.nodeType == 9: for the document object
     */

    // In modern scripts, we can use "instanceof" and other class-based tests to see the node type, but sometimes "nodeType" may be simpler to read the value.

// III. Tag: nodeName and tagName
    /** The difference between "nodeName" and "tagName": 
     * the "tagName" property exists only for Element nodes.
     * the "nodeName" is defined for any Node:
        * for elements it means the same as "tagName"
        * for other node types (text, comment, etc) it has a string with the node type 
     */

// VI. innerHTML: the contents
    // The "innerHTML" property allows to get the HTML inside the element as a string.
    // We can also modify it, so it's one of the most powerful ways to change the page:
    // <body>
    //     <div>Before</div>

    //     <ul>
    //         <li>Hello</li>
    //         <li>World</li>
    //     </ul>

    //     <div>After</div>

    //     <script>
    //         setTimeout(() => document.body.innerHTML = "Changed!", 3000); 
                // replacing the whole body element
    //     </script>    
    // </body>

    // If "innerHTML" inserts a <script> tag into the document - it becomes a prt of HTML, but doesn't execute.

    /** "innerHTML +=" does a full overwrite of HTML document: 
     * The old contents is removed
     * The new "innerHTML" is written instead (a concatenation of the old and the new one)
     */
        // As the content is "zeroed-out" and rewritten from the scratch, all images and othe resources will be reloaded.

// V. outerHTML: full HTML of the element 
    // The "outerHTML" property contains the full HTML of the element, just like "innerHTML" plus the element itself (script, code, dom, etc):
    // <div id="elem">Hello <b>World</b></div>

    // <script>
    //     alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
    // </script>

    // Note! unlike "innerHTML", writing to "outerHTML" does not change the element. Instead, it replaces it in the DOM.

        /** Within "div.outerHTML = ..." happened: 
         * "div" was removed from the document
         * Another piece of HTML "<P>New element</p>" was inserted in its place
         * "div" still has its old value; the new HTML wasn't saved to any variable
         */

        // So, "outerHTML" doesn't change the element - it's just puts the new HTML in its place instead. We still can get references to the previous element and to the new element by querying the DOM.

// VI. nodeValue/data: text node content
    // The "innerHTML" property is only valid for element nodes.

    // Other node types have their counterpart: "nodeValue" and "data" properties. These two are almost the same for practical use, there only minor differences:
        // <body>
        //     Hello
        //     <!-- Comment -->
        //     <script>
        //         let text = document.body.firstChild;
        //         alert(text.data); // Hello

        //         let comment = text.nextSibling;
        //         alert(comment.data); // Comment
        //     </script>
        // </body>

    // The "textContent" provides access to the text inside the element - only text, without all <tags>:
        // <div id="news">
        //     <h1>Headline!</h1>
        //     <p>Martians attack people!</p>
        // </div>

        // <script>
        //     // Headline! Martians attack people!
        //     alert(news.textContent);
        // </script>

        // Writing to "textContent" is much more useful, because it allows to write text the "safe way".

        // Comparing the two with inputs:
            // <div id="elem1"></div>
            // <div id="elem2"></div>

            // <script>
            //     let name = prompt("What's your name?", "<b>Winnie-the-Pooh!</b>");
                // assume input is: <b>Winnie-the-Pooh!</b>

            //     elem1.innerHTML = name; // Winnie-the-Pooh!
            //     elem2.textContent = name; // <b>Winnie-the-Pooh!</b>
            // </script>

// VII. The "hidden" property
    // The "hidden" attribute and the DOM property specifies whether the element is visible or not:
        // <div>Both divs below are hidden</div>

        // <div hidden>With the attribute "hidden"</div>
        
        // <div id="elem">JavaScript assigned the property "hidden"</div>
        
        // <script>
        //   elem.hidden = true;
        // </script>

// Summary
    // Each DOM node belongs to a certain class. The classes form a hierarchy. The full set of properties and methods come as the result of inheritance.

    /** Main DOM node properties are:
     * nodeType: used to see if a node is a text or an element node; has a numeric value; read-only
     * nodeName/tagName: for elements, tag name; for non-element nodes "nodeName" describes it; read-only
     * innerHTML: the HTML content of the element; can be modified
     * outerHTML: the full HTML of the element; modification doesn't touch the element, but replace it instead
     * nodeValue/data: the content of a non-element node; usually "data" is used; can be modified
     * textContent: the text inside the element (minus <tags>); writing into it puts the text inside the element, with all special characters and tags treated exactly as text; can safely insert user-generated text and protect from unwanted HTML insertions
     * hidden: when true, does the same as CSS display:none
     */

    // DOM nodes also have other properties depending on their class.

// Tasks(3)
    // Count descendants
        // 1. What's the text inside <li>?
            // <script>
            //     let lis = document.querySelectorAll('li');
            //     for (let li of lis) console.log(li.textContent);
            // </script>
        // 2. The number of nested <li>
            // <script>
            //     console.log(lis.length);
            // </script>

    // What's in the nodeType?
        // <html>

        //     <body>
        //         <script>
        //             alert(document.body.lastChild.nodeType); // 1: element node
        //         </script>
        //     </body>

        // </html>

    // Tag in comment
        // <script>
        //     let body = document.body;

        //     body.innerHTML = "<!--" + body.tagName + "-->";

        //     alert( body.firstChild.data ); // BODY
        // </script>

            /** Step by step:
             * The content of <body> is replaced with the comment. The comment is <!--BODY..>, because body.tagName == "BODY" (tagName is always uppercase in HTML)
             * The comment is now the only child node, so we get it in body.firstChild
             * The data property of the comment is its contents (inside <!--..-->): BODY
             */
                

    // Where's the "document" in the hierarchy
        // Which class does the "document" belong to:
            // console.log(document); // #document

            // or

            // console.log(document.constructor.name); // HTMLDocument

                // So, "document" is an instance of "HTMLDocument" class.

        // What's its place in the hierarchy:
            // console.log(HTMLDocument.prototype.constructor === HTMLDocument); // true

        // Does it inherit from "Node" / "Element" / "HTMLElement":
            // console.log(HTMLDocument.prototype.constructor.name); // HTMLDocument
            // console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
            // console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node

            // // or
            
            // console.dir(document);
