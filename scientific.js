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
let expUsed = false;
let rootUsed = false;
let parenthesesUsed = false;
let operationValue = null;

let firstValue = null;
let secondValue = null;

//for exponents and roots
let y = 0;

//for combinations and permutations
let objects = null;
let sample = null;

//sets up trig measurements for degrees, radians, or gradians
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
    y = 0;
    expUsed = false;
    rootUsed = false;
    objects = null;
    sample = null;
    firstValue = null;
    secondValue = null;
    parenthesesUsed = false;
    deg.innerHTML = "DEG";
}

function clearError() {
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
}

function appendToDisplay(input) {
    if (inputDisplay.value === "0") {
        if (input === "00") {
            inputDisplay.value = "0";
        } else {
            inputDisplay.value = input;
        }
    } else if (inputDisplay.value.includes("^") || inputDisplay.value.includes("\u221a")
        || inputDisplay.value.includes("objects")) {
        inputDisplay.value = input;
    } else if (parenthesesUsed === false && (inputDisplay.value.endsWith("+")
        || inputDisplay.value.endsWith("-") || inputDisplay.value.endsWith("*")
        || inputDisplay.value.endsWith("/"))) {
        inputDisplay.value = input;
    } else {
        inputDisplay.value = inputDisplay.value+input;
    }
}

function calculate() {
    if (firstValue === null) {
        //return
    } else {
        try {
            if (operationValue === "+") {
                inputDisplay.value = Number(firstValue)+Number(inputDisplay.value);
            } else if (operationValue === "-") {
                inputDisplay.value = firstValue-inputDisplay.value;
            } else if (operationValue === "*") {
                inputDisplay.value = firstValue*inputDisplay.value;
            } else {
                inputDisplay.value = firstValue/inputDisplay.value;
            }
            firstValue = inputDisplay.value;
        } catch(err) {
            inputDisplay.value = "error";
        }
    }
}

function equal() {
    if (firstValue === null) {
        //return
    } else {
        try {
            if (operationValue === "+") {
                inputDisplay.value = Number(firstValue)+Number(inputDisplay.value);
            } else if (operationValue === "-") {
                inputDisplay.value = firstValue-inputDisplay.value;
            } else if (operationValue === "*") {
                inputDisplay.value = firstValue*inputDisplay.value;
            } else {
                inputDisplay.value = firstValue/inputDisplay.value;
            }
            firstValue = null;
        } catch(err) {
            inputDisplay.value = "error";
        }
    }
}

function permCalc(input) {
    if (objects === null) {
        objects = inputDisplay.value;
        inputDisplay.value = `${objects} objects`;
    } else {
        sample = inputDisplay.value;
        const diff = objects-sample;
        let num = 1;
        let denom = 1;
        let sam = 1;

        for (let i=objects; i>0; i--) {
            num = i*num;
        }

        for (let j=diff; j>0; j--) {
            denom = j*denom;
        }

        for (let k=sample; k>0; k--) {
            sam = k*sam;
        }

        if (input === "nPr") {
            inputDisplay.value = num/denom+" permutations";
        } else {
            inputDisplay.value = num/(sam*denom)+" combinations";
        }
    }
}

function decimalDisplay(input) {
    if (decimalUsed === false) {
        inputDisplay.value = inputDisplay.value+input;
        decimalUsed = true;
    }
}

function eulerCalc() {
    inputDisplay.value = Math.pow(Math.E, inputDisplay.value);
}

function expCalc(input) {
    if (rootUsed === true) {
        inputDisplay.value = Math.pow(y, 1/inputDisplay.value);
        rootUsed = false;
    } else if (expUsed === true) {
        inputDisplay.value = Math.pow(y, inputDisplay.value);
        expUsed = false;
    } else if (input === "^") {
        y = inputDisplay.value;
        inputDisplay.value+="^";
        expUsed = true;
    } else {
        y = inputDisplay.value;
        inputDisplay.value = `\u221a${y}`;
        rootUsed = true;
    }
    //todo append needs conditional for expUsed = true and clearerror nonfunctional with exponent;
}

function factorialCalc() {
    //todo formula for decimal numbers, and negative, if possible
    if (inputDisplay.value%1 !== 0 || inputDisplay.value > 1000000000) {
        inputDisplay.value = "error";
    } else {
        let f = 1;
        for (let n=inputDisplay.value; n>0; n--) {
            f = f*n;
        }
        if (f >= 1000000000) {
            f = f.toExponential();
            f = f.replace("+","");
        }
        inputDisplay.value = f;
    }
}

function logCalc(input) {
    if (input === "ln") {
        inputDisplay.value = Math.log(inputDisplay.value);
    } else {
        inputDisplay.value = Math.log10(inputDisplay.value);
    }
}

function operationCalc(input) {
    if (parenthesesUsed === true) {
        //return
    } else if (firstValue !== null) {
        console.log(firstValue);

        calculate(input);
        operationValue = input;
    } else if (inputDisplay.value.endsWith("+") || inputDisplay.value.endsWith("-") ||
        inputDisplay.value.endsWith("*") || inputDisplay.value.endsWith("/") ) {
        inputDisplay.value = inputDisplay.value.substring(0, inputDisplay.value.length-1);
    } else {
        firstValue = inputDisplay.value;
        operationValue = input;
    }
    inputDisplay.value+=input;
}

function parentheses() {
    //todo solve equation in parentheses for calculate()
    if (parenthesesUsed === false) {
        if (inputDisplay.value === "0") {
            inputDisplay.value = "(";
        } else {
            inputDisplay.value+="(";
        }
        parenthesesUsed = true;
    } else {
        inputDisplay.value+=")";
        parenthesesUsed = false;
    }
}

function percentCalc() {
    inputDisplay.value = inputDisplay.value/100;
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

function piCalc() {
    inputDisplay.value = Math.PI;
}

function reciprocalCalc() {
    inputDisplay.value = 1/inputDisplay.value;
}

function sumCalc() {
    //todo formula for decimal numbers, and negative, if possible
    if (inputDisplay.value%1 !== 0 || inputDisplay.value > 1000000000) {
        inputDisplay.value = "error";
    } else {
        let s = 0;
        for (let n=parseInt(inputDisplay.value); n>0; n--) {
            s = s+n;
        }
        if (s >= 1000000000) {
            s = s.toExponential();
            s = s.replace("+", "");
        }
        inputDisplay.value = s;
    }
}

//trig functions in button order
function trigCalc(input) {
    switch (input) {
        case "sin":
            inputDisplay.value = Math.sin(inputDisplay.value * measure).toFixed(10);
            break;
        case "cos":
            inputDisplay.value = Math.cos(inputDisplay.value * measure).toFixed(10);
            break;
        case "tan":
            inputDisplay.value = Math.tan(inputDisplay.value * measure).toFixed(10);
            break;
        case "asin":
            inputDisplay.value = Math.asin(inputDisplay.value) * altMeasure.toFixed(10);
            break;
        case "acos":
            inputDisplay.value = Math.acos(inputDisplay.value) * altMeasure.toFixed(10);
            break;
        case "atan":
            inputDisplay.value = Math.atan(inputDisplay.value) * altMeasure.toFixed(10);
            break;
        case "sec":
            inputDisplay.value = (1 / (Math.cos(inputDisplay.value * measure))).toFixed(10);
            break;
        case "csc":
            inputDisplay.value = (1 / (Math.sin(inputDisplay.value * measure))).toFixed(10);
            break;
        case "cot":
            inputDisplay.value = (1 / (Math.tan(inputDisplay.value * measure))).toFixed(10);
            break;
        case "sinh":
            inputDisplay.value = Math.sinh(inputDisplay.value * measure).toFixed(10);
            break;
        case "cosh":
            inputDisplay.value = Math.cosh(inputDisplay.value * measure).toFixed(10);
            break;
        case "tanh":
            inputDisplay.value = Math.tanh(inputDisplay.value * measure).toFixed(10);
            break;
        case "asinh":
            inputDisplay.value = Math.asinh(inputDisplay.value) * altMeasure.toFixed(10);
            break;
        case "acosh":
            inputDisplay.value = Math.acosh(inputDisplay.value) * altMeasure.toFixed(10);
            break;
        case "atanh":
            inputDisplay.value = Math.atanh(inputDisplay.value) * altMeasure.toFixed(10);
            break;
        case "sech":
            inputDisplay.value = (1 / (Math.cosh(inputDisplay.value * measure))).toFixed(10);
            break;
        case "csch":
            inputDisplay.value = (1 / (Math.sinh(inputDisplay.value * measure))).toFixed(10);
            break;
        case "coth":
            inputDisplay.value = (1 / (Math.tanh(inputDisplay.value * measure))).toFixed(10);
            break;
    }
    if (inputDisplay.value.endsWith("0000000000")) {
        inputDisplay.value = Math.round(inputDisplay.value);
    } else if (inputDisplay.value.endsWith("000000000")) {
        inputDisplay.value = inputDisplay.value.substring(0, inputDisplay.value.length-9);
    } else if (inputDisplay.value === "NaN") {
        inputDisplay.value = "error";
    }
}