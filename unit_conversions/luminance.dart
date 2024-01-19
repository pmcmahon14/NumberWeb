const List<String> luminanceArray = ['Apostlib (asb)', 'Blondel (blondel)', 'Bril (bril)',
  'Candela/Square Centimeter (cd/cm²)', 'Candela/Square Foot (cd/ft²)', 'Candela/Square Inch (cd/in²)',
  'Candela/Square Meter (cd/m²)', 'Foot-Lambert (fL)', 'Kilocandela/Square Meter (kcd/m²)', 'Lambert (L)',
  'Lumen/Square Foot/Steradian (lm/ft²·sr)', 'Lumen/Square Meter/Steradian (lm/m²·sr)',
  'Lumen/Square Centimeter/Steradian (lm/cm²·sr)', 'Millilambert (mL)', 'Millinit (mnt)', 'Nit (nt)',
  'Skot (sk)', 'Stlib (sb)'];

String luminanceInitValue1 = 'Candela/Square Meter (cd/m²)';
String luminanceInitValue2 = 'Candela/Square Centimeter (cd/cm²)';

//based on 1 candela/square meter
const List<double> luminanceConvArray = [3.1415926536, 3.1415926536, 3.1415926536e7, 0.0001, 0.09290304,
  0.00064516, 1, 0.2918855809, 0.001, 0.0003141592654, 0.09290304, 1, 0.0001, 0.3141592654, 1000,
  1, 3141.59, 0.0001];