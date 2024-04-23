
class Person {
    constructor(firstName, lastName, job, country = "France"){
        this.firstName = firstName
        this.lastName = lastName
        this.job = job
        this.country = country
    }

    // La mise en place des getters et setters avec les classes ES6, est plus simple qu'avec les fonctions constructeur.
    get fullName(){
        return `${this.lastName} ${this.firstName}`
    };

    presentation(){
        return (
            `Bonjour je suis Mr ${this.lastName}. Je suis ${this.job}. Je viens de ${this.country}.`
        )
    };
};

// const _baseSalary = Symbol();

class Employee extends Person {
    // #baseSalary;
    constructor(firstName, lastName, job, country, baseSalary){
        super(firstName, lastName, job, country)
        this.baseSalary = baseSalary
        // this._baseSalary = baseSalary    >>> par convention
        // this[_baseSalary] = baseSalary   >>> utilisation des symbol
        // this.#baseSalary = baseSalary    >>> utilisation des privates fields
    };
};

let employee = new Employee("Merle", "Etcheverri", "développeur", "Paris", 2000);
console.log(employee);
console.log(employee.presentation());
console.log(employee.fullName);

// Par convention, les propriétés et les méthodes commençant par un underscore sont considérées comme étant privées. Les données restent accéssibles.
// console.log(employee._baseSalary); // 2000

// L'utilisation de "Symbol()" permet de rendre plus difficile l'accès aux données, elles n'apparaissent pas dans les boucles mais restent mutables et accessibles.
// employee[_baseSalary] *= 2; 
// console.log(employee[_baseSalary]); // 4000

// console.log(employee.#baseSalary); // Uncaught SyntaxError: reference to undeclared private field or method #baseSalary
// Les privates fields sont une solution pour rendre privées des propriétés ou des méthodes.

