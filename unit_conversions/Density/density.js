const densityArray = ['Earth Density (ρ)', 'Gamma/Cubic Inch(Γ/in³)', 'Gamma/Cubic Millimeter(Γ/mm³)',
  'Gamma/Microliter(Γ/µl)', 'Gamma/Milliliter(Γ/ml)', 'Grain/Cubic Feet(gr/ft³)', 'Grain/Cubic Inch(gr/in³)',
  'Grain/Cubic Yard(gr/yd³)', 'Grain/Gallon (UK)(gr/gal)', 'Grain/Gallon (US)(gr/gal)', 'Grain/Liter(gr/l)',
  'Gram/Cubic Centimeter(g/cm³)', 'Gram/Cubic Meter(g/m³)', 'Gram/Cubic Millimeter(g/mm³)', 'Gram/Liter(g/l)',
  'Gram/Microliter(g/µl)', 'Gram/Milliliter(g/ml)', 'Kilogram/Cubic Centimeter(kg/cm³)',
  'Kilogram/Cubic Kilometer(kg/km³)', 'Kilogram/Cubic Meter(kg/m³)', 'Kilogram/Liter(kg/l)',
  'Kilogram/Milliliter(kg/ml)', 'Microgram/Cubic Millimeter(µg/mm³)', 'Microgram/Liter(µg/l)',
  'Microgram/Microliter(µg/µl)', 'Milligram/Cubic Centimeter(mg/cm³)', 'Milligram/Cubic Meter(mg/m³)',
  'Milligram/Cubic Millimeter(mg/mm³)', 'Milligram/Liter(mg/l)', 'Milligram/Milliliter(mg/ml)',
  'Ounce/Bushel (UK)(oz/bu)', 'Ounce/Bushel (US)(oz/bu)', 'Ounce/Cubic Feet(oz/ft³)', 'Ounce/Cubic Inch(oz/in³)',
  'Ounce/Cubic Yard(oz/yd³)', 'Ounce/Gallon (UK)(oz/gal)', 'Ounce/Gallon (US)(oz/gal)', 'Ounce/Liter(oz/l)',
  'Parts per Billion (ppb)', 'Parts per Million (ppm)', 'Percent (%)', 'Pound/Bushel (UK)(lb/bu)',
  'Pound/Bushel (US)(lb/bu)', 'Pound/Cubic Feet(lb/ft³)', 'Pound/Cubic Inch(lb/in³)', 'Pound/Cubic Yard(lb/yd³)',
  'Pound/Gallon (UK)(lb/gal)', 'Pound/Gallon (US)(lb/gal)', 'Pound/Liter(lb/l)', 'Poundal/Cubic Feet(pdl/ft³)',
  'Poundal/Cubic Inch(pdl/in³)', 'Poundal/Cubic Yard(pdl/yd³)', 'Poundal/Liter(pdl/l)',
  'PSI/1000 Feet (psi/1000ft)', 'Slug/Cubic Feet(sl/ft³)', 'Slug/Cubic Inch(sl/in³)', 'Slug/Cubic Meter(sl/m³)',
  'Slug/Cubic Yard(sl/yd³)', 'Slug/Gallon (UK)(sl/gal)', 'Slug/Gallon (US)(sl/gal)',
  'Ton (Short)/Cubic Feet(tn/ft³)', 'Ton (Short)/Cubic Inch(tn/in³)', 'Ton (Short)/Cubic Yard(tn/yd³)',
  'Ton (Short)/Gallon (UK)(tn/gal)', 'Ton (Short)/Gallon (US)(tn/gal)', 'Ton (Long)/Cubic Feet(tn/ft³)',
  'Ton (Long)/Cubic Inch(tn/in³)', 'Ton (Long)/Cubic Yard(tn/yd³)', 'Ton (Long)/Gallon (UK)(tn/gal)',
  'Ton (Long)/Gallon (US)(tn/gal)', 'Ton (Metric)/Cubic Kilometer(t/km³)', 'Ton (Metric)/Cubic Meter(t/m³)',
  'Ton (Metric)/Cubic Yard(t/yd³)', 'Troy Ounce/Cubic Feet(oz-t/ft³)', 'Troy Ounce/Cubic Inch(oz-t/in³)',
  'Troy Ounce/Cubic Yard(oz-t/yd³)', 'Troy Ounce/Gallon (UK)(oz-t/gal)', 'Troy Ounce/Gallon (US)(oz-t/gal)',
  'Water Density (H2O)'];

const densityInitValue1 = "11";
const densityInitValue2 = "39";

//based on 1 grain/cubic feet
const densityConvArray = [4.1470676161032e-7, 37.5, 0.0022883519106, 0.0022883519106, 2.2883519106, 1,
  5.7870370370e-4, 27, 0.16054365324, 0.13368056318, 0.035314666721, 2.2883519106e-6, 2.29, 2.2883519106e-9,
  0.0022883519106, 2.2883519106e-9, 2.2883519106e-6, 2.2883519106e-9, 2288351.9106, 0.0022883519106,
  2.2883519106e-6, 2.2883519106e-9,  0.0022883519106, 2288.3519106, 0.0022883519106, 0.0022883519106, 2288.3519106,
  2.2883519106e-6, 2.22883519106, 0.0022883519106, 0.0029356553735, 0.002844470886, 0.0022857142857, 1.3227513227e-6,
  0.061714285714, 0.0003669569217, 0.00030555557299, 8.0719238221e-5, 2288.35, 2.29, 0.00022883519106,
  0.002844470886, 0.00017777943038, 0.00014285714286, 8.2671957672e-8, 0.0038571428571, 2.2934807605e-5,
  1.9097223312e-5, 5.0449523887841e-6, 0.0046, 2.6620370371e-6, 0.1242, 0.00016244746692, 0.00099206349206,
  4.4401366324e-6, 2.5695235141e-9, 1.5680194537e-4, 0.00011988368908, 7.1283575584e-7, 5.9355996563e-7,
  7.1428571429e-8, 4.1335978836e-11, 1.9285714286e-6, 1.1469127759e-8, 9.548611656e-9, 6.3775510204e-8,
  3.6907123961e-11, 1.7219387755e-6, 1.0238753395e-8, 8.5255461214e-9, 2288.3519106, 2.2883519106e-6, 1.74957057e-6,
  0.0020833333869, 1.2056327471e-6, 0.056250001447, 0.00033446595284, 0.00027850118046, 2.2883519106e-6];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = densityConvArray;
})

function clearAngle() {
  selectedUnit1.value = densityInitValue1;
  selectedUnit2.value = densityInitValue2;
  originalUnit1 = densityInitValue1;
  originalUnit2 = densityInitValue2;
}