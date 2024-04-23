
class MuscleCars {
    constructor(type, mark, model, years, power){
        this.type = type,
        this.mark = mark,
        this.model = model,
        this.years = years,
        this.power = power
    }

    presentation(){
        return `Ce véhicule est un ${this.type}.`
    }
}

class Pontiac extends MuscleCars {
    constructor(type, mark, model, years, power){
        super(type, mark, model, years, power);
    }

    presentation(){
        let message = super.presentation();
        return message + ` C'est une ${this.mark} ${this.model} de ${this.years}. Elle possède ${this.power}ch.`
    }
}

class Dodge extends MuscleCars{
    constructor(type, mark, model, years, power, motor){
        super(type, mark, model, years, power),
        this.motor = motor
    }

    presentation(){
        let message = super.presentation();
        return message + ` C'est une ${this.mark} ${this.model} de ${this.years}. Son moteur ${this.motor}, développe ${this.power}ch.`
    }
}

let pontiac = new Pontiac("muscleCar", "Pontiac", "GTO", 1966, 425);
console.log(pontiac);
console.log(pontiac.presentation());

let dodge = new Dodge("muscleCar", "Dodge", "charger R/T", 1970, 425, "V7.0 HEMI de 8 L");
console.log(dodge);
console.log(dodge.presentation());

