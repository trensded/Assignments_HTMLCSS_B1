let balance = 1000;
const correctPIN = "1234";
let attempts = 3;

function validatePIN() {
    let enteredPIN = document.getElementById("pin").value;
    if (enteredPIN === correctPIN) {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("atm-section").classList.remove("hidden");
    } else {
        attempts--;
        document.getElementById("pin-error").innerText = `Incorrect PIN. Attempts left: ${attempts}`;
        if (attempts === 0) {
            alert("Your account is locked. Try again later.");
            document.getElementById("pin").disabled = true;
        }
    }
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount.");
        return;
    }
    if (amount > balance) {
        alert("Insufficient balance.");
    } else {
        balance -= amount;
        document.getElementById("balance").innerText = balance;
        alert(`$${amount} withdrawn successfully.`);
    }
}

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount.");
        return;
    }
    balance += amount;
    document.getElementById("balance").innerText = balance;
    alert(`$${amount} deposited successfully.`);
}

function logout() {
    document.getElementById("atm-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("pin").value = "";
    document.getElementById("pin-error").innerText = "";
    attempts = 3;
}
