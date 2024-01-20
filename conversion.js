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

// tempConversion() {
//   if (widget.selectedUnit1 == "Kelvin (K)") {
//     if (widget.selectedUnit2 == "Kelvin (K)") {
//       hiddenAnswer = double.parse(input1);
//     } else if (widget.selectedUnit2 == "Celsius (°C)") {
//       hiddenAnswer = (-273.15+double.parse(input1));
//     } else if (widget.selectedUnit2 == "Fahrenheit (°F)") {
//       hiddenAnswer = (double.parse(input1)*1.8-459.67);
//     } else if (widget.selectedUnit2 == "Rankine (°R)") {
//       hiddenAnswer = (double.parse(input1)*(9/5));
//     } else if (widget.selectedUnit2 == "Reaumur (°Re)") {
//       hiddenAnswer = (-218.52+(double.parse(input1)*0.8));
//     } else {
//       hiddenAnswer = (0.0036608581*double.parse(input1));
//     }
//   } else if (widget.selectedUnit1 == "Celsius (°C)") {
//     if (widget.selectedUnit2 == "Kelvin (K)") {
//       hiddenAnswer = double.parse(input1)+273.15;
//     } else if (widget.selectedUnit2 == "Celsius (°C)") {
//       hiddenAnswer = double.parse(input1);
//     } else if (widget.selectedUnit2 == "Fahrenheit (°F)") {
//       hiddenAnswer = (double.parse(input1)*1.8)+32;
//     } else if (widget.selectedUnit2 == "Rankine (°R)") {
//       hiddenAnswer = 491.67+(double.parse(input1)*(9/5));
//     } else if (widget.selectedUnit2 == "Reaumur (°Re)") {
//       hiddenAnswer = double.parse(input1)*0.8;
//     } else {
//       hiddenAnswer = 0.9999633914+(double.parse(input1)*0.0036608581);
//     }
//   } else if (widget.selectedUnit1 == "Fahrenheit (°F)") {
//     if (widget.selectedUnit2 == "Kelvin (K)") {
//       hiddenAnswer = (255.37222222+double.parse(input1)*(5/9));
//     } else if (widget.selectedUnit2 == "Celsius (°C)") {
//       hiddenAnswer = ((-17-(7/9))+(double.parse(input1)*(5/9)));
//     } else if (widget.selectedUnit2 == "Fahrenheit (°F)") {
//       hiddenAnswer = double.parse(input1);
//     } else if (widget.selectedUnit2 == "Rankine (°R)") {
//       hiddenAnswer = (459.67+double.parse(input1));
//     } else if (widget.selectedUnit2 == "Reaumur (°Re)") {
//       hiddenAnswer = ((-14-(2/9))+(double.parse(input1)*(4/9)));
//     } else {
//       hiddenAnswer = (0.9348814695+(double.parse(input1)*0.0020338101));
//     }//done
//   } else if (widget.selectedUnit1 == "Rankine (°R)") {
//     if (widget.selectedUnit2 == "Kelvin (K)") {
//       hiddenAnswer = (double.parse(input1)*(5/9));
//     } else if (widget.selectedUnit2 == "Celsius (°C)") {
//       hiddenAnswer = (-273.15+(double.parse(input1)*(5/9)));
//     } else if (widget.selectedUnit2 == "Fahrenheit (°F)") {
//       hiddenAnswer = (-459.67+double.parse(input1));
//     } else if (widget.selectedUnit2 == "Rankine (°R)") {
//       hiddenAnswer = double.parse(input1);
//     } else if (widget.selectedUnit2 == "Reaumur (°Re)") {
//       hiddenAnswer = (-218.52+(double.parse(input1)*(4/9)));
//     } else {
//       hiddenAnswer = (double.parse(input1)*0.0020338101);
//     }
//   } else if (widget.selectedUnit1 == "Reaumur (°Re)") {
//     if (widget.selectedUnit2 == "Kelvin (K)") {
//       hiddenAnswer = (273.15+(double.parse(input1)*1.25));
//     } else if (widget.selectedUnit2 == "Celsius (°C)") {
//       hiddenAnswer = (double.parse(input1)*1.25);
//     } else if (widget.selectedUnit2 == "Fahrenheit (°F)") {
//       hiddenAnswer = (32+(double.parse(input1)*2.25));
//     } else if (widget.selectedUnit2 == "Rankine (°R)") {
//       hiddenAnswer = (491.67+(double.parse(input1)*2.25));
//     } else if (widget.selectedUnit2 == "Reaumur (°Re)") {
//       hiddenAnswer = double.parse(input1);
//     } else {
//       hiddenAnswer = (0.9999633914+(double.parse(input1)*0.0045760727));
//     }
//   } else {
//     if (widget.selectedUnit2 == "Kelvin (K)") {
//       hiddenAnswer = ((double.parse(input1)*273.16));
//     } else if (widget.selectedUnit2 == "Celsius (°C)") {
//       hiddenAnswer = (-273.15+(double.parse(input1)*273.16));
//     } else if (widget.selectedUnit2 == "Fahrenheit (°F)") {
//       hiddenAnswer = (-459.67+(double.parse(input1)*491.688));
//     } else if (widget.selectedUnit2 == "Rankine (°R)") {
//       hiddenAnswer = (double.parse(input1)*491.688);
//     } else if (widget.selectedUnit2 == "Reaumur (°Re)") {
//       hiddenAnswer = (-218.52+(double.parse(input1)*218.528));
//     } else {
//       hiddenAnswer = double.parse(input1);
//     }
//   }
// }

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
        //tempConversion();
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
        outputDisplay.value = hiddenAnswer.toExponential(10);
    }
    outputDisplay.value = outputDisplay.value.replaceAll("+", "");
}