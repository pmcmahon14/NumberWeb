const feVolumeArray = ['BTU (IT)/Cubic Kilometer (BTU/km³)', 'BTU (IT)/Cubic Meter (BTU/m³)',
  'BTU (IT)/Cubic Centimeter (BTU/cm³)', 'BTU (IT)/Cubic Millimeter (BTU/mm³)', 'BTU (IT)/Cubic Yard (BTU/yd³)',
  'BTU (IT)/Cubic Foot (BTU/ft³)', 'BTU (IT)/Cubic Inch (BTU/in³)', 'BTU (IT)/Gallon (UK) (BTU/gal)',
  'BTU (IT)/Gallon (US) (BTU/gal)', 'BTU (IT)/Liter (BTU/l)', 'BTU (IT)/Milliliter (BTU/ml)',
  'BTU (IT)/Microliter (BTU/µl)', 'BTU (TH)/Cubic Kilometer (BTU/km³)', 'BTU (TH)/Cubic Meter (BTU/m³)',
  'BTU (TH)/Cubic Centimeter (BTU/cm³)', 'BTU (TH)/Cubic Millimeter (BTU/mm³)', 'BTU (TH)/Cubic Yard (BTU/yd³)',
  'BTU (TH)/Cubic Foot (BTU/ft³)', 'BTU (TH)/Cubic Inch (BTU/in³)', 'BTU (TH)/Gallon (UK) (BTU/gal)',
  'BTU (TH)/Gallon (US) (BTU/gal)', 'BTU (TH)/Liter (BTU/l)', 'BTU (TH)/Milliliter (BTU/ml)',
  'BTU (TH)/Microliter (BTU/µl)', 'Calorie (IT)/Cubic Kilometer (cal/km³)', 'Calorie (IT)/Cubic Meter (cal/m³)',
  'Calorie (IT)/Cubic Centimeter (cal/cm³)', 'Calorie (IT)/Cubic Millimeter (cal/mm³)',
  'Calorie (IT)/Cubic Yard (cal/yd³)', 'Calorie (IT)/Cubic Foot (cal/ft³)', 'Calorie (IT)/Cubic Inch (cal/in³)',
  'Calorie (IT)/Gallon (UK) (cal/gal)', 'Calorie (IT)/Gallon (US) (cal/gal)', 'Calorie (IT)/Liter (cal/l)',
  'Calorie (IT)/Milliliter (cal/ml)', 'Calorie (IT)/Microliter (cal/µl)',
  'Calorie (TH)/Cubic Kilometer (cal/km³)', 'Calorie (TH)/Cubic Meter (cal/m³)',
  'Calorie (TH)/Cubic Centimeter (cal/cm³)', 'Calorie (TH)/Cubic Millimeter (cal/mm³)',
  'Calorie (TH)/Cubic Yard (cal/yd³)', 'Calorie (TH)/Cubic Foot (cal/ft³)', 'Calorie (TH)/Cubic Inch (cal/in³)',
  'Calorie (TH)/Gallon (UK) (cal/gal)', 'Calorie (TH)/Gallon (US) (cal/gal)', 'Calorie (TH)/Liter (cal/l)',
  'Calorie (TH)/Milliliter (cal/ml)', 'Calorie (TH)/Microliter (cal/µl)',
  'Horsepower Hour/Cubic Kilometer (hph/km³)', 'Horsepower Hour/Cubic Meter (hph/m³)',
  'Horsepower Hour/Cubic Centimeter (hph/cm³)', 'Horsepower Hour/Cubic Millimeter (hph/mm³)',
  'Horsepower Hour/Cubic Yard (hph/yd³)', 'Horsepower Hour/Cubic Foot (hph/ft³)',
  'Horsepower Hour/Cubic Inch (hph/in³)', 'Horsepower Hour/Gallon (UK) (hph/gal)',
  'Horsepower Hour/Gallon (US) (hph/gal)', 'Horsepower Hour/Liter (hph/l)',
  'Horsepower Hour/Milliliter (hph/ml)', 'Horsepower Hour/Microliter (hph/µl)', 'Joule/Cubic Kilometer (J/km³)',
  'Joule/Cubic Meter (J/m³)', 'Joule/Cubic Centimeter (J/cm³)', 'Joule/Cubic Millimeter (J/mm³)',
  'Joule/Cubic Yard (J/yd³)', 'Joule/Cubic Foot (J/ft³)', 'Joule/Cubic Inch (J/in³)',
  'Joule/Gallon (UK) (J/gal)', 'Joule/Gallon (US) (J/gal)', 'Joule/Liter (J/l)', 'Joule/Milliliter (J/ml)',
  'Joule/Microliter (J/µl)', 'Kilocalorie (IT)/Cubic Kilometer (kcal/km³)',
  'Kilocalorie (IT)/Cubic Meter (kcal/m³)', 'Kilocalorie (IT)/Cubic Centimeter (kcal/cm³)',
  'Kilocalorie (IT)/Cubic Millimeter (kcal/mm³)', 'Kilocalorie (IT)/Cubic Yard (kcal/yd³)',
  'Kilocalorie (IT)/Cubic Foot (kcal/ft³)', 'Kilocalorie (IT)/Cubic Inch (kcal/in³)',
  'Kilocalorie (IT)/Gallon (UK) (kcal/gal)', 'Kilocalorie (IT)/Gallon (US) (kcal/gal)',
  'Kilocalorie (IT)/Liter (kcal/l)', 'Kilocalorie (IT)/Milliliter (kcal/ml)',
  'Kilocalorie (IT)/Microliter (kcal/µl)', 'Kilocalorie (TH)/Cubic Kilometer (kcal/km³)',
  'Kilocalorie (TH)/Cubic Meter (kcal/m³)', 'Kilocalorie (TH)/Cubic Centimeter (kcal/cm³)',
  'Kilocalorie (TH)/Cubic Millimeter (kcal/mm³)', 'Kilocalorie (TH)/Cubic Yard (kcal/yd³)',
  'Kilocalorie (TH)/Cubic Foot (kcal/ft³)', 'Kilocalorie (TH)/Cubic Inch (kcal/in³)',
  'Kilocalorie (TH)/Gallon (UK) (kcal/gal)', 'Kilocalorie (TH)/Gallon (US) (kcal/gal)',
  'Kilocalorie (TH)/Liter (kcal/l)', 'Kilocalorie (TH)/Milliliter (kcal/ml)',
  'Kilocalorie (TH)/Microliter (kcal/µl)', 'Kilojoule/Cubic Kilometer (kJ/km³)',
  'Kilojoule/Cubic Meter (kJ/m³)', 'Kilojoule/Cubic Centimeter (kJ/cm³)', 'Kilojoule/Cubic Millimeter (kJ/mm³)',
  'Kilojoule/Cubic Yard (kJ/yd³)', 'Kilojoule/Cubic Foot (kJ/ft³)', 'Kilojoule/Cubic Inch (kJ/in³)',
  'Kilojoule/Gallon (UK) (kJ/gal)', 'Kilojoule/Gallon (US) (kJ/gal)', 'Kilojoule/Liter (kJ/l)',
  'Kilojoule/Milliliter (kJ/ml)', 'Kilojoule/Microliter (kJ/µl)', 'Kilowatt Hour/Cubic Kilometer (kW·h/km³)',
  'Kilowatt Hour/Cubic Meter (kW·h/m³)', 'Kilowatt Hour/Cubic Centimeter (kW·h/cm³)',
  'Kilowatt Hour/Cubic Millimeter (kW·h/mm³)', 'Kilowatt Hour/Cubic Yard (kW·h/yd³)',
  'Kilowatt Hour/Cubic Foot (kW·h/ft³)', 'Kilowatt Hour/Cubic Inch (kW·h/in³)',
  'Kilowatt Hour/Gallon (UK) (kW·h/gal)', 'Kilowatt Hour/Gallon (US) (kW·h/gal)',
  'Kilowatt Hour/Liter (kW·h/l)', 'Kilowatt Hour/Milliliter (kW·h/ml)', 'Kilowatt Hour/Microliter (kW·h/µl)',
  'Kilowatt Second/Cubic Kilometer (kW·s/km³)', 'Kilowatt Second/Cubic Meter (kW·s/m³)',
  'Kilowatt Second/Cubic Centimeter (kW·s/cm³)', 'Kilowatt Second/Cubic Millimeter (kW·s/mm³)',
  'Kilowatt Second/Cubic Yard (kW·s/yd³)', 'Kilowatt Second/Cubic Foot (kW·s/ft³)',
  'Kilowatt Second/Cubic Inch (kW·s/in³)', 'Kilowatt Second/Gallon (UK) (kW·s/gal)',
  'Kilowatt Second/Gallon (US) (kW·s/gal)', 'Kilowatt Second/Liter (kW·s/l)',
  'Kilowatt Second/Milliliter (kW·s/ml)', 'Kilowatt Second/Microliter (kW·s/µl)',
  'Microjoule/Cubic Kilometer (µJ/km³)', 'Microjoule/Cubic Meter (µJ/m³)',
  'Microjoule/Cubic Centimeter (µJ/cm³)', 'Microjoule/Cubic Millimeter (µJ/mm³)',
  'Microjoule/Cubic Yard (µJ/yd³)', 'Microjoule/Cubic Foot (µJ/ft³)', 'Microjoule/Cubic Inch (µJ/in³)',
  'Microjoule/Gallon (UK) (µJ/gal)', 'Microjoule/Gallon (US) (µJ/gal)', 'Microjoule/Liter (µJ/l)',
  'Microjoule/Milliliter (µJ/ml)', 'Microjoule/Microliter (µJ/µl)', 'Millijoule/Cubic Kilometer (mJ/km³)',
  'Millijoule/Cubic Meter (mJ/m³)', 'Millijoule/Cubic Centimeter (mJ/cm³)',
  'Millijoule/Cubic Millimeter (mJ/mm³)', 'Millijoule/Cubic Yard (mJ/yd³)', 'Millijoule/Cubic Foot (mJ/ft³)',
  'Millijoule/Cubic Inch (mJ/in³)', 'Millijoule/Gallon (UK) (mJ/gal)', 'Millijoule/Gallon (US) (mJ/gal)',
  'Millijoule/Liter (mJ/l)', 'Millijoule/Milliliter (mJ/ml)', 'Millijoule/Microliter (mJ/µl)',
  'Newton Meter/Cubic Kilometer (N·m/km³)', 'Newton Meter/Cubic Meter (N·m/m³)',
  'Newton Meter/Cubic Centimeter (N·m/cm³)', 'Newton Meter/Cubic Millimeter (N·m/mm³)',
  'Newton Meter/Cubic Yard (N·m/yd³)', 'Newton Meter/Cubic Foot (N·m/ft³)', 'Newton Meter/Cubic Inch (N·m/in³)',
  'Newton Meter/Gallon (UK) (N·m/gal)', 'Newton Meter/Gallon (US) (N·m/gal)', 'Newton Meter/Liter (N·m/l)',
  'Newton Meter/Milliliter (N·m/ml)', 'Newton Meter/Microliter (N·m/µl)',
  'Watt Second/Cubic Kilometer (W·s/km³)', 'Watt Second/Cubic Meter (W·s/m³)',
  'Watt Second/Cubic Centimeter (W·s/cm³)', 'Watt Second/Cubic Millimeter (W·s/mm³)',
  'Watt Second/Cubic Yard (W·s/yd³)', 'Watt Second/Cubic Foot (W·s/ft³)', 'Watt Second/Cubic Inch (W·s/in³)',
  'Watt Second/Gallon (UK) (W·s/gal)', 'Watt Second/Gallon (US) (W·s/gal)', 'Watt Second/Liter (W·s/l)',
  'Watt Second/Milliliter (W·s/ml)', 'Watt Second/Microliter (W·s/µl)', 'Watt Hour/Cubic Kilometer (W·h/km³)',
  'Watt Hour/Cubic Meter (W·h/m³)', 'Watt Hour/Cubic Centimeter (W·h/cm³)',
  'Watt Hour/Cubic Millimeter (W·h/mm³)', 'Watt Hour/Cubic Yard (W·h/yd³)', 'Watt Hour/Cubic Foot (W·h/ft³)',
  'Watt Hour/Cubic Inch (W·h/in³)', 'Watt Hour/Gallon (UK) (W·h/gal)', 'Watt Hour/Gallon (US) (W·h/gal)',
  'Watt Hour/Liter (W·h/l)', 'Watt Hour/Milliliter (W·h/ml)', 'Watt Hour/Microliter (W·h/µl)'];

const feVolumeInitValue1 = "61";
const feVolumeInitValue2 = "185";

//based on 1 joule/cubic meter
const feVolumeConvArray = [947817.12031, 9.4781712031e-4, 9.4781712031e-10, 9.4781712031e-13, 7.2465818381e-4,
  2.6839191993e-5, 1.5531939811e-8, 4.3088619325e-6, 3.587878301e-6, 9.4781712031e-7, 9.4781712031e-10,
  9.4781712031e-13, 948451.38281, 9.4845138281e-4, 9.4845138281e-10, 9.4845138281e-13, 7.2514311228e-4,
  2.6857152307e-5, 1.5542333511e-8, 4.3117453469e-6, 3.5902792459e-6, 9.4845138281e-7, 9.4845138281e-10,
  9.4845138281e-13, 238845896.63, 0.23884589663, 2.3884589663e-7, 2.3884589663e-10, 0.18261079058, 6.7633626139e-3,
  3.9139829942e-6, 1.0858149422e-3, 9.0413012324e-4, 2.3884589663e-4, 2.3884589663e-7, 2.3884589663e-10,
  239005736.14, 0.23900573614, 2.3900573614e-7, 2.3900573614e-10, 0.18273299665, 6.7678887648e-3, 3.9166022945e-6,
  1.086541587e-3, 9.0473518164e-4, 2.3900573614e-4, 2.3900573614e-7, 2.3900573614e-10, 372.50607185, 3.7250607185e-7,
  3.7250607185e-13, 3.7250607185e-16, 2.8480132686e-7, 1.0548197291e-8, 6.1042808398e-12, 1.6934461282e-9,
  1.4100889544e-9, 3.7250607185e-10, 3.7250607185e-13, 3.7250607185e-16, 1e9, 1, 0.000001, 1e-9, 0.76455485798,
  0.028316846592, 1.6387064e-5, 0.00454609, 0.003785412, 0.001, 0.000001, 1e-9, 238845.89663, 2.3884589663e-4,
  2.3884589663e-10, 2.3884589663e-13, 1.8261079058e-4, 6.7633626139e-6, 3.9139829942e-9, 1.0858149422e-6,
  9.0413012324e-7, 2.3884589663e-7, 2.3884589663e-10, 2.3884589663e-13, 239005.73614, 2.3900573614e-4,
  2.3900573614e-10, 2.3900573614e-13, 1.8273299665e-4, 6.7678887648e-6, 3.9166022945e-9, 1.086541587e-6,
  9.0473518164e-7, 2.3900573614e-7, 2.3900573614e-10, 2.3900573614e-13, 1000000, 0.001, 1e-9, 1e-12,
  7.6455485798e-4, 2.8316846592e-5, 1.6387064e-8, 4.54609e-6, 3.785412e-6, 0.000001, 1e-9, 1e-12, 277.77777778,
  2.7777777778e-7, 2.7777777778e-13, 2.7777777778e-16, 2.1237634944e-7, 7.86579072e-9, 4.5519622222e-12,
  1.2628027778e-9, 1.0515033333e-9, 2.7777777778e-10, 2.7777777778e-13, 2.7777777778e-16, 1000000, 0.001, 1e-9,
  1e-12, 7.6455485798e-4, 2.8316846592e-5, 1.6387064e-8, 4.54609e-6, 3.785412e-6, 0.000001, 1e-9, 1e-12, 1e15,
  1000000, 1, 0.001, 764554.85798, 28316.846592, 16.387064, 4546.09, 3785.412, 1000, 1, 0.001, 1e12, 1000, 0.001,
  0.000001, 764.55485798, 28.316846592, 0.016387064, 4.54609, 3.785412, 1, 0.001, 0.000001, 1e9, 1, 0.000001,
  1e-9, 0.76455485798, 0.028316846592, 1.6387064e-5, 0.00454609, 0.003785412, 0.001, 0.000001, 1e-9, 1e9, 1,
  0.000001, 1e-9, 0.76455485798, 0.028316846592, 1.6387064e-5, 0.00454609, 0.003785412, 0.001, 0.000001, 1e-9,
  277777.77778, 2.7777777778e-4, 2.7777777778e-10, 2.7777777778e-13, 2.1237634944e-4, 7.86579072e-6,
  4.5519622222e-9, 1.2628027778e-6, 1.0515033333e-6, 2.7777777778e-7, 2.7777777778e-10, 2.7777777778e-13];


window.convArray = feVolumeConvArray;

function clearAngle() {
  selectedUnit1.value = feVolumeInitValue1;
  selectedUnit2.value = feVolumeInitValue2;
  originalUnit1 = feVolumeInitValue1;
  originalUnit2 = feVolumeInitValue2;
}

let option1 = "";
for(let i=0;i<feVolumeArray.length;i++){
  if (i === parseInt(feVolumeInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + feVolumeArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + feVolumeArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<feVolumeArray.length;j++){
  if (j === parseInt(feVolumeInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + feVolumeArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + feVolumeArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;