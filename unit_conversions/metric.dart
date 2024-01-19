const List<String> metricArray = ['Base', 'Yotta (Y)', 'Zetta (Z)', 'Exa (E)', 'Peta (P)', 'Tera (T)',
  'Giga (G)', 'Mega (M)', 'Kilo (k)', 'Hecto (h)', 'Deca (dk or da)', 'Deci (d)', 'Centi (c)', 'Milli (m)',
  'Micro (µ)', 'Nano (n)', 'Pico (p)', 'Femto (f)', 'Atto (a)', 'Zepto (z)', 'Yocto (y)'];

String metricInitValue1 = 'Base';
String metricInitValue2 = 'Kilo (k)';

//based on 1 base unit
const List<double> metricConvArray = [1, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 1e-3, 1e-2, 1e-1, 1e1,
  1e2, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24];