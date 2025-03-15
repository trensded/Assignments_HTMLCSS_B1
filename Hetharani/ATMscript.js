// script.js
let balance = 0; // Initial balance
let currentPIN = "1234"; // Example PIN (In real app, store securely)
let enteredPIN = "";

const display = document.getElementById("display");
const inputArea = document.getElementById("input-area");
const pinInput = document.getElementById("pin");
const menu = document.getElementById("menu");
const balanceDisplay = document.getElementById("balance-display");
const balanceSpan = document.getElementById("balance");
const withdrawForm = document.getElementById("withdraw-form");
const withdrawAmountInput = document.getElementById("withdraw-amount");
const depositForm = document.getElementById("deposit-form");
const depositAmountInput = document.getElementById("deposit-amount");
const messageDisplay = document.getElementById("message");


function appendNumber(number) {
    if (inputArea.style.display === "block") {
        pinInput.value += number;
    } else if (withdrawForm.style.display === "block") {
        withdrawAmountInput.value += number;
    } else if (depositForm.style.display === "block") {
        depositAmountInput.value += number;
    }
}

function clearInput() {
    if (inputArea.style.display === "block") {
        pinInput.value = "";
    } else if (withdrawForm.style.display === "block") {
        withdrawAmountInput.value = "";
    } else if (depositForm.style.display === "block") {
        depositAmountInput.value = "";
    }
}

function backspace() {
    if (inputArea.style.display === "block") {
        pinInput.value = pinInput.value.slice(0, -1);
    } else if (withdrawForm.style.display === "block") {
        withdrawAmountInput.value = withdrawAmountInput.value.slice(0, -1);
    } else if (depositForm.style.display === "block") {
        depositAmountInput.value = depositAmountInput.value.slice(0, -1);
    }
}

function verifyPIN() {
    enteredPIN = pinInput.value;
    if (enteredPIN === currentPIN) {
        inputArea.style.display = "none";
        menu.style.display = "block";
        display.textContent = "Welcome!";
        pinInput.value = ""; // Clear PIN input
    } else {
        showMessage("Incorrect PIN.");
        pinInput.value = ""; // Clear PIN input
    }
}

function checkBalance() {
    balanceDisplay.style.display = "block";
    balanceSpan.textContent = balance;
    menu.style.display = "none";
    display.textContent = "Checking Balance";
}

function withdraw() {
    withdrawForm.style.display = "block";
    menu.style.display = "none";
    display.textContent = "Withdraw";
}

function processWithdraw() {
    const amount = parseFloat(withdrawAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Invalid amount.");
    } else if (amount > balance) {
        showMessage("Insufficient funds.");
    } else {
        balance -= amount;
        balanceSpan.textContent = balance;
        showMessage("Withdrawal successful.");
        withdrawForm.style.display = "none";
        display.textContent = "Withdrawal Successful";
    }
    withdrawAmountInput.value = ""; // Clear input
}

function deposit() {
    depositForm.style.display = "block";
    menu.style.display = "none";
    display.textContent = "Deposit";
}

function processDeposit() {
    const amount = parseFloat(depositAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Invalid amount.");
    } else {
        balance += amount;
        balanceSpan.textContent = balance;
        showMessage("Deposit successful.");
        depositForm.style.display = "none";
        display.textContent = "Deposit Successful";
    }
    depositAmountInput.value = ""; // Clear input
}

function logout() {
    menu.style.display = "none";
    balanceDisplay.style.display = "none";
    withdrawForm.style.display = "none";
    depositForm.style.display = "none";
    display.textContent = "Please insert your card.";
    messageDisplay.style.display = "none"; // Hide any error messages
}

function showMessage(msg) {
    messageDisplay.style.display = "block";
    messageDisplay.textContent = msg;
}

// Initial state:
display.textContent = "Welcome! Please insert your card.";
inputArea.style.display = "block";