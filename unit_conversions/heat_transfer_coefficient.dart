const List<String> heatTransferCoeffArray = ['BTU (IT)/Hour/Foot²/F° (BTU/h·ft²·°F)',
  'BTU (IT)/Second/Foot²/F° (BTU/s·ft²·°F)', 'BTU (Th)/Hour/Foot²/F° (BTU/h·ft²·°F)',
  'BTU (Th)/Second/Foot²/F° (BTU/s·ft²·°F)', 'Calorie/Second/Cm²/C° (cal/s·cm²·°C)',
  'CHU/Hour/Foot²/C° (CHU/h·ft²·°C)', 'Joule/Second/Meter²/Kelvin (J/s·m²·K)',
  'Kilocalorie (IT)/Hour/Meter²/C° (kcal/h·m²·°С)', 'Kilocalorie (Th)/Hour/Meter²/C° (kcal/h·m²·°С)',
  'Watt/Meter²/C° (W/m²·°С)', 'Watt/Meter²/Kelvin (W/m²·K)'];

String heatTransferCoeffInitValue1 = 'Watt/Meter²/Kelvin (W/m²·K)';
String heatTransferCoeffInitValue2 = 'Watt/Meter²/C° (W/m²·°С)';

//based on 1 watt/Sq meter/Kelvin
const List<double> heatTransferCoeffConvArray = [0.17611018368, 4.8919495467e-5, 0.17622803351,
  4.895223153e-5, 2.3884589663e-5, 0.17611018368, 1, 0.85984522786, 0.079882235598, 1, 1];