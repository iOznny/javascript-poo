// Inputs
const petInput = document.querySelector('#mascota');
const ownerInput = document.querySelector('#propietario');
const phoneInput = document.querySelector('#telefono');
const dateInput = document.querySelector('#fecha');
const hourInput = document.querySelector('#hors');
const contentInput = document.querySelector('#sintomas');

// Reference Form
const form = document.querySelector('#nueva-cita');

// Content List
const container = document.querySelector('#citas');

// Class Quote & UI
class Quote {
    constructor() {
        this.quotes = [];
    }
}

class UI {
}

const quote = new Quote();
const ui = new UI();



// Run App
eventListeners();
function eventListeners() {
    petInput.addEventListener('input', dataQuote);
    ownerInput.addEventListener('input', dataQuote);
    phoneInput.addEventListener('input', dataQuote);
    dateInput.addEventListener('input', dataQuote);
    hourInput.addEventListener('input', dataQuote);

    form.addEventListener('submit', newQuote());
}

// OBject Quote
const quoteObj = {
    pet: '',
    owner: '',
    phone: '',
    date: '',
    hour: '',
    content: ''
};

// Add items into object quote
function dataQuote(e) {    
    quoteObj[e.target.name] = e.target.value;
    console.log(quoteObj);
}

// Checking and adding new quote 
function newQuote(e) {
    e.preventDefault();

    // Information of quote
    const { pet, owner, phone, date, hour, content } = quoteObj;

    // Valid
    if (pet === '' || owner === '' || phone === '' || date === '' || hour === '' || content === '') {
        console.log('All items is required');
        return;
    }
    
}
