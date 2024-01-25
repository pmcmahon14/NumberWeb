const dnaLengthArray = ['Amino Acid (aa)', 'Base Pair (bp)', 'Codon (codon)',
  'Gigabase Pair (Gbp)', 'Kilobase Pair (kbp)', 'Megabase Pair (Mbp)'];

const dnaLengthInitValue1 = "1";
const dnaLengthInitValue2 = "4";

//based on 1 base pair
const dnaLengthConvArray = [0.33333333333, 1, 0.33333333333, 1e-9, 0.001, 0.000001];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = dnaLengthConvArray;
})

function clearAngle() {
  selectedUnit1.value = dnaLengthInitValue1;
  selectedUnit2.value = dnaLengthInitValue2;
  originalUnit1 = dnaLengthInitValue1;
  originalUnit2 = dnaLengthInitValue2;
}

let option = "";
for(let i=0;i<dnaLengthArray.length;i++){
  if (i === parseInt(dnaLengthInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + dnaLengthArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + dnaLengthArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<dnaLengthArray.length;j++){
  if (j === parseInt(dnaLengthInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + dnaLengthArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + dnaLengthArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;