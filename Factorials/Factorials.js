const inputDisplay = document.getElementById("input");

const factLabel = ["n! (one) = ", "n!! (two) = ", "n!!! (three) = ", "n!!!! (four) = ",
    "n!!!!! (five) = ", "n!!!!!! (six) = ", "n!!!!!!! (seven) = ", "n!!!!!!!! (eight) = ",
    "n!!!!!!!!! (nine) = ", "n!!!!!!!!!! (ten) = "];

//loops to set up answer section
let factorial1 = "";
for (let i=0; i<factLabel.length; i++) {
    if (i%2===0) {
        factorial1 += '<div class="even"><p class="factorials">'+factLabel[i]+'</p></div>'
    } else {
        factorial1 += '<div class="odd"><p class="factorials">'+factLabel[i]+'</p></div>'
    }
}
document.getElementById("factorial1").innerHTML = factorial1;

let factorial2 = "";
for (let j=0; j<factLabel.length; j++) {
    if (j%2===0) {
        factorial2 += '<div class="even"><p class="factorials" id="'+factLabel[j]+'">1</p></div>'
    } else {
        factorial2 += '<div class="odd"><p class="factorials" id="'+factLabel[j]+'">1</p></div>'
    }
}
document.getElementById("factorial2").innerHTML = factorial2;

//display answers
let f1 = document.getElementById(`${factLabel[0]}`);
let f2 = document.getElementById(`${factLabel[1]}`);
let f3 = document.getElementById(`${factLabel[2]}`);
let f4 = document.getElementById(`${factLabel[3]}`);
let f5 = document.getElementById(`${factLabel[4]}`);
let f6 = document.getElementById(`${factLabel[5]}`);
let f7 = document.getElementById(`${factLabel[6]}`);
let f8 = document.getElementById(`${factLabel[7]}`);
let f9 = document.getElementById(`${factLabel[8]}`);
let f10 = document.getElementById(`${factLabel[9]}`);


function buttonPressed(buttonText){
    if(buttonText === "CA") {
        clearAll();
    } else if (buttonText === "CE") {
        clearError();
    } else if (buttonText === "return") {
        sortArray();
    } else {
        numberCalc(buttonText);
    }
}

function calculateFactorial() {
    let i;
    const n = inputDisplay.value;
    let x1 = 1;
    let x2 = 1;
    let x3 = 1;
    let x4 = 1;
    let x5 = 1;
    let x6 = 1;
    let x7 = 1;
    let x8 = 1;
    let x9 = 1;
    let x10 = 1;
    for (let i = n; i>0; i--) {
        x1=x1*i;
    }
    for (i = n; i>0; i-=2) {
        x2=x2*i;
    }
    for (i = n; i>0; i-=3) {
        x3=x3*i;
    }
    for (i = n; i>0; i-=4) {
        x4=x4*i;
    }
    for (i = n; i>0; i-=5) {
        x5=x5*i;
    }
    for (i = n; i>0; i-=6) {
        x6=x6*i;
    }
    for (i = n; i>0; i-=7) {
        x7=x7*i;
    }
    for (i = n; i>0; i-=8) {
        x8=x8*i;
    }
    for (i = n; i>0; i-=9) {
        x9=x9*i;
    }
    for (i = n; i>0; i-=10) {
        x10=x10*i;
    }
    f1.innerHTML = x1.toString();
    f2.innerHTML = x2.toString();
    f3.innerHTML = x3.toString();
    f4.innerHTML = x4.toString();
    f5.innerHTML = x5.toString();
    f6.innerHTML = x6.toString();
    f7.innerHTML = x7.toString();
    f8.innerHTML = x8.toString();
    f9.innerHTML = x9.toString();
    f10.innerHTML = x10.toString();
}

function clearAll() {
    inputDisplay.value = "0";
    calculateFactorial();
}

function clearError() {
    if (inputDisplay.value === "0") {
        inputDisplay.value = "0";
    } else {
        inputDisplay.value = inputDisplay.value.substring(0, inputDisplay.value.length-1);
        if (inputDisplay.value === "") {
            inputDisplay.value = "0";
        }
    }
    calculateFactorial();
}

function numberCalc(buttonText) {
    if (inputDisplay.value.length === 4) {
        //return
    } else if (inputDisplay.value === "0") {
        inputDisplay.value = buttonText;
    } else {
        inputDisplay.value += buttonText;
    }
    calculateFactorial();
}