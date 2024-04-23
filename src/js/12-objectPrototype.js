
let person = {
    firstName: "Frédéric",
    lastName: "Têteault",
    age: 52,
    nationality: "Française",
    profession: "développeur informatique",
    presentation: function(){
        return `Bonjour, je m'appelle ${this.firstName}, j'ai ${this.age} ans et je suis ${this.profession}.`;
    }
};

console.log(person);
console.log(person.toString());

// Lorsque l'on essaie d'accéder à une propriété d'un objet, 
// le javascript va dans un premier temps, rechercher cette propriété dans l'objet en question. 
// Si celle-çi n'est pas explicitement définie, alors javascript va inspecter le prototype de cette objet.
// Dans l'exemple çi dessus, la méthode toString(), n'est pas explicitement définie à l'intérieur de l'objet person. 
// Le javascript va donc rechercher cette méthode dans le prototype de l'objet person.
//Une fois exécuté, cette méthode renvoie la chaine de caractère suivante: [object Object]

//le premier object est le resultat de l'opérateur typeof():
console.log(typeof(person)); // object

//Le deuxième Object commence par une majuscule car il représente le constructeur de l'objet person.

//EXEMPLE:
{
    let person = new Object({
        firstName: "Frédéric",
        lastName: "Têteault",
        age: 52,
        nationality: "Française",
        profession: "développeur informatique",
        presentation: function(){
            return `Bonjour, je m'appelle ${this.firstName}, j'ai ${this.age} ans et je suis ${this.profession}.`;
        }
    });
    console.log(person);    
}

//On remarque ici une autre façon de définir un objet à l'aide du constructeur Object() instancier par le mot clé new.
