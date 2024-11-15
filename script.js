let display = document.getElementById("display");
let currentInput = "0";
let shouldResetDisplay = false;

function appendNumber(number) {
    if (currentInput === "0" || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (shouldResetDisplay) shouldResetDisplay = false;
    if (/[+\-*/]$/.test(currentInput)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
}

function resetDisplay() {
    currentInput = "0";
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/x/g, "*")).toString();
        shouldResetDisplay = true;
    } catch (e) {
        currentInput = "Error";
        shouldResetDisplay = true;
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
