const List<String> torqueArray = ['Dyne/Meter (dyn/m)', 'Dyne/Centimeter (dyn/cm)', 'Dyne/Millimeter (dyn/mm)',
  'Dyne/Micrometer (dyn/µm)', 'Dyne/Yard (dyn/yd)', 'Dyne/Foot (dyn/ft)', 'Dyne/Inch (dyn/in)',
  'Gram Force/Meter (gf/m)', 'Gram Force/Centimeter (gf/cm)', 'Gram Force/Millimeter (gf/mm)',
  'Gram Force/Micrometer (gf/µm)', 'Gram Force/Yard (gf/yd)', 'Gram Force/Foot (gf/ft)',
  'Gram Force/Inch (gf/in)', 'Kilogram Force/Meter (kgf/m)', 'Kilogram Force/Centimeter (kgf/cm)',
  'Kilogram Force/Millimeter (kgf/mm)', 'Kilogram Force/Micrometer (kgf/µm)', 'Kilogram Force/Yard (kgf/yd)',
  'Kilogram Force/Foot (kgf/ft)', 'Kilogram Force/Inch (kgf/in)', 'Kilonewton/Meter (kN/m)',
  'Kilonewton/Centimeter (kN/cm)', 'Kilonewton/Millimeter (kN/mm)', 'Kilonewton/Micrometer (kN/µm)',
  'Kilonewton/Yard (kN/yd)', 'Kilonewton/Foot (kN/ft)', 'Kilonewton/Inch (kN/in)',
  'Kilopound Force/Meter (kpf/m)', 'Kilopound Force/Centimeter (kpf/cm)', 'Kilopound Force/Millimeter (kpf/mm)',
  'Kilopound Force/Micrometer (kpf/µm)', 'Kilopound Force/Yard (kpf/yd)', 'Kilopound Force/Foot (kpf/ft)',
  'Kilopound Force/Inch (kpf/in)', 'Millinewton/Meter (mN/m)', 'Millinewton/Centimeter (mN/cm)',
  'Millinewton/Millimeter (mN/mm)', 'Millinewton/Micrometer (mN/µm)', 'Millinewton/Yard (mN/yd)',
  'Millinewton/Foot (mN/ft)', 'Millinewton/Inch (mN/in)', 'Newton/Meter (N/m)', 'Newton/Centimeter (N/cm)',
  'Newton/Millimeter (N/mm)', 'Newton/Micrometer (N/µm)', 'Newton/Yard (N/yd)', 'Newton/Foot (N/ft)',
  'Newton/Inch (N/in)', 'Ounce Force /Meter (ozf/m)', 'Ounce Force /Centimeter (ozf/cm)',
  'Ounce Force /Millimeter (ozf/mm)', 'Ounce Force /Micrometer (ozf/µm)', 'Ounce Force /Yard (ozf/yd)',
  'Ounce Force /Foot (ozf/ft)', 'Ounce Force /Inch (ozf/in)', 'Pound Force/Meter (lbf/m)',
  'Pound Force/Centimeter (lbf/cm)', 'Pound Force/Millimeter (lbf/mm)', 'Pound Force/Micrometer (lbf/µm)',
  'Pound Force/Yard (lbf/yd)', 'Pound Force/Foot (lbf/ft)', 'Pound Force/Inch (lbf/in)', 'Poundal/Meter (pdl/m)',
  'Poundal/Centimeter (pdl/cm)', 'Poundal/Millimeter (pdl/mm)', 'Poundal/Micrometer (pdl/µm)',
  'Poundal/Yard (pdl/yd)', 'Poundal/Foot (pdl/ft)', 'Poundal/Inch (pdl/in)', 'Ton Force/Meter (tnf/m)',
  'Ton Force/Centimeter (tnf/cm)', 'Ton Force/Millimeter (tnf/mm)', 'Ton Force/Micrometer (tnf/µm)',
  'Ton Force/Yard (tnf/yd)', 'Ton Force/Foot (tnf/ft)', 'Ton Force/Inch (tnf/in)'];

String torqueInitValue1 = 'Newton/Meter (N/m)';
String torqueInitValue2 = 'Gram Force/Meter (gf/m)';

//based on 1 newton/meter
const List<double> torqueConvArray = [100000, 10000000, 100000000, 1e+11, 109361.3, 328084, 3937007.9, 101.97,
  10197, 101970, 101970000, 111.5157176, 334.5472548, 4014.566956, 0.1019716213, 10.19716213, 101.9716213,
  101971.6213, 0.1115174907, 0.334552574, 4.014630786, 0.001, 0.1, 1, 1000, 0.001093613, 0.00328084, 0.039370079,
  0.0002248089431, 0.02248089431, 0.2248089431, 224.8089431, 0.0002458539827, 0.0007375621729, 0.00885074585,
  1000, 100000, 1000000, 1e+9, 1093.613, 3280.84, 39370.079, 1, 100, 1000, 1000000, 1.093613, 3.28084, 39.370079,
  3.596943, 359.6943, 3596.943, 3596943, 3.933663625, 11.80099447, 141.6119301, 0.2248089431, 22.48089431,
  224.8089431, 224808.9431, 0.2458539827, 0.7375621729, 8.85074585, 7.233014, 723.3014, 7233.014, 7233014,
  7.91011814, 23.73036165, 284.7643326, 0.0001019716213, 0.01019716213, 0.1019716213, 101.9716213, 0.0001115174907,
  0.000334552574, 0.004014630786];