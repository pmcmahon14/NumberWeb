const List<String> percentConcArray = ['Percentage (%)', 'Part per Million (ppm)', 'Part per Billion (ppb)',
  'Part per Trillion (ppt)', 'Part per Quadrillion (ppq)', 'Gram/Kilogram (g/kg)', 'Gram/Ton (g/ton)',
  'Milligram/Kilogram (mg/kg)', 'Milligram/Gram (mg/g)', 'Milliliter/Cubic Meter (ml/m³)',
  'Milliliter/Liter (ml/l)', 'Microgram/Kilogram (µg/kg)', 'Microgram/Gram (µg/g)',
  'Microgram/Microgram (µg/µg)', 'Microliter/Cubic Meter (µl/m³)', 'Microliter/Liter (ul/l)',
  'nanogram/Kilogram (ng/kg)', 'nanogram/Gram (ng/g)', 'Nanogram/Microgram (ng/µg)',
  'Nanoliter/Microliter (nl/µl)', 'Whole Number'];

String percentConcInitValue1 = 'Percentage (%)';
String percentConcInitValue2 = 'Part per Million (ppm)';

//based on 1 percent
var percentConcConvArray = [1, 10000, 1e7, 1e10, 1e13, 10, 10000, 10000, 10, 10000, 10,
  1e7, 10000, 10, 1e7, 10000, 1e10, 1e7, 10, 10, 0.01];