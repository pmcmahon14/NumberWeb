const List<String> freqArray = ['Hertz (Hz)', 'Yottahertz (YHz)', 'Zettahertz (ZHz)', 'Exahertz (EHz)',
  'Petahertz (PHz)', 'Terahertz (THz)', 'Gigahertz (GHz)', 'Megahertz (MHz)', 'Kilohertz (kHz)',
  'Hectohertz (hHz)', 'Decahertz (daHz)', 'Decihertz (dHz)', 'Centihertz (cHz)', 'Millihertz (mHz)',
  'Microhertz (µHz)', 'Nanohertz (nHz)', 'Picohertz (pHz)', 'Femtohertz (fHz)', 'Attohertz (aHz)',
  'Zeptohertz (zHz)', 'Yoctohertz (yHz)', 'Wavelength Yottameters (wl/Ym)', 'Wavelength Zettameters (wl/Zm)',
  'Wavelength Exameters (wl/Em)', 'Wavelength Petameters (wl/Pm)', 'Wavelength Terameters (wl/Tm)',
  'Wavelength Gigameters (wl/Gm)', 'Wavelength Megameters (wl/Mm)', 'Wavelength Kilometers (wl/km)',
  'Wavelength Hectometers (wl/hm)', 'Wavelength Decameters (wl/dam)', 'Wavelength Meters (wl/m)',
  'Wavelength Decimeters (wl/dm)', 'Wavelength Centimeters (wl/cm)', 'Wavelength Millimeters (wl/mm)',
  'Wavelength Micrometers (wl/µm)', 'Wavelength Nanometers (wl/nm)', 'Wavelength Picometers (wl/pm)',
  'Wavelength Femtometers (wl/fm)', 'Wavelength Attometers (wl/am)', 'Wavelength Zeptometers (wl/zm)',
  'Wavelength Yoctometers (wl/ym)'];

String freqInitValue1 = 'Hertz (Hz)';
String freqInitValue2 = 'Wavelength Meters (wl/m)';

//needs all meters
//based on 1 hertz and wavelength in meters
const List<double> freqConvArray = [1, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 1e-3, 1e-2, 1e-1, 1e1,
  1e2, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24, 2.99792458e-16, 2.99792458e-13, 2.99792458e-10,
  2.99792458e-7, 2.99792458e-4, 2.99792458e-1, 2.99792458e2, 2.99792458e5, 2.99792458e6, 2.99792458e7,
  2.99792458e8, 2.99792458e9, 2.99792458e10, 2.99792458e11, 2.99792458e14, 2.99792458e17, 2.99792458e20,
  2.99792458e23, 2.99792458e26, 2.99792458e29, 2.99792458e32];