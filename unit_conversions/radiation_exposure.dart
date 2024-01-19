const radExposureArray = ['Coulomb/Kilogram (C/kg)', 'Coulomb/Gram (C/g)', 'Coulomb/Milligram (C/mg)',
  'Coulomb/Microgram (C/µg)', 'Microcoulomb/Kilogram (µC/kg)', 'Microcoulomb/Gram (µC/g)',
  'Microcoulomb/Milligram (µC/mg)', 'Microcoulomb/Microgram (µC/µg)', 'Microrem (µrem)', 'Microroentgen (µR)',
  'Microsievert (µSv)', 'Millicoulomb/Kilogram (mC/kg)', 'Millicoulomb/Gram (mC/g)',
  'Millicoulomb/Milligram (mC/mg)', 'Millicoulomb/Microgram (mC/µg)', 'Millirem (mrem)', 'Milliroentgen (mR)',
  'Millisievert (mSv)', 'Parker (parker)', 'Rem (rem)', 'Rep (rep)', 'Roentgen (R)', 'Sievert (Sv)',
  'Tissue Roentgen (R)'];

String radExposureInitValue1 = 'Coulomb/Kilogram (C/kg)';
String radExposureInitValue2 = 'Sievert (Sv)';

//based on 1 coulomb/kilogram
const List<double> radExposureConvArray = [1, 0.001, 0.000001, 1e-9, 1000000, 1000, 1, 0.001, 3.616148708e9,
  3.87596899e9, 3.616148708e7, 1000, 1, 0.001, 0.000001, 3616148.71, 3875968.99, 36161.49, 3875.97, 3616.15,
  3875.96899, 3875.96899, 36.16, 3875.96899];