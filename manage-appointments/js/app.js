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

// Mode Edit
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
    owner: 'Cesar C',
    phone: '1234567890',
    date: '2022-01-01',
    hour: '10:00',
    symptom: 'Duerme'
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
    editQuote(qUpdate) { 
        this.quotes = this.quotes.map(quote => quote.id === qUpdate.id ? qUpdate : quote);
    }

    // Delete quote
    deleteQuote(id) {
        this.quotes = this.quotes.filter(quote => quote.id !== id);
    }
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

    printQuotes({ quotes }) {
        // Clean html
        this.cleanHTML();
        
        quotes.forEach(q => {            
            const { id, pet, owner, phone, date, hour, symptom } = q;
    
            const divQuote = document.createElement('div');
            divQuote.classList.add('cita', 'p-3');
            divQuote.dataset.id = id;
    
            // Scripting of the elements of the quote
            const petP = document.createElement('h2');
            petP.classList.add('card-title', 'font-weight-bolder');
            petP.textContent = pet;
    
            // Owner
            const ownerP = document.createElement('p');
            ownerP.innerHTML = `
                <span class="font-weight-bolder">Propietario: ${ owner }</span>
            `;

            // Phone
            const phoneP = document.createElement('p');
            phoneP.innerHTML = `
                <span class="font-weight-bolder">Teléfono: ${ phone }</span>
            `;

            // Date
            const dateP = document.createElement('p');
            dateP.innerHTML = `
                <span class="font-weight-bolder">Fecha: ${ date }</span>
            `;

            // Hour
            const hourP = document.createElement('p');
            hourP.innerHTML = `
                <span class="font-weight-bolder">Hora: ${ hour }</span>
            `;

            // Symptom
            const symptomP = document.createElement('p');
            symptomP.innerHTML = `
                <span class="font-weight-bolder">Sintomas: ${ symptom }</span>
            `;

            // Button for delete this quote
            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'mr-2');
            btnDelete.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            btnDelete.onclick = () => deleteQuote(id);

            // Add button to edit
            const btnEdit = document.createElement('button');
            btnEdit.classList.add('btn', 'btn-info', 'mr-2');
            btnEdit.innerHTML = 'Editar <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>';
            btnEdit.onclick = () => loadingEdit(q);

            // Add p at divQuote
            divQuote.appendChild(petP);
            divQuote.appendChild(ownerP);
            divQuote.appendChild(phoneP);
            divQuote.appendChild(dateP);
            divQuote.appendChild(hourP);
            divQuote.appendChild(symptomP);

            // Buttons
            divQuote.appendChild(btnDelete);
            divQuote.appendChild(btnEdit);
    
            // Add quotes in html
            container.appendChild(divQuote);
        });
    }

    cleanHTML() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
}



// Initialization Class
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

    if (editing) {
        ui.printAlert('Editado correctamente');

        // Change the object quote to editing
        quote.editQuote({...quoteObj});

        // Change text content to button
        form.querySelector('button[type=submit]').textContent = 'Crear Cita';

        // Remove edit mode
        editing = false;
    } else {                
        // Generate ID
        quoteObj.id = Date.now();
    
        // Create new quote
        quote.addQuote({...quoteObj});

        // Show message
        ui.printAlert('Se agrego correctamente');
    }
    
    // Show html with the quotes    
    ui.printQuotes(quote);

    // Reset Object & Form
    resetObject();    
    form.reset();
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
function deleteQuote(id) {
    // Delete quote
    quote.deleteQuote(id);

    // Show message
    ui.printAlert('La cita ha sido eliminada correctamente', 'success');

    // Refresh quotes
    ui.printQuotes(quote);
}

// Loading Edit
function loadingEdit(quote) { 
    const { id, pet, owner, phone, date, hour, symptom } = quote;

    // Fill inputs
    petInput.value = pet;
    ownerInput.value = owner;
    phoneInput.value = phone;
    dateInput.value = date;
    hourInput.value = hour;
    symptomInput.value = symptom;

    // Fill object with the new values
    quoteObj.id = id;
    quoteObj.pet = pet;
    quoteObj.owner = owner;
    quoteObj.phone = phone;
    quoteObj.date = date;
    quoteObj.hour = hour;
    quoteObj.symptom = symptom;

    // Change text content to button
    form.querySelector('button[type=submit]').textContent = 'Guardar Cambios';
    editing = true;
}