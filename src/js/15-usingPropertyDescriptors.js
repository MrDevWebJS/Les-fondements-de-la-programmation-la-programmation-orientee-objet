
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
// Dans le log ci-dessus, on retrouve les props du constructeur: 
// firstName lastName, age, country, constructor, presentation.

for(props in mrEtcheverri){
    console.log(props);
};
// Lors de l'itération sur les props de l'objet, il ressort toutes les props sauf le constructor.


console.log(Object.getOwnPropertyDescriptors(Person.prototype, "presentation"));

// Il s'agit d'une méthode statique, elle prend deux paramètres: 
    // - L'objet à inspecter
    // - Le nom de la propriété ou méthode

// Il ressort ici que la propriété "enumerable" du constructor possède comme valeur false.
// Voila pourquoi lors de l'itération sur les props, le constructor n'était pas dans la liste des props énumérées.
// la méthode statique defineProperty(), 
// permet également de modifier les métadonnées des propriétés et des méthodes, 
// présentent dans le prototype d'un objet.

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: true 
    // Cette propriété permet de modifier l'énumérabilité de la propriété ou de la méthode sélectionnée.
})

Object.defineProperty(Person.prototype, 'presentation', {
    configurable: false 
})

delete Person.prototype.presentation 
// Cette ligne de code ne peut pas s'exécuter tant que la propriété "configurable" return false.