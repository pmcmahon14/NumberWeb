const List<String> elecPotentialArray = ['Abvolt (abV)', 'EMU of Electric Potential (EMU)',
  'ESU of Electric Potential (ESU)', 'Gigavolt (GV)', 'Kilovolt (kV)', 'Megavolt (MV)', 'Microvolt (µV)',
  'Millivolt (mV)', 'Nanovolt (nV)', 'Picovolt (pV)', 'Planck Voltage (hV)', 'Statvolt (stV)', 'Teravolt (TV)',
  'Volt (V)', 'Watt/Ampere (W/A)'];

String elecPotentialInitValue1 = 'Volt (V)';
String elecPotentialInitValue2 = 'Watt/Ampere (W/A)';

//based on 1 volt
const List<double> elecPotentialConvArray = [1e8, 1e8, 1e8, 1e-9, 0.001, 0.000001, 1000000, 1000,
  1e9, 1e12, 9.5881873532e-28, 0.0033356399951, 1e-12, 1, 1];