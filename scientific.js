const inputDisplay = document.getElementById("input");

let deg = document.getElementById("degree");

let button = document.querySelectorAll("button");
let sinButton = document.getElementById("sin");
let cosButton = document.getElementById("cos");
let tanButton = document.getElementById("tan");
let asinButton = document.getElementById("asin");
let acosButton = document.getElementById("acos");
let atanButton = document.getElementById("atan");
let secButton = document.getElementById("sec");
let cscButton = document.getElementById("csc");
let cotButton = document.getElementById("cot");
let ncrButton = document.getElementById("ncr");

const sinArray = ["sin", "cos", "tan"];
const secArray = ["sec", "csc", "cot"];
const asinArray = ["asin", "acos", "atan"];
const sinhArray = ["sinh", "cosh", "tanh"];
const sechArray = ["sech", "csch", "coth"];
const asinhArray = ["asinh", "acosh", "atanh"];
const ncrArray = ["nCr"];
const nprArray = ["nPr"];
let topArray = sinArray;
let middleArray = asinArray;
let bottomArray = secArray;
let combArray = ncrArray;
sinButton.innerHTML = topArray[0];
cosButton.innerHTML = topArray[1];
tanButton.innerHTML = topArray[2];
asinButton.innerHTML = middleArray[0];
acosButton.innerHTML = middleArray[1];
atanButton.innerHTML = middleArray[2];
secButton.innerHTML = bottomArray[0];
cscButton.innerHTML = bottomArray[1];
cotButton.innerHTML = bottomArray[2];

const radianDivide = 1;
const degreeDivide = (Math.PI/180);
const gradianDivide = ((Math.PI/180)*(1/9)*10);
let measure = degreeDivide;
let decimalUsed = false;

function selector() {
    if (deg.innerHTML === "DEG") {
        deg.innerHTML = "RAD";
        measure = radianDivide;
    } else if (deg.innerHTML === "RAD") {
        deg.innerHTML = "GRAD";
        measure = gradianDivide;
    } else {
        deg.innerHTML = "DEG";
        measure = degreeDivide;
    }
    //calculate();
}

function hyp() {
    if (sinButton.innerHTML === "sin") {
        topArray = sinhArray;
        middleArray = asinhArray;
        bottomArray = sechArray;
        combArray = nprArray;
    } else {
        topArray = sinArray;
        middleArray = asinArray;
        bottomArray = secArray;
        combArray = ncrArray;
    }
    sinButton.innerHTML = topArray[0];
    cosButton.innerHTML = topArray[1];
    tanButton.innerHTML = topArray[2];
    asinButton.innerHTML = middleArray[0];
    acosButton.innerHTML = middleArray[1];
    atanButton.innerHTML = middleArray[2];
    secButton.innerHTML = bottomArray[0];
    cscButton.innerHTML = bottomArray[1];
    cotButton.innerHTML = bottomArray[2];
    ncrButton.innerHTML = combArray[0];
}

function clearAll() {
    inputDisplay.value = "0";
    decimalUsed = false;
}

function appendToDisplay(input) {
    if (inputDisplay.value === "0") {
        if (input === "00") {
            inputDisplay.value = "0";
        } else {
            inputDisplay.value = input;
        }
    } else {
        inputDisplay.value = inputDisplay.value+input;
    }
}

function decimalDisplay(input) {
    if (decimalUsed === false) {
        inputDisplay.value = inputDisplay.value+input;
        decimalUsed = true;
    }
}

function plusMinus() {
    if (inputDisplay.value === "0") {
        inputDisplay.value = "-";
    } else if (!inputDisplay.value.startsWith("-")) {
        inputDisplay.value = "-"+inputDisplay.value;
    } else if (inputDisplay.value === "-") {
        inputDisplay.value = "0";
    } else {
        inputDisplay.value = inputDisplay.value.substring(1);
    }
}

//permutations = objects!/(objects-sample)! where n=8, r=3 -> 336
//combinations = objects!/(sample!(objects-sample)!) where n=8, r=3 -> 56