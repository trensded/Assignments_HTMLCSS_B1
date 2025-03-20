let balance = 1000;
let attempts = 0;

function validatePIN() {
    const pin = document.getElementById("pin").value;
    if (pin.length === 4 && !isNaN(pin)) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("atm-section").style.display = "block";
    } else {
        attempts++;
        document.getElementById("login-message").textContent = "Invalid PIN. Try again.";
        if (attempts >= 3) {
            document.getElementById("login-message").textContent = "Too many attempts. Access blocked.";
            document.getElementById("pin").disabled = true;
        }
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > balance) {
        document.getElementById("atm-message").textContent = "Insufficient balance.";
    } else {
        balance -= amount;
        document.getElementById("balance").textContent = balance;
        document.getElementById("atm-message").textContent = "Withdrawal successful.";
        document.getElementById("amount").value = "";
    }
}

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    balance += amount;
    document.getElementById("balance").textContent = balance;
    document.getElementById("atm-message").textContent = "Deposit successful.";
    document.getElementById("amount").value = "";
}
