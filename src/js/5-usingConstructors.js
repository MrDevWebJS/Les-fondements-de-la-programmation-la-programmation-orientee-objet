
function Person (firstName, lastName, age, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.sayHello = function(){
        return `Hi, i'm ${firstName}!`;
    };
};

let hans = new Person("Hans", "surless", 43, "Belgium");
console.log(hans);
console.log(hans.sayHello());

