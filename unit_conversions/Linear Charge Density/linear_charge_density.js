const linChDenArray = ['Ampere Hour/Kilometer (A·h/km)', 'Ampere Hour/Meter (A·h/m)',
  'Ampere Hour/Centimeter (A·h/cm)', 'Ampere Hour/Millimeter (A·h/mm)', 'Ampere Hour/Micrometer (A·h/µm)',
  'Ampere Hour/Nanometer (A·h/nm)', 'Ampere Hour/Yard (A·h/yd)', 'Ampere Hour/Foot (A·h/ft)',
  'Ampere Hour/Inch (A·h/in)', 'Ampere Second/Kilometer (A·s/km)', 'Ampere Second/Meter (A·s/m)',
  'Ampere Second/Centimeter (A·s/cm)', 'Ampere Second/Millimeter (A·s/mm)', 'Ampere Second/Micrometer (A·s/µm)',
  'Ampere Second/Nanometer (A·s/nm)', 'Ampere Second/Yard (A·s/yd)', 'Ampere Second/Foot (A·s/ft)',
  'Ampere Second/Inch (A·s/in)', 'Coulomb/Kilometer (C/km)', 'Coulomb/Meter (C/m)', 'Coulomb/Centimeter (C/cm)',
  'Coulomb/Millimeter (C/mm)', 'Coulomb/Micrometer (C/µm)', 'Coulomb/Nanometer (C/nm)', 'Coulomb/Yard (C/yd)',
  'Coulomb/Foot (C/ft)', 'Coulomb/Inch (C/in)', 'Elementary Charge/Kilometer (e/km)',
  'Elementary Charge/Meter (e/m)', 'Elementary Charge/Centimeter (e/cm)', 'Elementary Charge/Millimeter (e/mm)',
  'Elementary Charge/Micrometer (e/µm)', 'Elementary Charge/Nanometer (e/nm)', 'Elementary Charge/Yard (e/yd)',
  'Elementary Charge/Foot (e/ft)', 'Elementary Charge/Inch (e/in)', 'ESU/Kilometer (ESU/km)',
  'ESU/Meter (ESU/m)', 'ESU/Centimeter (ESU/cm)', 'ESU/Millimeter (ESU/mm)', 'ESU/Micrometer (ESU/µm)',
  'ESU/Nanometer (ESU/nm)', 'ESU/Yard (ESU/yd)', 'ESU/Foot (ESU/ft)', 'ESU/Inch (ESU/in)',
  'Faraday (C12)/Kilometer (F/km)', 'Faraday (C12)/Meter (F/m)', 'Faraday (C12)/Centimeter (F/cm)',
  'Faraday (C12)/Millimeter (F/mm)', 'Faraday (C12)/Micrometer (F/µm)', 'Faraday (C12)/Nanometer (F/nm)',
  'Faraday (C12)/Yard (F/yd)', 'Faraday (C12)/Foot (F/ft)', 'Faraday (C12)/Inch (F/in)',
  'Franklin/Kilometer (Fr/km)', 'Franklin/Meter (Fr/m)', 'Franklin/Centimeter (Fr/cm)',
  'Franklin/Millimeter (Fr/mm)', 'Franklin/Micrometer (Fr/µm)', 'Franklin/Nanometer (Fr/nm)',
  'Franklin/Yard (Fr/yd)', 'Franklin/Foot (Fr/ft)', 'Franklin/Inch (Fr/in)', 'Kilocoulomb/Kilometer (kC/km)',
  'Kilocoulomb/Meter (kC/m)', 'Kilocoulomb/Centimeter (kC/cm)', 'Kilocoulomb/Millimeter (kC/mm)',
  'Kilocoulomb/Micrometer (kC/µm)', 'Kilocoulomb/Nanometer (kC/nm)', 'Kilocoulomb/Yard (kC/yd)',
  'Kilocoulomb/Foot (kC/ft)', 'Kilocoulomb/Inch (kC/in)', 'Megacoulomb/Kilometer (MC/km)',
  'Megacoulomb/Meter (MC/m)', 'Megacoulomb/Centimeter (MC/cm)', 'Megacoulomb/Millimeter (MC/mm)',
  'Megacoulomb/Micrometer (MC/µm)', 'Megacoulomb/Nanometer (MC/nm)', 'Megacoulomb/Yard (MC/yd)',
  'Megacoulomb/Foot (MC/ft)', 'Megacoulomb/Inch (MC/in)', 'Microcoulomb/Kilometer (µC/km)',
  'Microcoulomb/Meter (µC/m)', 'Microcoulomb/Centimeter (µC/cm)', 'Microcoulomb/Millimeter (µC/mm)',
  'Microcoulomb/Micrometer (µC/µm)', 'Microcoulomb/Nanometer (µC/nm)', 'Microcoulomb/Yard (µC/yd)',
  'Microcoulomb/Foot (µC/ft)', 'Microcoulomb/Inch (µC/in)', 'Millicoulomb/Kilometer (mC/km)',
  'Millicoulomb/Meter (mC/m)', 'Millicoulomb/Centimeter (mC/cm)', 'Millicoulomb/Millimeter (mC/mm)',
  'Millicoulomb/Micrometer (mC/µm)', 'Millicoulomb/Nanometer (mC/nm)', 'Millicoulomb/Yard (mC/yd)',
  'Millicoulomb/Foot (mC/ft)', 'Millicoulomb/Inch (mC/in)', 'Nanocoulomb/Kilometer (nC/km)',
  'Nanocoulomb/Meter (nC/m)', 'Nanocoulomb/Centimeter (nC/cm)', 'Nanocoulomb/Millimeter (nC/mm)',
  'Nanocoulomb/Micrometer (nC/µm)', 'Nanocoulomb/Nanometer (nC/nm)', 'Nanocoulomb/Yard (nC/yd)',
  'Nanocoulomb/Foot (nC/ft)', 'Nanocoulomb/Inch (nC/in)'];

const linChDenInitValue1 = "19";
const linChDenInitValue2 = "1";

//based on 1 coulomb/meter
const linChDenConvArray = [0.27777777778, 0.00027777777778, 2.7777777778e-6,
  2.7777777778e-7, 2.7777777778e-10, 2.7777777778e-13, 0.000254, 0.000084666666667,
  7.0555555556e-6, 1000, 1, 0.01, 0.001, 0.000001, 1e-9, 0.9144, 0.3048, 0.0254, 1000, 1, 0.01, 0.001,
  0.000001, 1e-9, 0.9144, 0.3048, 0.0254, 6.2415090745e+21, 6.2415090745e18, 6.2415090745e16,
  6.2415090745e15, 62415090745, 6241509074.5, 5.7072358977e18, 1.9024119659e18,
  1.585343305e17, 2.99401197605e12, 2994011976.05, 29940119.7605, 2994011.97605, 2994.01197605,
  2.99401197605, 2.7377245509e9, 9.125748503e8, 7.6047904192e7, 0.01036427214, 1.036427214012e-5,
  1.036427214012e-7, 1.036427214012e-8, 1.036427214012e-11, 1.036427214012e-14, 9.4770904449e-6,
  3.1590301483e-6, 2.6325251236e-7, 2994011976, 2994011976, 29940119.76, 2994011.976,
  2994.011976, 2.994011976, 2.7377245509e9, 9.125748503e8, 7.6047904192e7, 1, 0.001, 0.00001, 0.000001,
  1e-9, 1e-12, 0.0009144, 0.0003048, 0.0000254, 0.001, 0.000001, 1e-8, 1e-9, 1e-12, 1e-15, 9.144e-7, 3.048e-7,
  2.54e-8, 1000000000, 1000000, 10000, 1000, 1, 0.001, 914400, 304800, 25400, 1000000, 1000, 10, 1, 0.001,
  0.000001, 914.4, 304.8, 25.4, 1e12, 1e9, 10000000, 1000000, 1000, 1, 9.144e8, 304800000, 25400000];

window.convArray = linChDenConvArray;

function clearAngle() {
  selectedUnit1.value = linChDenInitValue1;
  selectedUnit2.value = linChDenInitValue2;
  originalUnit1 = linChDenInitValue1;
  originalUnit2 = linChDenInitValue2;
}

let option = "";
for(let i=0;i<linChDenArray.length;i++){
  if (i === parseInt(linChDenInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + linChDenArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + linChDenArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<linChDenArray.length;j++){
  if (j === parseInt(linChDenInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + linChDenArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + linChDenArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;