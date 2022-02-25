import { Client } from './cliente.js';

export class Business extends Client {
    constructor(name, saving, category) {
        // Heredando el constructor de Client
        super(name, saving);
        this.category = category;
    }

    showInformation() {
        return `Cliente: ${ this.name } - Ahorro: ${ this.saving } - Categoria: ${ this.category }`;
    }
}