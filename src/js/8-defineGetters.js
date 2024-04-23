
function Employee (firstName, lastName, country, baseSalary = 1450){
    let hireDate = new Date("14 JANUARY 2023");
    let calculateSalary = function(){
        let today = new Date();
        return baseSalary + (baseSalary * ((today.getYear() - hireDate.getYear()) * 0.01));
    };
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.baseSalary = baseSalary;
    
    this.sayHello = function(){
        return `Hi, i'm ${firstName}!`;
    };
    this.getHireDate = function() {
        return hireDate;
    };
    this.getSalary = function(){
        return calculateSalary();
    };

    // Le scope de la variable hireDate est limité à la fonction constructeur. 
    // Sa valeur n'est donc pas disponible à l'extérieur de celle-ci.
    // La fonction getHireDate va permettre d'accéder à la valeur de cette variable en dehors du constructeur.
    // Ce comportement est appelé une closure. 
    //La variable hireDate se trouve dans la closure de la fonction gethireDate. 
};

let donatien = new Employee("Donatien", "Daoust", "FRANCE");
console.log(donatien);
console.log(donatien.getHireDate());
console.log(donatien.getSalary());

