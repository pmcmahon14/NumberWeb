const List<String> volumeArray = ['Acre Feet (ac-ft)', 'Acre Inch (ac-in)', 'Attoliter (al)',
  'Barrel (Beer) (bbl)','Barrel (Dry, US) (bbl)', 'Barrel (Gasoline, US) (bbl)', 'Barrel (Oil) (bbl)',
  'Barrel (UK) (bbl)',
  'Barrel (US) (bbl)', 'Barrel (Wine, UK) (bbl)', 'Board Feet (BF)', 'Bucket (UK) (bucket)',
  'Bucket (US) (bucket)', 'Bushel (UK) (bu)', 'Bushel (US) (bu)', 'Centiliter (cl)', 'Cord (cord)',
  'Cubic Centimeter (cm³)', 'Cubic Cubit (cubit³)', 'Cubic Dekameter (dkm³)', 'Cubic Decimeter (dm³)',
  'Cubic Foot (ft³)', 'Cubic Inch (in³)', 'Cubic Kilometer (km³)', 'Cubic Meter (m³)', 'Cubic Micrometer (µm³)',
  'Cubic Mile (mi³)', 'Cubic Millimeter (mm³)', 'Cubic Nanometer (nm³)', 'Cubic Yard (yd³)', 'Cup (Canada) (C)',
  'Cup (Metric) (C)', 'Cup (UK) (C)', 'Cup (US) (C)', 'Deciliter (dl)', 'Decistere (dst)', 'Dekaliter (dkl)',
  'Dekastere (dkst)', 'Dessertspoon (UK) (dstspn)', 'Dessertspoon (US) (dstspn)', 'Dram (dr)', 'Drop (gt)',
  'Drum (drum)', 'Exaliter (El)', 'Femtoliter (fl)', 'Fifth (fifth)', 'Gallon (Dry, US) (gal)',
  'Gallon (Kilo) (gal)',
  'Gallon (UK) (gal)', 'Gallon (US) (gal)', 'Gigaliter (Gl)', 'Gill (UK) (gi)', 'Gill (US) (gi)',
  'Hectare Meter (ha-m)', 'Hectoliter (hl)', 'Hogshead (UK) (hhd)', 'Hogshead (US) (hhd)',
  'Hundred Cubic Feet (HCF)', 'Jigger (jigger)', 'Kiloliter (kl)', 'Liter (l)', 'Megaliter (Ml)',
  'Microliter (µl)', 'Milliliter (ml)', 'Minim (UK) (min)', 'Minim (US) (min)', 'Nanoliter (nm)',
  'Ounce (UK) (oz)', 'Ounce (US) (oz)', 'Peck (UK) (peck)', 'Peck (US) (peck)', 'Petaliter (Pl)',
  'Picoliter (pl)',
  'Pint (Dry, US) (pt)', 'Pint (UK) (pt)', 'Pint (US) (pt)', 'Pipe (UK) (pipe)', 'Pipe (US) (pipe)',
  'Pony (pony)', 'Quart (Dry, US) (qt)', 'Quart (UK) (qt)', 'Quart (US) (qt)', 'Quarter (UK) (qtr)',
  'Register Ton (reg tn)', 'Scruple (scruple)', 'Shot (shot)', 'Stere (st)', 'Tablespoon (Metric) (tbsp)',
  'Tablespoon (UK) (tbsp)', 'Tablespoon (US) (tbsp)', 'Teaspoon (Metric) (tsp)', 'Teaspoon (UK) (tsp)',
  'Teaspoon (US) (tsp)', 'Teraliter (Tl)', 'Thousand Cubic Feet (MCF)', 'Tun (tun)'];

String volumeInitValue1 = 'Cubic Meter (m³)';
String volumeInitValue2 = 'Gallon (US) (gal)';

//based on 1 cubic meter
const List<double> volumeConvArray = [0.0008107132, 0.0097285582, 1e21, 8.52, 8.65, 6.29, 6.29, 6.11, 8.39, 6.98,
  423.78, 54.99, 52.83, 27.5, 28.38, 100000, 0.2758958338, 1000000, 6.94, 0.001, 1000, 35.31, 61023.74, 1e-9, 1,
  1e18, 2.3991275860e-10, 1000000000, 1e27, 1.31, 4399.38, 4000, 3519.51, 4226.75, 10000, 10, 100, 0.1, 140780.32,
  100000, 270512.19, 20000000, 4.8, 1e-15, 1e18, 1320.86, 227.02, 0.2641720373, 219.97, 264.17, 0.000001, 7039.02,
  8453.51, 0.0001, 10, 3.49, 4.19, 0.3531466672, 22222.22, 1, 1000, 0.001, 1000000000, 1000000, 16893604.08,
  16230730.88, 1000000000000, 35195.08, 33814.02, 109.98, 113.51, 1e-12, 1e15, 1816.17, 1759.75, 2113.38, 2.04, 2.1,
  33814.03, 908.08, 879.88, 1056.69, 3.44, 0.3531466672, 811536.54, 33814.03, 1, 66666.67, 70390.16, 67628.06,
  200000, 281560.64, 202884.14, 1e-9, 0.0353146667, 1.05];