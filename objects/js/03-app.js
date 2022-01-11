// Access Modifiers (public, private & protected)
class Client {
    // Private property that can only be modified by set or get
    #name;
    
    constructor(name, money) {
        this.#name = name;
        this.money = money;
    }
    
    showInfo() {
        return `Client: ${ this.name }, Money: ${ this.money }`;
    }

    // No required instance of the class
    static welcome() {
        return 'Bienvenido al Cajero';
    }

    // Set value name
    setName(name) {
        this.#name = name;
    }

    // Get value name
    getName() {
        return this.#name;
    }
}

const juan = new Client('Juan', 123);
// console.log(juan);

juan.setName('Demo');
// console.log(juan.getName());