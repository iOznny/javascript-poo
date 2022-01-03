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

    // New spending
    newSpending(spending) {
        this.expenses = [...this.expenses, spending];        
    }
}

class UI {
    // Insert budget
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

    // Add expenses
    addExpenses(expenses) {   
        // Clean previus html   
        this.cleanHTML();

        expenses.forEach(expense => {
            const { id, amount, name } = expense;

            // Create li
            const newBudget = document.createElement('li');
            newBudget.className = 'list-group-item d-flex justify-content-between align-items-center';
            newBudget.dataset.id = id;

            // Add to html budget
            newBudget.innerHTML = `${ name } <span class="badge badge-primary badge-pill">${ amount }</span>`;
            
            // Button to delete budget
            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnDelete.innerHTML = 'Borrar &times;';
            newBudget.appendChild(btnDelete);
            
            // Add in html
            expenseList.appendChild(newBudget);

            console.log(newBudget);
        });
    }

    // Clean html
    cleanHTML() {
        while (expenseList.firstChild) {
            expenseList.removeChild(expenseList.firstChild);
        }
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
    const amount = Number(document.querySelector('#cantidad').value);

    // Checking
    if (name === '' || amount === '') {
        ui.printAlert('Los campos son obligatorios.');
        return;
    } else if (amount <= 0 || isNaN(amount)) {
        ui.printAlert('Cantidad no valida, verifique.');
        return;
    }

    // Create object literal
    const spending = { id: Date.now(), name, amount };    

    // Add new budget into list 
    budget.newSpending(spending);

    // Message
    ui.printAlert('Gasto agregado correctamente.', 'success');

    // Print the expenses
    const { expenses } = budget;
    ui.addExpenses(expenses);


    // Reset form
    form.reset();
}
