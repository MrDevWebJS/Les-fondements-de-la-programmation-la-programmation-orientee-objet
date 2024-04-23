let person = new Object();
let today = new Date("21 NOVEMBER 1986");
let error = new Error("Cette erreur est générer par le constructeur new Error()");
let firstName = "Boëtian";

console.log(person);
console.log(person.constructor);

console.log(today);
console.log(today.constructor);

console.log(error);
console.log(error.constructor);

console.log(firstName);
console.log(firstName.constructor);