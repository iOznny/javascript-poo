// WeakSet

/**
 * 1. WeakSet accept objects.
 * 2. Don't have .size()
 * 3. They are not iterable.
 */

// Initialization
const weakSet = new WeakSet();

// Object
const client = {
    name: 'Demo',
    balance: 10000
};

// Add object with WeakSet
weakSet.add(client);
console.log(weakSet);

// Find object with WeakSet
console.log('Find WeakSet:', weakSet.has(client));

// Delete object with WeakSet 
console.log('Delete WeakSet:', weakSet.delete(client));
