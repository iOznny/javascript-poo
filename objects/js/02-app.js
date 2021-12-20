// Inheritance

class Client {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }
    
    showInfo () {
        return `Client: ${ this.name }, Money: ${ this.money }`;
    }

    // No required instance of the class
    static welcome() {
        return 'Bienvenido al Cajero';
    }
}

// Inheritance
class Company extends Client {
    constructor(name, money, phone, cateogory) {
        // Super: Look for the attributes in the parent class
        super(name, money);
        this.phone = phone;
        this.cateogory = cateogory;
    }

    static welcome() {
        return 'Bienvenido al Cajero de Empresas';
    }
}

// Init classes
const client_demo = new Client('Juan', 400);
const company = new Company('Juan', 400, 1234567890, 'Learn Online');

// console.log(company);
// console.log(company.showInfo());
// console.log(Client.welcome());
// console.log(Company.welcome());
