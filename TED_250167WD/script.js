// Initial balance and PIN setup
let balance = 10000; // Set the starting balance
const correctPin = "1234"; // Example PIN
let attemptsLeft = 3;

// DOM Elements
const pinSection = document.getElementById('pin-section');
const mainSection = document.getElementById('main-section');
const pinInput = document.getElementById('pin-input');
const pinError = document.getElementById('pin-error');
const balanceDisplay = document.getElementById('balance-display');
const withdrawSection = document.getElementById('withdraw-section');
const depositSection = document.getElementById('deposit-section');
const withdrawError = document.getElementById('withdraw-error');

// Handle PIN submission
document.getElementById('pin-submit').addEventListener('click', () => {
    const pin = pinInput.value;

    if (pin === correctPin) {
        // Show main section, hide PIN section
        pinSection.classList.add('hidden');
        mainSection.classList.remove('hidden');
        updateBalance();
    } else {
        attemptsLeft--;
        pinError.textContent = `Incorrect PIN. ${attemptsLeft} attempts left.`;

        if (attemptsLeft === 0) {
            pinError.textContent = "Your account is locked.";
            pinInput.disabled = true;
            document.getElementById('pin-submit').disabled = true;
        }
    }
});

// Update balance display
function updateBalance() {
    balanceDisplay.textContent = balance;
}

// Withdraw money
document.getElementById('withdraw-btn').addEventListener('click', () => {
    depositSection.classList.add('hidden');
    withdrawSection.classList.toggle('hidden');
});

document.getElementById('withdraw-submit').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    if (isNaN(amount) || amount <= 0) {
        withdrawError.textContent = "Please enter a valid amount.";
    } else if (amount > balance) {
        withdrawError.textContent = "Insufficient funds.";
    } else {
        balance -= amount;
        withdrawError.textContent = "";
        withdrawSection.classList.add('hidden');
        updateBalance();
    }

  
});

// Deposit money
document.getElementById('deposit-btn').addEventListener('click', () => {
    withdrawSection.classList.add('hidden');
    depositSection.classList.toggle('hidden');
});

document.getElementById('deposit-submit').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
    } else {
        balance += amount;
        depositSection.classList.add('hidden');
        updateBalance();
    }
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    mainSection.classList.add('hidden');
    pinSection.classList.remove('hidden');
    pinInput.value = "";
    attemptsLeft = 3;
    pinError.textContent = "";
});
