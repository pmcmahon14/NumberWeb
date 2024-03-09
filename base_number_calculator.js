const input1Display = document.getElementById("baseInput1");
const input2Display = document.getElementById("baseInput2");
const opDisplay = document.getElementById("operationInput");
const outputDisplay = document.getElementById("baseOutput");
let selectedBase = document.getElementById("base1");
let originalBase = "10";
let equalUsed = false;

let tempValue = 0;
let currentDisplay = input1Display;

function disableButton() {
    for (let b=1; b<37; b++) {
        if (b<=parseInt(selectedBase.value)) {
            document.getElementById(`${b}`).disabled = false;
        } else {
            document.getElementById(`${b}`).disabled = true;
        }
    }
}

function appendToDisplay(input) {
    if (equalUsed === true) {
        //nothing
    } else {
        if (opDisplay.value !== "") {
            currentDisplay = input2Display;
        } else {

        }
        if (currentDisplay.value === '0' && input === '0') {
            currentDisplay.value = '0';
        } else if (currentDisplay.value === '0') {
            currentDisplay.value = input;
            console.log(currentDisplay.value);
            //baseConverter1();
        } else {
            //todo need to include base for testing
            let testInput = currentDisplay.value + input;
            console.log(currentDisplay.value);
            let convertBase = parseInt(testInput, parseInt(selectedBase.value));
            if (convertBase <= parseInt("9223372036854775807", 10)) {
                currentDisplay.value = testInput;
                //baseConverter1();
            }
        }
    }

}

function clearAll() {
    selectedBase.value = '10';
    input1Display.value = "0";
    input2Display.value = "0";
    opDisplay.value = "";
    outputDisplay.value = "0";
    originalBase = "10";
    currentDisplay = input1Display;
    equalUsed = false;
}

function clearError() {
    tempValue = Math.floor(inputDisplay.value/10);
    if(tempValue.length === ""){
        inputDisplay.value = "0";
    } else {
        tempValue = tempValue.toLocaleString();
        inputDisplay.value=tempValue;
    }
    //baseConverter1();
}

function baseConverter1() {
    console.log(originalBase);
    currentDisplay.value = parseInt(currentDisplay.value, parseInt(originalBase.value)).toString(selectedBase.value);
}

function calculate() {
    const first = parseInt(input1Display.value, parseInt((selectedBase.value)));
    const second = parseInt(input2Display.value, parseInt((selectedBase.value)));
    if (opDisplay.value === "+") {
        outputDisplay.value = (first+second).toString(selectedBase.value);
    } else if (opDisplay.value === "-") {
        outputDisplay.value = (first-second).toString(selectedBase.value);
    } else if (opDisplay.value === "X") {
        outputDisplay.value = (first*second).toString(selectedBase.value);
    } else {
        outputDisplay.value = (first/second).toString(selectedBase.value);
    }
    equalUsed = true;
}

function changeBase(selectedBase) {
    input1Display.value = parseInt(input1Display.value, parseInt(originalBase)).toString(selectedBase.value);
    input2Display.value = parseInt(input2Display.value, parseInt(originalBase)).toString(selectedBase.value);
    outputDisplay.value = parseInt(outputDisplay.value, parseInt(originalBase)).toString(selectedBase.value);
    //baseConverter1();
    disableButton();
    originalBase = selectedBase.value;
}

function operationDisplay(input) {
    opDisplay.value = input;
}

let baseNumber = "";
for (let i=2; i<37; i++) {
    if (i===10) {
        baseNumber +=
            '<option value="'+ i + '" selected>' + i + "</option>"
    } else {
        baseNumber +=
            '<option value="'+ i + '">' + i + "</option>"
    }
}
document.getElementById("base1").innerHTML = baseNumber;

disableButton();