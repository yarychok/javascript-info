// I. An example of the DOM
    // The DOM represents HTML as a tree structure and tags:
        // HTML:
            // HEAD:
                //#text 
                // TITLE:
                    //#text Some text
                //#text
            //#text
            //BODY:
                //#text Another text
    
    // Every tree node above is an object.

    // Tags are element nodes (or just elements) and form the tree structure: <html> is at the root, then <head> and <body> are its children. etc.

    // The text inside elements forms text nodes, labelled as #text; a text node contains only a string, it may not have children and is always a leaf of the tree.

    // Spaces and newlines are totally valid characters, like letters and digits. They form text nodes and become a part of the DOM.

    // There are only two top-level exclussions:
        // Spaces and newlines before <head> are ignored for historical reasons.

        // If we put something after </body>, then that is automatically moved inside the body, at the end, as the HTML spec required that all content must be inside body, so there can't be any spaces after it.

    // In other cases everything's straightforward - if there are spaces in the document, then they become text nodes in the DOM, and if we remove them, then there won't be any.

        // By no space text nodes it's meant:
            // <html><head><title>Title</title></head><body>Body</body></html>

// II. Autocorrection
    // If the browser encounters malformed HTML, it automatically corrects it when making the DOM.

    // For instance, the top tag is always <html>. Even if it doesn't exist in the document, it will exist in the DOM, because the browser will create it. The same goes for <body>.

        // As an example, if the HTML file is the single word "Hello", the browser will wrap it into <html> and <body>, and add the required <head>, and the DOM will be:
            // HTML:
                // HEAD
                // BODY:
                    //#text Hello

// III. Other node types
    // There are some other types besides elements and text nodes.
    // For example, comments:
        // HTML
            // HEAD
            // BODY
                //#text 
                // OL
                    //#text
                    // LI
                        //#text
                    //#text
                    //#comment comment
                    //#text
                    // LI
                        //#text
                    //#text
                //#text

        // Above we can see a new tree node type: comment node, labeled as #comment, between two text nodes.

        // Note! Everything in HTML, even comments, becomes a part of the DOM.

// VI. See it for yourself
    // We can explote the DOM using browser developer tools.

    // The DOM structure in developer tools is simplifed, text nodes are shown just a text, there are no "blank" text nodes at all. And that's fine, because most of the time we are interested in element nodes.
 
// V. Interaction with console
    // As we work with the DOM, we also may want to apply JavaScript to it. Like: get a node and run some code modify it, to see the result. 

// Summary
    /** An HTML/XML document is represented inside the browser as the DOM tree:
     * Tags become element nodes and form the structure.
     * Text becomes text nodes.
     * ...etc, everything in HTML has its place in DOM, even comments.
     */

    // We can use developer tools to inspect DOM and modifu it manually.

    // DOM nodes have properties and methods that allows us to travel between them, modify them, move around the page, and more.