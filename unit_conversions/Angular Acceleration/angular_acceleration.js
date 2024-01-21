const angAccArray = ['Degree/Square Second(°/s²)', 'Degree/Square Millisecond(°/ms²)',
  'Degree/Square Minute(°/min²)', 'Degree/Square Hour(°/hr²)', 'Degree/Square Day(°/d²)',
  'Gradian/Square Second(grad/s²)', 'Gradian/Square Millisecond(grad/ms²)', 'Gradian/Square Minute(grad/min²)',
  'Gradian/Square Hour(grad/hr²)', 'Gradian/Square Day(grad/d²)', 'Mil/Square Second(mil/s²)',
  'Mil/Square Millisecond(mil/ms²)', 'Mil/Square Minute(mil/min²)', 'Mil/Square Hour(mil/hr²)',
  'Mil/Square Day(mil/d²)', 'Radian/Square Second(rad/s²)', 'Radian/Square Millisecond(rad/ms²)',
  'Radian/Square Minute(rad/min²)', 'Radian/Square Hour(rad/hr²)', 'Radian/Square Day(rad/d²)',
  'Revolution/Square Second(rev/s²)', 'Revolution/Square Millisecond(rev/ms²)',
  'Revolution/Square Minute(rev/min²)', 'Revolution/Square Hour(rev/hr²)', 'Revolution/Square Day(rev/d²)',
  'Sign/Square Second(sign/s²)', 'Sign/Square Millisecond(sign/ms²)', 'Sign/Square Minute(sign/min²)',
  'Sign/Square Hour(sign/hr²)','Sign/Square Day(sign/d²)'];

const angAccInitValue1 = "0";
const angAccInitValue2 = "15";

//based on 1 degree/square second
const angAccConvArray = [1, 0.000001, 3600, 12960000, 7.46496e9, 1.11, 1.1111111111e-6, 4000,
  14400000, 8.2944e9, 17.777777778, 1.7777777778e-5, 64000, 2.304e8, 1.327104e11, 0.01745329252, 1.745329252e-8,
  62.83, 226194.67, 1.3028813053e8, 2.7777777778e-3, 2.7777777778e-9, 10, 36000, 20736000, 0.033333333333,
  3.3333333333e-8, 120, 432000, 2.48832e8];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = angAccConvArray;
})

function clearAngle() {
  selectedUnit1.value = angAccInitValue1;
  selectedUnit2.value = angAccInitValue2;
  originalUnit1 = angAccInitValue1;
  originalUnit2 = angAccInitValue2;
}