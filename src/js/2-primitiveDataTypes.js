
let firstName = "Quincy";
let age = 65;
let bigNumber = 1n;
let isSelfEmployed = true;
let privateAddress = undefined;
let employeeId = Symbol();

let workAddress = {
    address: "16 rue Lenotre",
    city: "RAMBOUILLET",
    country: "France"
};

let hobbies = ["developpement informatique", "sport", "lecture"];
let carMake = null;

console.log(typeof(firstName));      //string
console.log(typeof(age));            //number
console.log(typeof(bigNumber));      //bigInt
console.log(typeof(isSelfEmployed)); //boolean
console.log(typeof(privateAddress)); //undefined
console.log(typeof(employeeId));     //symbol

console.log(typeof(workAddress));    //object
console.log(typeof(hobbies));        //object
console.log(typeof(carMake));        //object