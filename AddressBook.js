class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

function addContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    check = true;

    check = check && nameCheck.test(firstName);
    check = check && nameCheck.test(lastName);
    check = check && addressCityStateCheck.test(address);
    check = check && addressCityStateCheck.test(city);
    check = check && addressCityStateCheck.test(state);
    check = check && zipCheck.test(zip);
    check = check && phoneCheck.test(phoneNumber);
    check = check && emailCheck.test(email);

    if(check == true) {
        newContact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        console.log(" contact entered successfully");
    }
    else {
        console.log(" Please enter valid details!");
    }

}

console.log(" the program has started");

nameCheck = new RegExp("^[A-Z][a-z]{2,}$");
addressCityStateCheck = new RegExp("^[a-zA-Z]{4,}$");
emailCheck = new RegExp("^[\\w+-]+(\\.[\\w-]+)*@[^_\\W]+(\\.[^_\\W]+)?(?=(\\.[^_\\W]{3,}$|\\.[a-zA-Z]{2}$)).*$");
phoneCheck = new RegExp("^[0-9]{1,3}[\\s][0-9]{10}$");
zipCheck = new RegExp("^[0-9]{3,6}$")

addContact("David", "Alapat", "india", "thrissur", "kerala", 1234, "91 1212341234", "hi@gmail.com");