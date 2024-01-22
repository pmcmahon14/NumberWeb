const elecCaArray = ['Ampere/Volt (A/V)', 'Kilosiemens (kS)', 'Megasiemens (MS)',
  'Millisiemens (mS)', 'Microsiemens (µS)','Siemens (S)'];

const elecCaInitValue1 = "5";
const elecCaInitValue2 = "2";

//based on 1 siemens
const elecCaConvArray = [1, 0.001, 0.000001, 1000, 1000000, 1];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = elecCaConvArray;
})

function clearAngle() {
  selectedUnit1.value = elecCaInitValue1;
  selectedUnit2.value = elecCaInitValue2;
  originalUnit1 = elecCaInitValue1;
  originalUnit2 = elecCaInitValue2;
}