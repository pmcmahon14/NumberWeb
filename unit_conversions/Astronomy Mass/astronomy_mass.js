const astMassArray = ['Earth Mass (MEarth)', 'Jupiter Mass (MJ)', 'Lunar Mass (ML)',
  'Solar Mass (M☉)', 'Yottatonnes (Yt)'];

const astMassInitValue1 = "3";
const astMassInitValue2 = "0";

//based on 1 Solar mass
const astMassConvArray = [332946, 1047.35, 27068510, 1, 1988.55];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = astMassConvArray;
})

function clearAngle() {
  selectedUnit1.value = astMassInitValue1;
  selectedUnit2.value = astMassInitValue2;
  originalUnit1 = astMassInitValue1;
  originalUnit2 = astMassInitValue2;
}