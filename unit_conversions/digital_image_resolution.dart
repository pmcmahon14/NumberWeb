const List<String> dirArray = ['Pixel/Meter (px/m)', 'Pixel/Centimeter (px/cm)', 'Pixel/Millimeter (px/mm)',
  'Pixel/Micrometer (px/µm)', 'Pixel/Yard (px/yd)', 'Pixel/Foot (px/ft)', 'Pixel/Inch (px/in)'];

String dirInitValue1 = 'Pixel/Meter (px/m)';
String dirInitValue2 = 'Pixel/Centimeter (px/cm)';

//based on 1 pixel/meter
const List<double> dirConvArray = [1, 0.01, 0.001, 0.000001, 0.9144, 0.3048, 0.0254];