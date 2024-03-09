const inputDisplay = document.getElementById("baseInput");
const outputDisplay = document.getElementById("baseOutput");
let selectedBase1 = document.getElementById("base1");
let selectedBase2 = document.getElementById("base2");
let originalBase1 = "10";
let originalBase2 = "10";

let tempValue = 0;

function disableButton() {
    for (let b=1; b<37; b++) {
        if (b<=parseInt(selectedBase1.value)) {
            document.getElementById(`${b}`).disabled = false;
        } else {
            document.getElementById(`${b}`).disabled = true;
        }
    }
}

function appendToDisplay(input) {
    if (parseInt(input, selectedBase1.value).toString(selectedBase2.value) === "NaN") {
        //inputDisplay.value === inputDisplay.value;
    } else if (inputDisplay.value === '0' && input === '0') {
        inputDisplay.value = '0';
    } else if (inputDisplay.value === '0') {
        inputDisplay.value = input;
        baseConverter1();
    } else {
        //todo need to include base for testing
        let testInput = inputDisplay.value + input;
        let convertBase = parseInt(testInput, parseInt(selectedBase1.value));
        if (convertBase <= parseInt("9223372036854775807", 10)) {
            inputDisplay.value = testInput;
            baseConverter1();
        }
    }
}

function clearAll() {
    selectedBase1.value = '10';
    selectedBase2.value = '10';
    inputDisplay.value = "0";
    outputDisplay.value = "0";
    originalBase1 = "10";
    originalBase2 = "10";
    disableButton();
}

function clearError() {
    tempValue = Math.floor(inputDisplay.value/10);
    if(tempValue.length === ""){
        inputDisplay.value = "0";
    } else {
        tempValue = tempValue.toLocaleString();
        inputDisplay.value=tempValue;
    }
    baseConverter1();
}

function baseConverter1() {
    outputDisplay.value = parseInt(inputDisplay.value,
        parseInt(selectedBase1.value)).toString(parseInt(selectedBase2.value));
}

function baseConverter2() {
    console.log('od1 '+outputDisplay.value);
    console.log('sb1 '+selectedBase1.value);
    console.log('sb2 '+selectedBase2.value);
    outputDisplay.value = parseInt(outputDisplay.value,
        parseInt(selectedBase1.value)).toString(parseInt(selectedBase2.value));
}

function changeBase1() {
    inputDisplay.value = parseInt(inputDisplay.value, parseInt(originalBase1)).toString(selectedBase1.value);
    disableButton();
    originalBase1 = selectedBase1.value;
}

function changeBase2() {
    outputDisplay.value = parseInt(outputDisplay.value, parseInt(originalBase2)).toString(selectedBase2.value);
    originalBase2 = selectedBase2.value;
}

let baseNumber1 = "";
for (let i=2; i<37; i++) {
    if (i===10) {
        baseNumber1 +=
            '<option value="'+ i + '" selected>' + i + "</option>"
    } else {
        baseNumber1 +=
            '<option value="'+ i + '">' + i + "</option>"
    }
}
document.getElementById("base1").innerHTML = baseNumber1;

let baseNumber2 = "";
for(let j=2; j<37; j++) {
    if (j === 10) {
        baseNumber2 +=
            '<option value="'+ j + '" selected>' + j + "</option>"
    } else {
        baseNumber2 +=
            '<option value="'+ j + '">' + j + "</option>"
    }
}
document.getElementById("base2").innerHTML = baseNumber2;

disableButton();