const electroCapArray = ['Yottafarad (YF)', 'Zettafarad (ZF)', 'Exafarad (EF)', 'Petafarad (PF)',
  'Terafarad (TF)', 'Gigafarad (GF)', 'Megafarad (MF)', 'Kilofarad (kF)', 'Hectofarad (hF)', 'Dekafarad (dkF)',
  'Farad (F)', 'Decifarad (dF)', 'Centifarad (cF)', 'Millifarad (mF)', 'Microfarad (µF)', 'Nanofarad (nF)',
  'Picofarad (pF)', 'Femtofarad (fF)', 'Attofarad (aF)', 'Zeptofarad (zF)', 'Yoctofarad (yF)', 'Abfarad (abF)',
  'Coulomb/Volt (C/V)', 'EMU of Capacitance (EMU)', 'ESU of Capacitance (ESU)', 'Statfarad (stF)'];

const electroCapInitValue1 = "10";
const electroCapInitValue2 = "2";

//based on 1 farad
const electroCapConvArray = [1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 0.000001, 0.001, 0.01, 0.1, 1,
  10, 100, 1000, 1000000, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24, 1e-9, 1, 1e-9, 8.9900004225e11, 8.9900004225e11];

window.convArray = electroCapConvArray;

function clearAngle() {
  selectedUnit1.value = electroCapInitValue1;
  selectedUnit2.value = electroCapInitValue2;
  originalUnit1 = electroCapInitValue1;
  originalUnit2 = electroCapInitValue2;
}

let option1 = "";
for(let i=0;i<electroCapArray.length;i++){
  if (i === parseInt(electroCapInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + electroCapArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + electroCapArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<electroCapArray.length;j++){
  if (j === parseInt(electroCapInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + electroCapArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + electroCapArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;