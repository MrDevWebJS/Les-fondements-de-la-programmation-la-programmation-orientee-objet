
// FICHIER Employee.js

import { Person } from "./28-Person.js";

export class Employee extends Person {
    constructor(firstName, lastName, job, country, baseSalary){
        super(firstName, lastName, job, country)
        this.baseSalary = baseSalary
    };
};

