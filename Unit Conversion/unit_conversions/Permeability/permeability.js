const permArray = ['Kilogram/Pascal/Sec/Meter² (kg/pa/s/m²)', 'Permeability (0°C) (perm)',
  'Permeability (23°C) (perm)', 'Permeability Inches (0°C) (perm in)', 'Permeability Inches (23°C) (perm in)'];

const permInitValue1 = "0";
const permInitValue2 = "1";

//based on 1 kilogram/pascal/second/Sq meter
const permConvArray = [1, 1.747839234e10, 1.740568296e10, 6.881270558e11, 6.85264752e11];

window.convArray = permConvArray;

function clearAngle() {
  selectedUnit1.value = permInitValue1;
  selectedUnit2.value = permInitValue2;
  originalUnit1 = permInitValue1;
  originalUnit2 = permInitValue2;
}

let option1 = "";
for(let i=0;i<permArray.length;i++){
  if (i === parseInt(permInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + permArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + permArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<permArray.length;j++){
  if (j === parseInt(permInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + permArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + permArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;