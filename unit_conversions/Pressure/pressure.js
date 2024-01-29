const pressArray = ['Atmosphere (atm)', 'Atmosphere (Technical) (atm)', 'Attobar (ab)',
  'Attopascal (aPa)', 'Bar (b)', 'Barad (Ba)', 'Barye (Ba)', 'Centibar (cb)',
  'Centimeter of Mercury (cm Hg)', 'Centipascal (cPa)', 'Centitorr (cTorr)',
  'Decibar (db)', 'Decipascal (dPa)', 'Dekabar (dkb)', 'Dekapascal (dkPa)', 'Dyne/Centimeter² (dyn/cm²)',
  'Exabar (Eb)', 'Exapascal (EPa)', 'Feet of Air (0°C) (ft air)', 'Feet of Air (15°C) (ft air)',
  'Feet of Head (ft head)', 'Feet of Mercury (ft Hg)', 'Femtobar (fb)',
  'Femtopascal (fPa)', 'Gigabar (Gb)', 'Gigapascal (GPa)', 'Gram Force/Centimeter² (gf/cm²)',
  'Gram Force/Meter² (gf/m²)', 'Gram Force/Millimeter² (gf/mm²)', 'Hectobar (hb)',
  'Hectopascal (hPa)', 'Inches of Air (0°C) (in air)', 'Inches of Air (15°C) (in air)', 'Inches of Mercury (in Hg)',
  'Kilobar (kb)', 'Kilogram Force/Centimeter² (kgf/cm²)', 'Kilogram Force/Meter² (kgf/m²)',
  'Kilogram Force/Millimeter² (kgf/mm²)', 'Kilonewton/Centimeter² (kN/cm²)',
  'Kilonewton/Meter² (kN/m²)', 'Kilonewton/Millimeter² (kN/mm²)', 'Kilopascal (kPa)',
  'Kip/Yard² (kip/yd²)', 'Kip/Feet² (kip/ft²)', 'Kip/Inch² (kip/in²)', 'KSI (KSI)',
  'Megabar (Mb)', 'Meganewton/Meter² (MN/m²)', 'Megapascal (MPa)', 'Megapound/Inch² (Mlb/in²)',
  'Meters of Air (0°C) (m air)', 'Meters of Air (15°C) (m air)', 'Meter of Head (m head)', 'Microbar (µb)',
  'Micrometer of Mercury (µ Hg)', 'Micrometer of H2O (µH2O)', 'Micropascal (µPa)', 'Millibar (mb)', 'Millimeter of H2O (mH2O)',
  'Millimeter of Mercury (mm Hg)', 'Millipascal (mPa)', 'Nanobar (nb)', 'Nanopascal (nPa)',
  'Newton/Centimeter² (N/cm²)', 'Newton/Meter² (N/m²)', 'Newton/Millimeter² (N/mm²)', 'Ounce Force/Inch² (ozf/in²)',
  'Pascal (Pa)', 'Petabar (Pb)', 'Petapascal (PPa)', 'Picobar (pb)', 'Picopascal (pPa)', 'Pieze (pz)',
  'Pound Force/Yard² (lbf/yd²)', 'Pound Force/Feet² (lbf/ft²)', 'Pound Force/Inch² (lbf/in²)',
  'Poundal/Feet² (pdl/ft²)', 'PSF (PSF)', 'PSI (PSI)', 'Sthene/Meter² (sn/m²)', 'Terabar (Tb)',
  'Terapascal (TPa)', 'Ton Force (Long)/Feet² (tnf/ft²)', 'Ton Force (Short)/Feet² (tnf/ft²)',
  'Ton Force (Long)/Inch² (tnf/in²)', 'Ton Force (Short)/Inch² (tnf/in²)',
  'Torr (Torr)', 'Water Column (cm) (wc)', 'Water Column (Inch) (wc)', 'Water Column (mm) (wc)',
  'Yoctobar (yb)', 'Yoctopascal (yPa)', 'Yottabar (Yb)', 'Yottapascal (YPa)', 'Zeptobar (zb)',
  'Zeptopascal (zPa)', 'Zettabar (Zb)', 'Zettapascal (ZPa)'];

const pressInitValue1 = "0";
const pressInitValue2 = "4";

//based on 1 atmosphere
const pressConvArray = [1, 1.03, 1.01325e18, 1.01325e23, 1.01325, 1013250, 1013250, 101.325, 76,
  1.01325e7, 76000, 10.1325, 1013250, 0.101325, 10132.5, 1.01325e6, 1.01325e-18, 1.01325e-13, 26222.22,
  27667.09, 33.9, 2.49, 1.01325e15, 1.01325e20, 1.01325e-9, 0.000101325, 1033.23, 1.03323e7, 10.33, 0.0101325,
  1013.25, 314666.68, 332005.09, 29.92, 0.00101325, 1.03, 10332.27, 0.010332274527999, 0.010133, 101.33,
  0.00010133, 101.325, 19.05, 2.12, 0.01469594878, 0.01469594878, 1.01325e-6, 0.101325, 0.101325,
  1.4695948776374e-5, 7992.53, 8432.93, 10.33, 1013250, 759999.82, 1.033222185e7, 1.01325e11, 1013.25, 10332.27,
  760, 1.01325e8, 1.01325e9, 1.01325e14, 10.1325, 101325, 0.101325, 235.14, 101325, 1.01325e-15, 1.01325e-10,
  1.01325e12, 1.01325e17, 101.33, 19045.95, 2116.216667, 14.7, 68087.26, 2116.22, 14.7, 101.33, 1.01325e-12,
  1.01325e-7, 1.06, 0.9447421878, 0.007347974402, 0.00656069143, 760, 1033.23, 406.78, 10332.27,
  1.01325e24, 1.01325e29, 1.01325e-24, 1.01325e-19, 1.01325e21, 1.01325e26, 1.01325e-21, 1.01325e-16];

window.convArray = pressConvArray;

function clearAngle() {
  selectedUnit1.value = pressInitValue1;
  selectedUnit2.value = pressInitValue2;
  originalUnit1 = pressInitValue1;
  originalUnit2 = pressInitValue2;
}

let option1 = "";
for(let i=0;i<pressArray.length;i++){
  if (i === parseInt(pressInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + pressArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + pressArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<pressArray.length;j++){
  if (j === parseInt(pressInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + pressArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + pressArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;