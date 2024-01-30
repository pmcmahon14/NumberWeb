const volChDenArray = ['Abcoulomb/Cubic Meter (abC/m³)', 'Abcoulomb/Cubic Centimeter (abC/cm³)',
  'Abcoulomb/Liter (abC/l)', 'Abcoulomb/Milliliter (abC/ml)', 'Abcoulomb/Microliter (abC/µl)',
  'Abcoulomb/Cubic Yard (abC/yd³)', 'Abcoulomb/Cubic Foot (abC/ft³)', 'Abcoulomb/Cubic Inch (abC/in³)',
  'Ampere Hour/Cubic Meter (A·h/m³)', 'Ampere Hour/Cubic Centimeter (A·h/cm³)', 'Ampere Hour/Liter (A·h/l)',
  'Ampere Hour/Milliliter (A·h/ml)', 'Ampere Hour/Microliter (A·h/µl)', 'Ampere Hour/Cubic Yard (A·h/yd³)',
  'Ampere Hour/Cubic Foot (A·h/ft³)', 'Ampere Hour/Cubic Inch (A·h/in³)', 'Ampere Minute/Cubic Meter (A·m/m³)',
  'Ampere Minute/Cubic Centimeter (A·m/cm³)', 'Ampere Minute/Liter (A·m/l)', 'Ampere Minute/Milliliter (A·m/ml)',
  'Ampere Minute/Microliter (A·m/µl)', 'Ampere Minute/Cubic Yard (A·m/yd³)', 'Ampere Minute/Cubic Foot (A·m/ft³)',
  'Ampere Minute/Cubic Inch (A·m/in³)', 'Ampere Second/Cubic Meter (A·s/m³)',
  'Ampere Second/Cubic Centimeter (A·s/cm³)', 'Ampere Second/Liter (A·s/l)', 'Ampere Second/Milliliter (A·s/ml)',
  'Ampere Second/Microliter (A·s/µl)', 'Ampere Second/Cubic Yard (A·s/yd³)', 'Ampere Second/Cubic Foot (A·s/ft³)',
  'Ampere Second/Cubic Inch (A·s/in³)', 'Coulomb/Cubic Meter (C/m³)', 'Coulomb/Cubic Centimeter (C/cm³)',
  'Coulomb/Liter (C/l)', 'Coulomb/Milliliter (C/ml)', 'Coulomb/Microliter (C/µl)', 'Coulomb/Cubic Yard (C/yd³)',
  'Coulomb/Cubic Foot (C/ft³)', 'Coulomb/Cubic Inch (C/in³)', 'ESU of Charge/Cubic Meter (ESU/m³)',
  'ESU of Charge/Cubic Centimeter (ESU/cm³)', 'ESU of Charge/Liter (ESU/l)', 'ESU of Charge/Milliliter (ESU/ml)',
  'ESU of Charge/Microliter (ESU/µl)', 'ESU of Charge/Cubic Yard (ESU/yd³)', 'ESU of Charge/Cubic Foot (ESU/ft³)',
  'ESU of Charge/Cubic Inch (ESU/in³)', 'Megacoulomb/Cubic Meter (MC/m³)', 'Megacoulomb/Cubic Centimeter (MC/cm³)',
  'Megacoulomb/Liter (MC/l)', 'Megacoulomb/Milliliter (MC/ml)', 'Megacoulomb/Microliter (MC/µl)',
  'Megacoulomb/Cubic Yard (MC/yd³)', 'Megacoulomb/Cubic Foot (MC/ft³)', 'Megacoulomb/Cubic Inch (MC/in³)',
  'Kilocoulomb/Cubic Meter (kC/m³)', 'Kilocoulomb/Cubic Centimeter (kC/cm³)', 'Kilocoulomb/Liter (kC/l)',
  'Kilocoulomb/Milliliter (kC/ml)', 'Kilocoulomb/Microliter (kC/µl)', 'Kilocoulomb/Cubic Yard (kC/yd³)',
  'Kilocoulomb/Cubic Foot (kC/ft³)', 'Kilocoulomb/Cubic Inch (kC/in³)', 'Millicoulomb/Cubic Meter (mC/m³)',
  'Millicoulomb/Cubic Centimeter (mC/cm³)', 'Millicoulomb/Liter (mC/l)', 'Millicoulomb/Milliliter (mC/ml)',
  'Millicoulomb/Microliter (mC/µl)', 'Millicoulomb/Cubic Yard (mC/yd³)', 'Millicoulomb/Cubic Foot (mC/ft³)',
  'Millicoulomb/Cubic Inch (mC/in³)', 'Microcoulomb/Cubic Meter (µC/m³)', 'Microcoulomb/Cubic Centimeter (µC/cm³)',
  'Microcoulomb/Liter (µC/l)', 'Microcoulomb/Milliliter (µC/ml)', 'Microcoulomb/Microliter (µC/µl)',
  'Microcoulomb/Cubic Yard (µC/yd³)', 'Microcoulomb/Cubic Foot (µC/ft³)', 'Microcoulomb/Cubic Inch (µC/in³)',
  'Statcoulomb/Cubic Meter (stC/m³)', 'Statcoulomb/Cubic Centimeter (stC/cm³)', 'Statcoulomb/Liter (stC/l)',
  'Statcoulomb/Milliliter (stC/ml)', 'Statcoulomb/Microliter (stC/µl)', 'Statcoulomb/Cubic Yard (stC/yd³)',
  'Statcoulomb/Cubic Foot (stC/ft³)', 'Statcoulomb/Cubic Inch (stC/in³)'];

const volChDenInitValue1 = "32";
const volChDenInitValue2 = "25";

//based on 1 coulomb/cubic meter
const volChDenConvArray = [0.1, 1e-7, 0.0001, 1e-7, 1e-10, 0.076455485798, 0.0028316846592,
  1.6387064e-6, 0.00027777777778, 2.7777777778e-10, 2.7777777778e-7, 2.7777777778e-10, 2.7777777778e-13,
  0.00021237634944, 7.86579072e-63, 4.5519622222e-9, 0.016666666667, 1.6666666667e-8, 1.6666666667e-5,
  1.6666666667e-8, 1.6666666667e-11, 0.012742580966, 0.0004719474432, 2.7311773333e-7, 1, 0.000001, 0.001,
  0.000001, 1e-9, 0.764554857984, 0.028316846592, 1.6387064e-5, 1, 0.000001, 0.001, 0.000001, 1e-9, 0.764554857984,
  0.028316846592, 1.6387064e-5, 2994011976.1, 2994.0119761, 2994011.9761, 2994.0119761, 2.9940119761, 2289086401.2,
  84780977.82, 49063.065868, 0.000001, 1e-12, 1e-9, 1e-12, 1e-15, 7.6455485798e-7, 2.8316846592e-8, 1.6387064e-11,
  0.001, 1e-9, 0.000001, 1e-9, 1e-12, 0.00076455485798, 2.8316846592e-5, 1.6387064e-8, 1000, 0.001, 1, 0.001,
  0.000001, 764.55485798, 28.316846592, 0.016387064, 1000000, 1, 1000, 1, 0.001, 764554.85798, 28316.846592,
  16.387064, 2994011976.1, 2994.0119761, 2994011.9761, 2994.0119761, 2.9940119761, 2289086401.2, 84780977.82,
  49063.065868];

window.convArray = volChDenConvArray;

function clearAngle() {
  selectedUnit1.value = volChDenInitValue1;
  selectedUnit2.value = volChDenInitValue2;
  originalUnit1 = volChDenInitValue1;
  originalUnit2 = volChDenInitValue2;
}

let option1 = "";
for(let i=0;i<volChDenArray.length;i++){
  if (i === parseInt(volChDenInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + volChDenArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + volChDenArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<volChDenArray.length;j++){
  if (j === parseInt(volChDenInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + volChDenArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + volChDenArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;