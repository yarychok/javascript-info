    // An event is a signal that something has happened. All DOM nodes generate such signals, but events are not limited to DOM.

    /** A list of the most useful DOM events:
     * click: when the mouse clicks on an element
     * contextmenu: when the mouse right-clicks on an element
     * mouseover / mouseout: when the mouse cursor comes over / leaves an element
     * mousedown / mouseup: when the mouse button is pressed / released over an element
     * mousemove: when the mouse is moved
     */

    /** Keyboard events:
     * keydown / keyup: when a keyboard key is pressed and released
     */

    /** Form element events:
     * submit: when the visitor submits a <form>
     * focus: when the visitor focuses on an element, e.g. on an <input>
     */

    /** Document events:
     * DOMContentLoaded: when the HTML is loaded and processed, DOM is fully built
     */

    /** CSS events:
     * transitionend: when a CSS-animation finishes
     */

    // And a lot more other events, that we'll get into later.

// I. Event handlers

    // To react on events we can assign a handler - a function that runs in case of an event; so handlers are a way to run JavaScript code in case of user actions.

    // There are several ways to assign a handler:
        
        // 1. HTML-attribute
            // A handler can be set in HTML with an attribute named "on<event>":
                // <input value="Click me" onclick="alert('Click!')" type="button"/>

            // But an HTML-attribute is not a convenient place to write a lot of code, so it's better to create a JavaScript function and call it there:
                // <script>
                //     function countRabbits() {
                //         for(let i=1; i <= 3; i++) alert("rabbit number " + i);
                //     }
                // </script>

                // <input type="button" onclick="countRabbits()" value="Count rabbits!">

            // Also, HTML attribute names are not case-sensitive, so "ONCLICK" works as well as "onClick" and "onCLICK", but usually attributes are lowecased: "onclick".
        
        // 2. DOM property
            // We can assign a handler using a DOM property "on<event>":
                // <input id="elem" type="button" value="Click me"/>
                // <script>
                //     elem.onclick = function() {
                //         alert("Clicked!");
                //     };
                // </script>

            // If the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property.

                // So two pieces of code above work the same.

                // Note! As there's only one "onclick" property, we can't assign more than one event handler.

            // In the example below adding a handler with JavaScript overwrites the existing handler:
                // <input type="button" id="elem" onclick="alert('Before')" value="Click me"/>
                // <script>
                //     elem.onclick = function() {
                //         alert('After'); // Only this message will be shown 
                //     };
                // </script>

// II. Accessing the element: this

    // The value of "this" inside a handler is the element. The one which the handler on it.

        // In the code below "button" shows its contents using "this.innerHTML":
            // <button onlick="alert(this.innerHTML)">Click me</button>

// III. Possible mistakes

    // We can set an existing function as a handler:
        // function sayThanks() {
        //     alert('Thanks!');
        // }

        // elem.onclick = sayThanks;

        // Note! The function should be assigned as "sayThanks", not "sayThanks()"; because it becomes a function call, and it takes the result of function, that is "undefined" (as the function returns nothing).

            // On the other hand, in HTML we do need the parentheses:
                // <input type="button" id="button" onclick="sayThanks()"/>

                // Because when the browser reads the attribute, it creates a handler function with body from the attribute content, so it looks like:
                    // button.onclick = function() {
                    //     sayThanks(); // The attribute content goes here
                    // };
    
    // Don't use "setAttribute" for handlers, such call won't work.

    // DOM-property case matters: "elem.onclick" is not the same as "elem.ONCLICK".

// VI. addEventListener

    // The fundamental problem of the aforementioned ways to assign handlers is that we can't assign multiple handlers to one event.
        // Let's say, one part of our code wants to highlight a button on click, and another one wants to show a message on the same click.

        // If we'd like to assign to event handlers for that, so a new DOM property will overwrite the existing one.

        // An alternative way of managing handlers are Event Listeners:
            // element.addEventListener(event, handler, [options]);

            // element.removeEventListener(event, handler, [options]);

                // Note! To remove a handler we should pass exactly the same function as was assigned.

        // So multiple calls to "addEventListener" allow it to add multiple handlers:
            // <input id="elem" type="button" value="Click me"/>

            // <script>
            //     function handler1() {
            //         alert('Thanks!');
            //     };

            //     function handler2() {
            //         alert('Thanks again!');
            //     }

            //     elem.onclick = () => alert("Hello");
            //     elem.addEventListener("click", handler1);
            //     elem.addEventListener("click", handler2);
            // </script>

    // For some events, handlers only work with "addEventListener".
        // That means that they can't be assigned via DOM-property.

        // For instance, the "DOMContentLoaded" event, tha triggers when the document is loaded and the DOM has been built:
            // will never run
            // document.onDOMContentLoaded = function() {
            //     alert("DOM built");
            // };

            // this way it works
            // document.addEventListener("DOMContentLoaded", function() {
            //     alert("DOM built");
            // });

        // So "addEventListener" is more universal. Although, such events are an exception rather than the rule.

// V. Event object

    // When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.

        /** Some properties of "event" object:
         * event.type: for example, "click"
         * event.currentTarget: element that handled the event; the same as "this" (unless the handler is an arrow function), or "this" is bound to something else
         * event.clientX / event.clientY: windows-relative coordinates of the cursor, for pointer events.
         */

        // There are more properties, many of them depend on the event type: keyboard events have one set of properties, pointer events - another one.
    
    // Note! The event object is also available in HTML handlers:
        // <input type="button" onclick="alert(event.type)" value="Event type"/>

            // "click" will be shown

            // That's possible because when the browser reads the attribute, it creates a handler like this: "function(event) { alert(event.type) }". That is: its first argument is called "event", and the body is taken from the attribute.

// VI. Object handlers: handleEvent

    // We can assign not just a function, but an object as an event using "addEventListener". When an event occurs, its "handleEvent" method is called.

        // <button id="elem">Click me</button>
        //
        // <script>
        //     let obj = {
        //         handleEvent(event) {
        //             alert(event.type + " at " + event.currentTarget);
        //         }
        //     };
        //     
        //     elem.addEventListener('click', obj);  
        // </script>

            // So when "addEventListener" receives an object as the handler, it calls "obj.handleEvent(event)" in case of an event.

            // The method "handleEvent" does not have to do all the job by itself; it can call other event-specific methods instead. Let's also use objects of a custom class, like this:

                // <button id="elem">Click me</button>

                // <script>
                //     class Menu {
                //         handleEvent(event) {
                //             let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
                //             this[method](event);
                //         }

                //         onMousedown() {
                //             elem.innerHTML = "Mouse button pressed";
                //         }

                //         onMouseup() {
                //             elem.innerHTML = "...and released.";
                //         }
                //     }

                //     let menu = new Menu();

                //     elem.addEventListener('mousedown', menu);
                //     elem.addEventListener('mouseup', menu);
                // </script>

                    // Now event handlers are clearly separated, that may be easier to support.

// Summary

    /** There are 3 ways to assign event handlers:
     * HTML attribute: onclick="..."
     * DOM property: elem.onclick = function
     * Methods: elem.addEventListener(event, handler[, phase]) / elem.removeEventListener
     */

    // HTML attributes are used sparingly, because JavaScript in the middle of an HTML tag looks a little bit odd and alien. Also can't write lots of code in there.

    // DOM properties are ok to use, but we can't assign more than one handler of the particular event. In many cases that limitation is not pressing.

    // The last way is the most flexible, but it is also the longest to write. There are few events that only work with it, for instance "transitionend" and "DOMContentLoaded". Also "addEventListener" supports objects as event handlers. In that case the method "handleEvent" is called in case of the event.

    // No matter how you assign the handler - it gets an event object as the first argument. That object contains the details about what's happened.

// Tasks (6)
    // 1. Hide on click
        // document.getElementById('hider').onclick = function() {
        //     document.getElementById('text').hidden = true;
        // }

    // 2. Hide self
        // <input type="button" onclick="this.hidden=true" value="Click to hide"/>
        
    // 3. Which handlers run
        // button.addEventListener("click", () => alert("1"));
        // button.removeEventListener("click", () => alert("1"));
        // button.onclick = () => alert(2);

            // The answer: "1" and 2; because there is two anonymous functions, and we need to store reference to the function in order to remove the exact same handler.
    
    // 4. Create a sliding menu: separate folder

    // 5. Add a closing button: separate folder

    // 6. Carousel: separate folder




    