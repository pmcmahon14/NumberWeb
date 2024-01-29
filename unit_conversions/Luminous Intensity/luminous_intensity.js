const lumIntArray = ['Bougie Decimal (bougie)', 'Candela (cd)', 'Candle (c)',
  'Candle (Germany) (c)', 'Candle (UK) (c)', 'Carcel Unit (carcel)', 'Decimal Candle (dc)',
  'Hefner Candle (Hc)', 'Lumen/Steradian (lm/sr)', 'Pentane Candle (pc)', 'Pentane Candle (Power 10) (pc)'];

const lumIntInitValue1 = "1";
const lumIntInitValue2 = "2";

//based on 1 candela
const lumIntConvArray = [1, 1, 1, 0.95, 0.960006144, 0.1040582726, 1, 1.111111111, 1, 1, 0.1];

window.convArray = lumIntConvArray;

function clearAngle() {
  selectedUnit1.value = lumIntInitValue1;
  selectedUnit2.value = lumIntInitValue2;
  originalUnit1 = lumIntInitValue1;
  originalUnit2 = lumIntInitValue2;
}

let option1 = "";
for(let i=0;i<lumIntArray.length;i++){
  if (i === parseInt(lumIntInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + lumIntArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + lumIntArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<lumIntArray.length;j++){
  if (j === parseInt(lumIntInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + lumIntArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + lumIntArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;