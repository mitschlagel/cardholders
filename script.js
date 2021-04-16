import Cardholder from "./Cardholder.js";

// Create people objects
const person = new Cardholder(
    "Baggins",
    "Bilbo",
    "1998 So. Spring Lane",
    "Omaha",
    "NE",
    "68129",
    "4025551999",
    "bilbobaggins@hobbit.com"
);

const person2 = new Cardholder(
    "Rollins",
    "Sonny",
    "12 Saint Thomas Drive",
    "Omaha",
    "NE",
    "68321",
    "4025557823",
    "imacollosus@tenorsax.com"
);

const addPerson = function (p) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = ` 
        <article class="cardholder">
            <h1 class="cardholderName">${p.firstName} ${p.lastName}</h1>
            <p>
            ${p.street} ${p.city} ${p.state} ${p.zip}
            </p>
            <p>
            ${p.cardNumber}
            </p>
        </article>`;
    return newArticle;
};


const main = document.querySelector("main");

const customerArray = [person, person2];
for (let p of customerArray) {
    main.append(addPerson(p));
    // console.log(p);
};

// TODO: form that will append a new cardholder to the page

