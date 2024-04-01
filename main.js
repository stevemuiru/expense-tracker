const expense = document.getElementById("expense");
const amount = document.getElementById("amount");
const submit = document.getElementById("submit");

let totalExpense = 0;
submit.addEventListener('click', function() {
  let expenseValue = expense.value;
  let amountValue = parseFloat(amount.value);
  
  totalExpense += amountValue;
  
  const expenseP = document.createElement('p');
  const amountP = document.createElement('p');
  
  expenseP.innerText = "Expense: " + expenseValue;
  amountP.innerText = "Amount: $" + amountValue;
  
  document.body.appendChild(expenseP);
  document.body.appendChild(amountP);
  
  const expenseDisplay = document.getElementById('h2');
  expenseDisplay.innerText = "Total Expense: $" + totalExpense;
  
  
  
  expense.value = "";
  amount.value = "";
})


