const heatFluxDensityArray = ['BTU (IT)/Hour/Sq Centimeter (BTU/cm²)',
  'BTU (IT)/Hour/Sq Feet (BTU/ft²)', 'BTU (IT)/Hour/Sq Inch (BTU/in²)',
  'BTU (IT)/Hour/Sq Meter (BTU/m²)', 'BTU (IT)/Hour/Sq Millimeter (BTU/mm²)',
  'BTU (IT)/Minute/Sq Centimeter (BTU/cm²)', 'BTU (IT)/Minute/Sq Feet (BTU/ft²)',
  'BTU (IT)/Minute/Sq Inch (BTU/in²)', 'BTU (IT)/Minute/Sq Meter (BTU/m²)',
  'BTU (IT)/Minute/Sq Millimeter (BTU/mm²)', 'BTU (IT)/Second/Sq Centimeter (BTU/cm²)',
  'BTU (IT)/Second/Sq Feet (BTU/ft²)', 'BTU (IT)/Second/Sq Inch (BTU/in²)',
  'BTU (IT)/Second/Sq Meter (BTU/m²)', 'BTU (IT)/Second/Sq Millimeter (BTU/mm²)',
  'BTU (TH)/Hour/Sq Centimeter (BTU/cm²)', 'BTU (TH)/Hour/Sq Feet (BTU/ft²)',
  'BTU (TH)/Hour/Sq Inch (BTU/in²)', 'BTU (TH)/Hour/Sq Meter (BTU/m²)',
  'BTU (TH)/Hour/Sq Millimeter (BTU/mm²)', 'BTU (TH)/Minute/Sq Centimeter (BTU/cm²)',
  'BTU (TH)/Minute/Sq Feet (BTU/ft²)', 'BTU (TH)/Minute/Sq Inch (BTU/in²)',
  'BTU (TH)/Minute/Sq Meter (BTU/m²)', 'BTU (TH)/Minute/Sq Millimeter (BTU/mm²)',
  'BTU (TH)/Second/Sq Centimeter (BTU/cm²)', 'BTU (TH)/Second/Sq Feet (BTU/ft²)',
  'BTU (TH)/Second/Sq Inch (BTU/in²)', 'BTU (TH)/Second/Sq Meter (BTU/m²)',
  'BTU (TH)/Second/Sq Millimeter (BTU/mm²)', 'Calorie (IT)/Hour/Sq Centimeter (cal/cm²)',
  'Calorie (IT)/Hour/Sq Feet (cal/ft²)', 'Calorie (IT)/Hour/Sq Inch (cal/in²)',
  'Calorie (IT)/Hour/Sq Meter (cal/m²)', 'Calorie (IT)/Hour/Sq Millimeter (cal/mm²)',
  'Calorie (IT)/Minute/Sq Centimeter (cal/cm²)', 'Calorie (IT)/Minute/Sq Feet (cal/ft²)',
  'Calorie (IT)/Minute/Sq Inch (cal/in²)', 'Calorie (IT)/Minute/Sq Meter (cal/m²)',
  'Calorie (IT)/Minute/Sq Millimeter (cal/mm²)', 'Calorie (IT)/Second/Sq Centimeter (cal/cm²)',
  'Calorie (IT)/Second/Sq Feet (cal/ft²)', 'Calorie (IT)/Second/Sq Inch (cal/in²)',
  'Calorie (IT)/Second/Sq Meter (cal/m²)', 'Calorie (IT)/Second/Sq Millimeter (cal/mm²)',
  'Calorie (TH)/Hour/Sq Centimeter (cal/cm²)', 'Calorie (TH)/Hour/Sq Feet (cal/ft²)',
  'Calorie (TH)/Hour/Sq Inch (cal/in²)', 'Calorie (TH)/Hour/Sq Meter (cal/m²)',
  'Calorie (TH)/Hour/Sq Millimeter (cal/mm²)', 'Calorie (TH)/Minute/Sq Centimeter (cal/cm²)',
  'Calorie (TH)/Minute/Sq Feet (cal/ft²)', 'Calorie (TH)/Minute/Sq Inch (cal/in²)',
  'Calorie (TH)/Minute/Sq Meter (cal/m²)', 'Calorie (TH)/Minute/Sq Millimeter (cal/mm²)',
  'Calorie (TH)/Second/Sq Centimeter (cal/cm²)', 'Calorie (TH)/Second/Sq Feet (cal/ft²)',
  'Calorie (TH)/Second/Sq Inch (cal/in²)', 'Calorie (TH)/Second/Sq Meter (cal/m²)',
  'Calorie (TH)/Second/Sq Millimeter (cal/mm²)', 'Horsepower/Sq Centimeter (hp/cm²)',
  'Horsepower/Sq Feet (hp/ft²)', 'Horsepower/Sq Inch (hp/in²)', 'Horsepower/Sq Meter (hp/m²)',
  'Horsepower/Sq Millimeter (hp/mm²)', 'Horsepower (Metric)/Sq Centimeter (hph/cm²)',
  'Horsepower (Metric)/Sq Feet (hph/ft²)', 'Horsepower (Metric)/Sq Inch (hph/in²)',
  'Horsepower (Metric)/Sq Meter (hph/m²)', 'Horsepower (Metric)/Sq Millimeter (hph/mm²)',
  'Joule/Hour/Sq Centimeter (J/cm²)', 'Joule/Hour/Sq Feet (J/ft²)', 'Joule/Hour/Sq Inch (J/in²)',
  'Joule/Hour/Sq Meter (J/m²)', 'Joule/Hour/Sq Millimeter (J/mm²)',
  'Joule/Minute/Sq Centimeter (J/cm²)', 'Joule/Minute/Sq Feet (J/ft²)',
  'Joule/Minute/Sq Inch (J/in²)', 'Joule/Minute/Sq Meter (J/m²)',
  'Joule/Minute/Sq Millimeter (J/mm²)', 'Joule/Second/Sq Centimeter (J/cm²)',
  'Joule/Second/Sq Feet (J/ft²)', 'Joule/Second/Sq Inch (J/in²)', 'Joule/Second/Sq Meter (J/m²)',
  'Joule/Second/Sq Millimeter (J/mm²)', 'Kilocalorie (IT)/Hour/Sq Centimeter (kcal/cm²)',
  'Kilocalorie (IT)/Hour/Sq Feet (kcal/ft²)', 'Kilocalorie (IT)/Hour/Sq Inch (kcal/in²)',
  'Kilocalorie (IT)/Hour/Sq Meter (kcal/m²)', 'Kilocalorie (IT)/Hour/Sq Millimeter (kcal/mm²)',
  'Kilocalorie (IT)/Minute/Sq Centimeter (kcal/cm²)', 'Kilocalorie (IT)/Minute/Sq Feet (kcal/ft²)',
  'Kilocalorie (IT)/Minute/Sq Inch (kcal/in²)', 'Kilocalorie (IT)/Minute/Sq Meter (kcal/m²)',
  'Kilocalorie (IT)/Minute/Sq Millimeter (kcal/mm²)', 'Kilocalorie (IT)/Second/Sq Centimeter (kcal/cm²)',
  'Kilocalorie (IT)/Second/Sq Feet (kcal/ft²)', 'Kilocalorie (IT)/Second/Sq Inch (kcal/in²)',
  'Kilocalorie (IT)/Second/Sq Meter (kcal/m²)', 'Kilocalorie (IT)/Second/Sq Millimeter (kcal/mm²)',
  'Kilocalorie (TH)/Hour/Sq Centimeter (kcal/cm²)', 'Kilocalorie (TH)/Hour/Sq Feet (kcal/ft²)',
  'Kilocalorie (TH)/Hour/Sq Inch (kcal/in²)', 'Kilocalorie (TH)/Hour/Sq Meter (kcal/m²)',
  'Kilocalorie (TH)/Hour/Sq Millimeter (kcal/mm²)', 'Kilocalorie (TH)/Minute/Sq Centimeter (kcal/cm²)',
  'Kilocalorie (TH)/Minute/Sq Feet (kcal/ft²)', 'Kilocalorie (TH)/Minute/Sq Inch (kcal/in²)',
  'Kilocalorie (TH)/Minute/Sq Meter (kcal/m²)', 'Kilocalorie (TH)/Minute/Sq Millimeter (kcal/mm²)',
  'Kilocalorie (TH)/Second/Sq Centimeter (kcal/cm²)', 'Kilocalorie (TH)/Second/Sq Feet (kcal/ft²)',
  'Kilocalorie (TH)/Second/Sq Inch (kcal/in²)', 'Kilocalorie (TH)/Second/Sq Meter (kcal/m²)',
  'Kilocalorie (TH)/Second/Sq Millimeter (kcal/mm²)', 'Kilowatt/Sq Centimeter (kW/cm²)',
  'Kilowatt/Sq Feet (kW/ft²)', 'Kilowatt/Sq Inch (kW/in²)', 'Kilowatt/Sq Meter (kW/m²)',
  'Kilowatt/Sq Millimeter (kW/mm²)', 'Milliwatt/Sq Centimeter (mW/cm²)',
  'Milliwatt/Sq Feet (mW/ft²)', 'Milliwatt/Sq Inch (mW/in²)', 'Milliwatt/Sq Meter (mW/m²)',
  'Milliwatt/Sq Millimeter (mW/mm²)', 'Watt/Sq Centimeter (W/cm²)', 'Watt/Sq Feet (W/ft²)',
  'Watt/Sq Inch (W/in²)', 'Watt/Sq Meter (W/m²)', 'Watt/Sq Millimeter (W/mm²)'];

const heatFluxDensityInitValue1 = "128";
const heatFluxDensityInitValue2 = "61";

//based on 1 watt/Sq meter
const heatFluxDensityConvArray = [0.000341, 0.3167993664, 0.0021999956, 3.41, 0.00000341, 5.6907082969e-6,
  0.0052833055105, 0.0000366896216, 0.056869027219, 5.6869027219e-8, 9.4781712031e-8, 0.000088055091841,
  6.1149369334e-7, 0.00094781712031, 9.4781712031e-10, 0.000341, 0.3167993664, 0.0021999956, 3.41, 0.00000341,
  5.6907082969e-6, 0.0052868410053, 0.000036714173648, 0.056907082969, 5.6907082969e-8, 9.4845138281e-8,
  8.8114016755e-5, 6.1190289413e-7, 0.00094845138281, 9.4845138281e-10, 0.085985, 79.882678944, 0.554740826,
  859.85, 0.00085985, 0.001433, 1.3313005632, 0.0092451428, 14.33, 0.00001433, 2.3884589663e-5, 0.022189509888,
  0.00015409381867, 0.23884589663, 2.3884589663e-7, 0.086042, 79.935633677, 0.5551085672, 860.42, 0.00086042,
  0.001434, 1.3322295936, 0.0092515944, 14.34, 0.00001434, 2.3900573614e-5, 0.022204359465, 0.00015419694073,
  0.23900573614, 2.3900573614e-7, 3600000, 3344509440, 23225760, 36000000000, 36000, 60000, 55741824, 387096,
  600000000, 600, 1000, 929030.4, 6451.6, 10000000, 10, 1.3410220897e-7, 0.00012458502884, 8.6517381137e-7,
  0.0013410220897, 1.3410220897e-9, 1.3596216173e-7, 0.0001263129815, 8.7717348262e-7, 0.0013596216173,
  1.3596216173e-9, 0.36, 334.450944, 2.322576, 3600, 0.0036, 0.006, 5.5741824, 0.0387096, 60, 0.00006, 0.0001,
  0.09290304, 0.00064516, 1, 0.000001, 8.5984522786e-5, 0.079882235598, 0.00055473774721, 0.85984522786,
  8.5984522786e-7, 1.4330753798e-6, 0.0013313705933, 9.24562912e-6, 0.014330753798, 1.4330753798e-8, 2.3884589663e-8,
  2.2189509888e-5, 1.5409381867e-7, 0.00023884589663, 2.3884589663e-10, 8.6042065e-5, 0.079935694073, 5.5510898662e-4,
  0.8604206501, 8.604206501e-7, 1.4340344168e-6, 0.0013322615679, 9.2518164436e-6, 0.014340344168, 1.4340344168e-8,
  2.3900573614e-8, 2.2204359465e-5, 1.5419694073e-7, 0.00023900573614, 2.3900573614e-10];

window.convArray = heatFluxDensityConvArray;

function clearAngle() {
  selectedUnit1.value = heatFluxDensityInitValue1;
  selectedUnit2.value = heatFluxDensityInitValue2;
  originalUnit1 = heatFluxDensityInitValue1;
  originalUnit2 = heatFluxDensityInitValue2;
}

let option1 = "";
for(let i=0;i<heatFluxDensityArray.length;i++){
  if (i === parseInt(heatFluxDensityInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + heatFluxDensityArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + heatFluxDensityArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<heatFluxDensityArray.length;j++){
  if (j === parseInt(heatFluxDensityInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + heatFluxDensityArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + heatFluxDensityArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;