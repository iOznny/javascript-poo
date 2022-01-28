// Inputs
const contentInput = document.querySelector('#sintomas');
const petInput = document.querySelector('#pet');
const ownerInput = document.querySelector('#owner');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const hourInput = document.querySelector('#hour');
const symptomInput = document.querySelector('#symptom');

// Reference Form
const form = document.querySelector('#nueva-cita');

// Content List
const container = document.querySelector('#citas');
form.addEventListener('submit', newQuote);

let editing = false;

// Run App
eventListeners();
function eventListeners() {
    petInput.addEventListener('input', dataQuote);
    ownerInput.addEventListener('input', dataQuote);
    phoneInput.addEventListener('input', dataQuote);
    dateInput.addEventListener('input', dataQuote);
    hourInput.addEventListener('input', dataQuote);
    symptomInput.addEventListener('input', dataQuote);    
}

// OBject Quote
const quoteObj = {
    pet: 'Guero',
    owner: 'Cesar',
    phone: '1234567890',
    date: '2022-01-01',
    hour: '10:00',
    symptom: 'awdawd'
};

// Add items into object quote
function dataQuote(e) {    
    quoteObj[e.target.name] = e.target.value;
}


// Class Quote & UI
class Quote {
    constructor() {
        this.quotes = [];
    }

    // Add quote
    addQuote(quote) {
        this.quotes = [...this.quotes, quote];        
    }

    // Edit quote
    editQuote() {}

    // Delete quote
    deleteQuote() {}
}

class UI { 
    printAlert(message, type) {
        const div = document.createElement('div');

        div.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Add class for type
        if (type === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }

        // Message 
        div.textContent = message;

        // Add to DOM
        document.querySelector('#contenido').insertBefore(div, document.querySelector('.agregar-cita'));

        // Delete alert after to 5 seconds
        setTimeout(() => {
            div.remove();
        }, 5000);
    }

    printQuotes(object) {   
        
        
        let quotes = object.quotes;
        quotes.foreach(quote => {
            console.log(quote);
            // const { pet, owner, phone, date, hour, symptom, id } = quote;

            // const divQuote = document.createElement('div');
            // divQuote.classList.add('cita', 'p-3');
            // divQuote.dataset.id = id;

            // // Scripting of the elements of the quote
            // const petP = document.createElement('h2');
            // petP.classList.add('card-title', 'font-weight-bolder');
            // petP.textContent = pet;

            // // Add p at divQuote
            // divQuote.appendChild(petP);

            // // Add quotes in html
            // container.appendChild(divQuote);
        });



    }
}






const quote = new Quote();
const ui = new UI();

// Checking and adding new quote 
function newQuote(e) {
    e.preventDefault();

    // Information of quote
    const { pet, owner, phone, date, hour, symptom } = quoteObj;

    // Valid
    if (pet === '' || owner === '' || phone === '' || date === '' || hour === '' || symptom === '') {
        ui.printAlert('Todos los campos son obligatorios.', 'error');        
        return;
    }

    // Generate ID
    quoteObj.id = Date.now();

    // Create new quote
    quote.addQuote({...quoteObj});
    
    // Show html with the quotes
    ui.printQuotes(quote);

    // Reset Object & Form
    //resetObject();    
    //form.reset();
}

// Reset the object
function resetObject() {
    quoteObj.pet = '';
    quoteObj.owner = '';
    quoteObj.phone = '';
    quoteObj.date = '';
    quoteObj.hour = '';
    quoteObj.symptom = '';
}

// Delete Quote
function deleteQuote(quote) { }

// Loading Edit
function loadingEdit(quote) { }