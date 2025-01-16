const elecPotentialArray = ['Abvolt (abV)', 'EMU of Electric Potential (EMU)',
  'ESU of Electric Potential (ESU)', 'Gigavolt (GV)', 'Kilovolt (kV)', 'Megavolt (MV)', 'Microvolt (µV)',
  'Millivolt (mV)', 'Nanovolt (nV)', 'Picovolt (pV)', 'Planck Voltage (hV)', 'Statvolt (stV)', 'Teravolt (TV)',
  'Volt (V)', 'Watt/Ampere (W/A)'];

const elecPotentialInitValue1 = "13";
const elecPotentialInitValue2 = "14";

//based on 1 volt
const elecPotentialConvArray = [1e8, 1e8, 1e8, 1e-9, 0.001, 0.000001, 1000000, 1000,
  1e9, 1e12, 9.5881873532e-28, 0.0033356399951, 1e-12, 1, 1];

window.convArray = elecPotentialConvArray;

function clearAngle() {
  selectedUnit1.value = elecPotentialInitValue1;
  selectedUnit2.value = elecPotentialInitValue2;
  originalUnit1 = elecPotentialInitValue1;
  originalUnit2 = elecPotentialInitValue2;
}

let option1 = "";
for(let i=0;i<elecPotentialArray.length;i++){
  if (i === parseInt(elecPotentialInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + elecPotentialArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + elecPotentialArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<elecPotentialArray.length;j++){
  if (j === parseInt(elecPotentialInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + elecPotentialArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + elecPotentialArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;