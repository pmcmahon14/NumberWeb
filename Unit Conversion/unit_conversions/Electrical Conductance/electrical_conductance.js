const elecCaArray = ['Ampere/Volt (A/V)', 'Kilosiemens (kS)', 'Megasiemens (MS)',
  'Millisiemens (mS)', 'Microsiemens (µS)','Siemens (S)'];

const elecCaInitValue1 = "5";
const elecCaInitValue2 = "2";

//based on 1 siemens
const elecCaConvArray = [1, 0.001, 0.000001, 1000, 1000000, 1];

window.convArray = elecCaConvArray;

function clearAngle() {
  selectedUnit1.value = elecCaInitValue1;
  selectedUnit2.value = elecCaInitValue2;
  originalUnit1 = elecCaInitValue1;
  originalUnit2 = elecCaInitValue2;
}

let option1 = "";
for(let i=0;i<elecCaArray.length;i++){
  if (i === parseInt(elecCaInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + elecCaArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + elecCaArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<elecCaArray.length;j++){
  if (j === parseInt(elecCaInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + elecCaArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + elecCaArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;