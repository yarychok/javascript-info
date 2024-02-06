// I. Mixins
    // In JavaScript we can only inherit from a single object. There can be only one [[Prorotype]] for an object. And a class may extend only one other class.
    // But sometimes that feels limiting, so there's a concept that help here, called "mixins".

    // A mixin is a class containing methods that can be used by other classes without a need to inherit from it.
    // In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.

// II. A mixin example
    // The simplest way to implement a mixin is to make an object with useful methods, so that we can easily merge them into a prototype of any class:
        // let sayHiMixin = { // mixin
        //     sayHi() {
        //         console.log(`Hello ${this.name}`);
        //     },

        //     sayBye() {
        //         console.log(`Bye ${this.name}`);
        //     },
        // };

        // class User { // usage
        //     constructor(name) {
        //         this.name = name;
        //     }
        // }

        // Object.assign(User.prototype, sayHiMixin); // copy the methods

        // let dude = new User("Dude"); // now our user can say hi

        // console.log(dude.sayHi()); // Hello Dude

        // So there's no inheritance, but a simple methods copying. User may inherit from another class and also include the mixin to "mix-in" the additional methods.
    
    // Mixins can make use of inheritance inside themselves:
        // let sayMixin = {
        //     say(phrase) {
        //         console.log(phrase);
        //     },
        // };

        // let sayHiMixin = {
        //     __proto__: sayMixin, // or we could use Object.setPrototypeOf to set the prototype

        //     sayHi() {
        //         super.say(`Hello, ${this.name}`); // call parent method
        //     },

        //     sayBye() {
        //         super.say(`Bye ${this.name}`); // call parent method
        //     },
        // };

        // class User {
        //     constructor(name) {
        //         this.name = name;
        //     }
        // }

        // Object.assign(User.prototype, sayHiMixin);

        // let dude = new User("Dude");

        // console.log(dude.sayHi()); // Hello Dude

// III. EventMixin
    // A real life mixin.
        // An important feature of many browser objects is that they can generate events. Events are a great wat to "broadcast information".
        // For instance:
            // - The mixin will provide a method ".trigger(name, [...data])" to "generate an event" when something important happens to it. The "name" argument is a name of the event, optionally followed by additional arguments with event data.
            // - Also the method ".on(name, handler)" that adds "handler" function as the listener to events with the given name. It will be called when an event with the given "name" triggers, and get the arguments form the ".trigger" call.
            // - And the method ".off(name, handler)" that removes the "handler" listener.

            // After adding the mixin, an object "user" will be able to generate an event "login" when the visitor logs in. And another object, say, "calendar" may want to listen for such events to load the calendar for the logged-in person.

            // Or, a "menu" can generate the event "select" when a menu item is a selected, and other objects may assign hendlers to react on that event. And so on.
            // For instance:
            // let eventMixin = {

            //     /**
            //         * Subscribe to event, usage:
            //         * menu.on('select', function(item) { ... }) 
            //     */
            //     on(eventName, handler) {
            //         if (!this._eventHandlers) this._eventHandlers = {};
            //         if (!this._eventHandlers[eventName]) {
            //             this._eventHandlers[eventName] = [];
            //         }
            //         this._eventHandlers[eventName].push(handler);
            //     },

            //     /**
            //      * Cancel the subscription, usage:
            //      * menu.off('select', handler) 
            //     */
            //     off(eventName, handler) {
            //         let handlers = this._eventHandlers?.[eventName];
            //         if (!handlers) return;
            //         for (let i = 0; i < handlers.length; i++) {
            //             if (handlers[i] === handler) {
            //                 handlers.splice(i--, 1);
            //             }
            //         }
            //     },

            //     /**
            //      * Generate an event with the given name and data
            //      * this.trigger('select', data1, data2); 
            //     */
            //     trigger(eventName, ...args) {
            //         if (!this._eventHandlers?.[eventName]) {
            //             return; // no handlers for that event name
            //         }

            //         // call the handlers
            //         this._eventHandlers[eventName].forEach(
            //             handler => handler.apply(this, args));
            //     }
            // };

            // ".on(eventName, handler)" - assigns function "handler" to run when the event with that name occurs. Technically, there's an "_eventHandlers" property that stores an array of handlers for each event name, and it just adds it to the list.
            // ".off(eventName, handler)" - removes the function from the handlers list.
            // ".trigger(eventName, ...args" - generates the event: all handlers from "_eventHandlers[eventName]" are called, with a list of arguments "...args".

            // Usage:
                // class Menu {
                //     choose(value) {
                //         this.trigger("select", value);
                //     }
                // }

                // Object.assign(Menu.prototype, eventMixin);

                // let menu = new Menu();

                // menu.on("select", 
                // value => console.log(`Value selected: ${value}`));

                // menu.choose("123"); // Value selected: 123

                // Now, if we'd like any code to react to a menu selection, we can listen for it with "menu.on(...)".

                // And "eventMixin" mixin makes it easy to add such behavior to as many classes as we'd like, without interfering with the inheritance chain.

// Summary
    // Mixin - as a generic object-oriented programming term: a class that contains methdos for other classes.

    // Some other languages allow multiple inheritance, but JavaScript not, so mixins can be implemented by copying method into prototype.

    // We can use mixins as a way to augment a class by adding multiple behaviors, like event-handling as we have seen above.

    // Mixins may become a point of conflict if they accidentally overwrite existing class methods. So generally one should think well about the naming methods of a mixin, to minimize the probability of that happening.