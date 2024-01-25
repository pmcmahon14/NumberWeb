const lengthArray = ['Angstrom (A)', 'Arm\'s Length (arm\'s-length)',
  'Astronomical Unit (AU)', 'Attometer (am)', 'Barleycorn (barleycorn)', 'Bee Space (bee space)', 'Bohr (bohr)',
  'Button (button)', 'Cable (cable)', 'Cable (UK) (cable)', 'Cable (US) (cable)', 'Centimeter (cm)',
  'Chain (ch)', 'Cubit (cubit)', 'Decimeter (dm)', 'Dekameter (dkm)', 'Digit (digit)',
  'Ell (ell)', 'Exameter (Em)', 'Fathom (ftm)', 'Femtometer (fm)', 'Finger (finger)',
  'Fingerbreadth (fingerbreadth)', 'Fist (fist)', 'Foot (ft)', 'Furlong (fur)', 'Gigameter (Gm)',
  'Gigaparsec (Gpc)', 'Hairbreadth (hairbreadth)', 'Hand (hand)', 'Handbreadth (handbreadth)', 'Hectometer (hm)',
  'Inch (in)', 'Kilofoot (kft)', 'Kilometer (km)', 'Kiloparsec (kpc)', 'Kiloyard (kyd)', 'Lap (lap)',
  'Lap Pool (lappool)', 'League (league)', 'Light Year (ly)', 'Line (line)', 'Link (link)',
  'Marathon (marathon)', 'Megameter (Mm)', 'Megaparsec (Mpc)', 'Meter (m)', 'Microinch (µin)', 'Micrometer (µm)',
  'Mil (mil)', 'Mile (mi)', 'Millimeter (mm)', 'Myriameter (mym)', 'Nail (nail)', 'Nanometer (nm)',
  'Nautical League (nleague)', 'Nautical Mile (nmi)', 'Pace (pace)', 'Palm (palm)', 'Parsec (pc)',
  'Perch (perch)', 'Petameter (Pm)', 'Picometer (pm)', 'Pole (pole)',
  'Q (Q)', 'Quadrant (quadrant)', 'Quarter (quarter)', 'Reed (reed)', 'Ridge (ridge)', 'Rod (rod)',
  'Rope (rope)', 'Shackle (shackle)', 'Shaftment (shaftment)', 'Span (span)', 'Spat (spat)',
  'Stadium (stadium)', 'Step (step)', 'Story (story)', 'Stride (stride)', 'Terameter (Tm)', 'Thou (thou)',
  'U (U)', 'Yard (yd)', 'Yoctometer (ym)', 'Yottameter (Ym)', 'Zeptometer (zm)',
  'Zettameter (Zm)'];

const lengthInitValue1 = "24";
const lengthInitValue2 = "46";

//based on 1 foot
const lengthConvArray = [3.048e9, 0.43542857143, 2.0135865888e-12, 3.048e17, 36, 46.892307692, 5759854869.8, 480,
  0.0016457883369, 0.0016447368421, 0.0013888888889, 30.48,0.015151515152, 0.66666666667, 3.048, 0.03048,
  16.042105263,0.26666666667, 3.048e-19, 0.16666666667, 3.048e14, 2.6666666667,16, 3.048, 1, 0.0015151515152,
  3.048e-10, 9.877895215e-27, 3048, 3, 4, 0.003048, 12, 0.001, 0.0003048, 9.877895215e-21, 3.3333333333e-4,
  0.000762, 0.003048, 6.3131186294e-5, 3.2217385421e-17, 144, 1.5151484848, 7.2235378693e-6, 3.048e-7, 9.877895215e-24,
  0.3048, 12000000, 304800, 12000, 1.8939393939e-4, 304.8, 0.00003048, 5.3333333333, 3.048e8, 5.4859611231e-5,
  1.6457883369e-4, 0.2, 4, 9.877895215e-18, 0.060606060606, 3.0459132025e-16, 3.048e11, 0.060606060754, 1219.2,
  3.0476036668e-8, 7.5757575758e-4, 0.11377379619, 0.049382716049, 0.060606060606, 0.05, 0.011111111111,
  2, 1.3333333333, 3.0122768585e-13, 0.0016475675676, 0.4, 0.092363636364, 0.2, 3.048e-13, 12192, 6.8571428571,
  3, 3.048e23, 3.048e-25, 3.048e20, 3.048e-22];


window.convArray = lengthConvArray;

function clearAngle() {
  selectedUnit1.value = lengthInitValue1;
  selectedUnit2.value = lengthInitValue2;
  originalUnit1 = lengthInitValue1;
  originalUnit2 = lengthInitValue2;
}

let option = "";
for(let i=0;i<lengthArray.length;i++){
  if (i === parseInt(lengthInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + lengthArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + lengthArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<lengthArray.length;j++){
  if (j === parseInt(lengthInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + lengthArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + lengthArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;