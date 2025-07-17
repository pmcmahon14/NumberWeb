const inputDisplay = document.getElementById("input");
let degreeButton = document.getElementById("trig");
degreeButton.innerHTML = "DEG";

let decimalUsed = false;

const trigArray = ["sin", "cos", "tan", "asin", "acos", "atan", "csc", "sec", "cot", "acsc", "asec", "acot",
    "sinh", "cosh", "tanh", "asinh", "acosh", "atanh", "csch", "sech", "coth", "acsch", "asech", "acoth"];

const trigValues = ["0", "1", "0", "0", "90", "0", "Infinity", "1", "Infinity", "NaN", "NaN",
    "90", "0", "1", "0", "0", "NaN", "0", "Infinity", "1", "Infinity", "Infinity", "Infinity", "NaN"];

//this sets up base number results table in alternating colors
let trigLabel = "";
for (let i=0; i<trigArray.length; i++) {
    if (i%2===0) {
        trigLabel += '<div class="even"><p class="numbers">'+trigArray[i]+'</p></div>'
    } else {
        trigLabel += '<div class="odd"><p class="numbers">'+trigArray[i]+'</p></div>'
    }
}
document.getElementById("trigLabels").innerHTML = trigLabel;

let trigResult = "";
for (let j=0; j<trigArray.length; j++) {
    if (j%2===0) {
        trigResult += '<div class="even"><p class="numbers" id="'+trigArray[j]+'">'+trigValues[j]+'</p></div>'
    } else {
        trigResult += '<div class="odd"><p class="numbers" id="'+trigArray[j]+'">'+trigValues[j]+'</p></div>'
    }
}
document.getElementById("trigAnswers").innerHTML = trigResult;

const radianDivide = 1;
const degreeDivide = (Math.PI/180);
const gradianDivide = ((Math.PI/180)*(1/9)*10);
const altDegreeDivide = (180/Math.PI);
const altGradianDivide = (180/Math.PI)*((1/9)*10);
let measure = degreeDivide;
let altMeasure = altDegreeDivide;

let sin = document.getElementById(`${trigArray[0]}`);
let cos = document.getElementById(`${trigArray[1]}`);
let tan = document.getElementById(`${trigArray[2]}`);
let asin = document.getElementById(`${trigArray[3]}`);
let acos = document.getElementById(`${trigArray[4]}`);
let atan = document.getElementById(`${trigArray[5]}`);
let csc = document.getElementById(`${trigArray[6]}`);
let sec = document.getElementById(`${trigArray[7]}`);
let cot = document.getElementById(`${trigArray[8]}`);
let acsc = document.getElementById(`${trigArray[9]}`);
let asec = document.getElementById(`${trigArray[10]}`);
let acot = document.getElementById(`${trigArray[11]}`);
let sinh = document.getElementById(`${trigArray[12]}`);
let cosh = document.getElementById(`${trigArray[13]}`);
let tanh = document.getElementById(`${trigArray[14]}`);
let asinh = document.getElementById(`${trigArray[15]}`);
let acosh = document.getElementById(`${trigArray[16]}`);
let atanh = document.getElementById(`${trigArray[17]}`);
let csch = document.getElementById(`${trigArray[18]}`);
let sech = document.getElementById(`${trigArray[19]}`);
let coth = document.getElementById(`${trigArray[20]}`);
let acsch = document.getElementById(`${trigArray[21]}`);
let asech = document.getElementById(`${trigArray[22]}`);
let acoth = document.getElementById(`${trigArray[23]}`);

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
    if (degreeButton.innerHTML === "DEG") {
        degreeButton.innerHTML = "RAD";
        measure = radianDivide;
        altMeasure = radianDivide;
    } else if (degreeButton.innerHTML === "RAD") {
        degreeButton.innerHTML = "GRAD";
        measure = gradianDivide;
        altMeasure = altGradianDivide;
    } else {
        degreeButton.innerHTML = "DEG";
        measure = degreeDivide;
        altMeasure = altDegreeDivide;
    }
    calculate();
}

function clearAll() {
    degreeButton.innerHTML = "DEG";
    measure = degreeDivide;
    inputDisplay.value ='0';
    decimalUsed = false;
    calculate();
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
    //values to calculate acsch
    const p1 = Math.sqrt(1+Math.pow(inputDisplay.value,2));
    const p2 = (1+p1)/inputDisplay.value;
    const p3 = Math.log(p2)*altMeasure;
    //values to calculate asech
    const p4 = Math.sqrt((1/Math.pow(inputDisplay.value,2))-1);
    const p5 = 1/inputDisplay.value;
    const p6 = Math.log(p5+p4)*altMeasure;
    //values to calculate acoth
    const p7 = Math.log(1-(1/inputDisplay.value));
    const p8 = Math.log(1+(1/inputDisplay.value));
    const p9 = ((1/2)*(p8-p7))*altMeasure;
    sin.innerHTML = Math.sin(inputDisplay.value*measure).toString();
    cos.innerHTML = Math.cos(inputDisplay.value*measure).toString();
    tan.innerHTML = Math.tan(inputDisplay.value*measure).toString();
    asin.innerHTML = (Math.asin(inputDisplay.value)*altMeasure).toString();
    acos.innerHTML = (Math.acos(inputDisplay.value)*altMeasure).toString();
    atan.innerHTML = (Math.atan(inputDisplay.value)*altMeasure).toString();
    sec.innerHTML = (1/(Math.cos(inputDisplay.value*measure))).toString();
    csc.innerHTML = (1/(Math.sin(inputDisplay.value*measure))).toString();
    cot.innerHTML = (1/(Math.tan(inputDisplay.value*measure))).toString();
    acsc.innerHTML = (Math.asin(1/inputDisplay.value)*altMeasure).toString();
    asec.innerHTML = (Math.acos(1/inputDisplay.value)*altMeasure).toString();
    acot.innerHTML = (Math.atan(1/inputDisplay.value)*altMeasure).toString();
    sinh.innerHTML = Math.sinh(inputDisplay.value*measure).toString();
    cosh.innerHTML = Math.cosh(inputDisplay.value*measure).toString();
    tanh.innerHTML = Math.tanh(inputDisplay.value*measure).toString();
    asinh.innerHTML = (Math.asinh(inputDisplay.value)*altMeasure).toString();
    acosh.innerHTML = (Math.acosh(inputDisplay.value)*altMeasure).toString();
    atanh.innerHTML = (Math.atanh(inputDisplay.value)*altMeasure).toString();
    sech.innerHTML = (1/(Math.cosh(inputDisplay.value*measure))).toString();
    csch.innerHTML = (1/(Math.sinh(inputDisplay.value*measure))).toString();
    coth.innerHTML = (1/(Math.tanh(inputDisplay.value*measure))).toString();
    acsch.innerHTML = p3.toString();
    asech.innerHTML = p6.toString();
    acoth.innerHTML = p9.toString();
}

//todo add this function to calculations
// function checkAnswer() {
//     if (outputDisplay.value.includes(".0000000000")) {
//         outputDisplay.value = Math.round(outputDisplay.value);
//     } else if (outputDisplay.value.includes(".000000000")) {
//         outputDisplay.value = outputDisplay.value.substring(0, outputDisplay.value.length-9);
//     } else if (outputDisplay.value === "NaN") {
//         outputDisplay.value = "error";
//     }
// }