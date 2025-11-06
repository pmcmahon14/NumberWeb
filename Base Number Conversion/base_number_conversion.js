const inputDisplay = document.getElementById("baseInput");
let selectedBase = document.getElementById("base");

let tempValue = 0;

const baseArray = ["Base 2", "Base 3", "Base 4", "Base 5", "Base 6", "Base 7", "Base 8", "Base 9",
    "Base 10", "Base 11", "Base 12", "Base 13", "Base 14", "Base 15", "Base 16", "Base 17", "Base 18",
    "Base 19", "Base 20", "Base 21", "Base 22", "Base 23", "Base 24", "Base 25", "Base 26", "Base 27",
    "Base 28", "Base 29", "Base 30", "Base 31", "Base 32", "Base 33", "Base 34", "Base 35", "Base 36"];

//this sets up base number results table in alternating colors
let baseLabel = "";
for (let i=0; i<baseArray.length; i++) {
    if (i%2===0) {
        baseLabel += '<div class="even"><p class="numbers">'+baseArray[i]+'</p></div>'
    } else {
        baseLabel += '<div class="odd"><p class="numbers">'+baseArray[i]+'</p></div>'
    }
}
document.getElementById("baseLabel").innerHTML = baseLabel;

let baseResult = "";
for (let j=0; j<baseArray.length; j++) {
    if (j%2===0) {
        baseResult += '<div class="even"><p class="numbers" id="'+baseArray[j]+'">0</p></div>'
    } else {
        baseResult += '<div class="odd"><p class="numbers" id="'+baseArray[j]+'">0</p></div>'
    }
}
document.getElementById("baseResult").innerHTML = baseResult;

function disableButton() {
    for (let b=1; b<37; b++) {
        document.getElementById(`${b}`).disabled = b > parseInt(selectedBase.value);
    }
}

let originalBase = "10";

let base2 = document.getElementById(`${baseArray[0]}`);
let base3 = document.getElementById(`${baseArray[1]}`);
let base4 = document.getElementById(`${baseArray[2]}`);
let base5 = document.getElementById(`${baseArray[3]}`);
let base6 = document.getElementById(`${baseArray[4]}`);
let base7 = document.getElementById(`${baseArray[5]}`);
let base8 = document.getElementById(`${baseArray[6]}`);
let base9 = document.getElementById(`${baseArray[7]}`);
let base10 = document.getElementById(`${baseArray[8]}`);
let base11 = document.getElementById(`${baseArray[9]}`);
let base12 = document.getElementById(`${baseArray[10]}`);
let base13 = document.getElementById(`${baseArray[11]}`);
let base14 = document.getElementById(`${baseArray[12]}`);
let base15 = document.getElementById(`${baseArray[13]}`);
let base16 = document.getElementById(`${baseArray[14]}`);
let base17 = document.getElementById(`${baseArray[15]}`);
let base18 = document.getElementById(`${baseArray[16]}`);
let base19 = document.getElementById(`${baseArray[17]}`);
let base20 = document.getElementById(`${baseArray[18]}`);
let base21 = document.getElementById(`${baseArray[19]}`);
let base22 = document.getElementById(`${baseArray[20]}`);
let base23 = document.getElementById(`${baseArray[21]}`);
let base24 = document.getElementById(`${baseArray[22]}`);
let base25 = document.getElementById(`${baseArray[23]}`);
let base26 = document.getElementById(`${baseArray[24]}`);
let base27 = document.getElementById(`${baseArray[25]}`);
let base28 = document.getElementById(`${baseArray[26]}`);
let base29 = document.getElementById(`${baseArray[27]}`);
let base30 = document.getElementById(`${baseArray[28]}`);
let base31 = document.getElementById(`${baseArray[29]}`);
let base32 = document.getElementById(`${baseArray[30]}`);
let base33 = document.getElementById(`${baseArray[31]}`);
let base34 = document.getElementById(`${baseArray[32]}`);
let base35 = document.getElementById(`${baseArray[33]}`);
let base36 = document.getElementById(`${baseArray[34]}`);

function appendToDisplay(input) {
    if (inputDisplay.value === '0' && input === '0') {
        inputDisplay.value = '0';
    } else if (inputDisplay.value === '0') {
        inputDisplay.value = input;
        baseConverter();
    } else {
        //todo need to include base for testing
        let testInput = inputDisplay.value + input;
        let convertBase = parseInt(testInput, parseInt(selectedBase.value));
        if (convertBase <= parseInt("9223372036854775807", 10)) {
            inputDisplay.value = testInput;
            baseConverter();
        }
    }
}

function clearAll() {
    selectedBase.value = '10';
    inputDisplay.value = "0";
    originalBase = "10";
    base2.innerHTML = "0";
    base3.innerHTML = "0";
    base4.innerHTML = "0";
    base5.innerHTML = "0";
    base6.innerHTML = "0";
    base7.innerHTML = "0";
    base8.innerHTML = "0";
    base9.innerHTML = "0";
    base10.innerHTML = "0";
    base11.innerHTML = "0";
    base12.innerHTML = "0";
    base13.innerHTML = "0";
    base14.innerHTML = "0";
    base15.innerHTML = "0";
    base16.innerHTML = "0";
    base17.innerHTML = "0";
    base18.innerHTML = "0";
    base19.innerHTML = "0";
    base20.innerHTML = "0";
    base21.innerHTML = "0";
    base22.innerHTML = "0";
    base23.innerHTML = "0";
    base24.innerHTML = "0";
    base25.innerHTML = "0";
    base26.innerHTML = "0";
    base27.innerHTML = "0";
    base28.innerHTML = "0";
    base29.innerHTML = "0";
    base30.innerHTML = "0";
    base31.innerHTML = "0";
    base32.innerHTML = "0";
    base33.innerHTML = "0";
    base34.innerHTML = "0";
    base35.innerHTML = "0";
    base36.innerHTML = "0";
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
    baseConverter();
}

function baseConverter() {
    base2.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(2);
    base3.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(3);
    base4.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(4);
    base5.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(5);
    base6.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(6);
    base7.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(7);
    base8.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(8);
    base9.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(9);
    base10.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(10);
    base11.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(11);
    base12.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(12);
    base13.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(13);
    base14.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(14);
    base15.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(15);
    base16.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(16);
    base17.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(17);
    base18.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(18);
    base19.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(19);
    base20.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(20);
    base21.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(21);
    base22.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(22);
    base23.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(23);
    base24.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(24);
    base25.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(25);
    base26.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(26);
    base27.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(27);
    base28.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(28);
    base29.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(29);
    base30.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(30);
    base31.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(31);
    base32.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(32);
    base33.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(33);
    base34.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(34);
    base35.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(35);
    base36.innerHTML = parseInt(inputDisplay.value, parseInt(selectedBase.value)).toString(36);
}

function changeBase() {
    inputDisplay.value = parseInt(inputDisplay.value, parseInt(originalBase)).toString(selectedBase.value);
    originalBase = selectedBase.value;
    disableButton();
    baseConverter();
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
document.getElementById("base").innerHTML = baseNumber;

disableButton();