const chargeArray = ['Abcoulomb (abC)', 'Ampere-Hour (A.h.)', 'Ampere-Minute (A.min)',
  'Ampere-Second (A.s)', 'Coulomb (C)', 'Elementary Charge (e)', 'EMU of Charge (EMU)', 'ESU of Charge (ESU)',
  'Faraday (C12) (F)', 'Franklin (Fr)', 'Kilocoulomb (kC)', 'Megacoulomb (MC)', 'Microcoulomb (µC)',
  'Millicoulomb (mC)', 'Nanocoulomb (nC)', 'Picocoulomb (pC)', 'Statcoulomb (stC)'];

const chargeInitValue1 = "4";
const chargeInitValue2 = "8";

//based on 1 coulomb
const chargeConvArray = [0.1, 2.7777777778e-4, 1.6666666667e-2, 1, 1, 6.2415090745e18, 0.1,
  2.9940119761e9, 1.0364272140e-5, 2.9940119761e9, 0.001, 1e-6, 1e6, 1000, 1e9, 1e12,
  2.9940119761e9];

window.convArray = chargeConvArray;

function clearAngle() {
  selectedUnit1.value = chargeInitValue1;
  selectedUnit2.value = chargeInitValue2;
  originalUnit1 = chargeInitValue1;
  originalUnit2 = chargeInitValue2;
}

let option1 = "";
for(let i=0;i<chargeArray.length;i++){
  if (i === parseInt(chargeInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + chargeArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + chargeArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<chargeArray.length;j++){
  if (j === parseInt(chargeInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + chargeArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + chargeArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;