const forceArray = ['Atomic Unit Of Force (auf)', 'Attonewton (aN)', 'Centinewton (cN)',
  'Crinal (crinal)', 'Decapond (dkp)', 'Decigram Force (dgf)', 'Decinewton (dN)', 'Dekagram Force (dkgf)',
  'Dekanewton (dkN)', 'Dyne (dyn)', 'Exanewton (EN)', 'Femtonewton (fN)', 'Giganewton (GN)', 'Gigapond (Gp)',
  'Gram Force (gf)', 'Grave Force (Gf)', 'Gravet Force (gf)', 'Hectonewton (hN)', 'Joules/Centimeter (J/cm)',
  'Joules/Meter (J/m)', 'Kilogram Force (kgf)', 'Kilonewton (kN)', 'Kilopond (kp)', 'KIP (kip)',
  'Meganewton (MN)', 'Megapond (Mp)', 'Micronewton (µN)', 'Micropond (µp)', 'Milligram Force (mgf)',
  'Milligrave Force (mGf)', 'Millinewton (mN)', 'Millipond (mp)', 'Nanonewton (nN)', 'Nanopond (np)',
  'Newton (N)', 'Ounce Force (ozf)', 'Pascal/Square Meter (Pa/m²)', 'Petanewton (PN)', 'Piconewton (pN)',
  'Planck Force (LMT⁻²)', 'Pond (p)', 'Pound Foot/Second Squared (lb ft/s²)', 'Pound Force (lbf)',
  'Poundal (pdl)', 'Sthene (sn)', 'Teranewton (TN)', 'Ton Force (Long) (tnf)', 'Ton Force (Metric) (tnf)',
  'Ton Force (Short) (tnf)', 'Yoctonewton (yN)', 'Yottanewton (YN)', 'Zeptonewton (zN)', 'Zettanewton (ZN)'];

const forceInitValue1 = "34";
const forceInitValue2 = "42";

//based on 1 newton
const forceConvArray = [12137395.31, 1e18, 100, 10, 10.2, 1019.72, 10, 10.2, 0.1, 100000, 1e-18,
  1e15, 1e-9, 1.019716213e-7, 101.97, 0.1019716213, 101.97, 0.01, 100, 1, 0.1019716213, 0.001, 0.1019716213,
  0.0002248089431, 0.000001, 0.0001019716213, 1000000, 101971621.3, 101971.6213, 101.97, 1000, 101971.6213, 1e9,
  1.019716213e11, 1, 3.6, 1, 1e-15, 1e12, 8.2644628099e-45, 101.97, 7.23, 0.2248089431, 7.23, 0.001, 1e-12,
  0.00010036113566, 0.0001019716213, 0.00011240447194, 1e24, 1e-24, 1e21, 1e-21];

window.convArray = forceConvArray;

function clearAngle() {
  selectedUnit1.value = forceInitValue1;
  selectedUnit2.value = forceInitValue2;
  originalUnit1 = forceInitValue1;
  originalUnit2 = forceInitValue2;
}

let option = "";
for(let i=0;i<forceArray.length;i++){
  if (i === parseInt(forceInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + forceArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + forceArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<forceArray.length;j++){
  if (j === parseInt(forceInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + forceArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + forceArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;