const heatDensityArray = ['Langley (Ly)', 'BTU (IT)/Acre (BTU/ac)', 'BTU (IT)/Sq Centimeter (BTU/cm²)',
  'BTU (IT)/Sq Feet (BTU/ft²)', 'BTU (IT)/Sq Inch (BTU/in²)', 'BTU (IT)/Sq Meter (BTU/m²)',
  'BTU (IT)/Sq Micrometer (BTU/µm²)', 'BTU (IT)/Sq Millimeter (BTU/mm²)', 'BTU (IT)/Sq Yard (BTU/yd²)',
  'BTU (TH)/Acre (BTU/ac)', 'BTU (TH)/Sq Centimeter (BTU/cm²)', 'BTU (TH)/Sq Feet (BTU/ft²)',
  'BTU (TH)/Sq Inch (BTU/in²)', 'BTU (TH)/Sq Meter (BTU/m²)', 'BTU (TH)/Sq Micrometer (BTU/µm²)',
  'BTU (TH)/Sq Millimeter (BTU/mm²)', 'BTU (TH)/Sq Yard (BTU/yd²)', 'Calorie (IT)/Acre (cal/ac)',
  'Calorie (IT)/Sq Centimeter (cal/cm²)', 'Calorie (IT)/Sq Feet (cal/ft²)', 'Calorie (IT)/Sq Inch (cal/in²)',
  'Calorie (IT)/Sq Meter (cal/m²)', 'Calorie (IT)/Sq Micrometer (cal/µm²)', 'Calorie (IT)/Sq Millimeter (cal/mm²)',
  'Calorie (IT)/Sq Yard (cal/yd²)', 'Calorie (TH)/Acre (cal/ac)', 'Calorie (TH)/Sq Centimeter (cal/cm²)',
  'Calorie (TH)/Sq Feet (cal/ft²)', 'Calorie (TH)/Sq Inch (cal/in²)', 'Calorie (TH)/Sq Meter (cal/m²)',
  'Calorie (TH)/Sq Micrometer (cal/µm²)', 'Calorie (TH)/Sq Millimeter (cal/mm²)', 'Calorie (TH)/Sq Yard (cal/yd²)',
  'Electronvolt/Acre (eV/ac)', 'Electronvolt/Sq Centimeter (eV/cm²)', 'Electronvolt/Sq Feet (eV/ft²)',
  'Electronvolt/Sq Inch (eV/in²)', 'Electronvolt/Sq Meter (eV/m²)', 'Electronvolt/Sq Micrometer (eV/µm²)',
  'Electronvolt/Sq Millimeter (eV/mm²)', 'Electronvolt/Sq Yard (eV/yd²)', 'Horsepower Hour/Acre (hph/ac)',
  'Horsepower Hour/Sq Centimeter (hph/cm²)', 'Horsepower Hour/Sq Feet (hph/ft²)',
  'Horsepower Hour/Sq Inch (hph/in²)', 'Horsepower Hour/Sq Meter (hph/m²)',
  'Horsepower Hour/Sq Micrometer (hph/µm²)', 'Horsepower Hour/Sq Millimeter (hph/mm²)',
  'Horsepower Hour/Sq Yard (hph/yd²)', 'Horsepower Hour (metric)/Acre (hph/ac)',
  'Horsepower Hour (metric)/Sq Centimeter\n (hph/cm²)', 'Horsepower Hour (metric)/Sq Feet (hph/ft²)',
  'Horsepower Hour (metric)/Sq Inch\n (hph/in²)', 'Horsepower Hour (metric)/Sq Meter\n (hph/m²)',
  'Horsepower Hour (metric)/Sq Micrometer\n (hph/µm²)', 'Horsepower Hour (metric)/Sq Millimeter\n (hph/mm²)',
  'Horsepower Hour (metric)/Sq Yard (hph/yd²)', 'Joule/Acre (J/ac)', 'Joule/Sq Centimeter (J/cm²)',
  'Joule/Sq Feet (J/ft²)', 'Joule/Sq Inch (J/in²)', 'Joule/Sq Meter (J/m²)', 'Joule/Sq Micrometer (J/µm²)',
  'Joule/Sq Millimeter (J/mm²)', 'Joule/Sq Yard (J/yd²)', 'Kiloelectronvolt/Acre (keV/ac)',
  'Kiloelectronvolt/Sq Centimeter (keV/cm²)', 'Kiloelectronvolt/Sq Feet (keV/ft²)',
  'Kiloelectronvolt/Sq Inch (keV/in²)', 'Kiloelectronvolt/Sq Meter (keV/m²)',
  'Kiloelectronvolt/Sq Micrometer (keV/µm²)', 'Kiloelectronvolt/Sq Millimeter (keV/mm²)',
  'Kiloelectronvolt/Sq Yard (keV/yd²)', 'Kilojoule/Acre (kJ/ac)', 'Kilojoule/Sq Centimeter (kJ/cm²)',
  'Kilojoule/Sq Feet (kJ/ft²)', 'Kilojoule/Sq Inch (kJ/in²)', 'Kilojoule/Sq Meter (kJ/m²)',
  'Kilojoule/Sq Micrometer (kJ/µm²)', 'Kilojoule/Sq Millimeter (kJ/mm²)', 'Kilojoule/Sq Yard (kJ/yd²)',
  'Kilowatt Hour/Acre (kWh/ac)', 'Kilowatt Hour/Sq Centimeter (kWh/cm²)', 'Kilowatt Hour/Sq Feet (kWh/ft²)',
  'Kilowatt Hour/Sq Inch (kWh/in²)', 'Kilowatt Hour/Sq Meter (kWh/m²)', 'Kilowatt Hour/Sq Micrometer (kWh/µm²)',
  'Kilowatt Hour/Sq Millimeter (kWh/mm²)', 'Kilowatt Hour/Sq Yard (kWh/yd²)', 'Kilowatt Second/Acre (kWs/ac)',
  'Kilowatt Second/Sq Centimeter (kWs/cm²)', 'Kilowatt Second/Sq Feet (kWs/ft²)',
  'Kilowatt Second/Sq Inch (kWs/in²)', 'Kilowatt Second/Sq Meter (kWs/m²)',
  'Kilowatt Second/Sq Micrometer (kWs/µm²)', 'Kilowatt Second/Sq Millimeter (kWs/mm²)',
  'Kilowatt Second/Sq Yard (kWs/yd²)', 'Mega BTU/Acre (MBTU/ac)', 'Mega BTU/Sq Centimeter (MBTU/cm²)',
  'Mega BTU/Sq Feet (MBTU/ft²)', 'Mega BTU/Sq Inch (MBTU/in²)', 'Mega BTU/Sq Meter (MBTU/m²)',
  'Mega BTU/Sq Micrometer (MBTU/µm²)', 'Mega BTU/Sq Millimeter (MBTU/mm²)', 'Mega BTU/Sq Yard (MBTU/yd²)',
  'Megaelectronvolt/Acre (MeV/ac)', 'Megaelectronvolt/Sq Centimeter (MeV/cm²)',
  'Megaelectronvolt/Sq Feet (MeV/ft²)', 'Megaelectronvolt/Sq Inch (MeV/in²)', 'Megaelectronvolt/Sq Meter (MeV/m²)',
  'Megaelectronvolt/Sq Micrometer (MeV/µm²)', 'Megaelectronvolt/Sq Millimeter (MeV/mm²)',
  'Megaelectronvolt/Sq Yard (MeV/yd²)', 'Megajoule/Acre (MJ/ac)', 'Megajoule/Sq Centimeter (MJ/cm²)',
  'Megajoule/Sq Feet (MJ/ft²)', 'Megajoule/Sq Inch (MJ/in²)', 'Megajoule/Sq Meter (MJ/m²)',
  'Megajoule/Sq Micrometer (MJ/µm²)', 'Megajoule/Sq Millimeter (MJ/mm²)', 'Megajoule/Sq Yard (MJ/yd²)',
  'Megaton/Acre (Mtn/ac)', 'Megaton/Sq Centimeter (Mtn/cm²)', 'Megaton/Sq Feet (Mtn/ft²)',
  'Megaton/Sq Inch (Mtn/in²)', 'Megaton/Sq Meter (Mtn/m²)',
  'Megaton/Sq Micrometer (Mtn/µm²)', 'Megaton/Sq Millimeter (Mtn/mm²)',
  'Megaton/Sq Yard (Mtn/yd²)', 'Megawatt Hour/Acre (MWh/ac)', 'Megawatt Hour/Sq Centimeter (MWh/cm²)',
  'Megawatt Hour/Sq Feet (MWh/ft²)', 'Megawatt Hour/Sq Inch (MWh/in²)', 'Megawatt Hour/Sq Meter (MWh/m²)',
  'Megawatt Hour/Sq Micrometer (MWh/µm²)', 'Megawatt Hour/Sq Millimeter (MWh/mm²)',
  'Megawatt Hour/Sq Yard (MWh/yd²)', 'Microjoule/Acre (µJ/ac)', 'Microjoule/Sq Centimeter (µJ/cm²)',
  'Microjoule/Sq Feet (µJ/ft²)', 'Microjoule/Sq Inch (µJ/in²)', 'Microjoule/Sq Meter (µJ/m²)',
  'Microjoule/Sq Micrometer (µJ/µm²)', 'Microjoule/Sq Millimeter (µJ/mm²)', 'Microjoule/Sq Yard (µJ/yd²)',
  'Millijoule/Acre (mJ/ac)', 'Millijoule/Sq Centimeter (mJ/cm²)', 'Millijoule/Sq Feet (mJ/ft²)',
  'Millijoule/Sq Inch (mJ/in²)', 'Millijoule/Sq Meter (mJ/m²)', 'Millijoule/Sq Micrometer (mJ/µm²)',
  'Millijoule/Sq Millimeter (mJ/mm²)', 'Millijoule/Sq Yard (mJ/yd²)', 'Newton Meter/Acre (N·m/ac)',
  'Newton Meter/Sq Centimeter (N·m/cm²)', 'Newton Meter/Sq Feet (N·m/ft²)', 'Newton Meter/Sq Inch (N·m/in²)',
  'Newton Meter/Sq Meter (N·m/m²)', 'Newton Meter/Sq Micrometer (N·m/µm²)', 'Newton Meter/Sq Millimeter (N·m/mm²)',
  'Newton Meter/Sq Yard (N·m/yd²)', 'Refrigeration Ton Hour/Acre (tnh/ac)',
  'Refrigeration Ton Hour/Sq Centimeter (tnh/cm²)', 'Refrigeration Ton Hour/Sq Feet (tnh/ft²)',
  'Refrigeration Ton Hour/Sq Inch (tnh/in²)', 'Refrigeration Ton Hour/Sq Meter (tnh/m²)',
  'Refrigeration Ton Hour/Sq Micrometer (tnh/µm²)', 'Refrigeration Ton Hour/Sq Millimeter (tnh/mm²)',
  'Refrigeration Ton Hour/Sq Yard (tnh/yd²)', 'Watt Hour/Acre (W·h/ac)', 'Watt Hour/Sq Centimeter (W·h/cm²)',
  'Watt Hour/Sq Feet (W·h/ft²)', 'Watt Hour/Sq Inch (W·h/in²)',  'Watt Hour/Sq Meter (W·h/m²)',
  'Watt Hour/Sq Micrometer (W·h/µm²)', 'Watt Hour/Sq Millimeter (W·h/mm²)', 'Watt Hour/Sq Yard (W·h/yd²)',
  'Watt Second/Acre (W·s/ac)', 'Watt Second/Sq Centimeter (W·s/cm²)', 'Watt Second/Sq Feet (W·s/ft²)',
  'Watt Second/Sq Inch (W·s/in²)', 'Watt Second/Sq Meter (W·s/m²)',
  'Watt Second/Sq Micrometer (W·s/µm²)', 'Watt Second/Sq Millimeter (W·s/mm²)', 'Watt Second/Sq Yard (W·s/yd²)'];

const heatDensityInitValue1 = "61";
const heatDensityInitValue2 = "59";

//based on 1 joule/Sq meter
const heatDensityConvArray = [2.3900573614e-5,
  3.8356831915, 9.4781712031e-8, 8.8055091841e-5, 6.1149369334e-7, 9.4781712031e-4, 9.4781712031e-16, 9.4781712031e-10, 7.9249582657e-4,
  3.8382499630, 9.4845138281e-8, 8.8114016755e-5, 6.1190289413e-7, 0.00094845138281, 9.4845138281e-16, 9.4845138281e-10, 0.0007930261508,
  966.57590523, 2.3884589663e-5, 0.022189509888, 0.00015409381867, 0.23884589663, 2.3884589663e-13, 2.3884589663e-7, 0.19970558899,
  967.22275335, 2.3900573614e-5, 0.022204359465, 0.00015419694073, 0.23900573614, 2.3900573614e-13, 2.3900573614e-7, 0.19983923518,
  2.5258514501e22, 6.2415093433e14, 5.7985519218e17, 4.0267721679e15, 6.2415093433e18, 6241509.3433, 6.2415093433e12, 5.2186967296e18,
  1.5074799219e-3, 3.7250607185e-11, 3.4606946493e-8, 2.4032601731e-10, 3.7250607185e-7, 3.7250607185e-19, 3.7250607185e-13, 3.1146251844e-7,
  1.5283884273e-3, 3.7767267147e-11, 3.5086939305e-8, 2.4365930073e-10, 3.7767267147e-7, 3.7767267147e-19, 3.7767267147e-13, 3.1578245374e-7,
  4046.86, 0.0001, 0.09290304, 0.00064516, 1, 1e-12, 0.000001, 0.83612736,
  2.5258514501e19, 6.2415093433e11, 5.7985519218e14, 4.0267721679e12, 6.2415093433e15, 6241.5093433, 6241509343.3, 5.2186967296e15,
  4.04686, 1e-7, 0.00009290304, 6.4516e-7, 0.001, 1e-15, 1e-9, 0.00083612736,
  0.0011241277778, 2.7777777778e-11, 2.58064e-8, 1.7921111111e-10, 2.7777777778e-7, 2.7777777778e-19, 2.7777777778e-13, 2.322576e-7,
  4.04686, 1e-7, 9.290304e-5, 6.4516e-7, 0.001, 1e-15, 1e-9, 8.3612736e-4,
  3.8356831915e-6, 9.4781712031e-14, 8.8055091841e-11, 6.1149369334e-13, 9.4781712031e-10, 9.4781712031e-22, 9.4781712031e-16, 7.9249582657e-10,
  2.5258514501e16, 624150934.33, 5.7985519218e11, 4026772167.9, 6.2415093433e12, 6.2415093433, 6241509.3433, 5.2186967296e12,
  0.00404686, 1e-10, 9.290304e-8, 6.4516e-10, 0.000001, 1e-18, 1e-12, 8.3612736e-7,
  9.6722275335e-13, 2.3900573614e-20, 2.2204359465e-17, 1.5419694073e-19, 2.3900573613767e-16, 2.3900573614e-28, 2.3900573614e-22, 1.9983923518e-16,
  1.12412777778e-6, 2.7777777778e-14, 2.58064e-11, 1.7921111111e-13, 2.7777777778e-10, 2.7777777778e-22, 2.7777777778e-16, 2.322576e-10,
  4046860000, 100, 92903.04, 645.16, 1000000, 0.000001, 1, 836127.36,
  4046860, 0.1, 92.90304, 0.64516, 1000, 1e-9, 0.001, 836.12736,
  4046.86, 0.0001, 0.09290304, 0.00064516, 1, 1e-12, 0.000001, 0.83612736,
  0.00031964026596, 7.8984760026e-12, 7.3379243201e-9, 5.0957807778e-11, 7.8984760026e-8, 7.8984760026e-20, 7.8984760026e-14, 6.6041318881e-8,
  1.1241277778, 2.7777777778e-8, 2.58064e-5, 1.7921111111e-7, 0.00027777777778, 2.7777777778e-16, 2.7777777778e-10, 0.0002322576,
  4046.86, 0.0001, 0.09290304, 0.00064516, 1, 1e-12, 0.000001, 0.83612736];


window.convArray = heatDensityConvArray;

function clearAngle() {
  selectedUnit1.value = heatDensityInitValue1;
  selectedUnit2.value = heatDensityInitValue2;
  originalUnit1 = heatDensityInitValue1;
  originalUnit2 = heatDensityInitValue2;
}

let option = "";
for(let i=0;i<heatDensityArray.length;i++){
  if (i === parseInt(heatDensityInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + heatDensityArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + heatDensityArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<heatDensityArray.length;j++){
  if (j === parseInt(heatDensityInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + heatDensityArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + heatDensityArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;