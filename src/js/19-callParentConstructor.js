
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
// si on regarde les logs d'employee et customer, ligne 26 et 28, 
// on constate que, bien qu'ils soient définis par le constructeur Employee et Custumer,
// Person est le constructeur de ces objets.
// La raison derrière cela, 
// c'est que les prototypes d'Employee et Custumer ont été remplacés par le constructeur Person aux lignes 22 et 24.

// SOLUTION:
// ne pas oubliez d'ajouter une propriété constructor dans le prototype d'Employee et Customer, qui sera égal à une référence vers celle-ci. (ligne 23 et 25)
// Il est important de corriger la propriété constructor lorsque l'on manipule la chaine prototypique. 

Employee.prototype = new Person();
Employee.prototype.construtor = Employee;
Customer.prototype = new Person();
Customer.prototype.construtor = Customer;

let employee = new Employee("Marine", "Devoe", "BRON");
let customer = new Customer("Blanche", "Labelle", 4858);

console.log(employee);
console.log(customer);

