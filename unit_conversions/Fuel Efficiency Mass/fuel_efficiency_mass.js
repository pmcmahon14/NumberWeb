const feMassArray = ['BTU/Kilogram (BTU/kg)', 'BTU/Gram (BTU/g)', 'BTU/Milligram (BTU/mg)',
  'BTU/Microgram (BTU/µg)', 'BTU/Grain (BTU/gr)', 'BTU/Ounce (BTU/oz)', 'BTU/Pound (BTU/lb)', 'BTU/Ton (BTU/tn)',
  'Calorie/Kilogram (cal/kg)', 'Calorie/Gram (cal/g)', 'Calorie/Milligram (cal/mg)',
  'Calorie/Microgram (cal/µg)', 'Calorie/Grain (cal/gr)', 'Calorie/Ounce (cal/oz)', 'Calorie/Pound (cal/lb)',
  'Calorie/Ton (cal/tn)', 'Horsepower Hour/Kilogram (hph/kg)', 'Horsepower Hour/Gram (hph/g)',
  'Horsepower Hour/Milligram (hph/mg)', 'Horsepower Hour/Microgram (hph/µg)', 'Horsepower Hour/Grain (hph/gr)',
  'Horsepower Hour/Ounce (hph/oz)', 'Horsepower Hour/Pound (hph/lb)', 'Horsepower Hour/Ton (hph/tn)',
  'Joule/Kilogram (J/kg)', 'Joule/Gram (J/g)', 'Joule/Milligram (J/mg)', 'Joule/Microgram (J/µg)',
  'Joule/Grain (J/gr)', 'Joule/Ounce (J/oz)', 'Joule/Pound (J/lb)', 'Joule/Ton (J/tn)',
  'Kilocalorie/Kilogram (kcal/kg)', 'Kilocalorie/Gram (kcal/g)', 'Kilocalorie/Milligram (kcal/mg)',
  'Kilocalorie/Microgram (kcal/µg)', 'Kilocalorie/Grain (kcal/gr)', 'Kilocalorie/Ounce (kcal/oz)',
  'Kilocalorie/Pound (kcal/lb)', 'Kilocalorie/Ton (kcal/tn)', 'Kilojoule/Kilogram (kJ/kg)',
  'Kilojoule/Gram (kJ/g)', 'Kilojoule/Milligram (kJ/mg)', 'Kilojoule/Microgram (kJ/µg)',
  'Kilojoule/Grain (kJ/gr)', 'Kilojoule/Ounce (kJ/oz)', 'Kilojoule/Pound (kJ/lb)', 'Kilojoule/Ton (kJ/tn)',
  'Kilowatt Second/Kilogram (kW·s/kg)', 'Kilowatt Second/Gram (kW·s/g)', 'Kilowatt Second/Milligram (kW·s/mg)',
  'Kilowatt Second/Microgram (kW·s/µg)', 'Kilowatt Second/Grain (kW·s/gr)', 'Kilowatt Second/Ounce (kW·s/oz)',
  'Kilowatt Second/Pound (kW·s/lb)', 'Kilowatt Second/Ton (kW·s/tn)', 'Kilowatt Hour/Kilogram (kW·h/kg)',
  'Kilowatt Hour/Gram (kW·h/g)', 'Kilowatt Hour/Milligram (kW·h/mg)', 'Kilowatt Hour/Microgram (kW·h/µg)',
  'Kilowatt Hour/Grain (kW·h/gr)', 'Kilowatt Hour/Ounce (kW·h/oz)', 'Kilowatt Hour/Pound (kW·h/lb)',
  'Kilowatt Hour/Ton (kW·h/tn)', 'Microjoule/Kilogram (µJ/kg)', 'Microjoule/Gram (µJ/g)',
  'Microjoule/Milligram (µJ/mg)', 'Microjoule/Microgram (µJ/µg)', 'Microjoule/Grain (µJ/gr)',
  'Microjoule/Ounce (µJ/oz)', 'Microjoule/Pound (µJ/lb)', 'Microjoule/Ton (µJ/tn)',
  'Millijoule/Kilogram (mJ/kg)', 'Millijoule/Gram (mJ/g)', 'Millijoule/Milligram (mJ/mg)',
  'Millijoule/Microgram (mJ/µg)', 'Millijoule/Grain (mJ/gr)', 'Millijoule/Ounce (mJ/oz)',
  'Millijoule/Pound (mJ/lb)', 'Millijoule/Ton (mJ/tn)', 'Newton Meter/Kilogram (N·m/kg)',
  'Newton Meter/Gram (N·m/g)', 'Newton Meter/Milligram (N·m/mg)', 'Newton Meter/Microgram (N·m/µg)',
  'Newton Meter/Grain (N·m/gr)', 'Newton Meter/Ounce (N·m/oz)', 'Newton Meter/Pound (N·m/lb)',
  'Newton Meter/Ton (N·m/tn)', 'Watt Second/Kilogram (W·s/kg)', 'Watt Second/Gram (W·s/g)',
  'Watt Second/Milligram (W·s/mg)', 'Watt Second/Microgram (W·s/µg)', 'Watt Second/Grain (W·s/gr)',
  'Watt Second/Ounce (W·s/oz)', 'Watt Second/Pound (W·s/lb)', 'Watt Second/Ton (W·s/tn)',
  'Watt Hour/Kilogram (W·h/kg)', 'Watt Hour/Gram (W·h/g)', 'Watt Hour/Milligram (W·h/mg)',
  'Watt Hour/Microgram (W·h/µg)', 'Watt Hour/Grain (W·h/gr)', 'Watt Hour/Ounce (W·h/oz)',
  'Watt Hour/Pound (W·h/lb)', 'Watt Hour/Ton (W·h/tn)'];

const feMassInitValue1 = "25";
const feMassInitValue2 = "24";

//based on 1 joule/gram
const feMassConvArray = [0.94781712031, 0.00094781712031, 9.4781712031e-7, 9.4781712031e-10,
  6.1417516276e-5, 0.026870163371, 0.42992261393, 947.81712031, 238.84589663, 0.23884589663, 0.00023884589663,
  2.3884589663e-7, 0.015476953759, 6.77, 108.34, 238845.89663, 0.00037250607185, 3.7250607185e-7, 3.7250607185e-10,
  3.7250607185e-13, 2.4137987424e-8, 1.0560369498e-5, 0.00016896591197, 0.37250607185, 1000, 1, 0.001, 0.000001,
  0.06479891, 28.349523125, 453.59, 1000000, 0.23884589663, 0.00023884589663, 2.3884589663e-7, 2.3884589663e-10,
  1.5476953759e-5, 0.0067711672698, 0.10833867632, 238.845896663, 1, 0.001, 0.000001, 1e-9, 0.00006479891,
  0.028349523125, 0.45359237, 1000, 1, 0.001, 0.000001, 1e-9, 0.00006479891, 0.028349523125, 0.45359237, 1000,
  0.00027777777778, 2.7777777778e-7, 2.7777777778e-10, 2.7777777778e-13, 1.79997e-8, 7.87487e-6, 0.000125998,
  0.2777777778, 1000000000, 1000000, 1000, 1, 64798.91, 28349523.13, 453592370, 1e12, 1000000, 1000, 1, 0.001,
  64.79891, 28349.52313, 453592.37, 1000000000, 1000, 1, 0.001, 0.000001, 0.06479891, 28.34952313, 453.59237,
  1000000, 1000, 1, 0.001, 0.000001, 0.06479891, 28.34952313, 453.59237, 1000000, 0.277777777778, 0.00027777777778,
  2.7777777778e-7, 2.78e10, 1.79997e-5, 0.007874868, 0.125997881, 277.77777778];


window.convArray = feMassConvArray;

function clearAngle() {
  selectedUnit1.value = feMassInitValue1;
  selectedUnit2.value = feMassInitValue2;
  originalUnit1 = feMassInitValue1;
  originalUnit2 = feMassInitValue2;
}

let option = "";
for(let i=0;i<feMassArray.length;i++){
  if (i === parseInt(feMassInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + feMassArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + feMassArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<feMassArray.length;j++){
  if (j === parseInt(feMassInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + feMassArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + feMassArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;