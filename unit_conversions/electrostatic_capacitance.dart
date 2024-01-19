const List<String> electroCapArray = ['Yottafarad (YF)', 'Zettafarad (ZF)', 'Exafarad (EF)', 'Petafarad (PF)',
  'Terafarad (TF)', 'Gigafarad (GF)', 'Megafarad (MF)', 'Kilofarad (kF)', 'Hectofarad (hF)', 'Dekafarad (dkF)',
  'Farad (F)', 'Decifarad (dF)', 'Centifarad (cF)', 'Millifarad (mF)', 'Microfarad (µF)', 'Nanofarad (nF)',
  'Picofarad (pF)', 'Femtofarad (fF)', 'Attofarad (aF)', 'Zeptofarad (zF)', 'Yoctofarad (yF)', 'Abfarad (abF)',
  'Coulomb/Volt (C/V)', 'EMU of Capacitance (EMU)', 'ESU of Capacitance (ESU)', 'Statfarad (stF)'];

String electroCapInitValue1 = 'Farad (F)';
String electroCapInitValue2 = 'Exafarad (EF)';

//based on 1 farad
const List<double> electroCapConvArray = [1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 0.000001, 0.001, 0.01, 0.1, 1,
  10, 100, 1000, 1000000, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24, 1e-9, 1, 1e-9, 8.9900004225e11, 8.9900004225e11];