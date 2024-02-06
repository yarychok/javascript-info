    // DOM navigation properties are great when elements are close to each other, but what if they're not?

// I. document.getElementById or just id
    // If an element has the "id" attribute, we can get the element using the method:
        // let elem = document.getElementById('elem');

    // Also, there's a global variable named by "id" that references the element.

    // If we'll let our id the same name, as a variable, then the variable will take precedence:
        // <div id="elem"></div>

        // <script>
        //     let elem = 5;

        //     alert(elem); // 5
        // </script>
   
    // The "id" must be unique; there can be only one element in the document with the given id.

// II. querySelectorAll
    // By far, the most versatile method: "elem.querySelectorAll(css)" returns all elements inside 'elem' matching the given CSS selector:
        // let elements = document.querySelectorAll('ul > li:last-child');

        // for (let elem of elements) alert(elem.innerHTML); // "first", "second"...

// III. querySelector
    // The call to elem.querySelector(css) returns the first element for the given CSS selector: the result is the same as "elem.querySelectorAll(css)[0]", but the latter is looking for all elements and picking one, while "elem.querySelector(css)" just looks for one, so it's faster.

// VI. matches
    // Previous methods were searching the DOM.

    // The "elem.matches(css)" just checks if "elem" matches the given CSS-selector, and returns true or false.
        
        // It might be useful when we iterating over elements and trying to filter out those that interest us:
            // Assume we are looking for link that include "zip" in <a href="...">: 

            // <script>
            //     for (let elem of document.body.children) {
            //         if (elem.matches('a[fref$="zip"]')) {
            //             alert("The archive reference: " + elem.href)
            //         }
            //     }
            // </script>
        
// V. closest
    // Ancestors of an element are: parent, the parent of parent, its parent and so on. The ancestors together form the chain of parents from the element to the top.

    // The method "elem.closest(css)" looks for the nearest ancestor that matches the CSS-selector. The "elem" itself is also included in the search.

        // In other words, the "closest" goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.

// VI. getElementsBy*
    /** In fact, that "querySelector" is more powerful and shorter to write, we have some other methods to look for nodes by a tag, class, etc: 
     * elem.getElementsByTagName(tag): looks for elements with the given tag and returns collection of them; the tag parameter can also be a "*" (for any tags)
     * elem.getElementsByClassName(className): returns elements that have the given CSS class.
     * document.getElementsByName(name): returns elements with the given 'name' attribute, document-wide.
        
        * Above are rarely used methods:
            let divs = document.getElementsByTagName('div');  
     */

// VII. Live collections
    // All methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and "auto-update" when it changes:

        // <div>First div</div>

        // <script>
        // let divs = document.getElementsByTagName('div');
        // alert(divs.length); // 1
        // </script>

        // <div>Second div</div>

        // <script>
        // alert(divs.length); // 2
        // </script>

    // In contrast, "querySelectorAll" returns a static collection. It's like a fixed array of elements:

        // <div>First div</div>

        // <script>
        //   let divs = document.querySelectorAll('div');
        //   alert(divs.length); // 1
        // </script>
        
        // <div>Second div</div>
        
        // <script>
        //   alert(divs.length); // 1
        // </script>

// Summary
    // By far the most used are "querySelector" and "querySelectorAll", but "getElement(s)By*" cna be sporadically helpful or found in the old scripts.

    /** Besides that:
     * elem.matches(css): to check if elem matches the given CSS selector
     * elem.closest(css): to look for the nearest ancestor that matches the given CSS selector
     * elemA.contains(elemB): returns true if elemB is inside elemA; or when elemA == elemB
     */

// Tasks(1)
    /** Search for elements:
     * 1. the table with "id="age-table""
        * let ageTable = document.getElementById('age-table')
        
     * 2. all "label" elements inside that table
        * ageTable.getElementsByTagName('label') \
        * or 
        * document.querySelectorAll('#age-table label')
        
     * 3. the first "td" in that table
        * ageTable.querySelector('td') 
        * or
        * ageTable.rows[0].cells[0]
        * or
        * table.getElementsByTagName('td')[0]
        
     * 4. the "form" with "name="search""
        * let searchForm = document.getElementsByName('search')[0]
        * or
        * let searchForm = document.querySelector('form[name="search"]')
        
     * 5. the first "input" in that form
        * searchForm.querySelector('input')
        * or
        * searchForm.getElementsByTagName('input')[0]
        
     * 6. the last "input" in that form
        * let inputs = searchForm.querySelectorAll('input')
        * inputs[inputs.length - 1]
        
     */

