const List<String> radAbsorbedDoseArray = ['Yottagray (YGy)', 'Zettagray (ZGy)', 'Exagray (EGy)',
  'Petagray (PGy)', 'Teragray (TGy)', 'Gigagray (GGy)', 'Megagray (MGy)', 'Kilogray (kGy)', 'Hectogray (hGy)',
  'Decagray (daGy)', 'Gray (Gy)', 'Decigray (dGy)', 'Centigray (cGy)', 'Milligray (mGy)', 'Microgray (µGy)',
  'Nanogray (nGy)', 'Picogray (pGy)', 'Femtogray (fGy)', 'Attogray (aGy)', 'Zeptogray (zGy)', 'Yoctogray (yGy)',
  'Rad (rd)', 'Millirad (mrd)', 'Microrad (µrd)', 'Joule/Kilogram (J/kg)', 'Joule/Gram (J/g)',
  'Joule/Centigram (J/cg)', 'Joule/Milligram (J/mg)', 'Sievert (Sv)', 'Millisievert (mSv)', 'Microsievert (µSv)'];

String radAbsorbedDoseInitValue1 = 'Rad (rd)';
String radAbsorbedDoseInitValue2 = 'Gray (Gy)';

//based on rad
const List<double> radAbsorbedDoseConvArray = [1e-26, 1e-23, 1e-20, 1e-17, 1e-14, 1e-11, 1e-8, 0.00001, 0.0001,
  0.001, 0.01, 0.1, 1, 10, 10000, 1e7, 1e10, 1e13, 1e16, 1e19, 1e22, 1, 1000, 1e6, 0.01, 0.00001, 1e-7, 1e-8,
  0.01, 10, 10000];
