const linCuDenArray = ['Abampere/Meter (abA/m)', 'Abampere/Centimeter (abA/cm)',
  'Abampere/Millimeter (abA/mm)', 'Abampere/Micrometer (abA/µm)', 'Abampere/Nanometer (abA/nm)',
  'Abampere/Yard (abA/yd)', 'Abampere/Foot (abA/ft)', 'Abampere/Inch (abA/in)', 'Ampere/Meter (A/m)',
  'Ampere/Centimeter (A/cm)', 'Ampere/Millimeter (A/mm)', 'Ampere/Micrometer (A/µm)', 'Ampere/Nanometer (A/nm)',
  'Ampere/Yard (A/yd)', 'Ampere/Foot (A/ft)', 'Ampere/Inch (A/in)', 'Biot/Meter (Bi/m)',
  'Biot/Centimeter (Bi/cm)', 'Biot/Millimeter (Bi/mm)', 'Biot/Micrometer (Bi/µm)', 'Biot/Nanometer (Bi/nm)',
  'Biot/Yard (Bi/yd)', 'Biot/Foot (Bi/ft)', 'Biot/Inch (Bi/in)', 'Kiloampere/Meter (kA/m)',
  'Kiloampere/Centimeter (kA/cm)', 'Kiloampere/Millimeter (kA/mm)', 'Kiloampere/Micrometer (kA/µm)',
  'Kiloampere/Nanometer (kA/nm)', 'Kiloampere/Yard (kA/yd)', 'Kiloampere/Foot (kA/ft)',
  'Kiloampere/Inch (kA/in)', 'Megaampere/Meter (MA/m)', 'Megaampere/Centimeter (MA/cm)',
  'Megaampere/Millimeter (MA/mm)', 'Megaampere/Micrometer (MA/µm)', 'Megaampere/Nanometer (MA/nm)',
  'Megaampere/Yard (MA/yd)', 'Megaampere/Foot (MA/ft)', 'Megaampere/Inch (MA/in)', 'Microampere/Meter (µA/m)',
  'Microampere/Centimeter (µA/cm)', 'Microampere/Millimeter (µA/mm)', 'Microampere/Micrometer (µA/µm)',
  'Microampere/Nanometer (µA/nm)', 'Microampere/Yard (µA/yd)', 'Microampere/Foot (µA/ft)',
  'Microampere/Inch (µA/in)', 'Milliampere/Meter (mA/m)', 'Milliampere/Centimeter (mA/cm)',
  'Milliampere/Millimeter (mA/mm)', 'Milliampere/Micrometer (mA/µm)', 'Milliampere/Nanometer (mA/nm)',
  'Milliampere/Yard (mA/yd)', 'Milliampere/Foot (mA/ft)', 'Milliampere/Inch (mA/in)',
  'Statampere/Meter (stA/m)', 'Statampere/Centimeter (stA/cm)', 'Statampere/Millimeter (stA/mm)',
  'Statampere/Micrometer (stA/µm)', 'Statampere/Nanometer (stA/nm)', 'Statampere/Yard (stA/yd)',
  'Statampere/Foot (stA/ft)', 'Statampere/Inch (stA/in)'];

const linCuDenInitValue1 = "8";
const linCuDenInitValue2 = "9";

//based on 1 ampere/meter
const linCuDenConvArray = [0.1, 0.001, 0.0001, 1e-7, 1e-10, 0.09144, 0.03048, 0.00254, 1, 0.01,
  0.001, 0.000001, 1e-9, 0.9144, 0.3048, 0.0254, 0.1, 0.001, 0.0001, 1e-7, 1e-10, 0.09144, 0.03048, 0.00254,
  0.000001, 1e-8, 1e-9, 1e-12, 1e-15, 9.144e-7, 3.048e-7, 2.54e-8, 0.001, 0.00001, 0.000001, 1e-9, 1e-12,
  0.0009144, 0.0003048, 0.0000254, 1000, 10, 1, 0.001, 0.000001, 914.4, 304.8, 25.4, 1000000, 10000, 1000, 1,
  0.001, 914400, 304800, 25400, 2997924537, 29979245.37, 2997924.537, 2997.924537, 2.997924537,
  2.7413021965e9, 9.1376739883e8, 7.6147283236e7];

window.convArray = linCuDenConvArray;

function clearAngle() {
  selectedUnit1.value = linCuDenInitValue1;
  selectedUnit2.value = linCuDenInitValue2;
  originalUnit1 = linCuDenInitValue1;
  originalUnit2 = linCuDenInitValue2;
}

let option = "";
for(let i=0;i<linCuDenArray.length;i++){
  if (i === parseInt(linCuDenInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + linCuDenArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + linCuDenArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<linCuDenArray.length;j++){
  if (j === parseInt(linCuDenInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + linCuDenArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + linCuDenArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;