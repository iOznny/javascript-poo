// Variables and Selectors
const form = document.querySelector('#agregar-gasto');
const expenseList = document.querySelector('#gastos ul');

// Events
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', askBudget);
    form.addEventListener('submit', addBudget);
}

// Classes
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.expenses = [];
    }
}

class UI {
    insertBudget(amount) {
        const { budget, remaining } = amount;

        // Add to html
        document.querySelector('#total').textContent = budget;
        document.querySelector('#restante').textContent = remaining;
    }

    // Print alert
    printAlert(message, type) {
        // Create div
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');
        
        // Add style depending on the type
        if (type === 'success') {
            divMessage.classList.add('alert-success');
        } else {
            divMessage.classList.add('alert-danger');
        }

        // Add message
        divMessage.textContent = message;

        // Add in HTML
        document.querySelector('.primario').insertBefore(divMessage, form);

        // Remove alert
        setTimeout(() => {
            divMessage.remove();
        }, 3000)
    }
}

// Instantiate
const ui = new UI();
let budget;


// Functions
function askBudget() {
    const budgetUser = prompt('¿Cual es tu presupuesto?');

    // When the user agrees and click in cancel, isNaN or less than zero.
    if (budgetUser === '' || budgetUser === null || isNaN(budgetUser) || budgetUser <= 0) {
        // Refresh actual window
        window.location.reload();
    }

    // Budget valid
    budget = new Budget(budgetUser);    

    ui.insertBudget(budget);
}

// Add budget
function addBudget(e) {
    e.preventDefault();

    // Read input form
    const name = document.querySelector('#gasto').value;
    const amount = document.querySelector('#cantidad').value;

    // Checking
    if (name === '' || amount === '') {
        ui.printAlert('Los campos son obligatorios.', 'error');
        return;
    } else if (amount <= 0 || isNaN(amount)) {
        ui.printAlert('Cantidad no valida, verifique.', 'error');
        return;
    }

    // Add new budget into list 

}