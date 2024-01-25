const freqArray = ['Hertz (Hz)', 'Yottahertz (YHz)', 'Zettahertz (ZHz)', 'Exahertz (EHz)',
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

const freqInitValue1 = "0";
const freqInitValue2 = "31";

//needs all meters
//based on 1 hertz and wavelength in meters
const freqConvArray = [1, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 1e-3, 1e-2, 1e-1, 1e1,
  1e2, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24, 2.99792458e-16, 2.99792458e-13, 2.99792458e-10,
  2.99792458e-7, 2.99792458e-4, 2.99792458e-1, 2.99792458e2, 2.99792458e5, 2.99792458e6, 2.99792458e7,
  2.99792458e8, 2.99792458e9, 2.99792458e10, 2.99792458e11, 2.99792458e14, 2.99792458e17, 2.99792458e20,
  2.99792458e23, 2.99792458e26, 2.99792458e29, 2.99792458e32];

window.convArray = freqConvArray;

function clearAngle() {
  selectedUnit1.value = freqInitValue1;
  selectedUnit2.value = freqInitValue2;
  originalUnit1 = freqInitValue1;
  originalUnit2 = freqInitValue2;
}

let option = "";
for(let i=0;i<freqArray.length;i++){
  if (i === parseInt(freqInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + freqArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + freqArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<freqArray.length;j++){
  if (j === parseInt(freqInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + freqArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + freqArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;