const List<String> linearMassDensityArray = ['Gram/Meter(g/m)', 'Gram/Centimeter(g/cm)', 'Gram/Millimeter(g/mm)',
  'Gram/Yard(g/yd)', 'Gram/Foot(g/ft)', 'Gram/Inch(g/in)', 'Kilogram/Meter(kg/m)', 'Kilogram/Centimeter(kg/cm)',
  'Kilogram/Millimeter(kg/mm)', 'Kilogram/Yard(kg/yd)', 'Kilogram/Foot(kg/ft)', 'Kilogram/Inch(kg/in)',
  'Ounce/Meter(oz/m)', 'Ounce/Centimeter(oz/cm)', 'Ounce/Millimeter(oz/mm)', 'Ounce/Yard(oz/yd)', 'Ounce/Foot(oz/ft)',
  'Ounce/Inch(oz/in)', 'Pound/Meter(lb/m)', 'Pound/Centimeter(lb/cm)', 'Pound/Millimeter(lb/mm)', 'Pound/Yard(lb/yd)',
  'Pound/Foot(lb/ft)', 'Pound/Inch(lb/in)'];

String linearMassDensityInitValue1 = 'Kilogram/Meter(kg/m)';
String linearMassDensityInitValue2 = 'Pound/Foot(lb/ft)';

//based on 1 kilogram/meter
const List<double> linearMassDensityConvArray = [1000, 10, 1, 914.4, 304.8, 25.4, 1, 0.01, 0.001, 0.9144, 0.3048,
  0.0254, 35.27396195, 0.3527396195, 0.03527396195, 32.25, 10.75, 0.8959586335, 2.2046226218, 0.02204622622,
  0.002204622622, 2.02, 0.6719689751, 0.05599741459];