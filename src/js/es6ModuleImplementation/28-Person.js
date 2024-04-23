// FICHIER Person.js

export class Person {
    constructor(firstName, lastName, job, country = "France"){
        this.firstName = firstName
        this.lastName = lastName
        this.job = job
        this.country = country
    };

    presentation(){
        return (
            `Bonjour je suis Mr ${this.lastName}. Je suis ${this.job}. Je viens de ${this.country}.`
        )
    };
};

