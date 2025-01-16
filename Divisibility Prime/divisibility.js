const inputDisplay = document.getElementById("input");
const divisibilityDisplay = document.getElementById("divisibility");
const primeDisplay = document.getElementById("prime");

let count = 0;
let result = "";

function appendToDisplay(input) {
    if (inputDisplay.value.length === 11) {
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
    inputDisplay.value ="0";
    divisibilityDisplay.value = "";
    primeDisplay.value = "";
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

function calculateDivisibility() {
    let tempValue = parseInt(inputDisplay.value.replace(/,/g,""));
    let divisor = 2;
    let dividend = tempValue;
    let divisorList = [];
    if (tempValue < 2) {
        divisibilityDisplay.value = "Number outside range";
    } else {
        while (divisor < 101) {
            if (dividend % divisor === 0) {
                divisorList.push(divisor);
            }
            divisor++;
        }
        divisibilityDisplay.value = `${inputDisplay.value} is divisible by `;
        count = divisorList.length;
        let i = 0;
        while (i < count-1) {
            divisorList.push(i);
            i++;
        }
        if (count === 0) {
            divisibilityDisplay.value = `${inputDisplay.value} is not divisible by any numbers between 2 and 100.`;
        } else if (count === 1) {
            divisibilityDisplay.value = `${inputDisplay.value} is divisible by ${divisorList[0]}.`;
        } else if (count === 2) {
            divisibilityDisplay.value = `${inputDisplay.value} is divisible by ${divisorList[0]} and ${divisorList[1]}.`;
        } else {
            divisibilityDisplay.value = `${inputDisplay.value} is divisible by ${divisorList[0]}, `;
            let j = 1;
            while (j < count-1) {
                divisibilityDisplay.value = `${divisibilityDisplay.value}${divisorList[j]}, `;
                j++;
            }
            divisibilityDisplay.value = `${divisibilityDisplay.value}and ${divisorList[count-1]}.`;
        }
    }
    calculatePrime();
}

function calculatePrime() {
    let tempValue = parseInt(inputDisplay.value.replace(/,/g,""));
    let primeList = [];
    let primeCount = [];
    let primeFactor = [];
    if (tempValue < 2) {
        primeDisplay.value = "Number outside range";
    } else {
        primeDisplay.value = "";
        let inputContent = tempValue;
        for(let i = 2; i <= inputContent; i++){
            if(inputContent % i === 0){
                let counter = 0;
                while(inputContent % i === 0){
                    inputContent = Math.round(inputContent / i);
                    primeList.push();
                    primeCount.push(counter);
                    counter++;
                    console.log(primeList);

                }
                primeFactor.push(`${result} ${i}^${counter}`) ;
            }
        }
        for (let j = 0; j < primeList.length; j++) {
            primeFactor.push(`${primeList[j]}^${primeCount[j]}`);
        }
        primeDisplay.value = (primeFactor.toString());
    }
}