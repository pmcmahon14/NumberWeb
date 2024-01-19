const List<String> elecRaArray = ['Abohm (abΩ)', 'EMU of Resistance (EMU)', 'ESU of Resistance (ESU)',
  'Gigaohm (GΩ)', 'Kiloohm (kΩ)', 'Megaohm (MΩ)', 'Microohm (µΩ)', 'Milliohm (mΩ)', 'Nanoohm (nΩ)', 'Ohm (Ω)',
  'Planck Impedance (Zp)', 'Quantized Hall Resistance (QHE)', 'Reciprocal Siemens (1/S)', 'Statohm (stΩ)',
  'Volt/Ampere (V/A)'];

String elecRaInitValue1 = 'Ohm (Ω)';
String elecRaInitValue2 = 'Milliohm (mΩ)';

//based on 1 ohm
const List<double> elecRaConvArray = [1e9, 1e9, 1.1126500297e-12, 1e-9, 0.001, 0.000001, 1000000,
  1000, 1e9, 1, 0.03335640952, 3.874046144e-5, 1, 1.1126500297e-12, 1];
