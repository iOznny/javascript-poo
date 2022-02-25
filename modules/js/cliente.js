// IIFE: Expresión de función ejecutada inmediatamente, 
// permite almacenar el codigo en el mismo archivo y no mezclar.

// (function() {
//     const client = 'Demo';
//     console.log(client);
// })();

// Export Variables
export const client = 'Demo';
export const saving = 200;

// Export Functions
export function showInformation(name, saving) {
    return `Cliente: ${ name } - Ahorro: ${ saving }`;
}

export function hasBalance(saving) {
    if (saving > 0) {
        console.log('Tene saldo.');
    } else {
        console.log('No tiene saldo.');
    }
}

// Export Class
export class Client {
    constructor(name, saving) {
        this.name = name;
        this.saving = saving;
    }

    showInformation() {
        return `Cliente: ${ this.name } - Ahorro: ${ this.saving }`;
    }
}

// Export Default
export default function newFunction() {
    console.log('Export Default');
}