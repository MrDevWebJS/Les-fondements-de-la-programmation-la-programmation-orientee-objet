
function Person(firstName, lastName, country){
    this.firstName = firstName,
    this.lastName = lastName,
    this.country = country
};

Person.prototype.hello = function(){
    return `Bonjour, je suis Mme ${this.lastName}.`;
};

function Employee (firstName, lastName, country, baseSalary = 1500) {
    Person.call(this, firstName, lastName, country);
    this.baseSalary = baseSalary
};

function Customer (firstName, lastName, customerId, country = "France") {
    Person.apply(this, [firstName, lastName, country]);
    this.customerId = customerId
};

// PROBLEMATIQUE:
// lors de l'implémentation de l'héritage, il peut y avoir du code dupliqué.
// exemple de la ligne 27 à 30.

//SOLUTION:
// la factorsation du code en automatisant certaines commande d'exécution.

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.construtor = Child;
};

// Cette fonction est une fonction intermédiaire permettant de mettre en place l'héritage.

// Dans cette fonction extend, les deux paramètres commencent par une majuscule car, 
// la nature des éléments envoyés dans cette fonction sont des constructeurs. 
// Il s'agt d'une convention en javaScript.

// La méthode create(), est une méthode statique.
// Comme son nom l'indique, elle permet de créer un objet.
// Elle prend 1 paramètre qui est l'objet utilisé comme prototype de l'objet créé.

extend(Employee, Person);
extend(Customer, Person);

let employee = new Employee("Marine", "Devoe", "BRON");
let customer = new Customer("Blanche", "Labelle", 4858);

console.log(employee);
console.log(customer);

