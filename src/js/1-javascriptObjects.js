
// Déclarer un objet:
let person = {
    firstName: "Lerett",
    lastName: "Méthot",
    sayFirstName: function () {
        return `Hi, I'm ${this.firstName}`;
    }
};
console.log(person);

// Ajouter une propriété avec la notation par point:
person.age = 37;
console.log(person);

// Ajouter une propriété avec la notation par crochet:
person["profession"] = "IT developer";
console.log(person);

// Ajouter une propriété dynamiquement à l'aide d'une variable:
let mail = "mail";
person[mail] = "lerett@gmail.com";
console.log(person);

//supression d'une propriété avec la notation par point et par crochet:
delete person.profession;
delete person["mail"];
console.log(person);

// Accéder aux valeurs des propriétés d'un objet:
console.log(person.firstName);
console.log(person["lastName"]);

let age = "age";
console.log(person[age]);

// Utiliser une fonction comme valeur d'une propriété:
console.log(person.sayFirstName());
console.log(person["sayFirstName"]());

let method = "sayFirstName";
console.log(person[method]());

// Enumérer les propriétés d'un objet à l'aide de la boucle for...in:
for(const prop in person){
    console.log(`La valeur de la propriété ${prop} est ${person[prop]}.`);
};
