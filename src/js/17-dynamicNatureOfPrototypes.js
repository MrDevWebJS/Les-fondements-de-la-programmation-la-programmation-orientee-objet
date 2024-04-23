
function Person (firstName, lastName, age, country) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.country = country
};

Person.prototype.hello = function () {
    return `Bonjour, je suis Mr ${this.lastName}.`;
};

const mrEtcheverri = new Person("Merle", "Etcheverri", 37, "Paris");
console.log(mrEtcheverri.hello());

Person.prototype.bye = function () {
    return `Au revoir, je rentre à ${this.country}.`;
};

console.log(mrEtcheverri.bye());

// Le prototype et les objets instanciés par le constructeur sont des objets distincts.
// En mémoire, le prototype est un objet unique qui est référencé par tous les objets utilisant ce prototype-là.
// Lors de la modification d'un prototype, tous les objets qui utilisent ce prototype, implémentent automatiquement les modifications.  
// L'ordre de création des objets et des modifications du prototype n'est pas pris en compte. 
// C'est là tout l'aspect dynamique du JavaScript.  

// A SAVOIR:
// Effectuer des modifications sur le prototype d'objet qui ne nous appartient pas, n'est pas une bonne pratique et cela est déconseillé.

