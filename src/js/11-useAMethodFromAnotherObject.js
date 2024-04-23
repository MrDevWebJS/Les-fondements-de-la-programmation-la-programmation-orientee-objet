
let person = {
    firstName: "Frédéric",
    lastName: "Têteault",
    age: 52,
    nationality: "Française",
    profession: "développeur informatique",
    presentation: function(){
        return `Bonjour, je m'appelle ${this.firstName}, j'ai ${this.age} ans et je suis ${this.profession}.`;
    }
    // Le mot clé this renvoie à l'objet dans lequel se trouve la méthode.
};

console.log(person);

let customer = {
    firstName: "David",
    lastName: "Séguin",
    age: 47,
    nationality: "Belge",
    profession: "UI Designer"
};

console.log(customer);
console.log(person.presentation());
console.log(person.presentation.call(customer));

// Utilisation de la méthode call() pour empreinter la méthode presentation() de l'objet person, 
// et l'exécuter en lui passant en paramètre le contexte de l'objet customer.
// Ici this fera donc référence à l'objet customer.



// 2e EXEMPLE:
let searlas = {
    fisrtName: "Searlas",
    lastName: "Josseaume",
    age: 53,
    muscleCarModel: "Chevrolet Camaro Z-28 de 1968",
    drive: function(){
        console.log(this);
        console.log(`Je possède une ${this.muscleCarModel}`);
    }
};

let pontiac = {
    muscleCarModel: "Pontiac GTO de 1966"
};

searlas.drive.call(pontiac);
