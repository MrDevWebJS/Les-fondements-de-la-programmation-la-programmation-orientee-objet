
// A SAVOIR: 
// une méthode statique, est une méthode qui est propre à une classe, et non à tous les objets créés à partir de celle-ci.

class Person {
    constructor(name, userName, mail, country = "France"){
        this.name = name,
        this.userName = userName,
        this.mail = mail,
        this.country = country
    };

    static async getAllFromUrl(url, callback){
        let data = await fetch(url);
        let response = await data.json();
        let persons = response.map(user => new Person(user.name, user.username, user.email, user.address.city));
        callback(persons);
    };

    hello(){
        return `Bonjour, je suis ${this.name}.`
    };
};

let person = new Person("Merle", "Etcheverri", "Paris");
console.log(person);

Person.getAllFromUrl("https://jsonplaceholder.typicode.com/users", (persons) => {
    console.log(persons);
    persons.forEach(person => console.log(person.hello()));
});

