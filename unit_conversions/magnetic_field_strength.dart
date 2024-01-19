const List<String> magFieldStrArray = ['Ampere/Meter (A/m)', 'Ampere/Yard (A/m)', 'Ampere/Foot (A/m)',
  'Ampere/Inch (A/m)', 'Kiloampere/Meter (kA/m)', 'Kiloampere/Yard (A/m)', 'Kiloampere/Foot (A/m)',
  'Kiloampere/Inch (A/m)', 'Oersted (Oe)'];

String magFieldStrInitValue1 = 'Ampere/Meter (A/m)';
String magFieldStrInitValue2 = 'Ampere/Foot (A/m)';

//based on 1 ampere/meter
const List<double> magFieldStrConvArray = [1, 0.9144, 0.3048, 0.0254, 0.001, 0.0009144, 0.0003048, 0.0000254,
  0.01256637];