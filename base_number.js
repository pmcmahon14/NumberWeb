const inputDisplay = document.getElementById("baseInput");
const outputDisplay = document.getElementById("baseOutput");
let selectedBase1 = document.getElementById("base1");
let selectedBase2 = document.getElementById("base2");
let originalBase1 = "10";
let originalBase2 = "10";

// document.getElementById("1").enabled = true;
// document.getElementById("2").enabled = true;
// document.getElementById("3").enabled = true;
// document.getElementById("4").enabled = true;
// document.getElementById("5").enabled = true;
// document.getElementById("6").enabled = true;
// document.getElementById("7").enabled = true;
// document.getElementById("8").enabled = true;
// document.getElementById("9").enabled = true;
// document.getElementById("10").enabled = true;
// document.getElementById("11").enabled = false;
// document.getElementById("12").enabled = false;
// document.getElementById("13").enabled = false;
// document.getElementById("14").enabled = false;
// document.getElementById("15").enabled = false;
// document.getElementById("16").enabled = false;
// document.getElementById("17").enabled = false;
// document.getElementById("18").enabled = false;
// document.getElementById("19").enabled = false;
// document.getElementById("20").enabled = false;
// document.getElementById("21").enabled = false;
// document.getElementById("22").enabled = false;
// document.getElementById("23").enabled = false;
// document.getElementById("24").enabled = false;
// document.getElementById("25").enabled = false;
// document.getElementById("26").enabled = false;
// document.getElementById("27").enabled = false;
// document.getElementById("28").enabled = false;
// document.getElementById("29").enabled = false;
// document.getElementById("30").enabled = false;
// document.getElementById("31").enabled = false;
// document.getElementById("32").enabled = false;
// document.getElementById("33").enabled = false;
// document.getElementById("34").enabled = false;
// document.getElementById("35").enabled = false;
// document.getElementById("36").enabled = false;

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
    outputDisplay.value = parseInt(inputDisplay.value, parseInt(selectedBase1.value)).toString(parseInt(selectedBase2.value));
}

function changeBase(selectedBase1) {
    originalBase1 = selectedBase1.value;
    selectedBase1 = selectedBase1.value;
    let convertBase1 = parseInt(inputDisplay.value, parseInt(originalBase1)).toString(selectedBase1);
    inputDisplay.value = parseInt(convertBase1.toString(), selectedBase1);
    baseConverter1();
    disableButton();
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