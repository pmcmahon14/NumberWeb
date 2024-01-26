const magFluxDenArray = ['Gamma (Γ)', 'Gauss (G)', 'Tesla (T)', 'Millitesla (mT)', 'Microtesla (µT)',
  'Line/Square Kilometer (line/km²)', 'Line/Square Meter (line/m²)', 'Line/Square Decimeter (line/dm²)',
  'Line/Square Centimeter (line/cm²)', 'Line/Square Millimeter (line/mm²)', 'Line/Square Micrometer (line/µm²)',
  'Line/Square Nanometer (line/nm²)', 'Line/Square Mile (line/mi²)', 'Line/Square Yard (line/yd²)',
  'Line/Square Foot (line/ft²)', 'Line/Square Inch (line/in²)', 'Maxwell/Square Kilometer (Mx/km²)',
  'Maxwell/Square Meter (Mx/dm²)', 'Maxwell/Square Decimeter (Mx/dm²)', 'Maxwell/Square Centimeter (Mx/cm²)',
  'Maxwell/Square Millimeter (Mx/mm²)', 'Maxwell/Square Micrometer (Mx/µm²)', 'Maxwell/Square Nanometer (Mx/nm²)',
  'Maxwell/Square Mile (Mx/mi²)', 'Maxwell/Square Yard (Mx/yd²)', 'Maxwell/Square Foot (Mx/ft²)',
  'Maxwell/Square Inch (Mx/in²)', 'Microweber/Square Kilometer (µW/km²)', 'Microweber/Square Meter (µW/m²)',
  'Microweber/Square Decimeter (µW/dm²)', 'Microweber/Square Centimeter (µW/cm²)',
  'Microweber/Square Millimeter (µW/mm²)', 'Microweber/Square Micrometer (µW/µm²)',
  'Microweber/Square Nanometer (µW/nm²)', 'Microweber/Square Mile (µW/mi²)', 'Microweber/Square Yard (µW/yd²)',
  'Microweber/Square Foot (µW/ft²)', 'Microweber/Square Inch (µW/in²)', 'Milliweber/Square Kilometer (mW/km²)',
  'Milliweber/Square Meter (mW/m²)', 'Milliweber/Square Decimeter (mW/dm²)',
  'Milliweber/Square Centimeter (mW/cm²)', 'Milliweber/Square Millimeter (mW/mm²)',
  'Milliweber/Square Micrometer (mW/µm²)', 'Milliweber/Square Nanometer (mW/nm²)',
  'Milliweber/Square Mile (mW/mi²)', 'Milliweber/Square Yard (mW/yd²)', 'Milliweber/Square Foot (mW/ft²)',
  'Milliweber/Square Inch (mW/in²)', 'Unit Pole/Square Kilometer (P/km²)', 'Unit Pole/Square Meter (P/m²)',
  'Unit Pole/Square Decimeter (P/dm²)', 'Unit Pole/Square Centimeter (P/cm²)',
  'Unit Pole/Square Millimeter (P/mm²)', 'Unit Pole/Square Micrometer (P/µm²)',
  'Unit Pole/Square Nanometer (P/nm²)', 'Unit Pole/Square Mile (P/mi²)', 'Unit Pole/Square Yard (P/yd²)',
  'Unit Pole/Square Foot (P/ft²)', 'Unit Pole/Square Inch (P/in²)', 'Weber/Square Kilometer (W/km²)',
  'Weber/Square Meter (W/m²)', 'Weber/Square Decimeter (W/dm²)', 'Weber/Square Centimeter (W/cm²)',
  'Weber/Square Millimeter (W/mm²)', 'Weber/Square Micrometer (W/µm²)', 'Weber/Square Nanometer (W/nm²)',
  'Weber/Square Mile (W/mi²)', 'Weber/Square Yard (W/yd²)', 'Weber/Square Foot (W/ft²)',
  'Weber/Square Inch (W/in²)'];

const magFluxDenInitValue1 = "2";
const magFluxDenInitValue2 = "1";

//based on 1 weber
const magFluxDenConvArray = [1e9, 10000, 1, 1000, 1000000,
  1e14, 1e8, 1000000, 10000, 100, 0.0001, 1e-10, 2.589988110e14, 83612736, 9290304, 64516,
  1e14, 1e8, 1000000, 10000, 100, 0.0001, 1e-10, 2.589988110e14, 83612736, 9290304, 64516,
  1e12, 1000000, 10000, 100, 1, 0.000001, 1e-12, 2.589988110e12, 836127.36, 92903.04, 645.16,
  1e9, 1000, 10, 0.1, 0.001, 1e-9, 1e-15, 2.589988110e9, 836.12736, 92.90304, 0.64516,
  7.957747155e12, 7957747.155, 79577.47155, 795.7747155, 7.957747155, 7.957747155e-6, 7.957747155e-12,
  2.061047052e13, 6653690.12, 739298.9, 5134.02,
  1000000, 1, 0.01, 0.0001, 0.000001, 1e-12, 1e-18, 2589988.11, 0.83612736, 0.09290304, 0.00064516];

window.convArray = magFluxDenConvArray;

function clearAngle() {
  selectedUnit1.value = magFluxDenInitValue1;
  selectedUnit2.value = magFluxDenInitValue2;
  originalUnit1 = magFluxDenInitValue1;
  originalUnit2 = magFluxDenInitValue2;
}

let option = "";
for(let i=0;i<magFluxDenArray.length;i++){
  if (i === parseInt(magFluxDenInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + magFluxDenArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + magFluxDenArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<magFluxDenArray.length;j++){
  if (j === parseInt(magFluxDenInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + magFluxDenArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + magFluxDenArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;