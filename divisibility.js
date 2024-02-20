const inputDisplay = document.getElementById("input");
const answerDisplay = document.getElementById("answer");

let result = "";
let count = 0;

function appendToDisplay(input) {
    if (inputDisplay.value.length === 15) {
        //nothing
    } else if (input === "0" && inputDisplay.value === "0") {
        //nothing
    } else if (inputDisplay.value === "0") {
        inputDisplay.value = input;
    } else {
        let tempValue = parseInt(inputDisplay.value.replace(/,/g,""));
        tempValue = tempValue.toString();
        tempValue+=input;
        tempValue = parseInt(tempValue).toLocaleString();
        inputDisplay.value=tempValue;
    }
}

function clearAll() {
    inputDisplay.value ='0';
    answerDisplay.value = "";
}

function clearError() {
    let tempValue = parseInt(inputDisplay.value.replace(/,/g,""));
    tempValue = Math.floor(tempValue/10);
    if(tempValue.length === ""){
        inputDisplay.value = "0";
    } else {
        tempValue = tempValue.toLocaleString();
        inputDisplay.value=tempValue;
    }
}

function calculate() {
    let tempValue = parseInt(inputDisplay.value.replace(/,/g,""));
    let divisor = 2;
    let dividend = tempValue;
    let divisorList = [];
    if (tempValue < 2) {
        answerDisplay.value = "Number outside range";
    } else {
        while (divisor < 101) {
            if (dividend % divisor === 0) {
                divisorList.push(divisor);
            }
            divisor++;
        }
        answerDisplay.value = `${inputDisplay.value} is divisible by `;
        count = divisorList.length;
        let i = 0;
        while (i < count-1) {
            divisorList.push(i);
            i++;
        }
        if (count === 0) {
            answerDisplay.value = `${inputDisplay.value} is not divisible by any numbers between 2 and 100.`;
        } else if (count === 1) {
            answerDisplay.value = `${inputDisplay.value} is divisible by ${divisorList[0]}.`;
        } else if (count === 2) {
            answerDisplay.value = `${inputDisplay.value} is divisible by ${divisorList[0]} and ${divisorList[1]}.`;
        } else {
            answerDisplay.value = `${inputDisplay.value} is divisible by ${divisorList[0]}, `;
            let j = 1;
            while (j < count-1) {
                answerDisplay.value = `${answerDisplay.value}${divisorList[j]}, `;
                j++;
            }
            answerDisplay.value = `${answerDisplay.value}and ${divisorList[count-1]}.`;
        }
    }
}