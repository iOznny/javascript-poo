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
        this.calculateRemaining();   
    }

    // Calculate Remaining
    calculateRemaining() {        
        const total = this.expenses.reduce((total, re) => total = re.amount, 0);        
        this.remaining = this.remaining - total;        
    }

    // Delete budget
    deleteExp(id) {
        this.expenses = this.expenses.filter(e => e.id !== id);        
        this.calculateRemaining();
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
            newBudget.innerHTML = `${ name } <span class="badge badge-primary badge-pill">$ ${ amount }</span>`;
            
            // Button to delete budget
            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnDelete.innerHTML = 'Borrar &times;';
            btnDelete.onclick = () => {
                deleteExpense(id);
            };
            newBudget.appendChild(btnDelete);
            
            // Add in html
            expenseList.appendChild(newBudget);
        });
    }

    // Clean html
    cleanHTML() {
        while (expenseList.firstChild) {
            expenseList.removeChild(expenseList.firstChild);
        }
    }

    // Update Remaining
    updateRemaining(remaining) {
        document.querySelector('#restante').textContent = remaining;
    } 

    checkingBudget(budgetObj) {
        const { budget, remaining } = budgetObj;
        const remainingDiv = document.querySelector('.restante');

        // Budget the 75%
        if ((budget / 4 ) > remaining) {
            remainingDiv.classList.remove('alert-success', 'alert-warning');
            remainingDiv.classList.add('alert-danger');
        } else if ((budget / 2) > remaining) { // Budget the 50%
            remainingDiv.classList.remove('alert-success');
            remainingDiv.classList.add('alert-warning');
        } else {
            remainingDiv.classList.remove('alert-danger', 'alert-warning');
            remainingDiv.classList.add('alert-success');
        }

        // If the total is zero or less
        if (remaining <= 0) {
            ui.printAlert('El presupuesto se ha agotado.');
            form.querySelector('button[type="submit"]').disabled = true;
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
    const { expenses, remaining} = budget;
    ui.addExpenses(expenses);
    ui.updateRemaining(remaining);
    ui.checkingBudget(budget);

    // Reset form
    form.reset();
}

// Delete budget
function deleteExpense(id) {
    // Delete expenses in obj
    budget.deleteExp(id);

    // Delete expenses in html
    const { expenses, remaining } = budget;
    ui.addExpenses(expenses);
    ui.updateRemaining(remaining);
    ui.checkingBudget(budget);
}