const numToRom = document.getElementById("ntrInput");
const romToNum = document.getElementById("rtnInput");

function ntrDisplay(buttonText) {
    if (numToRom.value === "0") {
        numToRom.value = buttonText;
    } else if (numToRom.value.length === 4) {
        // return;
    } else {
        numToRom.value+=buttonText;
    }
}

function rtnDisplay(buttonText) {
    if (romToNum.value === "0") {
        romToNum.value = buttonText;
    } else {
        romToNum.value+=buttonText;
    }
}

// const romanTop1 = ["M", "D", "C"];
// const romanMiddle1 = ["L", "X", "V"];
// const romanBottom1 = "I";
// const romanTop2 = ["M&#175", "D&#175", "C&#175"];
// const romanMiddle2 = ["L&#175", "X&#175", "V&#175"];
// const romanBottom2 = "I&#175";
// let top = romanTop1;
// let middle = romanMiddle1;
// let bottom = romanBottom1;
let mButton = document.getElementById("M");
let dButton = document.getElementById("D");
let cButton = document.getElementById("C");
let lButton = document.getElementById("L");
let xButton = document.getElementById("X");
let vButton = document.getElementById("V");
let iButton = document.getElementById("I");

function numberCheck() {
    if (parseInt(numToRom.value) > 3999 || parseInt(numToRom.value) === 0) {
        numToRom.value = "outside of range";
    } else {
        numberToRoman();
    }
}

function numberToRoman() {
    const lookup = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ];

    const toRomanNumeral = num =>
        lookup.reduce((acc, [k, v]) => {
            acc += k.repeat(Math.floor(num / v));
            num = num % v;
            return acc;
        }, '');

    numToRom.value = toRomanNumeral(parseInt(numToRom.value));
}

function romanCheck()
{

    // Regex to check valid
    // ROMAN NUMERAL
    let regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);

    // str
    // is empty return false
    if (romToNum.value === "0") {
        return;
    }

    // Return true if the str
    // matched the ReGex
    if (regex.test(romToNum.value) === true) {
        romanToNumber();
    }
    else {
        romToNum.value = "invalid numeral";
    }
}

function romanToNumber() {
    const romanHash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    // tests for valid Roman numeral

    const s = romToNum.value;
// s = 1989

    let accumulator = 0;for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            accumulator += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            accumulator += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            accumulator += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            accumulator += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            accumulator += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            accumulator += 900;
            i++;
        } else {
            accumulator += romanHash[s[i]];
        }
    }
    romToNum.value = accumulator;
}

function clearAll1() {
    numToRom.value = "0";
}

function clearAll2() {
    romToNum.value = "0";
}

function clearError1() {
    if (numToRom.value.length > 1) {
        numToRom.value = numToRom.value.slice(0, -1);
    } else {
        numToRom.value = "0";
    }
}

function clearError2() {
    if (romToNum.value.length > 1) {
        romToNum.value = romToNum.value.slice(0, -1);
    } else {
        romToNum.value = "0";
    }
}

// function shift() {
//     if (top === romanTop1) {
//         top = romanTop2;
//         middle = romanMiddle2;
//         bottom = romanBottom2;
//     }
// }