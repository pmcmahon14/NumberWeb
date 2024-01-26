const percentConcArray = ['Percentage (%)', 'Part per Million (ppm)', 'Part per Billion (ppb)',
  'Part per Trillion (ppt)', 'Part per Quadrillion (ppq)', 'Gram/Kilogram (g/kg)', 'Gram/Ton (g/ton)',
  'Milligram/Kilogram (mg/kg)', 'Milligram/Gram (mg/g)', 'Milliliter/Cubic Meter (ml/m³)',
  'Milliliter/Liter (ml/l)', 'Microgram/Kilogram (µg/kg)', 'Microgram/Gram (µg/g)',
  'Microgram/Microgram (µg/µg)', 'Microliter/Cubic Meter (µl/m³)', 'Microliter/Liter (ul/l)',
  'nanogram/Kilogram (ng/kg)', 'nanogram/Gram (ng/g)', 'Nanogram/Microgram (ng/µg)',
  'Nanoliter/Microliter (nl/µl)', 'Whole Number'];

const percentConcInitValue1 = "0";
const percentConcInitValue2 = "1";

//based on 1 percent
const percentConcConvArray = [1, 10000, 1e7, 1e10, 1e13, 10, 10000, 10000, 10, 10000, 10,
  1e7, 10000, 10, 1e7, 10000, 1e10, 1e7, 10, 10, 0.01];

window.convArray = percentConcConvArray;

function clearAngle() {
  selectedUnit1.value = percentConcInitValue1;
  selectedUnit2.value = percentConcInitValue2;
  originalUnit1 = percentConcInitValue1;
  originalUnit2 = percentConcInitValue2;
}

let option = "";
for(let i=0;i<percentConcArray.length;i++){
  if (i === parseInt(percentConcInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + percentConcArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + percentConcArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<percentConcArray.length;j++){
  if (j === parseInt(percentConcInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + percentConcArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + percentConcArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;