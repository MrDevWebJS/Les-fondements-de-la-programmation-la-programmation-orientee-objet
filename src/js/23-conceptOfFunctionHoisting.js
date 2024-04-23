let person = new Person("Searlas", "Josseaume");
console.log(person);
// Le concept du hoisting permet la définition d'une fonction après son exécution.
// Ce concept fonctionne uniquement avec les déclarations de fonction.

function Person (firstName, lastName, country="Lyon") {
    this.firstName = firstName,
    this.lastName = lastName,
    this.country = country
};

Person.prototype.hello = function(){
    return `Bonjour, je suis Mme ${this.lastName}.`;
};

{
    let person = new Person("Searlas", "Josseaume");
    console.log(person); 
    // Uncaught ReferenceError: 
    // can't access lexical declaration 'Person' before initialization
    // Ce concept ne fonctionne pas avec les classes.

    class Person {
        constructor(firstName, lastName, country = "Lyon") {
            this.firstName = firstName,
            this.lastName = lastName,
            this.country = country;
        };

        hello() {
            return `Bonjour, je suis Mme ${this.lastName}.`;
        };
    };
}

