const visDynArray = ['Dyne Second/Square Centimeter (dyn·s/cm)²', 'Gram/Centimeter/Second (g/cm/s)',
  'Kilogram Force Second/Square Meter\n (kgf·s/m²)', 'Millinewton Second/Square Meter (mN·s/m²)',
  'Newton Second/Square Meter (N·s/m²)', 'Pascal Second (Pa·s)', 'Pound Force Second/Square Inch (lbf·s/in²)',
  'Pound Force Second/Square Foot (lbf·s/ft²)', 'Pound/Foot/Hour (lb/ft/h)', 'Pound/Foot/Second (lb/ft/s)',
  'Poundal Second/Square Foot (pdl·s/ft²)', 'Reyn (reyn)', 'Slug/Foot/Second (sl/ft/s)', 'Poise (P)', 'Yottapoise (YP)',
  'Zettapoise (ZP)', 'Exapoise (EP)', 'Petapoise (PP)', 'Terapoise (TP)', 'Gigapoise (GP)', 'Megapoise (MP)',
  'Kilopoise (kP)', 'Hectopoise (hP)', 'Decapoise (daP)', 'Decipoise (dP)', 'Centipoise (cP)',
  'Millipoise (mP)', 'Micropoise (µP)', 'Nanopoise (nP)', 'Picopoise (pP)', 'Femtopoise (fP)', 'Attopoise (aP)',
  'Zeptopoise (zP)', 'Yoctopoise (yP)'];

const visDynInitValue1 = "5";
const visDynInitValue2 = "13";

//based on 1 pascal/second
const visDynConvArray = [10, 10, 0.1019716213, 1000, 1, 1, 0.0001450377, 0.0208854342, 2419.09,
  0.6719689751, 0.6719687534, 0.0001451379, 0.0208854384, 10, 1e-23, 1e-20, 1e-17, 1e-14, 1e-11, 1e-8, 0.00001,
  0.01, 0.1, 1, 100, 1000, 10000, 1e7, 1e10, 1e13, 1e16, 1e19, 1e22, 1e25];

window.convArray = visDynConvArray;

function clearAngle() {
  selectedUnit1.value = visDynInitValue1;
  selectedUnit2.value = visDynInitValue2;
  originalUnit1 = visDynInitValue1;
  originalUnit2 = visDynInitValue2;
}

let option1 = "";
for(let i=0;i<visDynArray.length;i++){
  if (i === parseInt(visDynInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + visDynArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + visDynArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<visDynArray.length;j++){
  if (j === parseInt(visDynInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + visDynArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + visDynArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;