const List<String> specVolArray = ['Cubic Meter/Kilogram (cm³/kg)', 'Cubic Centimeter/Gram (cm³/g)',
  'Cubic Foot/Kilogram (ft³/kg)', 'Cubic Foot/Pound (ft³/lb)', 'Gallon (UK)/Pound (gal/lb)',
  'Gallon (US)/Pound (gal/lb)', 'Liter/Kilogram (l/kg)', 'Liter/Gram (l/g)'];

String specVolInitValue1 = 'Cubic Meter/Kilogram (cm³/kg)';
String specVolInitValue2 = 'Liter/Kilogram (l/kg)';

//based on 1 cubic meter/kilogram
const List<double> specVolConvArray = [1, 1000, 35.31466672, 16.01846353, 99.77637365, 119.82643593, 1000, 1];