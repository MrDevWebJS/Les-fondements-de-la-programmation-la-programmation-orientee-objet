
class Person {
    constructor(firstName, lastName, country="Lyon") {
        this.firstName = firstName,
        this.lastName = lastName,
        this.country = country;
    };

    hello() {
        return `Bonjour, je suis Mme ${this.lastName}.`;
    };
};

let person = new Person("leverett", "Méthot");

console.log(person);
// Lors de la définition d'une classe, 
// tout ce qui se trouve dans le corp de la classe, 
// en dehors du constructeur, 
// se retrouve dans le prototype. 
// La méthode hello() se retrouve dans le prototype de l'objet construit.

console.log(person.constructor);
// La signature ressemble à une fonction.
// Son prototype est d'ailleur celui utilisé par les fonctions.

console.log(typeof(person.constructor), typeof(Person)); // function function

// CONCLUSION: JavaScript n'est pas nativement, un langage de programmation orientée objet.
// il reste un langage basé sur le prototypage.
// Les classes sont en réalité qu'une syntaxe.

