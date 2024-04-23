
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

    Object.defineProperty(this, "hireDate", {
        get: function(){
            return hireDate;
        }
    });

    Object.defineProperty(this, "salary", {
        get: function(){
            return calculateSalary();
        }
    });

    // La méthode defineProperty() est une méthode statique.
    // Son utilisation permet l'exécution directement sur le constructeur de l'objet.
    // Elle prend trois paramètres: 
        // 1- L'objet à l'intérieur duquel la propriété sera définie.
        // 2- Le nom de la propriété.
        // 3- Un objet à l'intérieur duquel sera défini la méthode get qui retournera la valeur demandé.
    // Les getters sont des fonctions permettant d'accéder à des données. 
    // Le terme getter provient du verbe "to get" en anglais qui veut dire "obtenir".    
};

let donatien = new Employee("Donatien", "Daoust", "FRANCE");
console.log(donatien);
console.log(donatien.hireDate);
console.log(donatien.salary);

