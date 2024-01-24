const currentArray = ['Abampere (abA)', 'Ampere (A)', 'Biot (Bi)', 'Centiampere (cA)',
  'Coulomb/Second (C/s)', 'Deciampere (dA)', 'Dekaampere (dkA)', 'EMU of current (EMU)', 'ESU of current (ESU)',
  'Franklin/Second (Fr/s)', 'Hectoampere (hA)', 'Kiloampere (kA)', 'Megaampere (MA)', 'Microampere (µA)',
  'Milliampere (mA)', 'Siemens Volt (S.V)', 'Statampere (stA)', 'Volt/Ohm (V/Ω)', 'Watt/Volt (W/V)',
  'Weber/Henry (Wb/H)'];

const currentInitValue1 = "1";
const currentInitValue2 = "11";

//based on 1 ampere
const currentConvArray = [0.1, 1, 0.1, 100, 1, 10, 0.1, 0.1, 2.9979245368e9, 2.9940119761e9, 0.01,
  0.001, 1e-6, 1e+6, 1000, 1, 2.9979245368e9, 1, 1, 1,];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = currentConvArray;
})

function clearAngle() {
  selectedUnit1.value = currentInitValue1;
  selectedUnit2.value = currentInitValue2;
  originalUnit1 = currentInitValue1;
  originalUnit2 = currentInitValue2;
}

let option = "";
for(let i=0;i<currentArray.length;i++){
  if (i === parseInt(currentInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + currentArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + currentArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<currentArray.length;j++){
  if (j === parseInt(currentInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + currentArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + currentArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;