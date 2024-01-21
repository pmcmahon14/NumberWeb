const angVelArray = ['Degree/Second(°/s)', 'Degree/Millisecond(°/ms)', 'Degree/Minute(°/min)',
  'Degree/Hour(°/hr)', 'Degree/Day(°/d)', 'Gradian/Second(grad/s)', 'Gradian/Millisecond(grad/ms)',
  'Gradian/Minute(grad/min)', 'Gradian/Hour(grad/hr)', 'Gradian/Day(grad/d)', 'Mil/Second(mil/s)',
  'Mil/Millisecond(mil/ms)', 'Mil/Minute(mil/min)', 'Mil/Hour(mil/hr)', 'Mil/Day(mil/d)',
  'Radian/Second(rad/s)', 'Radian/Millisecond(rad/ms)', 'Radian/Minute(rad/min)', 'Radian/Hour(rad/hr)',
  'Radian/Day(rad/d)', 'Revolution/Second(rev/s)', 'Revolution/Millisecond(rev/ms)',
  'Revolution/Minute(rev/min)', 'Revolution/Hour(rev/hr)', 'Revolution/Day(rev/d)', 'Sign/Second(sign/s)',
  'Sign/Millisecond(sign/ms)', 'Sign/Minute(sign/min)', 'Sign/Hour(sign/hr)', 'Sign/Day(sign/d)'];

angVelInitValue1 = "0";
angVelInitValue2 = "15";

//based on 1 degree/second
const angVelConvArray = [1, 0.001, 60, 3600, 86400, 1.1111111111, 0.0011111111111,
  66.666666667, 4000, 96000, 17.777777778, 0.017777777778, 1066.6666667, 64000, 1536000,
  0.017453293, 0.000017453293, 1.047198, 62.831855, 1507.964515, 0.0027777777778,
  2.7777777778e-6, 0.16666666667, 10, 240, 0.033333333333, 3.3333333333e-5, 2, 120, 2880];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = angVelConvArray;
})

function clearAngle() {
  selectedUnit1.value = angVelInitValue1;
  selectedUnit2.value = angVelInitValue2;
  originalUnit1 = angVelInitValue1;
  originalUnit2 = angVelInitValue2;
}