const specificHeatArray = ['BTU (IT)/Pound/C° (BTU/lb·°C)',
  'BTU (IT)/Pound/F° (BTU/lb·°F)', 'BTU (IT)/Pound/K (BTU/lb·°K)',
  'BTU (IT)/Pound/R (BTU/lb·°R)', 'BTU (TH)/Pound/C° (BTU/lb·°C)',
  'BTU (TH)/Pound/F° (BTU/lb·°F)', 'BTU (TH)/Pound/K (BTU/lb·°K)',
  'BTU (TH)/Pound/R (BTU/lb·°R)',   'Calorie (IT)/Gram/C° (cal/g·°C)',
  'Calorie (IT)/Gram/K (cal/g·°K)', 'Calorie (IT)/Ounce/F° (cal/oz·°F)',
  'Calorie (IT)/Ounce/R (cal/oz·°R)', 'Calorie (IT)/Pound/F° (cal/lb·°F)',
  'Calorie (IT)/Pound/R (cal/lb·°R)', 'Calorie (TH)/Gram/K (cal/g·°K)',
  'Calorie (TH)/Ounce/F° (cal/oz·°F)', 'Calorie (TH)/Ounce/R (cal/oz·°R)',
  'Calorie (TH)/Pound/F° (cal/lb·°F)', 'Calorie (TH)/Pound/R (cal/lb·°R)',
  'Joule/Gram/C° (J/g·°C)', 'Joule/Gram/K (J/g·°K)', 'Joule/Kilogram/C° (J/kg·°C)',
  'Joule/Kilogram/K (J/kg·°K)', 'Joule/Ounce/F° (J/oz·°F)', 'Joule/Ounce/R (J/oz·°R)',
  'Joule/Pound/F° (J/lb·°F)', 'Joule/Pound/R (J/lb·°R)',
  'Kilocalorie (IT)/Kilogram/C° (kcal/kg·°C)', 'Kilocalorie (IT)/Kilogram/K (kcal/kg·°K)',
  'Kilocalorie (IT)/Ounce/F° (kcal/oz·°F)', 'Kilocalorie (IT)/Ounce/R (kcal/oz·°R)',
  'Kilocalorie (IT)/Pound/F° (kcal/lb·°F)', 'Kilocalorie (IT)/Pound/R (kcal/lb·°R)',
  'Kilocalorie (TH)/Kilogram/C° (kcal/kg·°C)', 'Kilocalorie (TH)/Kilogram/K (kcal/kg·°K)',
  'Kilocalorie (TH)/Ounce/F° (kcal/oz·°F)', 'Kilocalorie (TH)/Ounce/R (kcal/oz·°R)',
  'Kilocalorie (TH)/Pound/F° (kcal/lb·°F)', 'Kilocalorie (TH)/Pound/R (kcal/lb·°R)',
  'Kilogram Force Meter/Gram/C° (kgF·m/g·°C)', 'Kilogram Force Meter/Gram/K (kgF·m/g·°K)',
  'Kilogram Force Meter/Kilogram/C° (kgF·m/kg·°C)', 'Kilogram Force Meter/Kilogram/K (kgF·m/kg·°K)',
  'Kilojoule/Gram/C° (kJ/g·°C)', 'Kilojoule/Gram/K (kJ/g·°K)',
  'Kilojoule/Kilogram/C° (kJ/kg·°C)', 'Kilojoule/Kilogram/K (kJ/kg·°K)',
  'Kilojoule/Ounce/F° (kJ/oz·°F)', 'Kilojoule/Ounce/R (kJ/oz·°R)',
  'Kilojoule/Pound/F° (kJ/lb·°F)', 'Kilojoule/Pound/R (kJ/lb·°R)',
  'Pound Force Foot/Pound/F° (lbF·ft/lb·°F)', 'Pound Force Foot/Pound/R (lbF·ft/lb·°R)'];

const specificHeatInitValue1 = "22";
const specificHeatInitValue2 = "21";

//based on 1 joule/kilogram K
const specificHeatConvArray = [0.0004299226139, 0.0002388458966, 0.0004299226139, 0.0002388458966,
  0.0004302103106, 0.0002390057281, 0.0004302103106, 0.0002390057281, 0.0002388458966, 0.0002388458966,
  0.003761759594, 0.003761759594, 0.06018815351, 0.06018815351, 0.0002390057361, 0.003764277024, 0.003764277024,
  0.06022843239, 0.06022843239, 0.001, 0.001, 1, 1, 0.01574973507, 0.01574973507, 0.2519957611, 0.2519957611,
  0.0002388458966, 0.0002388458966, 3.761759594e-6, 0.000003761759594, 0.00006018815351, 0.00006018815351,
  0.0002390057361, 0.0002390057361, 0.000003764277024, 0.000003764277024, 0.00006022843239, 0.00006022843239,
  0.0001019716213, 0.0001019716213, 0.0001019716213, 0.0001019716213, 0.000001, 0.000001, 0.001, 0.001,
  0.00001574973507, 0.00001574973507, 0.0002519957611, 0.0002519957611, 0.185862536, 0.185862536];

window.convArray = specificHeatConvArray;

function clearAngle() {
  selectedUnit1.value = specificHeatInitValue1;
  selectedUnit2.value = specificHeatInitValue2;
  originalUnit1 = specificHeatInitValue1;
  originalUnit2 = specificHeatInitValue2;
}

let option = "";
for(let i=0;i<specificHeatArray.length;i++){
  if (i === parseInt(specificHeatInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + specificHeatArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + specificHeatArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<specificHeatArray.length;j++){
  if (j === parseInt(specificHeatInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + specificHeatArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + specificHeatArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;