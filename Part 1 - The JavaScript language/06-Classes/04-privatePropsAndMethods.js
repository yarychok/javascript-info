// I. Internal and external interface
    // Internal interface - methods and properties, accessible from other methods of the class, but not from the outside.
    // External interface - methods and properties, accessible also from outside the class.

    // Two types of object fields (properties and methods):
        // Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
        // Private: accessible only from inside the class. These are for the internal interface.

    // In many other languages there also exist "protected" fields: accessible only from inside the class and those extending it (like private, plus access from inheriting classes). They are also useful for the internal interface. 
    // They are more widespread than private ones, because we usually want inheriting classes to gain access to them.

    // Protected fields are not implemented in JavaScript on the language level, but in practice they are very convenient, so they are emulated.

// II. Protecting "waterAmount"
    // Protected properties are usually prefixed with an underscore "_":
        // class CofeeMachine {
        //     _waterAmount = 0;

        //     // For instance, we don't want to anyone set waterAmount below zero
        //     set waterAmount(value) {
        //         if (value < 0) {
        //             value = 0;
        //         }

        //         this._waterAmount = value;
        //     }

        //     get waterAmount() {
        //         return this._waterAmount;
        //     }

        //     constructor(power) {
        //         this._power = power;
        //     }
        // }

        // let cofeeMachine = new CofeeMachine(100);

        // cofeeMachine.waterAmount = -10;

        // // proof of protected property, value doesn't changed
        // console.log(cofeeMachine.waterAmount); // 0

// III. Read-only "power"
    // class CofeeMachine {
    //     _waterAmount = 0;

    //     constructor(power) {
    //         this._power = power;
    //     }

    //     get power() {
    //         return this._power;
    //     }
    // }

    // let coffeMachine = new CofeeMachine(100);

    // console.log(`Power is: ${coffeMachine.power}W`);

    // coffeMachine.power = 25; // TypeError: Cannot set property power of #{CofeeMachine} which has only a getter

    // Getter/setter functions:
        // Usually most of the time "get.../set..." functions are preferred:
            // class CofeeMachine {
            //     _waterAmount = 0;

            //     setWaterAmount(value) {
            //         if (value < 0) value = 0;
            //         this._waterAmount = value;
            //     }

            //     getWaterAmount() {
            //         return this._waterAmount;
            //     }
            // }

            // let cofeeMachine = new CofeeMachine();

            // cofeeMachine.setWaterAmount(100)

            // console.log(cofeeMachine.getWaterAmount()); // 100

            // That looks a bit longer, but functions are more flexible. They can accept multiple arguments.
            // On the other hand, get/set syntax is shorter
    
    // Protected fields are inherited
        // If we inherit "class ExtraCofeeMachine extends CoffeeMachine", then nothing prefents us from accessing "this._waterAmount" or "this._power" from the methods of the new class, unlike private ones.

// IV. Private "#waterLimit"
    // Privates starts with "#" and they are only accessible from inside the class.
        // class CofeeMachine {
        //     #waterLimit = 200;

        //     #fixWaterAmount(value) {
        //         if (value < 0 ) return 0;
        //         if (value > this.#waterLimit) return this.#waterLimit;
        //     }

        //     setWaterAmount(value) {
        //         this.#waterLimit = this.#fixWaterAmount(value);
        //     }
        // }

        // let cofeeMachine = new CofeeMachine();

        // cofeeMachine.#fixWaterAmount(123); // SyntaxError: Private field '#fixWaterAmount' must be declared in an enclosing class

        // Property '#fixWaterAmount' is not accessible outside class 'CofeeMachine' because it has a private identifier.ts(18013)
    
    // "#" can be accessible from outside or from inheriting classes.

    // Private fields do not conflict with public ones, so we can have both "#waterAmount" and "waterAmount" at the same time:
        // class CofeeMachine {
        //     #waterAmount = 0;

        //     get waterAmount() {
        //         return this.#waterAmount;
        //     }

        //     set waterAmount(value) {
        //         if (value < 0) value = 0;
        //         this.#waterAmount = value;
        //     }
        // }

        // let machine = new CofeeMachine();

        // machine.waterAmount = 100;

        // console.log(machine.waterAmount); // 100

    // Unlike protected ones, private fields are enforced by the language itself.

    // But if we inherit from "CoffeeMachine", then we'll have no direct access to "#waterAmount". We'll need to rely on "waterAmount" getter/setter.

// Summary
    // In terms of OOP, delimiting of the internal interface from the external one is called encapsulation.

    // Benefits of internal interface are:
        // Protection for user, so that they don't shoot themselves in the foot.
        // Supportable.
        // If we stricly delimit the internal interface, then the developer of the class can freely change its internal properties and methods, even without informing the users.
        // Hiding complexity.
        // It's always convenient when implementation details are hidden, and a simple, well-documented external interface is available.

