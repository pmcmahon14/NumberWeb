const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output");
let selectedUnit1 = document.getElementById("unit1");
let selectedUnit2 = document.getElementById("unit2");
let originalUnit1 = "";
let originalUnit2 = "";
//let convArray = [];

let hiddenInput = (inputDisplay.value).toString();
let hiddenAnswer = 0;

let decimalUsed = false;

function buttonPressed(buttonText){
    if(buttonText === "CA") {
        clearAll();
    } else if (buttonText === "CE") {
        clearError();
    } else if (buttonText === ".") {
        decimalCalc();
    } else if (buttonText === "-") {
        minusCalc();
    } else if (buttonText === "&#8645") {
        switchCalc();
    } else {
        numberCalc(buttonText);
    }
}

function clearAll() {
    inputDisplay.value = "0";
    outputDisplay.value = "0";
    decimalUsed = false;
    hiddenAnswer = 0;
    hiddenInput = (inputDisplay.value).toString();
    tempConversion();
}

function clearError() {
    if (hiddenInput.length === 1) {
        inputDisplay.value = hiddenInput = "0";
    } else if (hiddenInput.endsWith(".")) {
        decimalUsed = false;
        inputDisplay.value = hiddenInput = hiddenInput.substring(0, inputDisplay.value.length - 1);
    } else if (Number(hiddenInput) === 0) {
        let l = hiddenInput.length-1;
        if (l < 12) {
            inputDisplay.value = hiddenInput = hiddenInput.substring(0, l);
        } else {
            inputDisplay.value = hiddenInput.substring(l-12, l);
        }
    } else if (Number(hiddenInput) >= 1e11 || Number(hiddenInput) <= -1e10) {
        hiddenInput = hiddenInput.substring(0, hiddenInput.length - 1);
        inputDisplay.value = ((Number(hiddenInput)).toExponential(10));
        inputDisplay.value = inputDisplay.value.replaceAll("+", "");
    } else if (Number(hiddenInput) >= 1e10){
        hiddenInput = hiddenInput.substring(0, hiddenInput.length - 1);
        inputDisplay.value = hiddenInput;
    } else if (Number(hiddenInput) < 1 && Number(hiddenInput) > 0) {
        let l = hiddenInput.length-1;
        if (l < 12) {
            inputDisplay.value = hiddenInput = hiddenInput.substring(0, l);
        } else {
            inputDisplay.value = hiddenInput = hiddenInput.substring(l-12, l);
        }
    } else if (Number(hiddenInput) < 1e10) {
        inputDisplay.value = hiddenInput = hiddenInput.substring(0, hiddenInput.length - 1);
    }
    unitConverter();
}

function changeUnit(selectedUnit1) {
    originalUnit1 = selectedUnit1.value;
    selectedUnit1 = selectedUnit1.value;
    let convertUnit1 = parseInt(inputDisplay.value, parseInt(originalUnit1)).toString(selectedUnit1);
    inputDisplay.value = parseInt(convertUnit1.toString(), selectedUnit1);
    unitConverter();
}

function decimalCalc() {
    if (decimalUsed === false) {
        inputDisplay.value += ".";
        decimalUsed = true;
    }
}

function minusCalc() {
    if (inputDisplay.value === "0") {
        inputDisplay.value = "-";
    } else if (inputDisplay.value === "-") {
        inputDisplay.value = "0";
    } else if (inputDisplay.value.startsWith("-")) {
        inputDisplay.value = inputDisplay.value.substring(1, inputDisplay.value.length);
    } else {
        inputDisplay.value = "-"+inputDisplay.value;
    }
}

function numberCalc(buttonText) {
    if (hiddenInput === "0" && buttonText === "0") {
        return;
    } else if (hiddenInput === "0") {
        inputDisplay.value = hiddenInput = buttonText;
    } else {
        inputDisplay.value = hiddenInput = hiddenInput + buttonText;
    }
    if (parseFloat(hiddenInput) === 0) {
        const l = hiddenInput.length-1;
        if (l < 12) {
            inputDisplay.value = parseFloat(hiddenInput);
        } else {
            inputDisplay.value = parseFloat(hiddenInput.substring(l-12, l));
        }
    } else if (parseFloat(hiddenInput) >= 1e10 || parseFloat(hiddenInput) <= -1e10
        || parseFloat(hiddenInput) < 1e-10 && parseFloat(hiddenInput) > -1e-10) {
        inputDisplay.value = parseFloat(hiddenInput).toExponential(10);
    } else if (hiddenInput.length > 11) {
        inputDisplay.value = parseFloat(hiddenInput).toExponential(10);
    }
    unitConverter();
}

function tempConversion() {
  if (selectedUnit1.value === "0") {
    if (selectedUnit2.value === "0") {
      hiddenAnswer = inputDisplay.value;
    } else if (selectedUnit2.value === "1") {
      hiddenAnswer = (-273.15+Number(inputDisplay.value));
    } else if (selectedUnit2.value === "2") {
      hiddenAnswer = (Number(inputDisplay.value)*1.8-459.67);
    } else if (selectedUnit2.value === "3") {
      hiddenAnswer = (Number(inputDisplay.value)*(9/5));
    } else if (selectedUnit2.value === "4") {
      hiddenAnswer = (-218.52+(Number(inputDisplay.value)*0.8));
    } else {
      hiddenAnswer = (0.0036608581*Number(inputDisplay.value));
    }
  } else if (selectedUnit1.value === "1") {
    if (selectedUnit2.value === "0") {
      hiddenAnswer = Number(inputDisplay.value)+273.15;
    } else if (selectedUnit2.value === "1") {
      hiddenAnswer = Number(inputDisplay.value);
    } else if (selectedUnit2.value === "2") {
      hiddenAnswer = (Number(inputDisplay.value)*1.8)+32;
    } else if (selectedUnit2.value === "3") {
      hiddenAnswer = 491.67+(Number(inputDisplay.value)*(9/5));
    } else if (selectedUnit2.value === "4") {
      hiddenAnswer = Number(inputDisplay.value)*0.8;
    } else {
      hiddenAnswer = 0.9999633914+(Number(inputDisplay.value)*0.0036608581);
    }
  } else if (selectedUnit1.value === "2") {
    if (selectedUnit2.value === "0") {
      hiddenAnswer = (255.37222222+Number(inputDisplay.value)*(5/9));
    } else if (selectedUnit2.value === "1") {
      hiddenAnswer = ((-17-(7/9))+(Number(inputDisplay.value)*(5/9)));
    } else if (selectedUnit2.value === "2") {
      hiddenAnswer = Number(inputDisplay.value);
    } else if (selectedUnit2.value === "3") {
      hiddenAnswer = (459.67+Number(inputDisplay.value));
    } else if (selectedUnit2.value === "4") {
      hiddenAnswer = ((-14-(2/9))+(Number(inputDisplay.value)*(4/9)));
    } else {
      hiddenAnswer = (0.9348814695+(Number(inputDisplay.value)*0.0020338101));
    }//done
  } else if (selectedUnit1.value === "3") {
    if (selectedUnit2.value === "0") {
      hiddenAnswer = (Number(inputDisplay.value)*(5/9));
    } else if (selectedUnit2.value === "1") {
      hiddenAnswer = (-273.15+(Number(inputDisplay.value)*(5/9)));
    } else if (selectedUnit2.value === "2") {
      hiddenAnswer = (-459.67+Number(inputDisplay.value));
    } else if (selectedUnit2.value === "3") {
      hiddenAnswer = Number(inputDisplay.value);
    } else if (selectedUnit2.value === "4") {
      hiddenAnswer = (-218.52+(Number(inputDisplay.value)*(4/9)));
    } else {
      hiddenAnswer = (Number(inputDisplay.value)*0.0020338101);
    }
  } else if (selectedUnit1.value === "4") {
    if (selectedUnit2.value === "0") {
      hiddenAnswer = (273.15+(Number(inputDisplay.value)*1.25));
    } else if (selectedUnit2.value === "1") {
      hiddenAnswer = (Number(inputDisplay.value)*1.25);
    } else if (selectedUnit2.value === "2") {
      hiddenAnswer = (32+(Number(inputDisplay.value)*2.25));
    } else if (selectedUnit2.value === "3") {
      hiddenAnswer = (491.67+(Number(inputDisplay.value)*2.25));
    } else if (selectedUnit2.value === "4") {
      hiddenAnswer = Number(inputDisplay.value);
    } else {
      hiddenAnswer = (0.9999633914+(Number(inputDisplay.value)*0.0045760727));
    }
  } else {
    if (selectedUnit2.value === "0") {
      hiddenAnswer = ((Number(inputDisplay.value)*273.16));
    } else if (selectedUnit2.value === "1") {
      hiddenAnswer = (-273.15+(Number(inputDisplay.value)*273.16));
    } else if (selectedUnit2.value === "2") {
      hiddenAnswer = (-459.67+(Number(inputDisplay.value)*491.688));
    } else if (selectedUnit2.value === "3") {
      hiddenAnswer = (Number(inputDisplay.value)*491.688);
    } else if (selectedUnit2.value === "4") {
      hiddenAnswer = (-218.52+(Number(inputDisplay.value)*218.528));
    } else {
      hiddenAnswer = Number(inputDisplay.value);
    }
  }
}

function switchCalc() {
    const switchUnit1 = selectedUnit1.value;
    const switchUnit2 = selectedUnit2.value;
    selectedUnit1.value = switchUnit2;
    selectedUnit2.value = switchUnit1;
    unitConverter();
}

function unitConverter() {
    if (inputDisplay.value === "-") {
        return;
    }
    //unit to/unit from
    let index1 = selectedUnit1.value;
    let index2 = selectedUnit2.value;
    if (document.getElementById("top").innerText === "Temperature") {
        tempConversion();
    } else {
        hiddenAnswer = ((Number(inputDisplay.value) * convArray[index2]) / convArray[index1]);
    }
    if (hiddenAnswer.toString() === 'Infinity') {
        outputDisplay.value = '0'; //8052970000
    } else if (hiddenAnswer >= 1e10 || hiddenAnswer <= -1e10) {
        outputDisplay.value = hiddenAnswer.toExponential(10);
    } else if ((hiddenAnswer < 1e10 && hiddenAnswer >= 0.00000000001)
        || (hiddenAnswer > -1e10 && hiddenAnswer <= -0.00000000001) || hiddenAnswer === 0) {
        outputDisplay.value = hiddenAnswer.toString();
        if (outputDisplay.value.endsWith('.')) {
            outputDisplay.value = outputDisplay.value.substring(0, outputDisplay.length - 1);
        }
    } else {
        console.log(typeof hiddenAnswer);
        outputDisplay.value = hiddenAnswer.toString();
    }
    outputDisplay.value = outputDisplay.value.replaceAll("+", "");
}