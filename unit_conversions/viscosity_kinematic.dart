const List<String> visKinArray = ['Square Meter/Hour (m²/hr)', 'Square Meter/Minute (m²/min)',
  'Square Meter/Second (m²/s)', 'Square Centimeter/Hour (cm²/hr)', 'Square Centimeter/Minute (cm²/min)',
  'Square Centimeter/Second (cm²/s)', 'Square Millimeter/Hour (mm²/hr)', 'Square Millimeter/Minute (mm²/min)',
  'Square Millimeter/Second (mm²/s)', 'Square Micrometer/Hour (µm²/hr)', 'Square Micrometer/Minute (µm²/min)',
  'Square Micrometer/Second (µm²/s)', 'Square Yard/Hour (yd²/hr)', 'Square Yard/Minute (yd²/min)',
  'Square Yard/Second (yd²/s)', 'Square Foot/Hour (ft²/hr)', 'Square Foot/Minute (ft²/min)',
  'Square Foot/Second (ft²/s)', 'Square Inch/Hour (in²/hr)', 'Square Inch/Minute (in²/min)',
  'Square Inch/Second (in²/s)', 'Stokes (St)', 'Yottastokes (YSt)', 'Zettastokes (ZSt)', 'Exastokes (ESt)',
  'Petastokes (PSt)', 'Terastokes (TSt)', 'Gigastokes (GSt)', 'Megastokes (MSt)', 'Kilostokes (kSt)',
  'Hectostokes (hSt)', 'Decastokes (dkSt)', 'Decistokes (dSt)', 'Centistokes (cSt)', 'Millistokes (mSt)',
  'Microstokes (µSt)', 'Nanostokes (nSt)', 'Picostokes (pSt)', 'Femtostokes (fSt)', 'Attostokes (aSt)',
  'Zeptostokes (zSt)', 'Yoctostokes (ySt)'];

String visKinInitValue1 = 'Square Meter/Second (m²/s)';
String visKinInitValue2 = 'Square Meter/Minute (m²/min)';

//based on 1 square meter/second
const List<double> visKinConvArray = [3600, 60, 1, 36000000, 600000, 10000, 3.6e9, 6e7, 1000000, 3.6e15, 6e13, 1e12,
  4305.56, 71.76, 1.2, 38750.08, 645.83, 10.76, 5580011.16, 93000.19, 1550, 10000, 1e-20, 1e-17, 1e-14, 1e-11, 1e-8,
  0.00001, 0.01, 10, 100, 1000, 100000, 1000000, 10000000, 1e10, 1e13, 1e16, 1e19, 1e22, 1e25, 1e28];