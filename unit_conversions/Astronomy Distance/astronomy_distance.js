const astDistArray = ['Apogee (apogee)', 'Astronomical Unit (1996) (AU)', 'Gigameters (Gm)',
  'Kilometers (km)', 'Kiloparsec (kpc)', 'Light Second (ls)', 'Light Minute (lm)', 'Light Hour (lh)',
  'Light Day (ld)', 'Light Year (Julian) (ly)', 'Light Year (Tropical) (ly)', 'Light Year (Traditional) (ly)',
  'Parsec (pc)', 'Lunar Distance (ldis)', 'Megaparsec (Mpc)', 'Meter (m)', 'Mile (mi)', 'Perigee (perigee)',
  'Sun\'s Radius'];

const astDistInitValue1 = "1";
const astDistInitValue2 = "16";

//based on 1 AU
const astDistConvArray = [369.0130012, 1, 149.5978707, 149597870.69, 4.8481369578e-9,
  499.0047838, 8.3167463967, 0.13861243995, 0.0057755183311, 1.5812507409e-5, 1.5812507409e-5,
  1.5823337893e-5, 4.8481369578e-6, 389.17037554, 4.8481369578e-12, 1.4959787069e11, 92955807.267,
  415.5496408, 1.436781609e-9];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = astDistConvArray;
})

function clearAngle() {
  selectedUnit1.value = astDistInitValue1;
  selectedUnit2.value = astDistInitValue2;
  originalUnit1 = astDistInitValue1;
  originalUnit2 = astDistInitValue2;
}

let option = "";
for(let i=0;i<astDistArray.length;i++){
  if (i === parseInt(astDistInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + astDistArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + astDistArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<astDistArray.length;j++){
  if (j === parseInt(astDistInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + astDistArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + astDistArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;