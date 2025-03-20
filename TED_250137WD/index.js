let balance = 1000;
const correctPIN = "1234";
let attempts = 3;

function validatePIN() {
    let pin = document.getElementById("pin-input").value;
    if (pin === correctPIN) {
        document.getElementById("message").innerText = "Access Granted";
        document.getElementById("options").classList.remove("hidden");
    } else {
        attempts--;
        document.getElementById("message").innerText = `Incorrect PIN. Attempts left: ${attempts}`;
        if (attempts === 0) {
            document.getElementById("message").innerText = "Card Blocked";
        }
    }
}

function checkBalance() {
    document.getElementById("balance").classList.remove("hidden");
}

function depositMoney() {
    let amount = prompt("Enter deposit amount:");
    if (amount && !isNaN(amount) && amount > 0) {
        balance += parseFloat(amount);
        document.getElementById("balance-amount").innerText = balance;
    }
}

function withdrawMoney() {
    let amount = prompt("Enter withdrawal amount:");
    if (amount && !isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= parseFloat(amount);
        document.getElementById("balance-amount").innerText = balance;
    } else {
        alert("Invalid amount or insufficient funds");
    }
}
