const List<String> fuelConsArray = ['Kilometer/Cubic Yard(km/yd³)', 'Kilometer/Cubic Feet(km/ft³)',
  'Kilometer/Cubic Inch(km/in³)', 'Kilometer/Cubic Meter(km/m³)', 'Kilometer/Gallon (UK)(km/gal)',
  'Kilometer/Gallon (US)(km/gal)', 'Kilometer/Liter(km/l)', 'Kilometer/Quart (UK)(km/qt)',
  'Kilometer/Quart (US)(km/qt)', 'Meter/Cubic Yard(m/yd³)', 'Meter/Cubic Feet(m/ft³)',
  'Meter/Cubic Inch(m/in³)', 'Meter/Cubic Meter(m/m³)', 'Meter/Gallon (UK)(m/gal)', 'Meter/Gallon (US)(m/gal)',
  'Meter/Liter(m/l)', 'Meter/Quart (UK)(m/qt)', 'Meter/Quart (US)(m/qt)', 'Mile/Cubic Yard(mi/yd³)',
  'Mile/Cubic Feet(mi/ft³)', 'Mile/Cubic Inch(mi/in³)', 'Mile/Cubic Meter(mi/m³)', 'Mile/Gallon (UK)(mi/gal)',
  'Mile/Gallon (US)(mi/gal)', 'Mile/Liter(mi/l)', 'Mile/Quart (UK)(mi/qt)', 'Mile/Quart (US)(mi/qt)',
  'Nautical Mile/Cubic Yard(nmi/yd³)', 'Nautical Mile/Cubic Feet(nmi/ft³)', 'Nautical Mile/Cubic Inch(nmi/in³)',
  'Nautical Mile/Cubic Meter(nmi/m³)', 'Nautical Mile/Gallon (UK)(nmi/gal)', 'Nautical Mile/Gallon (US)(nmi/gal)',
  'Nautical Mile/Liter(nmi/l)', 'Nautical Mile/Quart (UK)(nmi/qt)', 'Nautical Mile/Quart (US)(nmi/qt)'];

String fuelConsInitValue1 = 'Mile/Gallon (US)(mi/gal)';
String fuelConsInitValue2 = 'Meter/Liter(m/l)';

//based on 1 mile/gallon (US)
const List<double> fuelConsConvArray = [325.05, 12.04, 0.0069668567453, 425.14, 1.93, 1.61, 0.42514368317,
  0.48318536166, 0.40233595748, 325045.67, 12038.73, 6.97, 425143.68, 1932.74, 1609.34, 425.14, 483.19,
  402.34, 201.97, 7.48, 0.004329004082, 264.17, 1.2, 1, 0.26417203728, 0.30023746424, 0.24999997358,
  175.51, 6.5, 0.0037618016983, 229.56, 1.04, 0.8689762419, 0.22955922417, 0.26089922336,
  0.21724403752];