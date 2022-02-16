// Map

/**
 * 1. Ordered lists with key and value.
 */

// Initialization
const client = new Map();

// Add element with map
client.set('name', 'Dian');
client.set('surname', 'Eunice');
console.log(client);

// Get length
console.log('Size:', client.size);

// Find element
console.log('Find:', client.has('name'));

// Get value into Map
console.log('Get value into Map:', client.get('name'));

// Delete element
console.log('Delete:', client.delete('surname'));

// Clear all
console.log('Clear Map:', client.clear());



// Initialization Two
const patient = new Map([
    ['name', 'paciente'], 
    ['room', 'undefined']
]);

patient.set('doctor', 'Dr. Aurora May');

console.log(patient);

patient.forEach((data, key) => {
    console.log(key);
});
