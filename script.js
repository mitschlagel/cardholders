import Customer from "./Customer.js";

// Create people objects
const person = new Customer(
    "Baggins",
    "Bilbo",
    "1998 So. Spring Lane",
    "Omaha",
    "NE",
    "68129",
    "4025551999",
    "bilbobaggins@hobbit.com"
);

const person2 = new Customer(
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
        <article class="customer">
            <h1 class="customerName">${p.firstName} ${p.lastName}</h1>
            <p>
            ${p.street} ${p.city} ${p.state} ${p.zip}
            </p>
            <p>
            ${p.phone} ${p.email}
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

// Create new Customer
let newCustomer = new Customer(
    document.querySelector("#firstName").value,
    document.querySelector("#lastName").value,
    document.querySelector("#street").value,
    document.querySelector("#city").value,
    document.querySelector("#state").value,
    document.querySelector("#zip").value,
    document.querySelector("#phone").value,
    document.querySelector("#email").value
);
console.log(newCustomer);

// append new person to document when form submitted
const form = document.querySelector("#submit");
form.addEventListener("click", addPerson(newCustomer))
