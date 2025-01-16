const heatTransferCoeffArray = ['BTU (IT)/Hour/Foot²/F° (BTU/h·ft²·°F)',
  'BTU (IT)/Second/Foot²/F° (BTU/s·ft²·°F)', 'BTU (Th)/Hour/Foot²/F° (BTU/h·ft²·°F)',
  'BTU (Th)/Second/Foot²/F° (BTU/s·ft²·°F)', 'Calorie/Second/Cm²/C° (cal/s·cm²·°C)',
  'CHU/Hour/Foot²/C° (CHU/h·ft²·°C)', 'Joule/Second/Meter²/Kelvin (J/s·m²·K)',
  'Kilocalorie (IT)/Hour/Meter²/C° (kcal/h·m²·°С)', 'Kilocalorie (Th)/Hour/Meter²/C° (kcal/h·m²·°С)',
  'Watt/Meter²/C° (W/m²·°С)', 'Watt/Meter²/Kelvin (W/m²·K)'];

const heatTransferCoeffInitValue1 = "10";
const heatTransferCoeffInitValue2 = "9";

//based on 1 watt/Sq meter/Kelvin
const heatTransferCoeffConvArray = [0.17611018368, 4.8919495467e-5, 0.17622803351,
  4.895223153e-5, 2.3884589663e-5, 0.17611018368, 1, 0.85984522786, 0.079882235598, 1, 1];

window.convArray = heatTransferCoeffConvArray;

function clearAngle() {
  selectedUnit1.value = heatTransferCoeffInitValue1;
  selectedUnit2.value = heatTransferCoeffInitValue2;
  originalUnit1 = heatTransferCoeffInitValue1;
  originalUnit2 = heatTransferCoeffInitValue2;
}

let option1 = "";
for(let i=0;i<heatTransferCoeffArray.length;i++){
  if (i === parseInt(heatTransferCoeffInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + heatTransferCoeffArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + heatTransferCoeffArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<heatTransferCoeffArray.length;j++){
  if (j === parseInt(heatTransferCoeffInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + heatTransferCoeffArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + heatTransferCoeffArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;