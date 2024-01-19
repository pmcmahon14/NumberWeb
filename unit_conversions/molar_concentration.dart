const List<String> molarConcArray = ['Mole/Cubic Meter(mol/m³)', 'Mole/Cubic Centimeter(mol/cm³)',
  'Mole/Cubic Millimeter(mol/mm³)', 'Mole/Liter(mol/l)', 'Mole/Microliter(mol/µl)', 'Mole/Milliliter(mol/ml)',
  'Kilomole/Cubic Meter(kmol/m³)', 'Kilomole/Cubic Centimeter(kmol/cm³)', 'Kilomole/Cubic Millimeter(kmol/mm³)',
  'Kilomole/Liter(kmol/l)', 'Kilomole/Microliter(kmol/µl)', 'Kilomole/Milliliter(kmol/ml)',
  'Millimole/Cubic Meter(mmol/m³)', 'Millimole/Cubic Centimeter(mmol/cm³)',
  'Millimole/Cubic Millimeter(mmol/mm³)', 'Millimole/Liter(mmol/l)', 'Millimole/Microliter(mmol/µl)',
  'Millimole/Milliliter(mmol/ml)', 'Micromole/Cubic Meter(µmol/m³)', 'Micromole/Cubic Centimeter(µmol/cm³)',
  'Micromole/Cubic Millimeter(µmol/mm³)', 'Micromole/Liter(µmol/l)', 'Micromole/Microliter(µmol/µl)',
  'Micromole/Milliliter(µmol/ml)', 'Picomole/Cubic Meter(pmol/m³)', 'Picomole/Cubic Centimeter(pmol/cm³)',
  'Picomole/Cubic Millimeter(pmol/mm³)', 'Picomole/Liter(pmol/l)', 'Picomole/Microliter(pmol/µl)',
  'Picomole/Milliliter(pmol/ml)', 'Nanomole/Cubic Meter(nmol/m³)', 'Nanomole/Cubic Centimeter(nmol/cm³)',
  'Nanomole/Cubic Millimeter(nmol/mm³)', 'Nanomole/Liter(nmol/l)', 'Nanomole/Microliter(nmol/µl)',
  'Nanomole/Milliliter(nmol/ml)', 'Molar (M)', 'Millimolar (mM)', 'Micromolar (µM)', 'Nanomolar (nM)',
  'Picomolar (pM)', 'Femtomolar (fM)', 'Attomolar (aM)', 'Zeptomolar (zM)', 'Yoctomolar (yM)'];

String molarConcInitValue1 = 'Mole/Cubic Meter(mol/m³)';
String molarConcInitValue2 = 'Mole/Liter(mol/l)';

//based on 1 mole/liter
const List<double> molarConcConvArray = [1, 0.000001, 1e-9, 0.001, 1e-9, 0.000001, 0.001, 1e-9, 1e-12,
  0.000001, 1e-12, 1e-9, 1000, 0.001, 0.000001, 1, 0.000001, 0.001, 1000000, 1, 0.001, 1000, 0.001, 1, 1e12,
  1000000, 1000, 1e9, 1000, 1000000, 1e9, 1000, 1, 1000000, 1, 1000, 0.001, 1, 1000, 1000000, 1e9, 1e12, 1e15,
  1e18, 1e21];