const angleArray = ['Circle (cir)', 'Degree (°)', 'Gradian (grad)', 'Mil (mil)', "Minute (')",
  'Point, Cardinal (pt-C)', 'Point, Intercardinal (pt-IC)', 'Point, Mariner-32 (pt-M32)',
  'Point, Mariner-128 (pt-M128)', 'Point, Meteorological (pt-Me)', 'Radian (rad)',
  'Second (")', 'Sextant (sextant)', 'Sign (sign)'];

const angleInitValue1 = "1";
const angleInitValue2 = "10";

//based on 1 degree
const angleConvArray = [0.0027777777778, 1, 1.11, 17.78, 60, 0.011111111111, 0.022222222222,
  0.088888888889, 0.355555555556, 0.044444444444, 0.01745329252, 3600, 0.016666666667, 0.033333333333];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = angleConvArray;
})

function clearAngle() {
  selectedUnit1.value = angleInitValue1;
  selectedUnit2.value = angleInitValue2;
  originalUnit1 = angleInitValue1;
  originalUnit2 = angleInitValue2;
}