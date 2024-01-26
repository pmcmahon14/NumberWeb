const massFlowArray = ['Exagram/Second (Eg/s)', 'Exagram/Minute (Eg/min)', 'Exagram/Hour (Eg/hr)',
  'Exagram/Day (Eg/d)', 'Petagram/Second (Pg/s)', 'Petagram/Minute (Pg/min)', 'Petagram/Hour (Pg/hr)',
  'Petagram/Day (Pg/d)', 'Teragram/Second (Tg/s)', 'Teragram/Minute (Tg/min)', 'Teragram/Hour (Tg/hr)',
  'Teragram/Day (Tg/d)', 'Gigagram/Second (Gg/s)', 'Gigagram/Minute (Gg/min)', 'Gigagram/Hour (Gg/hr)',
  'Gigagram/Day (Gg/d)', 'Megagram/Second (Mg/s)', 'Megagram/Minute (Mg/min)', 'Megagram/Hour (Mg/hr)',
  'Megagram/Day (Mg/d)', 'Kilogram/Second (kg/s)', 'Kilogram/Minute (kg/min)', 'Kilogram/Hour (kg/hr)',
  'Kilogram/Day (kg/d)', 'Gram/Second (g/s)', 'Gram/Minute (g/min)', 'Gram/Hour (g/hr)', 'Gram/Day (g/d)',
  'Centigram/Second (cg/s)', 'Centigram/Minute (cg/min)', 'Centigram/Hour (cg/hr)', 'Centigram/Day (cg/d)',
  'Milligram/Second (mg/s)', 'Milligram/Minute (mg/min)', 'Milligram/Hour (mg/hr)', 'Milligram/Day (mg/d)',
  'Microgram/Second (µg/s)', 'Microgram/Minute (µg/min)', 'Microgram/Hour (µg/hr)', 'Microgram/Day (µg/d)',
  'Ounce/Second (oz/s)', 'Ounce/Minute (oz/min)', 'Ounce/Hour (oz/hr)', 'Ounce/Day (oz/d)',
  'Pound/Second (lb/s)', 'Pound/Minute (lb/min)', 'Pound/Hour (lb/hr)', 'Pound/Day (lb/d)',
  'Short Ton/Second (tn/s)', 'Short Ton/Minute (tn/min)', 'Short Ton/Hour (tn/hr)', 'Short Ton/Day (tn/d)',
  'Metric Ton/Second (tn/s)', 'Metric Ton/Minute (tn/min)', 'Metric Ton/Hour (tn/hr)', 'Metric Ton/Day (tn/d)'];

const massFlowInitValue1 = "24";
const massFlowInitValue2 = "22";

//based on 1 gram/second
const massFlowConvArray = [1e-18, 6e-17, 3.6e-15, 8.64e-14, 1e-15, 6e-14, 3.6e-12, 8.64e-11, 1e-12, 6e-11, 3.6e-9,
  8.64e-8, 1e-9, 6e-8, 0.0000036, 0.0000864, 0.000001, 0.00006, 0.0036, 0.0864, 1000, 60000, 3600000, 86400000,
  1, 60, 3600, 86400, 0.01, 0.6, 36, 864, 0.001, 0.06, 3.6, 86.4, 0.000001, 0.00006, 0.0036, 0.0864,
  0.03527396195, 2.116437717, 126.986263, 3047.670312, 0.002204622622, 0.1322773573, 7.9366414387, 190.4793945,
  1.1023113109e-6, 6.61386786555e-5, 0.003968320719, 0.09523969726, 0.000001, 0.00006, 0.0036, 0.0864];

window.convArray = massFlowConvArray;

function clearAngle() {
  selectedUnit1.value = massFlowInitValue1;
  selectedUnit2.value = massFlowInitValue2;
  originalUnit1 = massFlowInitValue1;
  originalUnit2 = massFlowInitValue2;
}

let option = "";
for(let i=0;i<massFlowArray.length;i++){
  if (i === parseInt(massFlowInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + massFlowArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + massFlowArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<massFlowArray.length;j++){
  if (j === parseInt(massFlowInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + massFlowArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + massFlowArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;
