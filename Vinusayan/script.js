// Initialize users data
let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = null;
let passwordAttempts = 0;

// Ensure password is set before login
if (!localStorage.getItem('passwordSet')) {
    showScreen('setupScreen');
} else {
    showScreen('loginScreen');
}

// Password setup function
function setupPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const setupError = document.getElementById('setupError');

    if (!newPassword) {
        setupError.textContent = 'Password cannot be empty.';
        return;
    }
    if (newPassword !== confirmPassword) {
        setupError.textContent = 'Passwords do not match.';
        return;
    }

    users[newPassword] = { balance: 1000 };
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('passwordSet', 'true');
    showScreen('loginScreen');
}

// Helper functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

function appendNumber(num) {
    document.getElementById('passwordInput').value += num;
}

function clearInput() {
    document.getElementById('passwordInput').value = '';
}

// Login function
function login() {
    const enteredPassword = document.getElementById('passwordInput').value;
    const passwordError = document.getElementById('passwordError');

    if (users[enteredPassword]) {
        currentUser = enteredPassword;
        passwordAttempts = 0;
        clearInput();
        showScreen('mainMenu');
        updateBalance();
    } else {
        passwordAttempts++;
        passwordError.textContent = `Invalid password. Attempts left: ${3 - passwordAttempts}`;
        if (passwordAttempts >= 3) {
            passwordError.textContent = 'Account locked. Contact bank.';
            document.querySelectorAll('#loginScreen button').forEach(btn => btn.disabled = true);
        }
    }
}

// Transaction functions
function processWithdraw() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const withdrawError = document.getElementById('withdrawError');
    const withdrawSuccess = document.getElementById('withdrawSuccess');

    if (amount > 0 && amount <= users[currentUser].balance) {
        users[currentUser].balance -= amount;
        updateStorage();
        updateBalance();
        withdrawSuccess.textContent = 'Withdrawal successful!';
        setTimeout(() => showScreen('mainMenu'), 2000);
    } else {
        withdrawError.textContent = amount > users[currentUser].balance ? 'Insufficient funds' : 'Invalid amount';
    }
}

function processDeposit() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const depositError = document.getElementById('depositError');
    const depositSuccess = document.getElementById('depositSuccess');

    if (amount > 0) {
        users[currentUser].balance += amount;
        updateStorage();
        updateBalance();
        depositSuccess.textContent = 'Deposit successful!';
        setTimeout(() => showScreen('mainMenu'), 2000);
    } else {
        depositError.textContent = 'Invalid amount';
    }
}

// Update functions
function updateBalance() {
    document.getElementById('balanceAmount').textContent = `LKR ${users[currentUser].balance.toFixed(2)}`;
}

function updateStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function logout() {
    currentUser = null;
    showScreen('loginScreen');
    clearInput();
}