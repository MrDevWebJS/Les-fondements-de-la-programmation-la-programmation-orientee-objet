
// FICHIER Employee.js

import { Person } from "./31-Person.js";

const _baseSalary = Symbol();

export class Employee extends Person {
    constructor(firstName, lastName, job, country, baseSalary){
        super(firstName, lastName, job, country)
        this[_baseSalary] = baseSalary
    };

    salary(){
        return this[_baseSalary];
    };
};

