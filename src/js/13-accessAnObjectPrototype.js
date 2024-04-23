
function Person(firstName, lastName, country){
    this.firstName = firstName,
    this.lastName = lastName,
    this.country = country,
    this.presentation = function(){
        return `Bonjour, je m'appelle Mr ${lastName}, j'habite à ${country}.`;
    }
};

let merleEcheverri = new Person("Merle", "Echeverri", "Paris");
console.log(merleEcheverri);

// Accéder au prototype avec la méthode statique getPortotypeOf() de l'objet instancié:
console.log(Object.getPrototypeOf(merleEcheverri));

// Accéder au prototype de la function constructeur:
console.log(Person.prototype);

// CONCLUSION: Le prototype d'un constructeur devient le prototype de l'objet construit par ce même prototype.

