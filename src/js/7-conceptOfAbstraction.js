
function Employee (firstName, lastName, country, baseSalary = 1450){
    let hireDate = new Date();
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.baseSalary = baseSalary;
    
    this.sayHello = function(){
        return `Hi, i'm ${firstName}!`;
    };

    this.calculateSalary = function(){
        let today = new Date();
        return this.baseSalary + (this.baseSalary * ((today.getYear() - hireDate.getYear()) * 0.01));
    };
};

let donatien = new Employee("Donatien", "Daoust", "FRANCE");
console.log(donatien);

// CONCEPT D'ABSTRACTION:
console.log(donatien.hireDate); //undefined
// Le scope de la variable hireDate est limité à la function Employee. 
// Elle n'est donc pas accessible en dehors de celle-çi.

console.log(donatien.calculateSalary());

