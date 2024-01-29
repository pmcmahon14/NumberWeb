const radAbsorbedDoseArray = ['Yottagray (YGy)', 'Zettagray (ZGy)', 'Exagray (EGy)',
  'Petagray (PGy)', 'Teragray (TGy)', 'Gigagray (GGy)', 'Megagray (MGy)', 'Kilogray (kGy)', 'Hectogray (hGy)',
  'Decagray (daGy)', 'Gray (Gy)', 'Decigray (dGy)', 'Centigray (cGy)', 'Milligray (mGy)', 'Microgray (µGy)',
  'Nanogray (nGy)', 'Picogray (pGy)', 'Femtogray (fGy)', 'Attogray (aGy)', 'Zeptogray (zGy)', 'Yoctogray (yGy)',
  'Rad (rd)', 'Millirad (mrd)', 'Microrad (µrd)', 'Joule/Kilogram (J/kg)', 'Joule/Gram (J/g)',
  'Joule/Centigram (J/cg)', 'Joule/Milligram (J/mg)', 'Sievert (Sv)', 'Millisievert (mSv)', 'Microsievert (µSv)'];

const radAbsorbedDoseInitValue1 = "21";
const radAbsorbedDoseInitValue2 = "10";

//based on rad
const radAbsorbedDoseConvArray = [1e-26, 1e-23, 1e-20, 1e-17, 1e-14, 1e-11, 1e-8, 0.00001, 0.0001,
  0.001, 0.01, 0.1, 1, 10, 10000, 1e7, 1e10, 1e13, 1e16, 1e19, 1e22, 1, 1000, 1e6, 0.01, 0.00001, 1e-7, 1e-8,
  0.01, 10, 10000];

window.convArray = radAbsorbedDoseConvArray;

function clearAngle() {
  selectedUnit1.value = radAbsorbedDoseInitValue1;
  selectedUnit2.value = radAbsorbedDoseInitValue2;
  originalUnit1 = radAbsorbedDoseInitValue1;
  originalUnit2 = radAbsorbedDoseInitValue2;
}

let option1 = "";
for(let i=0;i<radAbsorbedDoseArray.length;i++){
  if (i === parseInt(radAbsorbedDoseInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + radAbsorbedDoseArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + radAbsorbedDoseArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<radAbsorbedDoseArray.length;j++){
  if (j === parseInt(radAbsorbedDoseInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + radAbsorbedDoseArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + radAbsorbedDoseArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;