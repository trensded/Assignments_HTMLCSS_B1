let balance = 1000;
const correctPin = "1234";
let attempts = 3;

function validatePIN() {
    let pinInput = document.getElementById("pin-input").value;
    let errorDisplay = document.getElementById("pin-error");

    if (pinInput === correctPin) {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("atm-screen").classList.remove("hidden");
    } else {
        attempts--;
        errorDisplay.textContent = `Incorrect PIN. Attempts left: ${attempts}`;
        if (attempts === 0) {
            errorDisplay.textContent = "ATM locked due to too many incorrect attempts.";
            document.getElementById("pin-input").disabled = true;
        }
    }
}

function showWithdraw() {
    document.getElementById("withdraw-screen").classList.remove("hidden");
    document.getElementById("deposit-screen").classList.add("hidden");
}

function showDeposit() {
    document.getElementById("deposit-screen").classList.remove("hidden");
    document.getElementById("withdraw-screen").classList.add("hidden");
}

function withdraw() {
    let amount = parseFloat(document.getElementById("withdraw-amount").value);
    let errorDisplay = document.getElementById("withdraw-error");
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("balance").textContent = `$${balance}`;
        errorDisplay.textContent = "";
    } else {
        errorDisplay.textContent = "Invalid amount or insufficient funds.";
    }
}

function deposit() {
    let amount = parseFloat(document.getElementById("deposit-amount").value);
    let errorDisplay = document.getElementById("deposit-error");
    if (amount > 0) {
        balance += amount;
        document.getElementById("balance").textContent = `$${balance}`;
        errorDisplay.textContent = "";
    } else {
        errorDisplay.textContent = "Enter a valid amount.";
    }
}

function logout() {
    document.getElementById("atm-screen").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
    document.getElementById("pin-input").value = "";
    document.getElementById("pin-error").textContent = "";
    attempts = 3;
}
