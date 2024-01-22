const dataStorageArray = ['Bit', 'Byte', 'CD (74 min)', 'CD (80 min)', 'DVD (1 layer, 1 side)', 'DVD (1 layer, 2 sides)',
  'DVD (2 layer, 1 side)', 'DVD (2 layers, 2 sides)', 'Exabit (Eb)', 'Exabyte (EB)', 'Exbibit (Eib)', 'Exbibyte (EiB)',
  'Floppy Disc (3.5", DD)', 'Floppy Disc (3.5", ED)', 'Floppy Disc (3.5", HD)', 'Floppy Disc (5.25", DD)',
  'Floppy Disc (5.25", HD)', 'Gibibit (Gib)', 'Gibibyte (GiB)', 'Gigabit (Gb)', 'Gigabyte (GB)', 'Kibibit (kib)',
  'Kibibyte (kiB)', 'Kilobit (kb)', 'Kilobyte (kB)', 'Mebibit (Mib)', 'Mebibyte (MiB)', 'Megabit (Mb)',
  'Megabyte (MB)', 'Pebibit (Pib)', 'Pebibyte (PiB)', 'Petabit (Pb)', 'Petabyte (PB)', 'Tebibit (Tib)',
  'Tebibyte (TiB)', 'Terabit (Tb)', 'Terabyte (TB)', 'Yobibit (Yib)', 'Yobibyte (YiB)', 'Yottabit (Yb)',
  'Yottabyte (YB)', 'Zebibit (Zib)', 'Zebibyte (ZiB)', 'Zettabit (Zb)', 'Zettabyte (ZB)', 'Zip 100', 'Zip 250'];

const dataStorageInitValue1 = "28";
const dataStorageInitValue2 = "20";

//based on 1 byte
const dataStorageConvArray = [8000000, 1000000, 1.468303072e-9, 1.358180342e-9, 1.981537392e-10,
  9.907686963e-11, 1.095673617e-10, 5.478368085e-11, 8e-12, 1e-12, 6.9388939039e-12, 8.6736173799e-13,
  0.0000013721, 3.430145767e-7, 6.860291534e-7, 0.0000027441, 8.237557992e-7, 0.0074505805969, 0.00093132257462,
  0.008, 0.001, 7812.5, 976.56, 8000, 1000, 7.63, 0.95367431641, 8, 1, 7.1054273576e-9, 8.881784197e-10,
  8e-9, 1e-9, 7.2759576142e-6, 9.0949470177e-7, 0.000008, 0.000001, 6.6174449004e-18, 8.2718061255e-19,
  8e-18, 1e-18, 6.7762635780e-15, 8.4703294725e-16, 8e-15, 1e-15, 9.956998511e-9, 3.982799404e-9];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = dataStorageConvArray;
})

function clearAngle() {
  selectedUnit1.value = dataStorageInitValue1;
  selectedUnit2.value = dataStorageInitValue2;
  originalUnit1 = dataStorageInitValue1;
  originalUnit2 = dataStorageInitValue2;
}