const inductanceArray = ['Henry (H)', 'Yottahenry (YH)', 'Zettahenry (ZH)', 'Exahenry (EH)', 'Petahenry (PH)',
  'Terahenry (TH)', 'Gigahenry (GH)', 'Megahenry (MH)', 'Kilohenry (kH)', 'Hectohenry (hH)', 'Decahenry (daH)',
  'Decihenry (dH)', 'Centihenry (cH)', 'Millihenry (mH)', 'Microhenry (µH)', 'Nanohenry (nH)', 'Picohenry (pH)',
  'Femtohenry (fH)', 'Attohenry (aH)', 'Zeptohenry (zH)', 'Yoctohenry (yH)', 'Abhenry (abH)',
  'EMU of Inductance (EMU)', 'ESU of Inductance (ESU)', 'Stathenry (stH)', 'Weber/Ampere (Wb/A)'];

const inductanceInitValue1 = "0";
const inductanceInitValue2 = "25";

//based on 1 henry
const inductanceConvArray = [1, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 1e-3, 1e-2, 1e-1, 1e+1,
  1e+2, 1e+3, 1e+6, 1e+9, 1e+12, 1e+15, 1e+18, 1e+21, 1e+24, 1e9, 1e9, 1.1126500297e-12, 1.1126500297e-12, 1];

window.convArray = inductanceConvArray;

function clearAngle() {
  selectedUnit1.value = inductanceInitValue1;
  selectedUnit2.value = inductanceInitValue2;
  originalUnit1 = inductanceInitValue1;
  originalUnit2 = inductanceInitValue2;
}

let option1 = "";
for(let i=0;i<inductanceArray.length;i++){
  if (i === parseInt(inductanceInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + inductanceArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + inductanceArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<inductanceArray.length;j++){
  if (j === parseInt(inductanceInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + inductanceArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + inductanceArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;