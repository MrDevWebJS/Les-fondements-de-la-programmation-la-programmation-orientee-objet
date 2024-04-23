
const person = (firstName, lastName, age) => {
    return(
        {
            firstName,
            lastName,
            age,
            sayFirstName: function(){
                return `Hi, i'm ${firstName}`;
            }
        }
    );
};

let pinabel = person("Pinabel", "Rochon", 37);
let merle = person("Merle", "Echeverri", 43);
let arridano = person("Arridano", "Dufresne", 56);
console.log(pinabel);
console.log(pinabel.sayFirstName());
console.log(merle);
console.log(merle.sayFirstName());
console.log(arridano);
console.log(arridano.sayFirstName());

