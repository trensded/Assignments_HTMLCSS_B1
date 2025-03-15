// Correct PIN & Initial Balance
let correctPIN = "1234";
let balance = 1000; 

// Login Function
function login() {
    let enteredPin = document.getElementById("pin-input").value;
    if (enteredPin === correctPIN) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("atm-menu").style.display = "block";
    } else {
        document.getElementById("login-error").innerText = "Incorrect PIN!";
    }
}

// Check Balance
function checkBalance() {
    document.getElementById("balance-display").innerText = "Current Balance: Rs" + balance;
}

// Show Withdraw Screen
function showWithdraw() {
    document.getElementById("atm-menu").style.display = "none";
    document.getElementById("withdraw-screen").style.display = "block";
}

// Withdraw Money
function withdraw() {
    let amount = parseFloat(document.getElementById("withdraw-amount").value);
    let message = document.getElementById("withdraw-message");

    if (amount > 0 && amount <= balance) {
        balance -= amount;
        message.style.color = "green";
        message.innerText = "Success! New Balance: $" + balance;
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Amount or Insufficient Balance!";
    }
}

// Show Deposit Screen
function showDeposit() {
    document.getElementById("atm-menu").style.display = "none";
    document.getElementById("deposit-screen").style.display = "block";
}

// Deposit Money
function deposit() {
    let amount = parseFloat(document.getElementById("deposit-amount").value);
    let message = document.getElementById("deposit-message");

    if (amount > 0) {
        balance += amount;
        message.style.color = "green";
        message.innerText = "Success! New Balance: $" + balance;
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Amount!";
    }
}

// Go Back to ATM Menu
function goBack() {
    document.getElementById("withdraw-screen").style.display = "none";
    document.getElementById("deposit-screen").style.display = "none";
    document.getElementById("atm-menu").style.display = "block";
}

// Logout Function
function logout() {
    document.getElementById("atm-menu").style.display = "none";
    document.getElementById("login-screen").style.display = "block";
    document.getElementById("pin-input").value = "";
    document.getElementById("login-error").innerText = "";
}
