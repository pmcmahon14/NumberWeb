const List<String> magnetomotiveForceArray = ['Abampere Turn (abAt)', 'Ampere Turn (At)', 'Gilbert (Gi)',
  'Kiloampere Turn (kAt)', 'Megaampere Turn (MAt)', 'Microampere Turn (µAt)', 'Milliampere Turn (mAt)',
  'Milligilbert (mGi)'];

String magnetomotiveForceInitValue1 = 'Ampere Turn (At)';
String magnetomotiveForceInitValue2 = 'Kiloampere Turn (kAt)';

//based on 1 ampere turn
var magnetomotiveForceConvArray = [0.1, 1, 1.26, 0.001, 0.000001, 1000000, 1000, 1256.64];