const inputDisplay = document.getElementById("input");
let equalUsed = false;
let equation = ["0"];
let decimalUsed = false;
let parenthesesUsed = false;
let eqParenthesesUsed = false;

function clearAll() {
    inputDisplay.value = "0";
    decimalUsed = false;
    parenthesesUsed = false;
    equation = ["0"];
}

function clearError() {
    if (inputDisplay.value === "error") {
        equalUsed = false;
    } else if (equalUsed) {
        //nothing
    } else {
        inputDisplay.value = inputDisplay.value.substring(0, inputDisplay.value.length-1);
        if(inputDisplay.value === ""){
            inputDisplay.value = "0";
            equation = ["0"];
        } else {
            inputDisplay.value = inputDisplay.value.toLocaleString();
            equation.pop();
        }
    }
    if (parenthesesUsed) {
        parenthesesUsed = false;
    }
}

function appendToDisplay(input) {
    if (inputDisplay.value === "0") {
        if (input === "00" || input === "0") {
            //return;
        } else {
            inputDisplay.value = input;
            equation[0] = input;
        }
    } else if (inputDisplay.value.endsWith(")")) {
        equation.push(`*${input}`);
        inputDisplay.value+=input;
    }
    else {
        inputDisplay.value = inputDisplay.value+input;
        equation.push(input);
    }
}

function calculate() {
    if (parenthesesUsed) {
        inputDisplay.value+=")";
        equation.push(")");
        parenthesesUsed = false;
    } else if (eqParenthesesUsed) {
        equation.push(")");
        eqParenthesesUsed = false;
    }
    try {
        equation = equation.join('');
        console.log(equation);
        inputDisplay.value = Function(`'use strict'; return(${equation})`)();
        equation = [inputDisplay.value];
    } catch(error) {
        inputDisplay.value = "error";
    }
}

function decimalCalc(input) {
    if (decimalUsed === false) {
        inputDisplay.value = inputDisplay.value+input;
        equation.push(input);
        decimalUsed = true;
    }
}

function exp(input) {
    inputDisplay.value+=input;
    equation.push("**");
}

function operationCalc(input) {
    if (eqParenthesesUsed) {
        equation.push(")");
        eqParenthesesUsed = false;
    }
    if (inputDisplay.value.endsWith("+") || inputDisplay.value.endsWith("-") ||
        inputDisplay.value.endsWith("*") || inputDisplay.value.endsWith("/") ) {
        inputDisplay.value = inputDisplay.value.substring(0, inputDisplay.value.length-1);
        equation.pop();
    }
    inputDisplay.value+=input;
    equation.push(input);
    console.log(equation);
}

function parentheses() {
    if (parenthesesUsed === false) {
        if (inputDisplay.value === "0") {
            inputDisplay.value = "(";
            equation[0] = "(";
        } else if (equation[equation.length-1] === "**") {
            inputDisplay.value+="(";
            equation.push("(");
        } else {
            inputDisplay.value+="(";
            if (equation[equation.length-1] !== "+" || equation[equation.length-1] !== "-"
                || equation[equation.length-1] !== "*" || equation[equation.length-1] !== "/") {
                equation.push("*(");
            }
        }
        parenthesesUsed = true;
    } else {
        inputDisplay.value+=")";
        equation.push(")");
        parenthesesUsed = false;
    }
}

function percent(input) {
    inputDisplay.value+=input;
    equation.push("/100");
}

function plusMinus() {
    if (inputDisplay.value === "0") {
        inputDisplay.value = "-";
        equation[0] = "-";
    } else if (!inputDisplay.value.startsWith("-")) {
        inputDisplay.value = "-"+inputDisplay.value;
        equation.unshift("-");
    } else if (inputDisplay.value === "-") {
        inputDisplay.value = "0";
        equation[0] = "0";
    } else {
        inputDisplay.value = inputDisplay.value.substring(1);
        equation.shift();
    }
}

function roots(input) {
    //todo problem with cube root (4+4)
    if (inputDisplay.value === "0") {
        inputDisplay.value = input;
        if (input === '\u221b') {
            equation[0] = "Math.cbrt(";
        } else {
            equation[0] = "Math.sqrt(";
        }
    } else {
        //this part to prevent execution upon false statement from below
        if (equation[equation.length-1] === "+" || equation[equation.length-1] === "-"
            || equation[equation.length-1] === "*" || equation[equation.length-1] === "/") {
            //return
        } else if (equation[equation.length-1] !== "+" || equation[equation.length-1] !== "-"
            || equation[equation.length-1] !== "*" || equation[equation.length-1] !== "/") {
            equation.push(")*");
        }
        inputDisplay.value += input;
        if (input === '\u221b') {
            equation.push("Math.cbrt(");
        } else {
            equation.push("Math.sqrt(");
        }
    }
    eqParenthesesUsed = true;
}