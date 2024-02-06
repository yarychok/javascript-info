// I. Navigation: form and elements

    // Document forms are members of the special collection "document.forms".

        // That's a so-called "named collection": it's both named and ordered. We can use both the name of the number in the document to get the form.
            // document.forms.my; // the form with name="my"
            // document.forms[0]; // the first form in the document

        // When we have a form, then any element is available in the named collection "form.elements":
            // <form name="my">
            //     <input name="one" value="1">
            //     <input name="two" value="2">
            // </form>

            // <script>
            //     let form = document.forms.my;

            //     let elem = form.elements.one;

            //     alert(elem.value);
            // </script>

        // There may be multiple elements with the same name, which is typical with radio buttons and checkboxes:
            // <form>
            //     <input type="radio" name="age" value="10">
            //     <input type="radio" name="age" value="20">
            // </form>

            // <script>
            //     let form = document.forms[0];

            //     let ageElems = forms.elements.age;

            //     alert(ageElems[0]); 
            // </script>

// II. Backreference: element.from

    // For any element, the form is available as "element.form". So a form references, and elements reference the form.

// III. Form elements

    // input and textarea

        // We can access their value as "input.value" (string) or "input.checked" (boolean) for checkboxed and radio buttons.

    // select and option

        /** <select> element has 3 important properties:
         * select.option: the collection of <option> subelements;
         * select.value: the value of the currently selected <option>;
         * select.selectedIndex: the number of the currently selected <option>.
         */

        /** They provide three different ways of setting a value for a <select>:
         * Find the corresponding <option> element and set its "option.selected" to "true".
         * If we know a new value: set "select.value" to the new value.
         * If we know the option number: set "select.selectedIndex" to that number.
         */

    // new Option

        // let option = new Option(text, value, defaultSelected, selected);

