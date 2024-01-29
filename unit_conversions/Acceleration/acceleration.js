const accelArray = ['Centimeter/Hour Squared (cm/hr²)',
  'Centimeter/Minute Squared (cm/min²)', 'Centimeter/Second Squared (cm/s²)', 'Feet/Hour Squared (ft/hr²)',
  'Feet/Minute Squared (ft/min²)', 'Feet/Second Squared (ft/s²)', 'Gal(ileo)(Gal)',
  'Gravity (G)', 'Inch/Hour Squared (in/hr²)', 'Inch/Minute Squared (in/min²)', 'Inch/Second Squared (in/s²)',
  'Kilometer/Hour Squared (km/hr²)', 'Kilometer/Minute Squared (km/min²)',
  'Kilometer/Second Squared (km/s²)', 'Knot/Hour(kn/hr)', 'Knot/Minute (kn/min)', 'Knot/Second (kn/s)',
  'Meter/Hour Squared (m/hr²)', 'Meter/Minute Squared (m/min²)', 'Meter/Second Squared (m/s²)',
  'Mile/Hour Squared (mi/hr²)', 'Mile/Minute Squared (mi/min²)', 'Mile/Second Squared (mi/s²)',
  'Millimeter/Hour Squared (mm/hr²)', 'Millimeter/Minute Squared (mm/min²)',
  'Millimeter/Second Squared (mm/s²)', 'Yard/Hour Squared (yd/hr²)', 'Yard/Minute Squared (yd/min²)',
  'Yard/Second Squared (yd/s²)'];

const accelInitValue1 = "19";
const accelInitValue2 = "5";

//based on 1 meter/second squared
const accelConvArray = [1.296e9, 360000, 100, 42519685.04, 11811.02362, 3.28084, 100, 0.101971621,
  5.102362205e8, 141732.2844, 39.370079, 12960, 3.6, 0.001, 6997.84, 116.63, 1.94, 12960000, 3600, 1, 8052.97,
  2.236936292, 0.000621371, 1.296e10, 3600000, 1000, 14173224.48, 3937.0068, 1.093613];

window.convArray = accelConvArray;

function clearAcceleration() {
  selectedUnit1.value = accelInitValue1;
  selectedUnit2.value = accelInitValue2;
  originalUnit1 = accelInitValue1;
  originalUnit2 = accelInitValue2;
}

let option1 = "";
for(let i=0;i<accelArray.length;i++){
  if (i === parseInt(accelInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + accelArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + accelArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<accelArray.length;j++){
  if (j === parseInt(accelInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + accelArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + accelArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;