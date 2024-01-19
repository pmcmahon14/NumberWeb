const List<String> surfCuDenArray = ['Abampere/Square Meter (abA/m²)', 'Abampere/Square Centimeter (abA/cm²)',
  'Abampere/Square Millimeter (abA/mm²)', 'Abampere/Square Micrometer (abA/µm²)', 'Abampere/Square Yard (abA/yd²)',
  'Abampere/Square Foot (abA/ft²)', 'Abampere/Square Inch (abA/in²)', 'Ampere/Square Meter (A/m²)',
  'Ampere/Square Centimeter (A/cm²)', 'Ampere/Square Millimeter (A/mm²)', 'Ampere/Square Micrometer (A/µm²)',
  'Ampere/Square Yard (A/yd²)', 'Ampere/Square Foot (A/ft²)', 'Ampere/Square Inch (A/in²)',
  'Biot/Square Meter (Bi/m²)', 'Biot/Square Centimeter (Bi/cm²)', 'Biot/Square Millimeter (Bi/mm²)',
  'Biot/Square Micrometer (Bi/µm²)', 'Biot/Square Yard (Bi/yd²)', 'Biot/Square Foot (Bi/ft²)',
  'Biot/Square Inch (Bi/in²)', 'Kiloampere/Square Meter (kA/m²)', 'Kiloampere/Square Centimeter (kA/cm²)',
  'Kiloampere/Square Millimeter (kA/mm²)', 'Kiloampere/Square Micrometer (kA/µm²)',
  'Kiloampere/Square Yard (kA/yd²)', 'Kiloampere/Square Foot (kA/ft²)', 'Kiloampere/Square Inch (kA/in²)',
  'Megaampere/Square Meter (MA/m²)', 'Megaampere/Square Centimeter (MA/cm²)',
  'Megaampere/Square Millimeter (MA/mm²)', 'Megaampere/Square Micrometer (MA/µm²)',
  'Megaampere/Square Yard (MA/yd²)', 'Megaampere/Square Foot (MA/ft²)', 'Megaampere/Square Inch (MA/in²)',
  'Microampere/Square Meter (µA/m²)', 'Microampere/Square Centimeter (µA/cm²)',
  'Microampere/Square Millimeter (µA/mm²)', 'Microampere/Square Micrometer (µA/µm²)',
  'Microampere/Square Yard (µA/yd²)', 'Microampere/Square Foot (µA/ft²)', 'Microampere/Square Inch (µA/in²)',
  'Milliampere/Square Meter (mA/m²)', 'Milliampere/Square Centimeter (mA/cm²)',
  'Milliampere/Square Millimeter (mA/mm²)', 'Milliampere/Square Micrometer (mA/µm²)',
  'Milliampere/Square Yard (mA/yd²)', 'Milliampere/Square Foot (mA/ft²)', 'Milliampere/Square Inch (mA/in²)',
  'Statampere/Square Meter (stA/m²)', 'Statampere/Square Centimeter (stA/cm²)',
  'Statampere/Square Millimeter (stA/mm²)', 'Statampere/Square Micrometer (stA/µm²)',
  'Statampere/Square Yard (stA/yd²)', 'Statampere/Square Foot (stA/ft²)', 'Statampere/Square Inch (stA/in²)'];

String surfCuDenInitValue1 = 'Ampere/Square Meter (A/m²)';
String surfCuDenInitValue2 = 'Ampere/Square Foot (A/ft²)';

//based on 1 ampere/square meter
const List<double> surfCuDenConvArray = [0.1, 0.00001, 1e-7, 1e-13, 0.083612736, 0.009290304, 0.000064516, 1,
  0.0001, 0.000001, 1e-12, 0.83612736, 0.09290304, 0.00064516, 0.1, 0.00001, 1e-7, 1e-13, 0.083612736, 0.009290304,
  0.000064516, 0.001, 1e-7, 1e-9, 1e-15, 0.00083612736, 0.00009290304, 6.4516e-7, 0.000001, 1e-10, 1e-12, 1e-18,
  8.3612736e-7, 9.290304e-8, 6.4516e-10, 1000000, 100, 1, 0.000001, 836127.36, 92903.04, 645.16, 1000, 0.1, 0.001,
  1e-9, 836.12736, 92.90304, 0.64516, 2997924536.8, 299792.45368, 2997.9245368, 0.0029979245368, 2506646728.5,
  278516303.16, 1934140.9942];