const List<String> chargeArray = ['Abcoulomb (abC)', 'Ampere-Hour (A.h.)', 'Ampere-Minute (A.min)',
  'Ampere-Second (A.s)', 'Coulomb (C)', 'Elementary Charge (e)', 'EMU of Charge (EMU)', 'ESU of Charge (ESU)',
  'Faraday (C12) (F)', 'Franklin (Fr)', 'Kilocoulomb (kC)', 'Megacoulomb (MC)', 'Microcoulomb (µC)',
  'Millicoulomb (mC)', 'Nanocoulomb (nC)', 'Picocoulomb (pC)', 'Statcoulomb (stC)'];

String chargeInitValue1 = 'Coulomb (C)';
String chargeInitValue2 = 'Faraday (C12) (F)';

//based on 1 coulomb
const List<double> chargeConvArray = [0.1, 2.7777777778e-4, 1.6666666667e-2, 1, 1, 6.2415090745e18, 0.1,
  2.9940119761e9, 1.0364272140e-5, 2.9940119761e9, 0.001, 1e-6, 1e6, 1000, 1e9, 1e12,
  2.9940119761e9];