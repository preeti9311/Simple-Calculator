// Variable to store current screen value
let screenValue = ''; 

// Function to append characters to the screen
function append(value) {
    // Append value to the screen
    screenValue += value;
    updateScreen();
}

// Function to update the screen with the current screenValue
function updateScreen() {
    document.querySelector('.display_output').innerText = screenValue;
}

// Function to clear the screen
function clearScreen() {
    screenValue = '';
    updateScreen();
}

// Function to delete the last character from the screen
function deleteLastChar() {
    screenValue = screenValue.slice(0, -1);
    updateScreen();
}

// Function to calculate the result
function cal() {
    try {
        let result = eval(screenValue); // Evaluate the expression
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid operation');
        }
        screenValue = result.toString(); // Convert result to string and update screenValue
        updateScreen();
    } catch (error) {
        screenValue = 'Error';
        updateScreen();
    }
}

