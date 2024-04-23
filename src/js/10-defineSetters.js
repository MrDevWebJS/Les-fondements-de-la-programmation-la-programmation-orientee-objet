
function Employee (firstName, lastName, country, base = 1450){
    let baseSalary = base;
    let hireDate = new Date("14 JANUARY 2014");
    let calculateSalary = function(){
        let today = new Date();
        return baseSalary + (baseSalary * ((today.getYear() - hireDate.getYear()) * 0.01));
    };

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    
    Object.defineProperty(this, "baseSalary", {
        get: function(){
            return baseSalary;
        },
        
        set: function(newSalary){
            let salaryIsANumber = typeof(newSalary) == "number";
            let newSalaryMin = newSalary < baseSalary + (baseSalary * 2/100);
            let newSalaryMax = newSalary > baseSalary + (baseSalary * 5/100);
            
            if(!salaryIsANumber) throw new Error("erreur de type.");
            if(newSalaryMin) throw new Error("Veuillez revoir le calcul du salaire à la hausse.");
            if(newSalaryMax) throw new Error("Veuillez revoir le calcul du salaire à la baisse.");
            else baseSalary = newSalary;
        }
        // les setters permettent de modifier des données. 
        //setter provient du verbe "to set" en anglais qui veut dire "définir".    
    });

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
};

let donatien = new Employee("Donatien", "Daoust", "FRANCE");
console.log(donatien);
console.log(donatien.baseSalary);
console.log(donatien.hireDate);
console.log(donatien.salary);

donatien.baseSalary = 1479;
console.log(donatien.baseSalary);

