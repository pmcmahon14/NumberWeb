const List<String> molarFlowArray = ['Examole/Second (Emol/s)', 'Petamole/Second (Pmol/s)',
  'Teramole/Second (Tmol/s)', 'Gigamole/Second (Gmol/s)', 'Megamole/Second (Mmol/s)', 'Kilomole/Day (kmol/d)',
  'Kilomole/Hour (kmol/hr)', 'Kilomole/Minute (kmol/min)', 'Kilomole/Second (kmol/s)', 'Mole/Day (mol/d)',
  'Mole/Hour (mol/hr)', 'Mole/Minute (mol/min)', 'Mole/Second (mol/s)', 'Centimole/Day (cmol/d)',
  'Centimole/Hour (cmol/hr)', 'Centimole/Minute (cmol/min)', 'Centimole/Second (cmol/s)', 'Millimole/Day (mmol/d)',
  'Millimole/Hour (mmol/hr)', 'Millimole/Minute (mmol/min)', 'Millimole/Second (mmol/s)',
  'Micromole/Second (µmol/s)', 'Nanomole/Second (nmol/s)', 'Picomole/Second (pmol/s)', 'Femtomole/Second (fmol/s)',
  'Attomole/Second (amol/s)'];

String molarFlowInitValue1 = 'Mole/Second (mol/s)';
String molarFlowInitValue2 = 'Mole/Minute (mol/min)';

//based on 1 mole/second
const List<double> molarFlowConvArray = [1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 86.4, 3.6, 0.06, 0.01, 86400, 3600, 60, 1,
  8640000, 360000, 6000, 100, 86400000, 3600000, 60000, 1000, 1000000, 1e9, 1e12, 1e15, 1e18];