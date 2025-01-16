let arraySize = 0;
let arrayX = [];

const inputDisplay = document.getElementById("input");

let decimalUsed = false;
let returnUsed = false;

const a = ["Size", "Range", "Maximum", "Minimum", "Ar Mean", "Geo Mean",
    "Median", "Mode", "Sum", "Sum^2", "St Dev Sample", "St Dev Pop",
    "Var Sample", "Var Pop",
    "Coeff Var Sample", "Coeff Var Pop", "Quartile 1",
    "Quartile 2", "Quartile 3", "IQR", "Mid Range", "Outliers",
    "Mean Abs Dev", "Root Mean^2", "SE Mean Sample",
    "SE Mean Pop",
    "Skewness Sample", "Skewness Pop", "Kurt Sample", "Kurt Pop",
    "Kurt Exc Sample", "Kurt Exc Pop",
    "RSD Sample", "RSD Population"];

//loops to set up answers section
let stat1 = "";
for (let i=0; i<a.length; i++) {
    if (i%2===0) {
        stat1 += '<div class="even"><p class="stats">'+a[i]+'</p></div>'
    } else {
        stat1 += '<div class="odd"><p class="stats">'+a[i]+'</p></div>'
    }
}
document.getElementById("stat1").innerHTML = stat1;

let stat2 = "";
for (let j=0; j<a.length; j++) {
    if (j%2===0) {
        stat2 += '<div class="even"><p class="stats" id="'+a[j]+'">0</p></div>'
    } else {
        stat2 += '<div class="odd"><p class="stats" id="'+a[j]+'">0</p></div>'
    }
}
document.getElementById("stat2").innerHTML = stat2;

// display answers
let size = document.getElementById(`${a[0]}`);
let range = document.getElementById(`${a[1]}`);
let max = document.getElementById(`${a[2]}`);
let min = document.getElementById(`${a[3]}`);
let arMean = document.getElementById(`${a[4]}`);
let geoMean = document.getElementById(`${a[5]}`);
let median = document.getElementById(`${a[6]}`);
let mode = document.getElementById(`${a[7]}`);
let sum = document.getElementById(`${a[8]}`);
let sumSq = document.getElementById(`${a[9]}`);
let stdDevS = document.getElementById(`${a[10]}`);
let stdDevP = document.getElementById(`${a[11]}`);
let varS = document.getElementById(`${a[12]}`);
let varP = document.getElementById(`${a[13]}`);
let coeffS = document.getElementById(`${a[14]}`);
let coeffP = document.getElementById(`${a[15]}`);
let q1 = document.getElementById(`${a[16]}`);
let q2 = document.getElementById(`${a[17]}`);
let q3 = document.getElementById(`${a[18]}`);
let iqr = document.getElementById(`${a[19]}`);
let midRange = document.getElementById(`${a[20]}`);
let outliers = document.getElementById(`${a[21]}`);
let meanAbsDev = document.getElementById(`${a[22]}`);
let rootMeanSq = document.getElementById(`${a[23]}`);
let stdErrMeanS = document.getElementById(`${a[24]}`);
let stdErrMeanP = document.getElementById(`${a[25]}`);
let skewS = document.getElementById(`${a[26]}`);
let skewP = document.getElementById(`${a[27]}`);
let kurtS = document.getElementById(`${a[28]}`);
let kurtP = document.getElementById(`${a[29]}`);
let kurtExS = document.getElementById(`${a[30]}`);
let kurtExP = document.getElementById(`${a[31]}`);
let rsdS = document.getElementById(`${a[32]}`);
let rsdP = document.getElementById(`${a[33]}`);
// let d1 = document.getElementById(`${a[27]}`);
// let d2 = document.getElementById(`${a[28]}`);
// let d3 = document.getElementById(`${a[29]}`);
// let d4 = document.getElementById(`${a[30]}`);
// let d5 = document.getElementById(`${a[31]}`);
// let d6 = document.getElementById(`${a[32]}`);
// let d7 = document.getElementById(`${a[33]}`);
// let d8 = document.getElementById(`${a[34]}`);
// let d9 = document.getElementById(`${a[35]}`);

function buttonPressed(buttonText){
    if(buttonText === "CA") {
        clearAll();
    } else if (buttonText === "CE") {
        clearError();
    } else if (buttonText === ".") {
        decimalCalc();
    } else if (buttonText === "-") {
        minusCalc();
    } else if (buttonText === ",") {
        commaCalc();
    } else if (buttonText === "return") {
        sortArray();
    } else {
        numberCalc(buttonText);
    }
}

function sortArray() {
    if (returnUsed === true) {

    } else {
        returnUsed = true;
        let tempArray = inputDisplay.value.split(',');
        for (let i=0; i<tempArray.length; i++) {
            arrayX.push(Number(tempArray[i]));
        }
        arrayX.sort((a,b) => a-b);
        basicCalc();
    }
}

function clearAll() {
    inputDisplay.value = "";
    arrayX = [];
    size.innerHTML = "0";
    range.innerHTML = "0";
    max.innerHTML = "0";
    min.innerHTML = "0";
    arMean.innerHTML = "0";
    geoMean.innerHTML = "0";
    median.innerHTML = "0";
    mode.innerHTML = "0";
    sum.innerHTML = "0";
    sumSq.innerHTML = "0";
    stdDevS.innerHTML = "0";
    stdDevP.innerHTML = "0";
    varS.innerHTML = "0";
    varP.innerHTML = "0";
    coeffS.innerHTML = "0";
    coeffP.innerHTML = "0";
    q1.innerHTML = "0";
    q2.innerHTML = "0";
    q3.innerHTML = "0";
    iqr.innerHTML = "0";
    midRange.innerHTML = "0";
    outliers.innerHTML = "0";
    meanAbsDev.innerHTML = "0";
    rootMeanSq.innerHTML = "0";
    stdErrMeanS.innerHTML = "0";
    stdErrMeanP.innerHTML = "0";
    skewS.innerHTML = "0";
    skewP.innerHTML = "0";
    kurtS.innerHTML = "0";
    kurtP.innerHTML = "0";
    kurtExS.innerHTML = "0";
    kurtExP.innerHTML = "0";
    rsdS.innerHTML = "0";
    rsdP.innerHTML = "0";
    // d1.innerHTML = "0";
    // d2.innerHTML = "0";
    // d3.innerHTML = "0";
    // d4.innerHTML = "0";
    // d5.innerHTML = "0";
    // d6.innerHTML = "0";
    // d7.innerHTML = "0";
    // d8.innerHTML = "0";
    // d9.innerHTML = "0";
    decimalUsed = false;
    returnUsed = false;
}

function clearError() {
    if (inputDisplay.value.slice(-1) === ".") {
        decimalUsed = false;
    }
    inputDisplay.value = inputDisplay.value.substring(0, inputDisplay.value.length-1);
}

function commaCalc() {
    inputDisplay.value += ",";
    decimalUsed = false;
}

function decimalCalc() {
    if (decimalUsed === false) {
        inputDisplay.value += ".";
        decimalUsed = true;
    }
}

function numberCalc(buttonText) {
    inputDisplay.value += buttonText;
}

function basicCalc() {
    arraySize = arrayX.length;
    size.innerHTML = arrayX.length.toString();
    range.innerHTML = (Number(arrayX[arraySize-1])-Number(arrayX[0])).toString();
    max.innerHTML = (arrayX[arraySize-1]).toString();
    min.innerHTML = (arrayX[0]).toString();
    midRange.innerHTML = ((Number(arrayX[0])+Number(arrayX[arraySize-1]))/2).toString();
    meanCalc();
}

//calculates both arithmetic and geometric mean, also includes sum of x squared
function meanCalc() {
    let tempSum = 0;
    let tempProd = 1;
    for (let i=0; i<arraySize; i++) {
        tempSum = tempSum+arrayX[i];
        tempProd = tempProd*arrayX[i];
    }
    sum.innerHTML = tempSum.toString();
    arMean.innerHTML = (tempSum/arraySize).toString();
    geoMean.innerHTML = (Math.pow(tempProd, 1/arraySize)).toString();
    medianCalc();
    meanAbsDevCalc();
}

function medianCalc() {
    arrayX.sort();
    let first = Math.floor(arraySize/2);
    let second = first+1;
    if (arraySize%2 === 0) {
        median.innerHTML = ((arrayX[first]+arrayX[second])/2).toString();
    } else {
        median.innerHTML = arrayX[first];
    }
    modeCalc();
}

function meanAbsDevCalc() {
    let absSum = 0;
    for (let i=0; i<arraySize; i++) {
        absSum = (Math.abs(arrayX[i]-arMean.innerHTML))/arraySize+absSum;
    }
    meanAbsDev.innerHTML = absSum.toString();
}

function modeCalc() {
    let valueArray = [];
    let countArray = [];
    let modeCount = 0;
    let highModeCount = 1;
    let highArray = [];
    for (let i=0; i<arrayX.length; i++) {
        if (i === 0) {
            modeCount++;
        } else if (arrayX[i] === arrayX[i-1]) {
            modeCount++;
        } else {
            valueArray.push(arrayX[i-1]);
            countArray.push(modeCount);
            modeCount = 1;
        }
        if (i===arrayX.length-1) {
            valueArray.push(arrayX[i]);
            countArray.push(modeCount);
        }
    }
    //finds highest count of values
    for (let n=0; n<valueArray.length; n++) {
        if (countArray[n]>highModeCount) {
            highModeCount = countArray[n];
        }
    }
    //finds most common values
    for (let o=0; o<valueArray.length; o++) {
        if (countArray[o] === highModeCount) {
            highArray.push(valueArray[o]);
        }
    }
    let count = highArray.length;
    let n = 0;
    if (count === 1) {
        mode.innerHTML = `${highArray[0]}`+" appears "+`${highModeCount}`+" time(s).";
    } else if (count === 2) {
        mode.innerHTML = `${highArray[0]}`+" and "+`${highArray[1]}`+" appear "+`${highModeCount}`+" time(s).";
    } else {
        while (n<count-1) {
            mode.innerHTML = `${mode}`+" "+`${highArray[n]}`+", ";
            n++;
        }
        mode.innerHTML = `${mode}`+" and "+`${highArray[count-1]}`+" appear "+`${highModeCount}`+" time(s).";
    }
    variabilityCalc();
}

//for both variance and standard deviation
function variabilityCalc() {
    let n = 0;
    //for sumSq, var, and standard deviation
    let sumSquares1 = 0;
    //for root mean square
    let sumSquares2 = 0;
    //for sample skewness
    let sampleTriple = 0;
    //for population skewness
    let popTriple = 0;
    //for kurtosis sample
    let sampleQuad = 0;
    //for kurtosis population
    let popQuad = 0;
    const k1 = (arraySize*(arraySize+1));
    const k2 = (arraySize-1)*(arraySize-2)*(arraySize-3);
    const k3 = (3*Math.pow(arraySize-1,2));
    const k4 = (arraySize-2)*(arraySize-3);
    for (let i=0; i<arraySize; i++) {
        sumSquares1 = Math.pow(arrayX[i]-arMean.innerHTML, 2)+sumSquares1;
        sumSquares2 = Math.pow(arrayX[i], 2)+sumSquares2;
    }
    sumSq.innerHTML = sumSquares1.toString();
    varP.innerHTML = (sumSquares1/arraySize).toString();
    varS.innerHTML = (sumSquares1/(arraySize-1)).toString();
    stdDevS.innerHTML = (Math.sqrt(Number(varS.innerHTML))).toString();
    stdDevP.innerHTML = (Math.sqrt(Number(varP.innerHTML))).toString();
    coeffS.innerHTML = (stdDevS.innerHTML/arMean.innerHTML).toString();
    coeffP.innerHTML = (stdDevP.innerHTML/arMean.innerHTML).toString();
    rootMeanSq.innerHTML = (Math.sqrt(sumSquares2/arraySize)).toString();
    stdErrMeanS.innerHTML = (stdDevS.innerHTML/Math.sqrt(arraySize)).toString();
    stdErrMeanP.innerHTML = (stdDevP.innerHTML/Math.sqrt(arraySize)).toString();
    rsdS.innerHTML = ((100*stdDevS.innerHTML)/arMean.innerHTML).toString()+"%";//todo here
    rsdP.innerHTML = ((100*stdDevP.innerHTML)/arMean.innerHTML).toString()+"%";
    //for skewness
    for (let j=0;j<arraySize;j++) {
        sampleTriple=(Math.pow((arrayX[j]-arMean.innerHTML)/stdDevS.innerHTML,3))+sampleTriple;
        popTriple = Math.pow((arrayX[j]-arMean.innerHTML)/stdDevP.innerHTML, 3)+popTriple;
        sampleQuad = Math.pow((arrayX[j]-arMean.innerHTML)/stdDevS.innerHTML, 4)+sampleQuad;
        popQuad = Math.pow((arrayX[j]-arMean.innerHTML), 4)+popQuad;
    }
    skewS.innerHTML = ((arraySize)/((arraySize-1)*(arraySize-2))*sampleTriple).toString();
    skewP.innerHTML = (popTriple*(1/arraySize)).toString();
    kurtS.innerHTML = ((k1/k2)*sampleQuad).toString();
    kurtP.innerHTML = (popQuad/(arraySize*Math.pow(Number(stdDevP.innerHTML),4))).toString();
    kurtExS.innerHTML = (Number(kurtS.innerHTML)-(k3/k4)).toString();
    kurtExP.innerHTML = (kurtP.innerHTML-3).toString();
    quartileCalc();
}

function quartileCalc() {
    if (arraySize < 4) {
        q1 = "n/a";
        q2 = "n/a";
        q3 = "n/a";
        iqr = "n/a";
    } else {
        let firstQuart = (arraySize+1)/4;
        let multiplier1 = firstQuart - Math.floor(firstQuart);
        q1.innerHTML = (arrayX[Math.floor(firstQuart)-1]+multiplier1*(arrayX[Math.floor(firstQuart)]-arrayX[Math.floor(firstQuart)-1])).toString();
        let secondQuart = (arraySize+1)/2;
        let multiplier2 = secondQuart - Math.floor(secondQuart);
        q2.innerHTML = median.innerHTML;
        let thirdQuart = (3*(arraySize+1)/4);
        let multiplier3 = thirdQuart - Math.floor(thirdQuart);
        q3.innerHTML = (arrayX[Math.floor(thirdQuart)-1]+multiplier3*(arrayX[Math.floor(thirdQuart)]-arrayX[Math.floor(thirdQuart)-1])).toString();
        iqr.innerHTML = (q3.innerHTML - q1.innerHTML).toString();
        outliersCalc();
    }
}

function outliersCalc() {
    const upperFence = Number(q3.innerHTML)+1.5*Number(iqr.innerHTML);
    const lowerFence = Number(q1.innerHTML)-1.5*Number(iqr.innerHTML);
    let outlierArray = [];
    for (let i=0; i<arrayX.length; i++) {
        if (arrayX[i]<lowerFence || arrayX[i]>upperFence) {
            outlierArray.push(arrayX[i]);
        }//todo add loop for outlier array
    }
    if (outlierArray.length === 0) {
        outliers.innerHTML = "n/a";
    } else {
        outliers.innerHTML = outlierArray.toString();
    }
}