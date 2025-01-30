const numToRom = document.getElementById("input1");
const romToNum = document.getElementById("input2");

function appendToDisplay1() {
    console.log("hit");
    if (numToRom.value === "0") {
        numToRom.value = button.innerHTML;
    } else {
        numToRom.value+=button.innerHTML;
    }
}

const romanTop1 = ["M", "D", "C"];
const romanMiddle1 = ["L", "X", "V"];
const romanBottom1 = "I";
const romanTop2 = ["M&#175", "D&#175", "C&#175"];
const romanMiddle2 = ["L&#175", "X&#175", "V&#175"];
const romanBottom2 = "I&#175";
let top = romanTop1;
let middle = romanMiddle1;
let bottom = romanBottom1;
let mButton = document.getElementById("M");
let dButton = document.getElementById("D");
let cButton = document.getElementById("C");
let lButton = document.getElementById("L");
let xButton = document.getElementById("X");
let vButton = document.getElementById("V");
let iButton = document.getElementById("I");

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

    return(toRomanNumeral(numToRom.value));
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

// function shift() {
//     if (top === romanTop1) {
//         top = romanTop2;
//         middle = romanMiddle2;
//         bottom = romanBottom2;
//     }
// }