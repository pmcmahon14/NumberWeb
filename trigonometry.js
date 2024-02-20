const inputDisplay = document.getElementById("meas");
const outputDisplay = document.getElementById("output");
const inputLabel = document.getElementById("inputLabel");
inputLabel.innerHTML = "input";
const outputLabel = document.getElementById("outputLabel");
outputLabel.innerHTML = "sin";
document.getElementById("select").innerHTML = "DEGREE";
let sinButton = document.getElementById("sin");
let cosButton = document.getElementById("cos");
let tanButton = document.getElementById("tan");
let asinButton = document.getElementById("asin");
let acosButton = document.getElementById("acos");
let atanButton = document.getElementById("atan");
let shiftDisplay = document.getElementById("shiftDisp");
let hypDisplay = document.getElementById("hypDisp");
let shiftValue = shiftDisplay.innerHTML;
let hypValue = hypDisplay.innerHTML;

let decimalUsed = false;

const radianDivide = 1;
const degreeDivide = (Math.PI/180);
const gradianDivide = ((Math.PI/180)*(1/9)*10);
let measure = degreeDivide;

const sinArray = ["sin", "cos", "tan"];
const secArray = ["sec", "csc", "cot"];
const asinArray = ["asin", "acos", "atan"];
const sinhArray = ["sinh", "cosh", "tanh"];
const sechArray = ["sech", "csch", "coth"];
const asinhArray = ["asinh", "acosh", "atanh"];
let bottomArray = sinArray;
let topArray = asinArray;
sinButton.innerHTML = bottomArray[0];
cosButton.innerHTML = bottomArray[1];
tanButton.innerHTML = bottomArray[2];
asinButton.innerHTML = topArray[0];
acosButton.innerHTML = topArray[1];
atanButton.innerHTML = topArray[2];

function shiftSelector() {
    if (shiftValue === "") {
        shiftValue = "SHIFT";
    } else {
        shiftValue = "";
    }
    shiftHypSelectors();
}

function hypSelector() {
    if (hypValue === "") {
        hypValue = "HYP";
    } else {
        hypValue = "";
    }
    shiftHypSelectors();
}

function shiftHypSelectors() {
    if (shiftValue === "" && hypValue === "") {
        bottomArray = sinArray;
        topArray = asinArray;
    } else if (shiftValue === "SHIFT" && hypValue === "") {
        bottomArray = secArray;
        topArray = asinArray;
    } else if (shiftValue === "" && hypValue === "HYP") {
        bottomArray = sinhArray;
        topArray = asinhArray;
    } else {
        bottomArray = sechArray;
        topArray = asinhArray;
    }
    sinButton.innerHTML = bottomArray[0];
    cosButton.innerHTML = bottomArray[1];
    tanButton.innerHTML = bottomArray[2];
    asinButton.innerHTML = topArray[0];
    acosButton.innerHTML = topArray[1];
    atanButton.innerHTML = topArray[2];
}

function trigMeas(button) {
    outputLabel.innerHTML = button.innerText;
    calculate();
}

function appendToDisplay(input) {
    if (inputDisplay.value.length === 15 || inputDisplay.value.length === 16) {
        //nothing
    } else if (input === "0" && inputDisplay.value === "0") {
        //nothing
    } else if (inputDisplay.value === "0") {
        inputDisplay.value = input;
    } else {
        inputDisplay.value = inputDisplay.value+input;
        calculate();
    }
}

function selector() {
    if (document.getElementById("select").innerHTML === "DEGREE") {
        document.getElementById("select").innerHTML = "RADIAN";
        measure = radianDivide;
    } else if (document.getElementById("select").innerHTML === "RADIAN") {
        document.getElementById("select").innerHTML = "GRADIAN";
        measure = gradianDivide;
    } else {
        document.getElementById("select").innerHTML = "DEGREE";
        measure = degreeDivide;
    }
    calculate();
}

function clearAll() {
    document.getElementById("select").innerHTML = "DEGREE";
    measure = degreeDivide;
    inputDisplay.value ='0';
    outputDisplay.value = '0';
    outputLabel.innerText = "sin";
}

function clearError() {
    let tempTrig = parseInt(inputDisplay.value.replace(/,/g,""));
    tempTrig = Math.floor(tempTrig/10);
    if(tempTrig.length === ""){
        inputDisplay.value = "0";
    } else {
        tempTrig = tempTrig.toLocaleString();
        inputDisplay.value=tempTrig;
    }
    calculate();
}

function decimalCalc() {
    if (decimalUsed === false) {
        inputDisplay.value = inputDisplay.value+".";
        decimalUsed = true;
    }
}

function plusMinus() {
    if (inputDisplay.value.startsWith("-")) {
        inputDisplay.value = inputDisplay.value.substring(1);
    } else {
        inputDisplay.value = "-"+inputDisplay.value;
    }
    calculate();
}

function calculate() {
    switch (outputLabel.innerHTML) {
        case "sin":
            outputDisplay.value = Math.sin(inputDisplay.value*measure).toFixed(10);
            break;
        case "cos":
            outputDisplay.value = Math.cos(inputDisplay.value*measure).toFixed(10);
            break;
        case "tan":
            outputDisplay.value = Math.tan(inputDisplay.value*measure).toFixed(10);
            break;
        case "asin":
            outputDisplay.value = Math.asin(inputDisplay.value*measure).toFixed(10);
            break;
        case "acos":
            outputDisplay.value = Math.acos(inputDisplay.value*measure).toFixed(10);
            break;
        case "atan":
            outputDisplay.value = Math.atan(inputDisplay.value*measure).toFixed(10);
            break;
        case "sec":
            outputDisplay.value = (1/(Math.sin(inputDisplay.value*measure))).toFixed(10);
            break;
        case "csc":
            outputDisplay.value = (1/(Math.cos(inputDisplay.value*measure))).toFixed(10);
            break;
        case "cot":
            outputDisplay.value = (1/(Math.tan(inputDisplay.value*measure))).toFixed(10);
            break;
        case "sinh":
            outputDisplay.value = Math.sinh(inputDisplay.value*measure).toFixed(10);
            break;
        case "cosh":
            outputDisplay.value = Math.cosh(inputDisplay.value*measure).toFixed(10);
            break;
        case "tanh":
            outputDisplay.value = Math.tanh(inputDisplay.value*measure).toFixed(10);
            break;
        case "asinh":
            outputDisplay.value = Math.asinh(inputDisplay.value*measure).toFixed(10);
            break;
        case "acosh":
            outputDisplay.value = Math.acosh(inputDisplay.value*measure).toFixed(10);
            break;
        case "atanh":
            outputDisplay.value = Math.atanh(inputDisplay.value*measure).toFixed(10);
            break;
        case "sech":
            outputDisplay.value = Math.asin(inputDisplay.value*measure).toFixed(10);
            break;
        case "csch":
            outputDisplay.value = Math.acos(inputDisplay.value*measure).toFixed(10);
            break;
        case "coth":
            outputDisplay.value = Math.atan(inputDisplay.value*measure).toFixed(10);
            break;
    }
}