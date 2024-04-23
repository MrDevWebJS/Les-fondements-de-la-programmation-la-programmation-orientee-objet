
function Person (firstName, lastName, age, country) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.country = country
};

Person.prototype.presentation = function () {
    return `Bonjour je m'appelle Mr ${this.lastName}, j'habite à ${this.country}.`;
};

const mrEtcheverri = new Person("Merle", "Etcheverri", 37, "Paris");

console.log(mrEtcheverri);

// La méthode hasOwnProperty(), 
// renvoie une valeur booléenne permettant de savoir, 
// si l'objet possède une propriété qui lui est propre. 

console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

// Cette méthode est propre au prototype de l'objet constructeur Object().

console.log(mrEtcheverri.hasOwnProperty("firstName"));    // true
console.log(mrEtcheverri.hasOwnProperty("lastName"));     // true
console.log(mrEtcheverri.hasOwnProperty("age"));          // true
console.log(mrEtcheverri.hasOwnProperty("country"));      // true
console.log(mrEtcheverri.hasOwnProperty("presentation")); // false

