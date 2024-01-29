const visKinArray = ['Square Meter/Hour (m²/hr)', 'Square Meter/Minute (m²/min)',
  'Square Meter/Second (m²/s)', 'Square Centimeter/Hour (cm²/hr)', 'Square Centimeter/Minute (cm²/min)',
  'Square Centimeter/Second (cm²/s)', 'Square Millimeter/Hour (mm²/hr)', 'Square Millimeter/Minute (mm²/min)',
  'Square Millimeter/Second (mm²/s)', 'Square Micrometer/Hour (µm²/hr)', 'Square Micrometer/Minute (µm²/min)',
  'Square Micrometer/Second (µm²/s)', 'Square Yard/Hour (yd²/hr)', 'Square Yard/Minute (yd²/min)',
  'Square Yard/Second (yd²/s)', 'Square Foot/Hour (ft²/hr)', 'Square Foot/Minute (ft²/min)',
  'Square Foot/Second (ft²/s)', 'Square Inch/Hour (in²/hr)', 'Square Inch/Minute (in²/min)',
  'Square Inch/Second (in²/s)', 'Stokes (St)', 'Yottastokes (YSt)', 'Zettastokes (ZSt)', 'Exastokes (ESt)',
  'Petastokes (PSt)', 'Terastokes (TSt)', 'Gigastokes (GSt)', 'Megastokes (MSt)', 'Kilostokes (kSt)',
  'Hectostokes (hSt)', 'Decastokes (dkSt)', 'Decistokes (dSt)', 'Centistokes (cSt)', 'Millistokes (mSt)',
  'Microstokes (µSt)', 'Nanostokes (nSt)', 'Picostokes (pSt)', 'Femtostokes (fSt)', 'Attostokes (aSt)',
  'Zeptostokes (zSt)', 'Yoctostokes (ySt)'];

const visKinInitValue1 = "2";
const visKinInitValue2 = "1";

//based on 1 square meter/second
const visKinConvArray = [3600, 60, 1, 36000000, 600000, 10000, 3.6e9, 6e7, 1000000, 3.6e15, 6e13, 1e12,
  4305.56, 71.76, 1.2, 38750.08, 645.83, 10.76, 5580011.16, 93000.19, 1550, 10000, 1e-20, 1e-17, 1e-14, 1e-11, 1e-8,
  0.00001, 0.01, 10, 100, 1000, 100000, 1000000, 10000000, 1e10, 1e13, 1e16, 1e19, 1e22, 1e25, 1e28];

window.convArray = visKinConvArray;

function clearAngle() {
  selectedUnit1.value = visKinInitValue1;
  selectedUnit2.value = visKinInitValue2;
  originalUnit1 = visKinInitValue1;
  originalUnit2 = visKinInitValue2;
}

let option1 = "";
for(let i=0;i<visKinArray.length;i++){
  if (i === parseInt(visKinInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + visKinArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + visKinArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<visKinArray.length;j++){
  if (j === parseInt(visKinInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + visKinArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + visKinArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;