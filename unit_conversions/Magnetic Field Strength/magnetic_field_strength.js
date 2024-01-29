const magFieldStrArray = ['Ampere/Meter (A/m)', 'Ampere/Yard (A/m)', 'Ampere/Foot (A/m)',
  'Ampere/Inch (A/m)', 'Kiloampere/Meter (kA/m)', 'Kiloampere/Yard (A/m)', 'Kiloampere/Foot (A/m)',
  'Kiloampere/Inch (A/m)', 'Oersted (Oe)'];

const magFieldStrInitValue1 = "0";
const magFieldStrInitValue2 = "2";

//based on 1 ampere/meter
const magFieldStrConvArray = [1, 0.9144, 0.3048, 0.0254, 0.001, 0.0009144, 0.0003048, 0.0000254,
  0.01256637];

window.convArray = magFieldStrConvArray;

function clearAngle() {
  selectedUnit1.value = magFieldStrInitValue1;
  selectedUnit2.value = magFieldStrInitValue2;
  originalUnit1 = magFieldStrInitValue1;
  originalUnit2 = magFieldStrInitValue2;
}

let option1 = "";
for(let i=0;i<magFieldStrArray.length;i++){
  if (i === parseInt(magFieldStrInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + magFieldStrArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + magFieldStrArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<magFieldStrArray.length;j++){
  if (j === parseInt(magFieldStrInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + magFieldStrArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + magFieldStrArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;