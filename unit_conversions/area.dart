const List<String> areaArray = ['Acre (ac)', 'Are (a)', 'Barn (b)', 'Centiare (ca)', 'Circular Foot (circ ft)',
  'Circular Inch (circ in)', 'Decimal (decimal)', 'Dekare (dekare)', 'Hacienda (hacienda)', 'Hectare (ha)',
  'Point (point)', 'Section (section)', 'Square (sq)', 'Square Angstrom (A²)', 'Square Astronomical Units (au²)',
  'Square Centimeter (cm²)', 'Square Chain (ch²)', 'Square Cubit (cubit²)', 'Square Fathom (ftm²)',
  'Square Feet (ft²)', 'Square Fermi (f²)', 'Square Furlong (fur²)', 'Square Gigameter (Gm²)',
  'Square Hectometer (hm²)', 'Square Inch (in²)', 'Square League (league²)', 'Square Light Year (ly²)',
  'Square Meter (m²)', 'Square Microinch (µin²)', 'Square Micron (µ²)', 'Square Mil (mil²)', 'Square Mile (mi²)',
  'Square Millimeter (mm²)', 'Square Nautical League (nleague²)', 'Square Nautical Mile (nmi²)',
  'Square Parsec (pc²)', 'Square Pole (pole²)', 'Square Rod (rod²)', 'Square Thou (thou²)', 'Square Yard (yd²)',
  'Township (township)'];

String areaInitValue1 = 'Square Feet (ft²)';
String areaInitValue2 = 'Acre (ac)';

//based on 1 square foot
const List<double> areaConvArray = [2.2956820844e-5, 0.0009290304, 9.290304e26, 0.09290304, 1.27, 183.35,
  0.0022956820844, 9.2903101288e-5, 1.0368642857e-9, 9.290304e-6, 0.0022956820844, 3.5870064279e-8, 0.01,
  9.290304e18, 4.1512520173e-24, 929.0304, 0.00022956747098, 0.44444444444, 0.027777777778, 1, 9.290304e28,
  2.2956820844e-6, 9.290304e-20, 9.290304e-6, 144, 3.9855467953e-9, 1.037959113e-33, 0.09290304, 1.4399987297e14,
  9.290304e10, 1.44e8, 3.5870064279e-8, 92903.04, 3.0095769444e-9, 2.7086168606e-8, 9.7572788783e-35,
  0.0036730945822, 0.0036730804434, 1.44e8, 0.11111111111, 9.9638979357e-10];