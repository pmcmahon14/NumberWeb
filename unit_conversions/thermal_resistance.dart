const List<String> thermResArray = ['Kelvin/Watt (°K/W)', 'Celsius/Watt (°C/W)', 'Rankine/Watt (°R/W)',
  'Fahrenheit/Watt (°F/W)', 'Kelvin Hour/BTU (IT) (°K·h/BTU)', 'Celsius Hour/BTU (IT) (°C·h/BTU)',
  'Rankine Hour/BTU (IT) (°R·h/BTU)', 'Fahrenheit Hour/BTU (IT) (°F·h/BTU)', 'Kelvin Hour/BTU (TH) (°K·h/BTU)',
  'Celsius Hour/BTU (TH) (°C·h/BTU)', 'Rankine Hour/BTU (TH) (°R·h/BTU)', 'Fahrenheit Hour/BTU (TH) (°F·h/BTU)',
  'Kelvin Second/BTU (IT) (°K·s/BTU)', 'Celsius Second/BTU (IT) (°C·s/BTU)',
  'Rankine Second/BTU (IT) (°R·s/BTU)', 'Fahrenheit Second/BTU (IT) (°F·s/BTU)',
  'Kelvin Second/BTU (TH) (°K·s/BTU)', 'Celsius Second/BTU (TH) (°C·s/BTU)',
  'Rankine Second/BTU (TH) (°R·s/BTU)', 'Fahrenheit Second/BTU (TH) (°F·s/BTU)'];

String thermResInitValue1 = 'Kelvin/Watt (°K/W)';
String thermResInitValue2 = 'Celsius/Watt (°C/W)';

//based on 1 Kelvin/watt
const List<double> thermResConvArray = [1, 1, 1.8, 1.8, 0.2930710702, 0.2930710702, 0.52752792631, 0.52752792631,
  0.2928750833, 0.2928750833, 0.52717515, 0.52717515, 1055.06, 1055.06, 1899.1, 1899.1, 1054.35, 1054.35, 1897.83,
  1897.83];