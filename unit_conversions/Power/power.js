const powerArray = ['Attojoule/Hour (aJ/hr)', 'Attojoule/Minute (aJ/min)',
  'Attojoule/Second (aJ/s)', 'Attowatt (aW)', 'BTU (IT)/Hour (BTU/hr)', 'BTU (IT)/Minute (BTU/min)',
  'BTU (IT)/Second (BTU/s)', 'BTU (TH)/Hour (BTU/hr)', 'BTU (TH)/Minute (BTU/min)', 'BTU (TH)/Second (BTU/s)',
  'Calorie (IT)/Hour (cal/hr)', 'Calorie (IT)/Minute (cal/min)', 'Calorie (IT)/Second (cal/s)',
  'Calorie (TH)/Hour (cal/hr)', 'Calorie (TH)/Minute (cal/min)', 'Calorie (TH)/Second (cal/s)',
  'Centijoule/Hour (cJ/hr)', 'Centijoule/Minute (cJ/min)', 'Centijoule/Second (cJ/s)', 'Centiwatt (cW)',
  'Cheval Vapeur (cv)',
  'Decajoule/Hour (daJ/hr)', 'Decajoule/Minute (daJ/min)', 'Decajoule/Second (daJ/s)', 'Decawatt (daW)',
  'Decijoule/Hour (dJ/hr)', 'Decijoule/Minute (dJ/min)', 'Decijoule/Second (dJ/s)', 'Deciwatt (dW)',
  'Dyne Centimeter/Hour (dyn cm/hr)', 'Dyne Centimeter/Minute (dyn cm/min)',
  'Dyne Centimeter/Second (dyn cm/s)', 'Exajoule/Hour (EJ/hr)', 'Exajoule/Minute (EJ/min)',
  'Exajoule/Second (EJ/s)', 'Exawatt (EW)', 'Femtojoule/Hour (fJ/hr)', 'Femtojoule/Minute (fJ/min)',
  'Femtojoule/Second (fJ/s)', 'Femtowatt (fW)', 'Foot Pound/Hour (ft lb/hr)', 'Foot Pound/Minute (ft lb/min)',
  'Foot Pound/Second (ft lb/s)', 'Foot Poundal/Hour (ft pdl/hr)', 'Foot Poundal/Minute (ft pdl/min)',
  'Foot Poundal/Second (ft pdl/s)', 'Gigajoule/Hour (GJ/hr)', 'Gigajoule/Minute (GJ/min)',
  'Gigajoule/Second (GJ/s)', 'Gigawatt (GW)', 'Gram Force Centimeter/Hour (gf cm/hr/hr)',
  'Gram Force Centimeter/Minute (gf cm/hr/min)', 'Gram Force Centimeter/Second (gf cm/hr/s)',
  'Hectojoule/Hour (hJ/hr)', 'Hectojoule/Minute (hJ/min)', 'Hectojoule/Second (hJ/s)', 'Hectowatt (hW)',
  'Horsepower (hp)', 'Horsepower (Boiler) (hp)', 'Horsepower (Electric) (hp)', 'Horsepower (Metric) (hp)',
  'Horsepower (Water) (hp)', 'Inch Ounce-Force Rev/Hour (in ozf R/hr)',
  'Inch Ounce-Force Rev/Min (in ozf R/min)', 'Inch Ounce-Force Rev/Sec (in ozf R/s)',
  'Joule/Hour (J/hr)', 'Joule/Minute (J/min)', 'Joule/Second (J/s)', 'Kilocalorie/Hour (kcal/hr)',
  'Kilocalorie/Minute (kcal/min)', 'Kilocalorie/Second (kcal/s)', 'Kilogram Force Meter/Hour (kgf m/hr)',
  'Kilogram Force Meter/Minute (kgf m/min)', 'Kilogram Force Meter/Second (kgf m/s)', 'Kilojoule/Hour (kJ/hr)',
  'Kilojoule/Minute (kJ/min)', 'Kilojoule/Second (kJ/s)', 'Kilopond Meter/Hour (kp m/hr)',
  'Kilopond Meter/Minute (kp m/min)', 'Kilopond Meter/Second (kp m/s)', 'Kilovolt Ampere (kV·A)',
  'Kilowatt (kW)', 'Mega BTU/Hour (MBTU/hr)', 'Mega BTU/Minute (MBTU/min)', 'Mega BTU/Second (MBTU/s)',
  'Megajoule/Hour (MJ/hr)', 'Megajoule/Minute (MJ/min)', 'Megajoule/Second (MJ/s)', 'Megawatt (MW)',
  'Microjoule/Hour (µJ/hr)', 'Microjoule/Minute (µJ/min)', 'Microjoule/Second (µJ/s)', 'Microwatt (µW)',
  'Millijoule/Hour (mj/hr)', 'Millijoule/Minute (mj/min)', 'Millijoule/Second (mj/s)', 'Milliwatt (mW)',
  'MMBTU/Hour (MMBTU/hr)', 'MMBTU/Minute (MMBTU/min)', 'MMBTU/Second (MMBTU/s)', 'Nanojoule/Hour (nJ/hr)',
  'Nanojoule/Minute (nJ/min)', 'Nanojoule/Second (nJ/s)', 'Nanowatt (nW)', 'Newton Meter/Hour (N·m/hr)',
  'Newton Meter/Minute (N·m/min)', 'Newton Meter/Second (N·m/s)', 'Petajoule/Hour (PJ/hr)',
  'Petajoule/Minute (PJ/min)', 'Petajoule/Second (PJ/s)', 'Petawatt (PW)', 'Picojoule/Hour (pJ/hr)',
  'Picojoule/Minute (pJ/min)', 'Picojoule/Second (pJ/s)', 'Picowatt (pW)',
  'Pound Square Foot/Second³ (psf/s³)', 'Terajoule/Hour (TJ/hr)', 'Terajoule/Minute (TJ/min)',
  'Terajoule/Second (TJ/s)', 'Terawatt (TW)', 'Ton of Refrigeration (tor)', 'Volt Ampere (V·A)', 'Watt (W)',
  'Yoctojoule/Hour (yJ/hr)', 'Yoctojoule/Minute (yJ/min)', 'Yoctojoule/Second (yJ/s)', 'Yoctowatt (yW)',
  'Yottajoule/Hour (YJ/hr)', 'Yottajoule/Minute (YJ/min)', 'Yottajoule/Second (YJ/s)', 'Yottawatt (YW)',
  'Zeptojoule/Hour (zJ/hr)', 'Zeptojoule/Minute (zJ/min)', 'Zeptojoule/Second (zJ/s)', 'Zeptowatt (zW)',
  'Zettajoule/Hour (ZJ/hr)', 'Zettajoule/Minute (ZJ/min)', 'Zettajoule/Second (ZJ/s)', 'Zettawatt (ZW)'];

const powerInitValue1 = "67";
const powerInitValue2 = "122";

//based on 1 watt = joule/second
const powerConvArray = [3.6e21, 6e19, 1e18, 1e18, 3.41, 0.05686902722, 0.0009478171203, 3.41,
  0.05690708297, 0.0009484513828, 859.85, 14.33, 0.2388458966, 860.42, 14.34, 0.2390057361, 360000, 6000, 100, 100,
  0.001359621617, 360, 6, 0.1, 0.1, 36000, 600, 10, 10, 3.6e10, 6e8,1e7, 3.6e-15, 6e-17,1e-18, 1e-18, 3.6e18, 6e16,
  1e15, 1e15, 2655.22, 44.25, 0.7375621524, 85429.32, 1423.82, 23.73, 0.0000036, 6e-8, 1e-9, 1e-9, 3.670978367e7,
  611829.73, 10197.16, 36, 0.6, 0.01, 0.01, 0.00134102209, 0.000101941995, 0.001340482574, 0.001359621617,
  0.001340405312, 81136.2, 1352.27, 22.53783333, 3600, 60, 1, 0.8598452279, 0.0143307538, 0.0002388458966, 367.1,
  6.12, 0.1019716213, 3.6, 0.06, 0.001, 367.1, 6.12, 0.1019716213, 0.001, 0.001, 3.412141633e-6, 5.6869027e-8,
  9.478171e-10, 0.0036, 0.00006, 0.000001, 0.000001, 3.6e9, 6e7, 1000000, 1000000, 3600000, 60000, 1000, 1000,
  3.412141633e-6, 5.6869027e-8, 9.478171e-10, 3.6e12, 6e10, 1e9, 1e9, 3600, 60, 1, 3.6e-12, 6e-14, 1e-15, 1e-15,
  3.6e15, 6e13, 1e12, 1e12, 23.73, 3.6e-9, 6e-11, 1e-12, 1e-12, 0.0002843451363, 1, 1, 3.6e27, 6e25, 1e24, 1e24,
  3.6e-21, 6e-23, 1e-24, 1e-24, 3.6e24, 6e22, 1e21, 1e21, 3.6e-18, 6e-20, 1e-21];

window.convArray = powerConvArray;

function clearAngle() {
  selectedUnit1.value = powerInitValue1;
  selectedUnit2.value = powerInitValue2;
  originalUnit1 = powerInitValue1;
  originalUnit2 = powerInitValue2;
}

let option = "";
for(let i=0;i<powerArray.length;i++){
  if (i === parseInt(powerInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + powerArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + powerArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<powerArray.length;j++){
  if (j === parseInt(powerInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + powerArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + powerArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;