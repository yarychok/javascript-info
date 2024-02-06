    // When the browser loads the page, it "reads" (parses) the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.

    // For instance, if the tag <body id="page">, then the DOM object has body.id="page".

    // But the attribute-property mapping is not one-to-one!

// I. DOM properties
    // DOM nodes are regular JavaScript objects, so we can alter them:
        // document.body.myData = {
        //     name: 'Ceasar',
        //     title: 'Imperator',
        // };

        // console.log(document.body.myData.title); // Imperator

        // We can add a method as well:
            // document.body.sayTagName = function() {
            //     console.log(this.tagName);
            // }

            // document.body.sayTagName(); // BODY

// II. HTML attributes
    // In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties for them.

        // So when an element has "id" or another standard attribute, the corresponding property gets created. But that doesn't happen if the attribute is non-standard:
            // <body id="test" something="non-standard">
            //     <script>
            //         alert(document.body.id); // test
            //         // non-standard attribute does not yield a property
            //         alert(document.body.something); // undefined
            //     </script>
            // </body>

        // Also a standard attribute for one element can be unknown for another one.

        /** So, if an attribute is non-standard, we can use methods belos to operate exactly what's writtne in HTML:
         * elem.hasAttribute(name): checks for existence
         * elem.getAttribute(name): gets the value
         * elem.setAttribute(name, value): sets the value
         * elem.removeAttribute(name): removes the attribute
         * elem.attributes: read all attributes; a collection of objects that belong to a built-in "Attr" class, with "name" and "value" properties
         */

        // For example:
            // <script>
            //     let div = document.querySelector('div');
            //     div.setAttribute('name', 'value');
            // </script>

    /** HTML attributes have the following features:
     * Their name is case-insensitive ("id" is same as "ID")
     * Their values are always strings
     */

// III. Property-attribute synchronization
    // When a standard attribute changes, the corresponding property is auto-updated, and vice versa.

        // But there are exclusions, for instance "input.value" synchronizes only from attribute -> property, but not back.

// IV. DOM properties are typed
    // DOM properties are not always strings. For instance, "input.checked" property is a boolean. 
    
    // Another example: "style" attribute is a string, but the "style" property is an object.

    // Quite rarely, even if a DOM property type is a string, it may differ from the attribute: the "href" DOM property is always a full URL, even if the attribute contains a relative URL or just a "#hash".

// V. Non-standard attributes, dataset
    // Sometimes non-standard attributes are used to pass custom data from HTML to JavaScript, or to "mark" HTML-elements for JavaScript:
        // <div show-info="name"></div>
        // <div show-info="age"></div>

        // <script>
        //     let user = {
        //         name: "Arthur",
        //         age: 18,
        //     };

        //     for (let div of document.querySelectorAll('[show-info]')) {
        //         let field = div.getAttribute('show-info');
        //         div.innerHTML = user[field];
        //     }
        // </script>
    
        // Also it's convenient to use with order stating:
            // <style>
            //     .order[order-state="new"] {
            //         color: green;
            //     }

            //     .order[order-state="pending"] {
            //         color: yellow;
            //     }

            //     .order[order-state="canceled"] {
            //         color: red;
            //     }
            // </style>

            // <div class="order" order-state="new">
            //     A new order.
            // </div>
            
            // <div class="order" order-state="pending">
            //     A pending order.
            // </div>
            
            // <div class="order" order-state="canceled">
            //     A canceled order.
            // </div>

            // So we could manage an attribute more convenient:
                // div.setAttribute('order-state', 'canceled');

    // Note! All attributes starting with "data-" are reserved for programmer's use. They are available the "dataSet" property.
