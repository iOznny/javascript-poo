// Symbol

/**
 * 1. Symbols are never the same
 * 2. Symbol properties are not iterable
 */

const sym = Symbol('1');
const symTwo = Symbol('1');

if (sym === symTwo) {
    console.log('Iguales');
} else {
    console.log('Diferentes');
}

console.log(Symbol() === Symbol());

const name = Symbol();
const surname = Symbol();
const person = {};

// Add name and surname like keys of the object
person[name] = 'Demo';
person[surname] = 'Demo2';
person.type = 'Premium';
person.balance = 500;

console.log(person);
console.log(person[name]);

// Define a description of the symbol
const nameClient = Symbol('Name of Client');
const client = {};

client[nameClient] = 'Pedro';

console.log(client);
console.log(client[nameClient]);
console.log(nameClient);