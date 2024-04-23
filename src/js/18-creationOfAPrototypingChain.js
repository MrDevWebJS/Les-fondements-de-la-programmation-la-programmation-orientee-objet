
function Person(){};

Person.prototype.hello = function(){
    return `Bonjour, je suis Mme ${this.lastName}.`;
};

function Employee (firstName, lastName, country, baseSalary = 1500) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.country = country,
    this.baseSalary = baseSalary
};

function Customer (firstName, lastName, customerId, country = "France") {
    this.firstName = firstName,
    this.lastName = lastName,
    this.customerId = customerId,
    this.country = country
};

// Modification de la chaîne prototypique des constructeurs Employee et Customer.
// Implémentation d'un objet du constructeur Person.
Employee.prototype = new Person();
Customer.prototype = new Person();
let employee = new Employee("Marine", "Devoe", "BRON");
let customer = new Customer("Blanche", "Labelle", 4858);
console.log(employee);
console.log(employee.hello());
console.log(customer);
console.log(customer.hello());

// Dans cette exemple, un Employee, et un Customer, sont des Person.
// CONCLUSION: Cet exemple est un exemple de l'un des quatre piliers de la POO qui est l'héritage.

