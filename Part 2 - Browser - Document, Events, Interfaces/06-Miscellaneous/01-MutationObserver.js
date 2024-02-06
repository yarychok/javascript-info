// I. Syntax

    // "MutationObserver" is easy to use built-in object that observes a DOM element and fires a callback when it detects a change:
        // let observer = new MutationObserver(callback);

        // observer.observe(node, config);

    /** "config" is an object with boolean options "what kind of changes to react on":
     * "childList": changes in the direct children of "node".
     * "subtree": in all descendants of "node".
     * "attributes": attributes of "node".
     * "attributeFilter": an array of attribute names, to observe only selected ones.
     * "characterData": whether to observe "node.data" (text content).
     */

        // Then after any changes, the "callback" is executed: changes are passed in the first argument as a list of MutationRecord objects, and the observer itself as the second argument.

    /** MutationRecord objects have properties:
     * "type": mutation type, one of:
        * "attributes": attribute modified 
        * "characterData": data modified, used for text nodes
        * "childList": child elements added/removed
     */

// II. Usage for integration

    // Imagine the situation when you need to add a third-party script that contains useful functionality, but also does something unwanted.

        // Naturally, the third-party script provides no mechanisms to remove it.

        // Using "MutationObserver", we can detect when the unwanted element appears in our DOM and remove it.

    // There are other situations when a third-party script adds something into our document, and we'd like to detect, when it happens, to adapt our page, dunamically resize something, etc.

// III. Usage for architecture

    // We might also use "MutationObserver" for some architectural standpoint.

        // For example, we are making a website about programming, where articles and other materials may contain source code snippets.

        // We can use JavaScript syntax highlighting library, like Prism.js for that. To get syntax highlighting: Prism.highlightElem(pre) is called, which examines the contents of such "pre" elements and adds special tags and styles for colored syntax highlighting into those elements.