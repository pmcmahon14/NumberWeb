const List<String> elecCyArray = ['Ampere/Volt/Kilometer(A/V/km)', 'Ampere/Volt/Meter(A/V/m)',
  'Ampere/Volt/Centimeter(A/V/cm)', 'Ampere/Volt/Millimeter(A/V/mm)', 'Ampere/Volt/Micrometer(A/V/µm)',
  'Ampere/Volt/Nanometer(A/V/nm)', 'Ampere/Volt/Yard(A/V/yd)', 'Ampere/Volt/Foot(A/V/ft)',
  'Ampere/Volt/Inch(A/V/in)', 'Kilosiemens/Kilometer(kS/km)', 'Kilosiemens/Meter(kS/m)',
  'Kilosiemens/Centimeter(kS/cm)', 'Kilosiemens/Millimeter(kS/mm)', 'Kilosiemens/Micrometer(kS/µm)',
  'Kilosiemens/Nanometer(kS/nm)', 'Kilosiemens/Yard(kS/yd)', 'Kilosiemens/Foot(kS/ft)',
  'Kilosiemens/Inch(kS/in)', 'Megasiemens/Kilometer(MS/km)', 'Megasiemens/Meter(MS/m)',
  'Megasiemens/Centimeter(MS/cm)', 'Megasiemens/Millimeter(MS/mm)', 'Megasiemens/Micrometer(MS/µm)',
  'Megasiemens/Nanometer(MS/nm)', 'Megasiemens/Yard(MS/yd)', 'Megasiemens/Foot(MS/ft)',
  'Megasiemens/Inch(MS/in)', 'Microsiemens/Kilometer(µS/km)', 'Microsiemens/Meter(µS/m)',
  'Microsiemens/Centimeter(µS/cm)', 'Microsiemens/Millimeter(µS/mm)', 'Microsiemens/Micrometer(µS/µm)',
  'Microsiemens/Nanometer(µS/nm)', 'Microsiemens/Yard(µS/yd)', 'Microsiemens/Foot(µS/ft)',
  'Microsiemens/Inch(µS/in)', 'Millisiemens/Kilometer(mS/km)', 'Millisiemens/Meter(mS/m)',
  'Millisiemens/Centimeter(mS/cm)', 'Millisiemens/Millimeter(mS/mm)', 'Millisiemens/Micrometer(mS/µm)',
  'Millisiemens/Nanometer(mS/nm)', 'Millisiemens/Yard(mS/yd)', 'Millisiemens/Foot(mS/ft)',
  'Millisiemens/Inch(mS/in)', 'Siemens/Kilometer(S/km)', 'Siemens/Meter(S/m)', 'Siemens/Centimeter(S/cm)',
  'Siemens/Millimeter(S/mm)', 'Siemens/Micrometer(S/µm)', 'Siemens/Nanometer(S/nm)', 'Siemens/Yard(S/yd)',
  'Siemens/Foot(S/ft)', 'Siemens/Inch(S/in)'];

String elecCyInitValue1 = 'Siemens/Meter(S/m)';
String elecCyInitValue2 = 'Siemens/Kilometer(S/km)';

//based on 1 siemens/meter
const List<double> elecCyConvArray = [1000, 1, 0.01, 0.001, 0.000001, 1e-9, 0.9144, 0.3048, 0.0254,
  1, 0.001, 0.00001, 0.000001, 1e-9, 1e-12, 0.0009144, 0.0003048, 0.0000254,
  0.001, 0.000001, 1e-8, 1e-9, 1e-12, 1e-15, 9.144e-7, 3.048e-7, 2.54e-8,
  1e9, 1000000, 10000, 1000, 1, 0.001, 914400, 304800, 25400,
  1000000, 1000, 10, 1, 0.001, 0.000001, 914.4, 304.8, 25.4,
  1000, 1, 0.01, 0.001, 0.000001, 1e-9, 0.9144, 0.3048, 0.0254];