function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function backspace() {
    var currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}
function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function appendToDisplay(value) {
    var currentDisplay = document.getElementById("display").value;

    // Check if the current display is 0 and the value to append is not a dot
    if (currentDisplay === '0' && value !== '.') {
        document.getElementById("display").value = value;
    } else {
        document.getElementById("display").value += value;
    }
}


