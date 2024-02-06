// New objects can be created with a constructor function, line "new F()".
// Setting "Rabbit.prototype = animal" literally states the following:
// when a "new Rabbit" is created, assign its [[Prototype]] to "animal"
    // let animal = {
    //     eats: true,
    // };

    // function Rabbit(name) {
    //     this.name = name;
    // }

    // Rabbit.prototype = animal;

    // let rabbit = new Rabbit("White Rabbit");

    // console.log(rabbit.eats); // true


// I. Default F.prototype, constructor property
    // Every function has the "prototype" property.
    // The default "prototype" is an object with the only property "constructor" that points back to the function itself.
        // function Rabbit(name) {
        //     this.name = name;
        // }

        // console.log(Rabbit.prototype.constructor == Rabbit); // true

        // let rabbit = new Rabbit("White Rabbit");
        // console.log(rabbit.constructor == Rabbit); // true

        // let rabbit2 = new rabbit.constructor("Black Rabbit");
        // console.log(rabbit.constructor == rabbit2.constructor); // true
        // console.log(rabbit2.constructor == Rabbit); // true

// Summary
    // In this chapter was briefly described the way of setting a [[Prototype]] for objects created via a constructor function.

    // - The "F.prototype" properly (don't mistake it for [[Prototype]]) sets [[Prototype]] of new objects when "F()" is called.
    // - The value of "F.prototype" should be either an object or "null".
    // - The "prototype" property only has such a special effect set on a constructor function, and invoked with "new".

    // By default all functions have "F.prototype = { constructor: F }", so we can get the constructor of an object by accessing its "constructor property".

// Tasks(2)
    // T01: Changing "prototype"
        // function Rabbit() {};

        // Rabbit.prototype = { eats: true };

        // let rabbit = new Rabbit();

        // delete Rabbit.prototype.eats;

        // console.log(rabbit.eats); // undefined

    // T02: Create an object with the same constructor
        // function obj() {};
    
        // let obj2 = new obj.constructor();
        
        // console.log(obj.prototype.constructor);

        

        