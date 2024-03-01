let deg = document.getElementById("degree");

let sinButton = document.getElementById("sin");
let cosButton = document.getElementById("cos");
let tanButton = document.getElementById("tan");
let asinButton = document.getElementById("asin");
let acosButton = document.getElementById("acos");
let atanButton = document.getElementById("atan");
let secButton = document.getElementById("sec");
let cscButton = document.getElementById("csc");
let cotButton = document.getElementById("cot");

const sinArray = ["sin", "cos", "tan"];
const secArray = ["sec", "csc", "cot"];
const asinArray = ["asin", "acos", "atan"];
const sinhArray = ["sinh", "cosh", "tanh"];
const sechArray = ["sech", "csch", "coth"];
const asinhArray = ["asinh", "acosh", "atanh"];
let topArray = sinArray;
let middleArray = asinArray;
let bottomArray = secArray;
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
    } else {
        topArray = sinArray;
        middleArray = asinArray;
        bottomArray = secArray;
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
}