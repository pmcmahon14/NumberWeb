const aosArray = ['Atom (atom)', 'Yottamole (Ymol)', 'Zettamole (Zmol)', 'Examole (Emol)',
  'Petamole (Pmol)', 'Teramole (Tmol)', 'Gigamole (Gmol)', 'Megamole (Mmol)', 'Kilomole (kmol)',
  'Hectomole (hmol)', 'Decamole (damol)', 'Mole (mol)', 'Decimole (dmol)', 'Centimole (cmol)', 'Millimole (mmol)',
  'Micromole (µmol)', 'Nanomole (nmol)', 'Picomole (pmol)', 'Femtomole (fmol)', 'Attomole (amol)',
  'Zeptomole (zmol)', 'Yoctomole (ymol)'];

const aosInitValue1 = "11";
const aosInitValue2 = "0";

//requires metric array
const aosConvArray = [6.02214076e23, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 0.000001, 0.001, 0.01,
  0.1, 1, 10, 100, 1000, 1000000, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24];

window.convArray = aosConvArray;

function clearAos() {
  selectedUnit1.value = aosInitValue1;
  selectedUnit2.value = aosInitValue2;
  originalUnit1 = aosInitValue1;
  originalUnit2 = aosInitValue2;
}

let option1 = "";
for(let i=0;i<aosArray.length;i++){
  if (i === parseInt(aosInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + aosArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + aosArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<aosArray.length;j++){
  if (j === parseInt(aosInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + aosArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + aosArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;