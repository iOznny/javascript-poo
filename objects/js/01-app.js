// Classes

// Class Declaration
class Client {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }
}

// Class Expresion
const Client2 = class {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }
}

// Init classes
const juan = new Client('Juan', 400);
console.log(juan);

const juan2 = new Client2('Juan', 400);
console.log(juan2);