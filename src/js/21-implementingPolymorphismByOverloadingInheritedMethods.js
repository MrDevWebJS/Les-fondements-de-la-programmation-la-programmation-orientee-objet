
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

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.construtor = Child;
};

extend(Employee, Person);
extend(Customer, Person);

// La méthode hello(), est implémentée avec le constructeur Person.
// Les constructeurs Employee et Customer héritent de cette méthode. 

Employee.prototype.hello = function(){
    return `Bonjour, je suis Mme ${this.lastName}, je viens de ${this.country}.`;
};

// Implémention de la méthode hello(), après celle des chaînes prototypiques personnalisées avec le constructeur Employee.
// Dans la console, on remarque dans le prototype de l'objet instancié via le constructeur Employee, que la méthode hello() est implémenté.

// En revanche, on remarque dans l'objet instancié via le construteur Customer, l'absence de la méthode hello() dans son prototype car elle n'a pas été implémenté.

// CONCLUSION: Employee et Customer utilisent la même méthode implémentée de deux façons différentes.
// Ceci est l'un des piliers de la POO, il s'agit du polymorphisme. 

let employee = new Employee("Marine", "Devoe", "BRON");
let customer = new Customer("Blanche", "Labelle", 4858);

console.log(employee); // Ici la méthode hello() est inplémenté dans le prototype du constructeur Employee.
console.log(employee.hello());

console.log(customer);
console.log(customer.hello()); // Ici la méthode hello() est hérité du constructeur parent Person.

