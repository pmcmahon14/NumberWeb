// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

const inputDisplay = document.getElementById("baseInput");
const outputDisplay = document.getElementById("baseOutput");
let selectedBase1 = document.getElementById("base1");
let selectedBase2 = document.getElementById("base2");
let originalBase1 = "10";
let originalBase2 = "10";

let tempValue = 0;

//todo dynamically generate buttons

function appendToDisplay(input) {
    if (parseInt(input, selectedBase1.value).toString(selectedBase2.value) === "NaN") {
        inputDisplay.value === inputDisplay.value;
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
}

// console.log(parseInt('2143', 5).toString(9) );

// const selectedBase = document.getElementById("base1").value;
// const inputButton = document.getElementsByClassName("numberButton");
// const buttonValue = document.getElementsByClassName("numberButton").value;

function selectBase() {
    //let b1value = document.getElementById("base1").value;
    // for (let i=2; i<37; i++) {
    //     selectedBase.addEventListener("change", (e) => {
    //         console.log('hit');
    //         const baseValue = e.currentTarget.value;
    //         inputButton[i].disabled = true;
    //         if (baseValue <= buttonValue) {
    //             console.log(buttonValue);
    //             inputButton.disabled = false;
    //         }
    //     })
    // }

    //this one tests correctly
    // let n = "ada";
    // let base1 = 13;
    // let base2 = 9;
    // for (let i=0; i<n.length; i++) {
    //     if ((parseInt(n[i], base1).toString(base2)) == "NaN") {
    //         console.log((parseInt(n[i], base1).toString(base2)));
    //         console.log(parseInt(n[i])+' no!');
    //         console.log('try again dammit!');
    //         break;
    //     } else {
    //         console.log(parseInt(n[i]));
    //         console.log('yay it worked');
    //     }
    // }
}

