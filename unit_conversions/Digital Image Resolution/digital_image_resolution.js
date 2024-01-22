const dirArray = ['Pixel/Meter (px/m)', 'Pixel/Centimeter (px/cm)', 'Pixel/Millimeter (px/mm)',
  'Pixel/Micrometer (px/µm)', 'Pixel/Yard (px/yd)', 'Pixel/Foot (px/ft)', 'Pixel/Inch (px/in)'];

const dirInitValue1 = "0";
const dirInitValue2 = "1";

//based on 1 pixel/meter
const dirConvArray = [1, 0.01, 0.001, 0.000001, 0.9144, 0.3048, 0.0254];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = dirConvArray;
})

function clearAngle() {
  selectedUnit1.value = dirInitValue1;
  selectedUnit2.value = dirInitValue2;
  originalUnit1 = dirInitValue1;
  originalUnit2 = dirInitValue2;
}