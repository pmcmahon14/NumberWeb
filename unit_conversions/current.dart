const List<String> currentArray = ['Abampere (abA)', 'Ampere (A)', 'Biot (Bi)', 'Centiampere (cA)',
  'Coulomb/Second (C/s)', 'Deciampere (dA)', 'Dekaampere (dkA)', 'EMU of current (EMU)', 'ESU of current (ESU)',
  'Franklin/Second (Fr/s)', 'Hectoampere (hA)', 'Kiloampere (kA)', 'Megaampere (MA)', 'Microampere (µA)',
  'Milliampere (mA)', 'Siemens Volt (S.V)', 'Statampere (stA)', 'Volt/Ohm (V/Ω)', 'Watt/Volt (W/V)',
  'Weber/Henry (Wb/H)'];

String currentInitValue1 = 'Ampere (A)';
String currentInitValue2 = 'Kiloampere (kA)';

//based on 1 ampere
const List<double> currentConvArray = [0.1, 1, 0.1, 100, 1, 10, 0.1, 0.1, 2.9979245368e9, 2.9940119761e9, 0.01,
  0.001, 1e-6, 1e+6, 1000, 1, 2.9979245368e9, 1, 1, 1,];