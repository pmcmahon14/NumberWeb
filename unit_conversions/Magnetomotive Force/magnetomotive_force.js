const magnetomotiveForceArray = ['Abampere Turn (abAt)', 'Ampere Turn (At)', 'Gilbert (Gi)',
  'Kiloampere Turn (kAt)', 'Megaampere Turn (MAt)', 'Microampere Turn (µAt)', 'Milliampere Turn (mAt)',
  'Milligilbert (mGi)'];

const magnetomotiveForceInitValue1 = "1";
const magnetomotiveForceInitValue2 = "3";

//based on 1 ampere turn
const magnetomotiveForceConvArray = [0.1, 1, 1.26, 0.001, 0.000001, 1000000, 1000, 1256.64];

window.convArray = magnetomotiveForceConvArray;

function clearAngle() {
  selectedUnit1.value = magnetomotiveForceInitValue1;
  selectedUnit2.value = magnetomotiveForceInitValue2;
  originalUnit1 = magnetomotiveForceInitValue1;
  originalUnit2 = magnetomotiveForceInitValue2;
}

let option = "";
for(let i=0;i<magnetomotiveForceArray.length;i++){
  if (i === parseInt(magnetomotiveForceInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + magnetomotiveForceArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + magnetomotiveForceArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<magnetomotiveForceArray.length;j++){
  if (j === parseInt(magnetomotiveForceInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + magnetomotiveForceArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + magnetomotiveForceArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;