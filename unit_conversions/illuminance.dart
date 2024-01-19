const List<String> illuminanceArray = ['Candela Steradian/Meter² (cd·sr/m²)', 'Centimeter Candle (cm·c)',
  'Flame (flame)', 'Foot Candle (ft·c)', 'Lumen/Centimeter² (lm/cm²)', 'Lumen/Foot² (lm/ft²)',
  'Lumen/Meter² (lm/m²)', 'Lux (lx)', 'Meter Candle (m·c)', 'Nox (nx)', 'Phot (ph)',
  'Watt/Centimeter² (W/cm²)'];

String illuminanceInitValue1 = 'Lux (lx)';
String illuminanceInitValue2 = 'Meter Candle (m·c)';

//based on 1 lux
const List<double> illuminanceConvArray = [1, 0.0001, 0.02322576, 0.092903039997, 0.0001,
  0.092903039997, 1, 1, 1, 1000, 0.0001, 1.4641288433e-7];