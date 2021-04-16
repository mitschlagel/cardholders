import Cardholder from "./Cardholder.js";

// Create people objects
const person = new Cardholder(
    "Jones",
    "Spencer",
    "2304 N. 69th St.",
    "Omaha",
    "NE",
    "68104",
    "9183200506",
    "spencerjones@fnni.com"
);

const person2 = new Cardholder(
    "Cherney",
    "Katelyn",
    "2304 N. 69th St.",
    "Omaha",
    "NE",
    "68104",
    "4022166205",
    "katelyncherney@gmail.com"
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


const main = document.getElementById("main");

const customerArray = [person, person2];
for (let p of customerArray) {
    main.append(addPerson(p));
    // console.log(p);
};

// TODO: form that will append a new cardholder to the page

