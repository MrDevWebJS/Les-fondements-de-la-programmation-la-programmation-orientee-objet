import data from "./data.js"

let main = document.querySelector(".container__main");

data.forEach(object => {
    let card = document.createElement("div");
    card.className = "main__card";
    card.innerHTML = `
        <h2 class= "card__title">${object.title}</h2>
        <img class="card__image" src=${object.url1}>
        ${object.url2 ? `<img class="card__image" src=${object.url2}>` : ""}
        ${object.url3 ? `<img class="card__image" src=${object.url3}>` : ""}
    `;    
    main.appendChild(card)
});