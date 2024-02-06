// I. Static methods
    // We can also assign a method to the class as a whole:
        // class User {
        //     static staticMethod() {
        //         console.log(this === User);
        //     }
        // }

        // User.staticMethod(); // true

        // let user = new User();

        // user.staticMethod(); // TypeError: user.staticMethod is not a function
    // The same is for assiging it as a property directly:
        // User.anotherStaticMethod = function() {
        //     console.log(this === User);
        // }

        // User.anotherStaticMethod(); // true

    // Usually, static methods are user to implement functions that belong to the class as a whole,
    // but not to any particular object of it.
    // For instance:
        // class Article {
        //     constructor(title, date) {
        //         this.title = title;
        //         this.date = date;
        //     }

        //     static compare(articleA, articleB) {
        //         return articleA.date - articleB.date;
        //     }
        // }

        // let articles = [
        //     new Article("HTML", new Date(2019, 1, 1)),
        //     new Article("CSS", new Date(2019, 0, 1)),
        //     new Article("JavaScript", new Date(2019, 11, 1)),
        // ];

        // articles.sort(Article.compare);

        // console.log(articles[0].title); // CSS
        // console.log(articles[1].title); // HTML
        // console.log(articles[2].title); // JavaScriprt

    // Another example would be a so-called "factory" method.
    // Lets create an empty article with today's date:

        // Article.createTodays = function() {
        //     // this = Article
        //     return new this("Today's digest", new Date());
        // }

        // let article = Article.createTodays();

        // console.log(article); // Article { title: "Today's digest", date: ...}

        // article.createTodays(); // TypeError: article.createTodays is not a function

    // Static methods are also used in database-related classes to search/save/remove entries from the database:
        // assuming Article is a special class for managing articles
        // static method to remove the article by id:
            // Article.remove({id: 12345});

// II. Static properties
    // Static properties are also possible, it's a recent addition:
        // class Article {
        //     static publisher = "some publisher";
        // }

        // console.log(Article.publisher); // some publisher
        
    // The same as a direct assignment:
        // Article.anotherPublisher = "another publisher";

        // console.log(Article.anotherPublisher); // another publisher

// III. Inheritance of static properties and methods
    // Static properties and methods are inherited:
        // class Animal {
        //     static planet = "Earth";

        //     constructor(name, speed) {
        //         this.speed = speed;
        //         this.name = name;
        //     }

        //     run(speed = 0) {
        //         this.speed += speed;
        //         console.log(`${this.name} runs with ${this.speed} speed`);
        //     }

        //     static compare(animalA, animalB) {
        //         return animalA.speed - animalB.speed;
        //     }
        // }

        // class Rabbit extends Animal {
        //     hide() {
        //         console.log(`${this.name} hides`);
        //     }
        // }

        // let rabbits = [
        //     new Rabbit("White Rabbit", 10),
        //     new Rabbit("Black Rabbit", 5),
        // ];

        // rabbits.sort(Rabbit.compare);

        // rabbits[0].run(); // Black Rabbit runs with 5 speed

        // console.log(Rabbit.planet); // Earth

        // So, Rabbit extends Animal creates two [[Prototype]] references:
            // Rabbit function prototypally inherits from Animal function.
            // Rabbit.prorotype prototypally inherits from Animal.prototype.

            // Let's double-check it:

            // class Animal {}
            // class Rabbit extends Animal {}

            // console.log(Rabbit.__proto__ === Animal); // true
            // console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true

// Summary
    // Static methods are used for the functinality tha tbelongs to the class "as a whole".
    // It doesn't relate to a concrete class instance.

    // They are labeled by the keyword "static" in class declaration.

    // The syntax is:
        // class MyClass {
        //     static property = ...;

        //     static method() {...}
        // }
    
    // Techically, static declaration is the same as assigning to the class itself:
        // MyClass.property = ...;
        // MyClass.method = function() {...};

    // Static properties and methods are inherited.

    // For "class B extends A" the prototype of the class "B" itself points to "A: B.[[Prototype]] = A".
    // So if a fieald is not found in "B", the search continues in "A".

// Task(1)
    // T01: Class extends Object?
        class Rabbit extends Object {
            constructor(name) {
                super();
                this.name = name;
            }
        }

        let rabbit = new Rabbit("rabbit");

        console.log(rabbit.hasOwnProperty('name')); // true