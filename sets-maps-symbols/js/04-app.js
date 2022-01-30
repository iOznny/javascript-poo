// WeakMap

/**
 * 1. Keep data private.
 * 2. Don't have .size()
 * 3. They are not iterable.
 * 4. WeakMap accept objects.
 */

// Initialization
const product = { id: 10 };
const weakMap = new WeakMap();

// Add element with WeakMap
weakMap.set(product, 'Monitor');

// Find element
console.log('Find:', weakMap.has(product));

// Get value into WeakMap
console.log('Get value WeakMap:', weakMap.get(product));

// Delete Element
console.log('Delete WeakMap:', weakMap.delete(product));
console.log(weakMap);