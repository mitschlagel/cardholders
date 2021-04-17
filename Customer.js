class Customer {
    constructor(
        lastName,
        firstName,
        street,
        city,
        state,
        zip,
        phone,
        email
    ) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        this.cardNumber = this.createCard();
    }

    createCard() {
        let cardNum = "";
        for (let i = 0; i < 16; i++) {
            cardNum += Math.round(Math.random() * 10);
        }
        return cardNum;
    }

}
export default Customer;