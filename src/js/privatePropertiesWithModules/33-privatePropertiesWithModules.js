
// FICHIER 33-privatePropertiesWithModules.js

import { Employee } from "./32-Employee.js";

let employee = new Employee("Merle", "Etcheverri", "développeur", "Paris", 2000);
console.log(employee);
console.log(employee.presentation());
console.log(employee.salary());

