// Classes

// Class Declaration
class Client {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }
    
    showInfo () {
        return `Client: ${ this.name }, Money: ${ this.money }`;
    }
}

// Class Expresion
const Client2 = class {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    showInfo () {
        return `Client: ${ this.name }, Money: ${ this.money }`;
    }
}

// Init classes
const client_demo = new Client('Juan', 400);
console.log(client_demo);
console.log(client_demo.showInfo());

const client2_demo = new Client2('Juan', 400);
console.log(client2_demo);
console.log(client2_demo.showInfo());
