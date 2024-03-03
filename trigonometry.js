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

//following two are hidden from view on webpage; meant to align buttons
//and help label trig buttons correctly and are just below forms
let shiftValue = shiftDisplay.innerHTML;
let hypValue = hypDisplay.innerHTML;

let decimalUsed = false;

const radianDivide = 1;
const degreeDivide = (Math.PI/180);
const gradianDivide = ((Math.PI/180)*(1/9)*10);
const altDegreeDivide = (180/Math.PI);
const altGradianDivide = (180/Math.PI)*((1/9)*10);
let measure = degreeDivide;
let altMeasure = altDegreeDivide;

const sinArray = ["sin", "cos", "tan"];
const secArray = ["csc", "sec", "cot"];
const asinArray = ["asin", "acos", "atan"];
const acscArray = ["acsc", "asec", "acot"];
const sinhArray = ["sinh", "cosh", "tanh"];
const sechArray = ["csch", "sech", "coth"];
const asinhArray = ["asinh", "acosh", "atanh"];
const acschArray = ["acsch", "asech", "acoth"];
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
        topArray = acscArray;
    } else if (shiftValue === "" && hypValue === "HYP") {
        bottomArray = sinhArray;
        topArray = asinhArray;
    } else {
        bottomArray = sechArray;
        topArray = acschArray;
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
        calculate();
    } else {
        inputDisplay.value = inputDisplay.value+input;
        calculate();
    }
}

function selector() {
    if (document.getElementById("select").innerHTML === "DEGREE") {
        document.getElementById("select").innerHTML = "RADIAN";
        measure = radianDivide;
        altMeasure = radianDivide;
    } else if (document.getElementById("select").innerHTML === "RADIAN") {
        document.getElementById("select").innerHTML = "GRADIAN";
        measure = gradianDivide;
        altMeasure = altGradianDivide;
    } else {
        document.getElementById("select").innerHTML = "DEGREE";
        measure = degreeDivide;
        altMeasure = altDegreeDivide;
    }
    calculate();
}

function clearAll() {
    document.getElementById("select").innerHTML = "DEGREE";
    measure = degreeDivide;
    inputDisplay.value ='0';
    outputDisplay.value = '0';
    outputLabel.innerText = "sin";
    decimalUsed = false;
    shiftValue = "";
    hypValue = "";
    shiftHypSelectors();
}

function clearError() {
    // let tempTrig = parseInt(inputDisplay.value.replace(/,/g,""));
    // tempTrig = Math.floor(tempTrig/10);
    if (inputDisplay.value.slice(".")) {
        decimalUsed = false;
    } else if (inputDisplay.value === "-") {
        inputDisplay.value = "0";
    }
    let tempTrig = inputDisplay.value.substring(0, inputDisplay.value.length-1);
    if(tempTrig === ""){
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
    if (inputDisplay.value === "-") {
        inputDisplay.value = "0";
    } else if (inputDisplay.value.startsWith("-")) {
        inputDisplay.value = inputDisplay.value.substring(1);
    } else if (inputDisplay.value === "0") {
        inputDisplay.value = "-";
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
            outputDisplay.value = Math.asin(inputDisplay.value)*altMeasure.toFixed(10);
            break;
        case "acos":
            outputDisplay.value = Math.acos(inputDisplay.value)*altMeasure.toFixed(10);
            break;
        case "atan":
            outputDisplay.value = Math.atan(inputDisplay.value)*altMeasure.toFixed(10);
            break;
        case "sec":
            outputDisplay.value = (1/(Math.cos(inputDisplay.value*measure))).toFixed(10);
            break;
        case "csc":
            outputDisplay.value = (1/(Math.sin(inputDisplay.value*measure))).toFixed(10);
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
            outputDisplay.value = Math.asinh(inputDisplay.value)*altMeasure.toFixed(10);
            break;
        case "acosh":
            outputDisplay.value = Math.acosh(inputDisplay.value)*altMeasure.toFixed(10);
            break;
        case "atanh":
            outputDisplay.value = Math.atanh(inputDisplay.value)*altMeasure.toFixed(10);
            break;
        case "sech":
            outputDisplay.value = (1/(Math.sinh(inputDisplay.value*measure))).toFixed(10);
            break;
        case "csch":
            outputDisplay.value = (1/(Math.cosh(inputDisplay.value*measure))).toFixed(10);
            break;
        case "coth":
            outputDisplay.value = (1/(Math.tanh(inputDisplay.value*measure))).toFixed(10);
            break;
        case "acsch":
            const p1 = Math.sqrt(1+Math.pow(inputDisplay.value,2));
            const p2 = (1+p1)/inputDisplay.value;
            const p3 = Math.log(p2)*altMeasure;
            outputDisplay.value = p3.toFixed(10);
            break;
        case "asech":
            const p4 = Math.sqrt((1/Math.pow(inputDisplay.value,2))-1);
            const p5 = 1/inputDisplay.value;
            const p6 = Math.log(p5+p4)*altMeasure;
            outputDisplay.value = p6.toFixed(10);
            break;
        case "acoth":
            const p7 = Math.log(1-(1/inputDisplay.value));
            const p8 = Math.log(1+(1/inputDisplay.value));
            const p9 = ((1/2)*(p8-p7))*altMeasure;
            outputDisplay.value = p9.toFixed(10);
            break;
        case "acsc":
            outputDisplay.value = (Math.asin(1/inputDisplay.value)*altMeasure).toFixed(10);
            break;
        case "asec":
            outputDisplay.value = (Math.acos(1/inputDisplay.value)*altMeasure).toFixed(10);
            break;
        case "acot":
            outputDisplay.value = (Math.atan(1/inputDisplay.value)*altMeasure).toFixed(10);
            break;
    }
    if (outputDisplay.value.endsWith("0000000000")) {
        outputDisplay.value = Math.round(outputDisplay.value);
    } else if (outputDisplay.value === "NaN") {
        outputDisplay.value = "error";
    }
}