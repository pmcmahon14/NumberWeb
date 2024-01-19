const inductanceArray = ['Henry (H)', 'Yottahenry (YH)', 'Zettahenry (ZH)', 'Exahenry (EH)', 'Petahenry (PH)',
  'Terahenry (TH)', 'Gigahenry (GH)', 'Megahenry (MH)', 'Kilohenry (kH)', 'Hectohenry (hH)', 'Decahenry (daH)',
  'Decihenry (dH)', 'Centihenry (cH)', 'Millihenry (mH)', 'Microhenry (µH)', 'Nanohenry (nH)', 'Picohenry (pH)',
  'Femtohenry (fH)', 'Attohenry (aH)', 'Zeptohenry (zH)', 'Yoctohenry (yH)', 'Abhenry (abH)',
  'EMU of Inductance (EMU)', 'ESU of Inductance (ESU)', 'Stathenry (stH)', 'Weber/Ampere (Wb/A)'];

String inductanceInitValue1 = 'Henry (H)';
String inductanceInitValue2 = 'Weber/Ampere (Wb/A)';

//based on 1 henry
const List<double> inductanceConvArray = [1, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 1e-3, 1e-2, 1e-1, 1e+1,
  1e+2, 1e+3, 1e+6, 1e+9, 1e+12, 1e+15, 1e+18, 1e+21, 1e+24, 1e9, 1e9, 1.1126500297e-12, 1.1126500297e-12, 1];