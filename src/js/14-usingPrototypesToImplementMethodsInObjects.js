
function Person(firstName, lastName, country){
    this.firstName = firstName,
    this.lastName = lastName,
    this.country = country
};

let merleEcheverri = new Person("Merle", "Echeverri", "Paris");
let donatienDaoust = new Person("Donatien", "Daoust", "Toulouse");

// Les deux variables ci-dessus, contiennent chacune d'elles un objet instancié par la function constructeur.
// Dans le log de c'est deux variables, les objets qu'elles contiennent possèdent les propriétés définies par le constructeur.
// La méthode présentation() est donc dupliquée en mémoire autant de fois qu'un nouvel objet est instancié.
// Le constructeur étant un objet, il possède un prototype. 
// Ce prototype étant également un objet, il est donc possible de lui ajouter des méthodes. 
// Ceci grâce à la mutabilité des objets en javaScript.

Person.prototype.presentation = function(){
    return `Bonjour, je m'appelle Mr ${lastName}, j'habite à ${country}.`;
};

console.log(merleEcheverri);
console.log(donatienDaoust);

// CONCLUSION: le fait d'ajouter les méthodes sur le prototype et non sur le constructeur, 
// permet de réduire l'empreinte mémorielle du script.  
// Les fonctions ajoutées dans un prototype sont définies une seule fois.
// Sachant que le prototype d'un constructeur devient le prototype de l'objet construit par ce même prototype, 
// elles seront donc partagé sur tout les objets instanciés par la fonction constructeur.

