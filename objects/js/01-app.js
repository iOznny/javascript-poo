// Classes

// Class Declaration
class Client {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }
    
    // Information client
    showInfo () {
        return `Client: ${ this.name }, Money: ${ this.money }`;
    }

    // No required instance of the class
    static welcome() {
        return 'Bienvenido al Cajero';
    }
}

// Class Expresion
const Client2 = class {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    // Information client
    showInfo () {
        return `Client: ${ this.name }, Money: ${ this.money }`;
    }
}

// Init classes
const js1 = new Client('Juan', 400);
// console.log(js1);
// console.log(js1.showInfo());
// console.log(Client.welcome());

const client2_demo = new Client2('Juan', 400);
// console.log(client2_demo);
// console.log(client2_demo.showInfo());