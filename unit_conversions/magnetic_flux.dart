const List<String> magFluxArray = ['Gauss/Square Meter(G/m²)', 'Gauss/Square Centimeter(G/cm²)',
  'Gauss/Square Micrometer(G/µm²)', 'Gauss/Square Yard(G/yd²)', 'Gauss/Square Foot(G/ft²)',
  'Gauss/Square Inch(G/in²)', 'Kiloline (kline)', 'Kiloweber (kWb)', 'Line (line)', 'Magnetic Flux Quantum (Φ0)',
  'Maxwell (Mx)', 'Megaline (Mline)', 'Megaweber (MWb)', 'Microweber (µW)', 'Milliweber (mW)',
  'Tesla/Square Meter(T/m²)', 'Tesla/Square Centimeter(T/cm²)', 'Tesla/Square Micrometer(T/µm²)',
  'Tesla/Square Yard(T/yd²)', 'Tesla/Square Foot(T/ft²)', 'Tesla/Square Inch(T/in²)', 'Unit Pole (P)',
  'Volt Second (V·s)', 'Weber (W)'];

String magFluxInitValue1 = 'Weber (W)';
String magFluxInitValue2 = 'Volt Second (V·s)';

//based on 1 weber
var magFluxConvArray = [10000, 1e8, 1e16, 11959.9, 107639.1, 15500031, 100000, 0.001, 1e8, 4.8359784842e14,
  1e8, 100, 0.000001, 1000000, 1000, 1, 10000, 1e12, 1.2, 10.76, 1550, 7957747.15, 1, 1];