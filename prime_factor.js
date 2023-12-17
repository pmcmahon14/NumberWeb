const inputDisplay = document.getElementById("input");
const answerDisplay = document.getElementById("answer");

console.log(inputDisplay.value);

let result = "";
let count = 0;

function appendToDisplay(input) {
    // console.log(input);
    // console.log((inputDisplay.value).toLocaleString());
    if (inputDisplay.value.length === 11) {
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
    let primeList = [];
    let primeCount = [];
    let primeFactor = [];
    if (tempValue < 2) {
        answerDisplay.value = "Number outside range";
    } else {
        answerDisplay.value = "";
        let inputContent = tempValue;
        for(let i = 2; i <= inputContent; i++){
            if(inputContent % i === 0){
                let counter = 0;
                while(inputContent % i === 0){
                    inputContent = Math.round(inputContent / i);
                    primeList.push();
                    primeCount.push(counter);
                    counter++;
                }
                primeFactor.push(`${result} ${i}^${counter}`) ;
                //console.log(answerDisplay.value);
            }
        }
        for (let j = 0; j < primeList.length; j++) {
            primeFactor.push(`${primeList[j]}^${primeCount[j]}`);
        }
        answerDisplay.value = (primeFactor.toString());
    }
}