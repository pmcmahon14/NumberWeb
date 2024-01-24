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

let option = "";
for(let i=0;i<astMassArray.length;i++){
  if (i === parseInt(astMassInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + astMassArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + astMassArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<astMassArray.length;j++){
  if (j === parseInt(astMassInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + astMassArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + astMassArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;