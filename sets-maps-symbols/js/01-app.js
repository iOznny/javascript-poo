// Set

/**
 * SET() NOTES 
 * 1. Sets are iterable.
 * 2. They do not store duplicate values.
 * 2. Accept objects, numbers, booleans and more.
 */

// Initialization
const car = new Set();

// Add elements with Set
car.add('Shirt');
car.add('Tesla S');
car.add('Tesla 3');
car.add('Tesla X');
car.add('Tesla Y');
console.log(car);

// Get length with Set
console.log('Size Set:', car.size);

// Find element with Set
console.log('Find Set:', car.has('Shirt'));

// Delete element with Set
car.delete('Shirt');
console.log('Delete Set:', car.delete('Shirt'));

// Delete all elements with Set
car.clear();
console.log(car);



/* Example */
// Delete duplicate values with Set
const numbers = [10, 20, 30, 40, 50, 10, 20];
const noDuplicates = new Set(numbers);
console.log('No Duplicates', noDuplicates);