const specVolArray = ['Cubic Meter/Kilogram (cm³/kg)', 'Cubic Centimeter/Gram (cm³/g)',
  'Cubic Foot/Kilogram (ft³/kg)', 'Cubic Foot/Pound (ft³/lb)', 'Gallon (UK)/Pound (gal/lb)',
  'Gallon (US)/Pound (gal/lb)', 'Liter/Kilogram (l/kg)', 'Liter/Gram (l/g)'];

const specVolInitValue1 = "0";
const specVolInitValue2 = "6";

//based on 1 cubic meter/kilogram
const specVolConvArray = [1, 1000, 35.31466672, 16.01846353, 99.77637365, 119.82643593, 1000, 1];

window.convArray = specVolConvArray;

function clearAngle() {
  selectedUnit1.value = specVolInitValue1;
  selectedUnit2.value = specVolInitValue2;
  originalUnit1 = specVolInitValue1;
  originalUnit2 = specVolInitValue2;
}

let option = "";
for(let i=0;i<specVolArray.length;i++){
  if (i === parseInt(specVolInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + specVolArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + specVolArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<specVolArray.length;j++){
  if (j === parseInt(specVolInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + specVolArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + specVolArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;