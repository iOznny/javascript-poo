// Symbol

/**
 * 1. Symbols are never the same
 */

const sym = Symbol('1');
const symTwo = Symbol('1');

if (sym === symTwo) {
    console.log('Iguales');
} else {
    console.log('Diferentes');
}

//console.log(Symbol() === Symbol());

const name = Symbol();
const surname = Symbol();
const person = {};

// Add name and surname like keys of the object
person[name] = 'Demo';
person[surname] = 'Demo2';
person.type = 'Premium';
person.balance = 500;

console.log(person);