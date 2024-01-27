const surfChDenArray = ['Abcoulomb/Square Meter (abC/m²)', 'Abcoulomb/Square Centimeter (abC/cm²)',
  'Abcoulomb/Square Millimeter (abC/mm²)', 'Abcoulomb/Square Micrometer (abC/µm²)',
  'Abcoulomb/Square Yard (abC/yd²)', 'Abcoulomb/Square Foot (abC/ft²)', 'Abcoulomb/Square Inch (abC/in²)',
  'Ampere Hour/Square Meter (A·h/m²)', 'Ampere Hour/Square Centimeter (A·h/cm²)',
  'Ampere Hour/Square Millimeter (A·h/mm²)', 'Ampere Hour/Square Micrometer (A·h/µm²)',
  'Ampere Hour/Square Yard (A·h/yd²)', 'Ampere Hour/Square Foot (A·h/ft²)', 'Ampere Hour/Square Inch (A·h/in²)',
  'Ampere Minute/Square Meter (A·min/m²)', 'Ampere Minute/Square Centimeter (A·min/cm²)',
  'Ampere Minute/Square Millimeter (A·min/mm²)', 'Ampere Minute/Square Micrometer (A·min/µm²)',
  'Ampere Minute/Square Yard (A·min/yd²)', 'Ampere Minute/Square Foot (A·min/ft²)',
  'Ampere Minute/Square Inch (A·min/in²)', 'Ampere Second/Square Meter (A·s/m²)',
  'Ampere Second/Square Centimeter (A·s/cm²)', 'Ampere Second/Square Millimeter (A·s/mm²)',
  'Ampere Second/Square Micrometer (A·s/µm²)', 'Ampere Second/Square Yard (A·s/yd²)',
  'Ampere Second/Square Foot (A·s/ft²)', 'Ampere Second/Square Inch (A·s/in²)', 'Coulomb/Square Meter (C/m²)',
  'Coulomb/Square Centimeter (C/cm²)', 'Coulomb/Square Millimeter (C/mm²)', 'Coulomb/Square Micrometer (C/µm²)',
  'Coulomb/Square Yard (C/yd²)', 'Coulomb/Square Foot (C/ft²)', 'Coulomb/Square Inch (C/in²)',
  'Elementary Charge/Square Meter (e/m²)', 'Elementary Charge/Square Centimeter (e/cm²)',
  'Elementary Charge/Square Millimeter (e/mm²)', 'Elementary Charge/Square Micrometer (e/µm²)',
  'Elementary Charge/Square Yard (e/yd²)', 'Elementary Charge/Square Foot (e/ft²)',
  'Elementary Charge/Square Inch (e/in²)', 'EMU of Charge/Square Meter (EMU/m²)',
  'EMU of Charge/Square Centimeter (EMU/cm²)', 'EMU of Charge/Square Millimeter (EMU/mm²)',
  'EMU of Charge/Square Micrometer (EMU/µm²)', 'EMU of Charge/Square Yard (EMU/yd²)',
  'EMU of Charge/Square Foot (EMU/ft²)', 'EMU of Charge/Square Inch (EMU/in²)',
  'ESU of Charge/Square Meter (ESU/m²)', 'ESU of Charge/Square Centimeter (ESU/cm²)',
  'ESU of Charge/Square Millimeter (ESU/mm²)', 'ESU of Charge/Square Micrometer (ESU/µm²)',
  'ESU of Charge/Square Yard (ESU/yd²)', 'ESU of Charge/Square Foot (ESU/ft²)',
  'ESU of Charge/Square Inch (ESU/in²)', 'Faraday (C12)/Square Meter (F/m²)',
  'Faraday (C12)/Square Centimeter (F/cm²)', 'Faraday (C12)/Square Millimeter (F/mm²)',
  'Faraday (C12)/Square Micrometer (F/µm²)', 'Faraday (C12)/Square Yard (F/yd²)',
  'Faraday (C12)/Square Foot (F/ft²)', 'Faraday (C12)/Square Inch (F/in²)', 'Kilocoulomb/Square Meter (kC/m²)',
  'Kilocoulomb/Square Centimeter (kC/cm²)', 'Kilocoulomb/Square Millimeter (kC/mm²)',
  'Kilocoulomb/Square Micrometer (kC/µm²)', 'Kilocoulomb/Square Yard (kC/yd²)', 'Kilocoulomb/Square Foot (kC/ft²)',
  'Kilocoulomb/Square Inch (kC/in²)', 'Megacoulomb/Square Meter (MC/m²)', 'Megacoulomb/Square Centimeter (MC/cm²)',
  'Megacoulomb/Square Millimeter (MC/mm²)', 'Megacoulomb/Square Micrometer (MC/µm²)',
  'Megacoulomb/Square Yard (MC/yd²)', 'Megacoulomb/Square Foot (MC/ft²)', 'Megacoulomb/Square Inch (MC/in²)',
  'Microcoulomb/Square Meter (µC/m²)', 'Microcoulomb/Square Centimeter (µC/cm²)',
  'Microcoulomb/Square Millimeter (µC/mm²)', 'Microcoulomb/Square Micrometer (µC/µm²)',
  'Microcoulomb/Square Yard (µC/yd²)', 'Microcoulomb/Square Foot (µC/ft²)', 'Microcoulomb/Square Inch (µC/in²)',
  'Millicoulomb/Square Meter (mC/m²)', 'Millicoulomb/Square Centimeter (mC/cm²)',
  'Millicoulomb/Square Millimeter (mC/mm²)', 'Millicoulomb/Square Micrometer (mC/µm²)',
  'Millicoulomb/Square Yard (mC/yd²)', 'Millicoulomb/Square Foot (mC/ft²)', 'Millicoulomb/Square Inch (mC/in²)',
  'Statcoulomb /Square Meter (stC/m²)', 'Statcoulomb /Square Centimeter (stC/cm²)',
  'Statcoulomb /Square Millimeter (stC/mm²)', 'Statcoulomb /Square Micrometer (stC/µm²)',
  'Statcoulomb /Square Yard (stC/yd²)', 'Statcoulomb /Square Foot (stC/ft²)', 'Statcoulomb /Square Inch (stC/in²)'];

const surfChDenInitValue1 = "28";
const surfChDenInitValue2 = "7";

//based on 1 coulomb/square meter
const surfChDenConvArray = [0.1, 0.00001, 1e-7, 1e-13, 0.083612736, 0.009290304, 0.000064516,
  0.0002777777778, 2.777777778e-8, 2.777777778e-10, 2.777777778e-16, 0.0002322576, 0.0000258064, 1.792111111e-7,
  0.01666666667, 0.000001666666667, 1.666666667e-8, 1.666666667e-14, 0.013935456, 0.001548384, 0.00001075266667,
  1, 0.0001, 0.000001, 1e-12, 0.83612736, 0.09290304, 0.00064516, 1, 0.0001, 0.000001, 1e-12, 0.83612736,
  0.09290304, 0.00064516, 6.241509074e18, 6.241509074e14, 6.241509074e12, 6241509.074, 5.218696505e18,
  5.798551672e17, 4.026771994e15, 0.1, 0.00001, 1e-7, 1e-13, 0.083612736, 0.009290304, 0.000064516, 2.994011976e9,
  299401.1976, 2994.011976, 0.002994011976, 2.503375329e9, 2.781528144e8, 1.931616766e6, 0.00001036427214,
  1.036427214e-9, 1.036427214e-11, 1.036427214e-17, 8.665851503e-6, 9.628723892e-7, 6.686613814e-9, 0.001, 1e-7,
  1e-9, 1e-15, 0.00083612736, 0.00009290304, 6.4516e-7, 0.000001, 1e-10, 1e-12, 1e-18, 8.3612736e-7, 9.290304e-8,
  6.4516e-10, 1000000, 100, 1, 0.000001, 836127.36, 92903.04, 645.16, 1000, 0.1, 0.001, 1e-9, 836.12736, 92.90304,
  0.64516, 2994011976, 299401.1976, 2994.011976, 0.002994011976, 2503375329, 278152814.4, 1931616.766];

window.convArray = surfChDenConvArray;

function clearAngle() {
  selectedUnit1.value = surfChDenInitValue1;
  selectedUnit2.value = surfChDenInitValue2;
  originalUnit1 = surfChDenInitValue1;
  originalUnit2 = surfChDenInitValue2;
}

let option = "";
for(let i=0;i<surfChDenArray.length;i++){
  if (i === parseInt(surfChDenInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + surfChDenArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + surfChDenArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<surfChDenArray.length;j++){
  if (j === parseInt(surfChDenInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + surfChDenArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + surfChDenArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;