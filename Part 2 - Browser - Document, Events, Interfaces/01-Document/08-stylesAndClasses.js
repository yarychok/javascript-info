    /** There are generally two ways to style an element:
     * Create a class in CSS and add it: <div class="...">
     * Write properties directly into "style": <div style="...">
     */

    // We should always prefer CSS classes to "style". The latter should only be used if classes "can't handle it".

    // For example, "style" is acceptable if we calculate coordinates of an element dynamically and want to set them from JavaScript:
        // let top = // complex calculations;
        // let left = // complex calculations;

        // elem.style.left = left; // e.g 123px, calculated at run-time
        // elem.style.top = top; // 456px

    // For other cases, like making the text red, adding a background icon - descibe that in CSS and then add the class, which is more flexible and easier to support.

// I. className and classList
    // Changing a class is one of the most often used actions in scripts.

    // The "elem.className" corresponds to the "class" attribute:
        // <body class="main page">
        //     <script>
        //         console.log(document.body.className); // main page
        //     </script>
        // </body>

    // If we assign something to "elem.className", it replaces the whole string of classes. Sometimes that's what we need, but often we want to add/remove a single class.

    // There's another property for that: "elem.classList".
        // The "elem.classList" is a special object with methods to "add/remove/toggle" a single class:
            // <body class="main page">
            //     <script>
            //         document.body.classList.add('article');

            //         console.log(document.body.className); // main page article
            //     </script>
            // </body>

        // So we can operate both on the full class string using "className" or on individual classes using "classList".

        /** Methods of "classList":
         * elem.classList.add/remove('class'): adds/removes the class
         * elem.classList.toggle('class'): adds the class if it doesn't exist, otherwise removes it
         * elem.classList.contains('class'): checks for the given class, returns true/false
         */

        // Besides, "classList" is iterable, so we can list all classes with "for..of".

// II. Element style
    // The property "elem.style" os an object that corresponds to what's written in the "style" attribute. 

    // Setting "elem.style.width="100px"" works the same as if we had in the attribute "style" a string "width:100px".

// III. Resetting the style property
    // Sometimes we want to assign a style property, and later remove it.

        // For instance, to hide an element, we can set:
            // elem.style.display = "none";

        // Then later we may want to remove the "style.display" as if it were not set. Instead of "delete elem.style.display" we should assign an empty string to it:
            // elem.style.display = "";

            // Also there's a special method for that:
                // document.body.style.background = 'red';

                // setTimeout(() => document.body.style.removeProperty('background'), 1000);

    // To set the full style as a string, there's a special property "style.cssText":
        // <div id="div">Button</div>

        // <script>
        //     div.style.cssText=`color: red !important;
        //         background-color: yellow;
        //         width: 100px;
        //         text-align: center;
        //     `;
        // </script>

// IV. Computed styles: getComputedStyles
    // We already know how to modify styles, so how to read it?
    
    // The "style" property operates onle on the value of the "style" attribute, without any CSS cascade.

        // So we can't read anything that comes from CSS classes using "elem.style".

        // There's another method for that:
            // getComputedStyle(element, [pseudo]);

    /** There are two concepts in CSS:
     * A computed style: the value after all CSS rules and CSS inheritance is applied, as the result of the CSS cascade. It can look like "height:1em" or "font-size:125%"
     * A resolved style: the value that finally applied to the element. Values like "1em"or "125%" are relative; the browser takes the computed value and makes all units fixed and absolute, for instance: "height:20px" or "font-size:16px".
     */

        // Nowadays "getComputedStyle" actually returns the resolved value of the property, usually in "px" for geometry.

// Tasks(1)
    // Create a notification: separate folder