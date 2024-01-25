const enzymeArray = ['Yottakatal (Ykat)', 'Zettakatal (Zkat)', 'Exakatal (Ekat)',
  'Petakatal (Pkat)', 'Terakatal (Tkat)', 'Gigakatal (Gkat)', 'Megakatal (Mkat)', 'Kilokatal (kkat)',
  'Hectokatal (hkat)', 'Dekakatal (dkkat)', 'Katal (kat)', 'Decikatal (dkat)', 'Centikatal (ckat)',
  'Millikatal (mkat)', 'Microkatal (µkat)', 'Nanokatal (nkat)', 'Picokatal (pkat)', 'Femtokatal (fkat)',
  'Attokatal (akat)', 'Zeptokatal (zkat)', 'Yoctokatal (ykat)', 'Kilomole/Minute (Kmol/min)',
  'Kilomole/Second (kmol/s)', 'Millimole/Minute (mmol/min)', 'Millimole/Second (mmol/s)',
  'Micromole/Minute (µmol/min)', 'Micromole/Second (µmol/s)', 'Mole/Minute (mol/min)',
  'Mole/Second (mol/s)'];

const enzymeInitValue1 = "10";
const enzymeInitValue2 = "27";

//based on 1 katal
const enzymeConvArray = [1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 1000, 100, 10, 1, 0.1,
  0.01, 0.001, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 124, 0.06, 0.001, 60000, 1000, 60000000, 1000000, 60, 1];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = enzymeConvArray;
})

function clearAngle() {
  selectedUnit1.value = enzymeInitValue1;
  selectedUnit2.value = enzymeInitValue2;
  originalUnit1 = enzymeInitValue1;
  originalUnit2 = enzymeInitValue2;
}

let option = "";
for(let i=0;i<enzymeArray.length;i++){
  if (i === parseInt(enzymeInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + enzymeArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + enzymeArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<enzymeArray.length;j++){
  if (j === parseInt(enzymeInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + enzymeArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + enzymeArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;
