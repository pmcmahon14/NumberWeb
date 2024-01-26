const momInArray = ['Carat/Square Kilometer (ct/km²)', 'Carat/Square Meter (ct/m²)',
  'Carat/Square Decimeter (ct/dm²)', 'Carat/Square Centimeter (ct/cm²)', 'Carat/Square Millimeter (ct/mm²)',
  'Carat/Square Micrometer (ct/µm²)', 'Carat/Square Nanometer (ct/nm²)', 'Carat/Square Mile (ct/mi²)',
  'Carat/Square Yard (ct/yd²)', 'Carat/Square Foot (ct/ft²)', 'Carat/Square Inch (ct/in²)', 'Gamma/Square Kilometer (γ/km²)',
  'Gamma/Square Meter (γ/m²)', 'Gamma/Square Decimeter (γ/dm²)', 'Gamma/Square Centimeter (γ/cm²)',
  'Gamma/Square Millimeter (γ/mm²)', 'Gamma/Square Micrometer (γ/µm²)', 'Gamma/Square Nanometer (γ/nm²)',
  'Gamma/Square Mile (γ/mi²)', 'Gamma/Square Yard (γ/yd²)', 'Gamma/Square Foot (γ/ft²)', 'Gamma/Square Inch (γ/in²)',
  'Grain/Square Kilometer (gr/km²)', 'Grain/Square Meter (gr/m²)', 'Grain/Square Decimeter (gr/dm²)',
  'Grain/Square Centimeter (gr/cm²)', 'Grain/Square Millimeter (gr/mm²)', 'Grain/Square Micrometer (gr/µm²)',
  'Grain/Square Nanometer (gr/nm²)', 'Grain/Square Mile (gr/mi²)', 'Grain/Square Yard (gr/yd²)', 'Grain/Square Foot (gr/ft²)',
  'Grain/Square Inch (gr/in²)', 'Gram/Square Kilometer (g/km²)', 'Gram/Square Meter (g/m²)',
  'Gram/Square Decimeter (g/dm²)', 'Gram/Square Centimeter (g/cm²)', 'Gram/Square Millimeter (g/mm²)',
  'Gram/Square Micrometer (g/µm²)', 'Gram/Square Nanometer (g/nm²)', 'Gram/Square Mile (g/mi²)', 'Gram/Square Yard (g/yd²)',
  'Gram/Square Foot (g/ft²)', 'Gram/Square Inch (g/in²)', 'Kilogram/Square Kilometer (kg/km²)',
  'Kilogram/Square Meter (kg/m²)', 'Kilogram/Square Decimeter (kg/dm²)', 'Kilogram/Square Centimeter (kg/cm²)',
  'Kilogram/Square Millimeter (kg/mm²)', 'Kilogram/Square Micrometer (kg/µm²)',
  'Kilogram/Square Nanometer (kg/nm²)', 'Kilogram/Square Mile (kg/mi²)', 'Kilogram/Square Yard (kg/yd²)',
  'Kilogram/Square Foot (kg/ft²)', 'Kilogram/Square Inch (kg/in²)', 'Kilopound/Square Kilometer (klb/km²)',
  'Kilopound/Square Meter (klb/m²)', 'Kilopound/Square Decimeter (klb/dm²)',
  'Kilopound/Square Centimeter (klb/cm²)', 'Kilopound/Square Millimeter (klb/mm²)',
  'Kilopound/Square Micrometer (klb/µm²)', 'Kilopound/Square Nanometer (klb/nm²)', 'Kilopound/Square Mile (klb/mi²)',
  'Kilopound/Square Yard (klb/yd²)', 'Kilopound/Square Foot (klb/ft²)', 'Kilopound/Square Inch (klb/in²)',
  'Microgram/Square Kilometer (µg/km²)', 'Microgram/Square Meter (µg/m²)', 'Microgram/Square Decimeter (µg/dm²)',
  'Microgram/Square Centimeter (µg/cm²)', 'Microgram/Square Millimeter (µg/mm²)',
  'Microgram/Square Micrometer (µg/µm²)', 'Microgram/Square Nanometer (µg/nm²)', 'Microgram/Square Mile (µg/mi²)',
  'Microgram/Square Yard (µg/yd²)', 'Microgram/Square Foot (µg/ft²)', 'Microgram/Square Inch (µg/in²)',
  'Milligram/Square Kilometer (mg/km²)', 'Milligram/Square Meter (mg/m²)', 'Milligram/Square Decimeter (mg/dm²)',
  'Milligram/Square Centimeter (mg/cm²)', 'Milligram/Square Millimeter (mg/mm²)',
  'Milligram/Square Micrometer (mg/µm²)', 'Milligram/Square Nanometer (mg/nm²)', 'Milligram/Square Mile (mg/mi²)',
  'Milligram/Square Yard (mg/yd²)', 'Milligram/Square Foot (mg/ft²)', 'Milligram/Square Inch (mg/in²)',
  'Ounce/Square Kilometer (oz/km²)', 'Ounce/Square Meter (oz/m²)', 'Ounce/Square Decimeter (oz/dm²)',
  'Ounce/Square Centimeter (oz/cm²)', 'Ounce/Square Millimeter (oz/mm²)', 'Ounce/Square Micrometer (oz/µm²)',
  'Ounce/Square Nanometer (oz/nm²)', 'Ounce/Square Mile (oz/mi²)', 'Ounce/Square Yard (oz/yd²)', 'Ounce/Square Foot (oz/ft²)',
  'Ounce/Square Inch (oz/in²)', 'Pound/Square Kilometer (lb/km²)', 'Pound/Square Meter (lb/m²)',
  'Pound/Square Decimeter (lb/dm²)', 'Pound/Square Centimeter (lb/cm²)', 'Pound/Square Millimeter (lb/mm²)',
  'Pound/Square Micrometer (lb/µm²)', 'Pound/Square Nanometer (lb/nm²)', 'Pound/Square Mile (lb/mi²)',
  'Pound/Square Yard (lb/yd²)', 'Pound/Square Foot (lb/ft²)', 'Pound/Square Inch (lb/in²)', 'Poundal/Square Kilometer (pdl/km²)',
  'Poundal/Square Meter (pdl/m²)', 'Poundal/Square Decimeter (pdl/dm²)', 'Poundal/Square Centimeter (pdl/cm²)',
  'Poundal/Square Millimeter (pdl/mm²)', 'Poundal/Square Micrometer (pdl/µm²)',
  'Poundal/Square Nanometer (pdl/nm²)', 'Poundal/Square Mile (pdl/mi²)', 'Poundal/Square Yard (pdl/yd²)',
  'Poundal/Square Foot (pdl/ft²)', 'Poundal/Square Inch (pdl/in²)', 'Slug/Square Kilometer (sl/km²)',
  'Slug/Square Meter (sl/m²)', 'Slug/Square Decimeter (sl/dm²)', 'Slug/Square Centimeter (sl/cm²)',
  'Slug/Square Millimeter (sl/mm²)', 'Slug/Square Micrometer (sl/µm²)', 'Slug/Square Nanometer (sl/nm²)',
  'Slug/Square Mile (sl/mi²)', 'Slug/Square Yard (sl/yd²)', 'Slug/Square Foot (sl/ft²)', 'Slug/Square Inch (sl/in²)',
  'Ton/Square Kilometer (tn/km²)', 'Ton/Square Meter (tn/m²)', 'Ton/Square Decimeter (tn/dm²)',
  'Ton/Square Centimeter (tn/cm²)', 'Ton/Square Millimeter (tn/mm²)', 'Ton/Square Micrometer (tn/µm²)',
  'Ton/Square Nanometer (tn/nm²)', 'Ton/Square Mile (tn/mi²)', 'Ton/Square Yard (tn/yd²)', 'Ton/Square Foot (tn/ft²)',
  'Ton/Square Inch (tn/in²)'];

const momInInitValue1 = "34";
const momInInitValue2 = "109";

//based on 1 gram/square meter
const momInConvArray = [0.000005, 5, 500, 50000, 5000000, 5e12, 5e18, 1.9305107927e-6, 6, 53.8, 7750, 1, 1000000, 1e8,
  1e10, 1e12, 1e18, 1e24, 0.3861021585, 1200000, 10760000, 1.55e9, 0.00001543, 15.43, 1543, 154300, 15430000,
  1.543e13, 1.543e19, 5.9575563063e-6, 18.516, 166.0268, 23916.5, 0.000001, 1, 100, 10000, 1000000, 1e12, 1e18,
  3.8610215854e-7, 1.2, 10.76, 1550, 1e-9, 0.001, 0.1, 10, 1000, 1e9, 1e15, 3.8610215854e-10, 0.0012, 0.01076, 1.55,
  2.2046226218e-12, 2.2046226218e-6, 2.2046226218e-4, 0.022046226218, 2.2046226218, 2.2046226218e6, 2.2046226218e12,
  8.5120955307e-13, 2.6455471462e-6, 2.3721739411e-5, 3.4171650639e-3, 1, 1000000, 1e8, 1e10, 1e12, 1e18, 1e24,
  0.38610215854, 1200000, 10760000, 1.55e9, 0.001, 1000, 100000, 1e7, 1e9, 1e15, 1e21, 0.00038610215854, 1200, 10760,
  1550000, 3.527396195e-8, 0.03527396195, 3.527396195, 352.7396195, 35273.96195, 3527396195, 3527396195,
  1.3619352849e-8, 0.04232875434, 0.3795478306, 54.6746410218, 2.2046226218e-9, 0.0022046226218, 0.22046226218,
  22.046226218, 2204.6226218, 2.2046226218e9, 2.2046226218e15, 8.5120955307e-10, 0.002645547146, 0.02372173941,
  3.4171650639, 7.0988848425e-8, 0.07098884842, 7.0988848425, 709.88848425, 7.0988848425e4, 7.0988848425e10,
  7.0988848425e13, 2.7408947609e-8, 0.08518661811, 0.763840009, 110.0327151, 6.8521779648e-11, 6.8521779648e-5,
  0.006852177965, 0.6852177965, 68.52177965, 6.852177965e7, 6.852177965e13, 2.6456407029e-11, 8.2226135577e-5,
  7.3729434901e-4, 0.1062087585, 1e-12, 0.000001, 0.0001, 0.01, 1, 1000000, 1e12, 3.8610215854e-13, 0.0000012,
  0.00001076, 0.00155];

window.convArray = momInConvArray;

function clearAngle() {
  selectedUnit1.value = momInInitValue1;
  selectedUnit2.value = momInInitValue2;
  originalUnit1 = momInInitValue1;
  originalUnit2 = momInInitValue2;
}

let option = "";
for(let i=0;i<momInArray.length;i++){
  if (i === parseInt(momInInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + momInArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + momInArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<momInArray.length;j++){
  if (j === parseInt(momInInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + momInArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + momInArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;