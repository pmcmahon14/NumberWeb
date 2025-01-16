const dirArray = ['Pixel/Meter (px/m)', 'Pixel/Centimeter (px/cm)', 'Pixel/Millimeter (px/mm)',
  'Pixel/Micrometer (px/µm)', 'Pixel/Yard (px/yd)', 'Pixel/Foot (px/ft)', 'Pixel/Inch (px/in)'];

const dirInitValue1 = "0";
const dirInitValue2 = "1";

//based on 1 pixel/meter
const dirConvArray = [1, 0.01, 0.001, 0.000001, 0.9144, 0.3048, 0.0254];

window.convArray = dirConvArray;

function clearAngle() {
  selectedUnit1.value = dirInitValue1;
  selectedUnit2.value = dirInitValue2;
  originalUnit1 = dirInitValue1;
  originalUnit2 = dirInitValue2;
}

let option1 = "";
for(let i=0;i<dirArray.length;i++){
  if (i === parseInt(dirInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + dirArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + dirArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<dirArray.length;j++){
  if (j === parseInt(dirInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + dirArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + dirArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;