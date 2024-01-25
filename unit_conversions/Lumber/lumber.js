const lumberArray = ['Board Feet (FBM)', 'Cord (cd)', 'Cord (80 Cubic Feet) (cd)',
  'Cord Feet (cd ft)', 'Cross Tie (XT)', 'Cubic Foot (ft³)', 'Cubic Inch (in³)', 'Cubic Meter (m³)',
  'Cunit (cu)', 'Pallet (pal)', 'Switch Tie (stie)', 'Thousand Board Feet (MFT²)',
  'Thousand Square Feet (1/8 inch panels) (MFT²)', 'Thousand Square Feet (1/4 inch panels) (MFT²)',
  'Thousand Square Feet (3/8 inch panels) (MFT²)', 'Thousand Square Feet (1/2 inch panels) (MFT²)',
  'Thousand Square Feet (3/4 inch panels) (MFT²)'];

const lumberInitValue1 = "7";
const lumberInitValue2 = "0";

//based on 1 cubic meter
const lumberConvArray = [423.7760007, 0.2758958338, 0.441433334, 2.20716667, 10.59440002, 35.31466672,
  61023.74409, 1, 0.3531466672, 24.92800004, 6.726603185, 0.4237760007, 3.390208005, 1.695104003,
  1.130069335, 0.8475520013, 0.5650346675];

window.convArray = lumberConvArray;

function clearAngle() {
  selectedUnit1.value = lumberInitValue1;
  selectedUnit2.value = lumberInitValue2;
  originalUnit1 = lumberInitValue1;
  originalUnit2 = lumberInitValue2;
}

let option = "";
for(let i=0;i<lumberArray.length;i++){
  if (i === parseInt(lumberInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + lumberArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + lumberArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<lumberArray.length;j++){
  if (j === parseInt(lumberInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + lumberArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + lumberArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;