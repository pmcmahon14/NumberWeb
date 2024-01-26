const massFluxDensityArray = ['Gram/Hour/Meter²(g/hr/m²)',
  'Gram/Hour/Centimeter²(g/hr/cm²)', 'Gram/Hour/Foot²(g/hr/ft²)',
  'Gram/Minute/Meter²(g/min/m²)', 'Gram/Minute/Centimeter²(g/min/cm²)',
  'Gram/Minute/Foot²(g/min/ft²)', 'Gram/Second/Meter²(g/s/m²)',
  'Gram/Second/Centimeter²(g/s/cm²)', 'Gram/Second/Foot²(g/s/ft²)',
  'Kilogram/Hour/Meter²(kg/hr/m²)', 'Kilogram/Hour/Centimeter²(kg/hr/cm²)',
  'Kilogram/Hour/Foot²(kg/hr/ft²)', 'Kilogram/Minute/Meter²(kg/min/m²)',
  'Kilogram/Minute/Centimeter²(kg/min/cm²)', 'Kilogram/Minute/Foot²(kg/min/ft²)',
  'Kilogram/Second/Meter²(kg/s/m²)', 'Kilogram/Second/Centimeter²(kg/s/cm²)',
  'Kilogram/Second/Foot²(kg/s/ft²)', 'Pound/Hour/Meter²(lb/hr/m²)',
  'Pound/Hour/Centimeter²(lb/hr/cm²)', 'Pound/Hour/Foot²(lb/hr/ft²)',
  'Pound/Minute/Meter²(lb/min/m²)', 'Pound/Minute/Centimeter²(lb/min/cm²)',
  'Pound/Minute/Foot²(lb/min/ft²)', 'Pound/Second/Meter²(lb/s/m²)',
  'Pound/Second/Centimeter²(lb/s/cm²)', 'Pound/Second/Foot²(lb/s/ft²)'];

const massFluxDensityInitValue1 = "6";
const massFluxDensityInitValue2 = "0";

//based on 1 gram/second/Meter²
const massFluxDensityConvArray = [3600, 0.36, 334.45, 60, 0.006, 5.57, 1, 0.0001, 0.09290304, 3.6,
  0.00036, 0.334450944, 0.06, 0.000006, 0.0055741824, 0.001, 1e-7, 9.290304e-5, 7.94, 0.0007936641439, 0.737338117,
  0.1322773573, 1.322773573e-5, 0.01228896862, 0.002204622622, 2.2046226218e-7, 0.0002048161436];

window.convArray = massFluxDensityConvArray;

function clearAngle() {
  selectedUnit1.value = massFluxDensityInitValue1;
  selectedUnit2.value = massFluxDensityInitValue2;
  originalUnit1 = massFluxDensityInitValue1;
  originalUnit2 = massFluxDensityInitValue2;
}

let option = "";
for(let i=0;i<massFluxDensityArray.length;i++){
  if (i === parseInt(massFluxDensityInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + massFluxDensityArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + massFluxDensityArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<massFluxDensityArray.length;j++){
  if (j === parseInt(massFluxDensityInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + massFluxDensityArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + massFluxDensityArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;