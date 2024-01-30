const volumeFlowArray = ['Cubic Meter/Day (m³/d)', 'Cubic Meter/Hour (m³/hr)',
  'Cubic Meter/Minute (m³/min)', 'Cubic Meter/Second (m³/s)', 'Cubic Centimeter/Day (cm³/d)',
  'Cubic Centimeter/Hour (cm³/hr)', 'Cubic Centimeter/Minute (cm³/min)', 'Cubic Centimeter/Second (cm³/s)',
  'Liter/Day (l/d)', 'Liter/Hour (l/hr)', 'Liter/Minute (l/min)', 'Liter/Second (l/s)', 'Milliliter/Day (ml/d)',
  'Milliliter/Hour (ml/hr)', 'Milliliter/Minute (ml/min)', 'Milliliter/Second (ml/s)',
  'Gallon (UK)/Day (gal/d)', 'Gallon (UK)/Hour (gal/hr)', 'Gallon (UK)/Minute (gal/min)',
  'Gallon (UK)/Second (gal/s)', 'Gallon (US)/Day (gal/d)', 'Gallon (US)/Hour (gal/hr)',
  'Gallon (US)/Minute (gal/min)', 'Gallon (US)/Second (gal/s)', 'Kilobarrel (gasoline)/Day (kbbl/d)',
  'Kilobarrel (gasoline)/Hour (kbbl/hr)', 'Kilobarrel (gasoline)/Minute (kbbl/min)',
  'Kilobarrel (gasoline)/Second (kbbl/s)', 'Barrel (US - gasoline)/Day (bbl/d)',
  'Barrel (US - gasoline)/Hour (bbl/hr)', 'Barrel (US - gasoline)/Minute (bbl/min)',
  'Barrel (US - gasoline)/Second (bbl/s)', 'Acre-Feet/Day (ac ft/d)', 'Acre-Feet/Hour (ac ft/hr)',
  'Acre-Feet/Minute (ac ft/min)', 'Acre-Feet/Second (ac ft/s)', 'Ounce (UK)/Day (oz/d)',
  'Ounce (UK)/Hour (oz/hr)', 'Ounce (UK)/Minute (oz/min)', 'Ounce (UK)/Second (oz/s)',
  'Ounce (US)/Day (oz/d)', 'Ounce (US)/Hour (oz/hr)', 'Ounce (US)/Minute (oz/min)',
  'Ounce (US)/Second (oz/s)', 'Pound/Day (lb/d)', 'Pound/Hour (lb/hr)', 'Pound/Minute (lb/min)',
  'Pound/Second (lb/s)', 'Kilogram/Day (kg/d)', 'Kilogram/Hour (kg/hr)', 'Kilogram/Minute (kg/min)',
  'Kilogram/Second (kg/s)', 'Hundred Cubic Feet/Day (hcf/d)', 'Hundred Cubic Feet/Hour (hcf/hr)',
  'Hundred Cubic Feet/Minute (hcf/min)', 'Hundred Cubic Feet/Second (hcf/s)', 'Million Cubic Feet/Day (MMcf/d)',
  'Million Cubic Feet/Hour (MMcf/hr)', 'Million Cubic Feet/Minute (MMcf/min)',
  'Million Cubic Feet/Second (MMcf/s)'];

const volumeFlowInitValue1 = "3";
const volumeFlowInitValue2 = "22";

//based on 1 cubic meter/second
const volumeFlowConvArray = [86400, 3600, 60, 1, 8.64e10, 3.6e9, 60000000, 1000000, 86400000, 3600000,
  60000, 1000, 8.64e10, 3.6e9, 60000000, 1000000, 19005343.05, 791889.29, 13198.15, 219.97, 22824464.02, 951019.33,
  15850.32, 264.17, 543.44, 22.64333333, 0.377388888, 0.006289814, 543439.65, 22643.32, 377.39, 6.29, 70.05, 2.92,
  0.0486427909, 0.0008107132, 3.0408548885e9, 1.2670228702e8, 2111704.78, 35195.08, 2.92153151822e9, 1.2173047993e8,
  2028841.33, 33814.02, 1.4082693446e8, 5867788.94, 97796.48, 1629.94, 6.387801665e7, 2661584.03, 44359.73, 739.33,
  30511.87, 1271.33, 21.19, 0.3531466672, 3.05, 0.127083333, 0.002118055, 3.5300925e-5];

window.convArray = volumeFlowConvArray;

function clearAngle() {
  selectedUnit1.value = volumeFlowInitValue1;
  selectedUnit2.value = volumeFlowInitValue2;
  originalUnit1 = volumeFlowInitValue1;
  originalUnit2 = volumeFlowInitValue2;
}

let option1 = "";
for(let i=0;i<volumeFlowArray.length;i++){
  if (i === parseInt(volumeFlowInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + volumeFlowArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + volumeFlowArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<volumeFlowArray.length;j++){
  if (j === parseInt(volumeFlowInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + volumeFlowArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + volumeFlowArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;