const List<String> elecRyArray = ['Abohm/Meter(abΩ/m)', 'Abohm/Kilometer(abΩ/km)',
  'Abohm/Centimeter(abΩ/cm)', 'Abohm/Millimeter(abΩ/mm)', 'Abohm/Micrometer(abΩ/µm)', 'Abohm/Nanometer(abΩ/nm)',
  'Kiloohm/Meter(kΩ/m)', 'Kiloohm/Kilometer(kΩ/km)', 'Kiloohm/Centimeter(kΩ/cm)',
  'Kiloohm/Millimeter(kΩ/mm)', 'Kiloohm/Micrometer(kΩ/µm)', 'Kiloohm/Nanometer(kΩ/nm)', 'Kiloohm/Mile(kΩ/mi)',
  'Kiloohm/Yard(kΩ/yd)', 'Kiloohm/Foot(kΩ/ft)', 'Kiloohm/Inch(kΩ/in)', 'Megaohm/Meter(MΩ/m)',
  'Megaohm/Kilometer(MΩ/km)', 'Megaohm/Centimeter(MΩ/cm)', 'Megaohm/Millimeter(MΩ/mm)',
  'Megaohm/Micrometer(MΩ/µm)', 'Megaohm/Nanometer(MΩ/nm)', 'Megaohm/Mile(MΩ/mi)', 'Megaohm/Yard(MΩ/yd)',
  'Megaohm/Foot(MΩ/ft)', 'Megaohm/Inch(MΩ/in)', 'Microohm/Meter(µΩ/m)', 'Microohm/Kilometer(µΩ/km)',
  'Microohm/Centimeter(µΩ/cm)', 'Microohm/Millimeter(µΩ/mm)', 'Microohm/Micrometer(µΩ/µm)',
  'Microohm/Nanometer(µΩ/nm)', 'Milliohm/Meter(mΩ/m)', 'Milliohm/Kilometer(mΩ/km)', 'Milliohm/Centimeter(mΩ/cm)',
  'Milliohm/Millimeter(mΩ/mm)', 'Milliohm/Micrometer(mΩ/µm)', 'Milliohm/Nanometer(mΩ/nm)',
  'Ohm/Meter(Ω/m)', 'Ohm/Kilometer(Ω/km)', 'Ohm/Centimeter(Ω/cm)', 'Ohm/Millimeter(Ω/mm)',
  'Ohm/Micrometer(Ω/µm)', 'Ohm/Nanometer(Ω/nm)', 'Ohm/Yard(Ω/yd)', 'Ohm/Foot(Ω/ft)',
  'Ohm/Inch(Ω/in)', 'Meter/Siemens(m/S)', 'Kilometer/Siemens(km/S)', 'Centimeter/Siemens(cm/S)',
  'Millimeter/Siemens(mm/S)', 'Micrometer/Siemens(µm/S)', 'Nanometer/Siemens(nm/S)',
  'Yard/Siemens(yd/S)', 'Foot/Siemens(ft/S)', 'Inch/Siemens(in/S)', 'Statohm/Meter(stΩ/m)',
  'Statohm/Kilometer(stΩ/km)', 'Statohm/Centimeter(stΩ/cm)', 'Statohm/Millimeter(stΩ/mm)',
  'Statohm/Micrometer(stΩ/µm)', 'Statohm/Nanometer(stΩ/nm)', 'Volt/Ampere/Meter(V/A/m)', 'Volt/Ampere/Kilometer(V/A/km)',
  'Volt/Ampere/Centimeter(V/A/cm)', 'Volt/Ampere/Millimeter(V/A/mm)', 'Volt/Ampere/Micrometer(V/A/µm)',
  'Volt/Ampere/Nanometer(V/A/nm)', 'Volt/Ampere/Yard(V/A/yd)',
  'Volt/Ampere/Foot(V/A/ft)', 'Volt/Ampere/Inch(V/A/in)'];

//siemens is reciprocal
//based on 1 ohm meter
String elecRyInitValue1 = 'Ohm/Meter(Ω/m)';
String elecRyInitValue2 = 'Ohm/Kilometer(Ω/km)';

const List<double> elecRyConvArray = [1e9, 1000000, 1e11, 1e12, 1e15, 1e18,
  0.001, 0.000001, 0.1, 1, 1000, 1000000, 6.2137119224e-7, 0.0010936132983, 0.003280839895, 0.03937007874,
  0.000001, 1e-9, 0.0001, 0.001, 1, 1000, 6.2137119224e-10, 1.0936132983e-6, 3.280839895e-6, 3.937007874e-5,
  1000000, 1000, 1e8, 1e9, 1e12, 1e15,
  1000, 1000, 100000, 1000000, 1e9, 1e12,
  1, 0.001, 100, 1000, 1000000, 1e9, 1.09, 3.28, 39.37,
  1, 0.001, 100, 1000, 1000000, 1e9, 1.09, 3.28, 39.37,
  1.1126500297e-12, 1.1126500297e-15, 1.11265002973e-10, 1.1126500297e-9, 1.1126500297e-6, 0.0011126500297,
  1, 0.001, 100, 1000, 1000000, 1e9, 1.09, 3.28, 39.37];