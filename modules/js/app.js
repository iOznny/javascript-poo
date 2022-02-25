import newFunction, { Client, client, hasBalance, saving, showInformation } from './cliente.js';
import { Business } from './empresa.js';

// Import Variables
console.log('Import Variables:', client, saving);

// Import Functions
console.log('Import Functions:', showInformation(client, saving));
hasBalance();

// Import Class
const clientClass = new Client(client, saving);
console.log('Import Class:', clientClass.showInformation());

const business = new Business('Coding', 100, 'Software');
console.log(business.showInformation());

// Export Default
newFunction();