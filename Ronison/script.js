
let balance = 100000;
let transactionHistory = [];


const balanceDisplay = document.getElementById('balance');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const checkBalanceBtn = document.getElementById('checkBalanceBtn');
const depositForm = document.getElementById('depositForm');
const withdrawForm = document.getElementById('withdrawForm');
const depositAmountInput = document.getElementById('depositAmount');
const withdrawAmountInput = document.getElementById('withdrawAmount');
const confirmDepositBtn = document.getElementById('confirmDeposit');
const confirmWithdrawBtn = document.getElementById('confirmWithdraw');
const historyList = document.getElementById('historyList');


function updateBalance() {
    balanceDisplay.textContent = balance;
}


depositBtn.addEventListener('click', () => {
    depositForm.style.display = 'block';
    withdrawForm.style.display = 'none';
});


withdrawBtn.addEventListener('click', () => {
    withdrawForm.style.display = 'block';
    depositForm.style.display = 'none';
});

// Check balance (displays in console for simplicity)
checkBalanceBtn.addEventListener('click', () => {
    alert(`Your current balance is $${balance}`);
});

// Confirm deposit
confirmDepositBtn.addEventListener('click', () => {
    let depositAmount = parseFloat(depositAmountInput.value);
    if (depositAmount > 0) {
        balance += depositAmount;
        transactionHistory.push(`Deposited $${depositAmount}`);
        updateBalance();
        updateHistory();
        depositAmountInput.value = '';
        depositForm.style.display = 'none';
    } else {
        alert("Please enter a valid amount to deposit.");
    }
});

// Confirm withdraw
confirmWithdrawBtn.addEventListener('click', () => {
    let withdrawAmount = parseFloat(withdrawAmountInput.value);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        transactionHistory.push(`Withdrew $${withdrawAmount}`);
        updateBalance();
        updateHistory();
        withdrawAmountInput.value = '';
        withdrawForm.style.display = 'none';
    } else if (withdrawAmount > balance) {
        alert("Insufficient funds.");
    } else {
        alert("Please enter a valid amount to withdraw.");
    }
});

// Update transaction history on the screen
function updateHistory() {
    historyList.innerHTML = '';
    transactionHistory.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = transaction;
        historyList.appendChild(li);
    });
}

updateBalance(); // Initial balance display
