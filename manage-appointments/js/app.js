// Inputs
const petInput = document.querySelector('#mascota');
const ownerInput = document.querySelector('#propietario');
const phoneInput = document.querySelector('#telefono');
const dateInput = document.querySelector('#fecha');
const hourInput = document.querySelector('#hors');
const contentInput = document.querySelector('#sintomas');

const form = document.querySelector('#nueva-cita');

// Content List
const container = document.querySelector('#citas');

// Run App
eventListeners();
function eventListeners() {
    petInput.addEventListener('input', dataQuote);
}

const quoteObj = {
    pet: '',
    owner: '',
    phone: '',
    date: '',
    hour: '',
    content: ''
};

function dataQuote(e) {
    console.log(e.target.value);
}
