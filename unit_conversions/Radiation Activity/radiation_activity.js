const radActArray = ['Becquerel (Bq)', 'Curie (Ci)', 'Disintegrations/Minute (dpm)',
  'Gigabecquerel (GBq)', 'Kilobecquerel (kBq)', 'Kilocurie (kCi)', 'Megabecquerel (MBq)', 'Microcurie (µCi)',
  'Millibecquerel (mBq)', 'Millicurie (mCi)', 'Nanocurie (nCi)', 'Picocurie (pCi)', 'Rutherford (Rd)',
  'Terabecquerel (TBq)'];

const radActInitValue1 = "0";
const radActInitValue2 = "1";

//based on 1 becquerel
const radActConvArray = [1, 2.702702702e-11, 60, 1e-9, 0.001, 2.702702702e-14, 0.000001,
  0.00002702702702, 1000, 2.702702702, 0.02702702702, 27.027027027, 0.000001, 1e-12];

window.convArray = radActConvArray;

function clearAngle() {
  selectedUnit1.value = radActInitValue1;
  selectedUnit2.value = radActInitValue2;
  originalUnit1 = radActInitValue1;
  originalUnit2 = radActInitValue2;
}

let option1 = "";
for(let i=0;i<radActArray.length;i++){
  if (i === parseInt(radActInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + radActArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + radActArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<radActArray.length;j++){
  if (j === parseInt(radActInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + radActArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + radActArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;