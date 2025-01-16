const luminanceArray = ['Apostlib (asb)', 'Blondel (blondel)', 'Bril (bril)',
  'Candela/Square Centimeter (cd/cm²)', 'Candela/Square Foot (cd/ft²)', 'Candela/Square Inch (cd/in²)',
  'Candela/Square Meter (cd/m²)', 'Foot-Lambert (fL)', 'Kilocandela/Square Meter (kcd/m²)', 'Lambert (L)',
  'Lumen/Square Foot/Steradian (lm/ft²·sr)', 'Lumen/Square Meter/Steradian (lm/m²·sr)',
  'Lumen/Square Centimeter/Steradian (lm/cm²·sr)', 'Millilambert (mL)', 'Millinit (mnt)', 'Nit (nt)',
  'Skot (sk)', 'Stlib (sb)'];

const luminanceInitValue1 = "6";
const luminanceInitValue2 = "3";

//based on 1 candela/square meter
const luminanceConvArray = [3.1415926536, 3.1415926536, 3.1415926536e7, 0.0001, 0.09290304,
  0.00064516, 1, 0.2918855809, 0.001, 0.0003141592654, 0.09290304, 1, 0.0001, 0.3141592654, 1000,
  1, 3141.59, 0.0001];

window.convArray = luminanceConvArray;

function clearAngle() {
  selectedUnit1.value = luminanceInitValue1;
  selectedUnit2.value = luminanceInitValue2;
  originalUnit1 = luminanceInitValue1;
  originalUnit2 = luminanceInitValue2;
}

let option1 = "";
for(let i=0;i<luminanceArray.length;i++){
  if (i === parseInt(luminanceInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + luminanceArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + luminanceArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<luminanceArray.length;j++){
  if (j === parseInt(luminanceInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + luminanceArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + luminanceArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;