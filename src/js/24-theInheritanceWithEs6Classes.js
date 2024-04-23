
class Person {
    constructor(firstName, lastName, country = "France"){
        this.firstName = firstName,
        this.lastName = lastName,
        this.country = country
    };

    hello(){
        return `Bonjour, je suis Mr ${this.lastName}.`;
    };
};

class Employee extends Person {
    constructor(firstName, lastName, baseSalary, country = "France"){
        super(firstName, lastName, country = "France"),
        this.baseSalary = baseSalary
    };
};

class Customer extends Person {
    constructor(firstName, lastName, customerId, country = "France"){
        super(firstName, lastName, country = "France"),
        this.customerId = customerId
    };
};

// Le mot clé "super" permet d'utiliser les propriétés définies dans la class Parent.
// Il remplace les fonctions call() et apply() lors de l'utilisation des fonctions constructeur.

let employee = new Employee("Honoré", "Rivard", 1450);
let customer = new Customer("hans", "surless", 475);
console.log(employee);
console.log(customer);

// Dans la chaine prototypique, il y a le prototype de l'objet construit (employee et/ou customer), 
// comprenant son constructor qui est la classe Employee et/ou Customer.
// Puis dans le prototype du prototype de l'objet construit, il y a le constructor de la class Person, 
// c'est la classe Parent.(la super classe)

console.log(employee.hello());
console.log(customer.hello());

// employee et customer héritent de la méthode hello de la super class Person.

