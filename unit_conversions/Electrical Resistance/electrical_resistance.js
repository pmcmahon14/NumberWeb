const elecRaArray = ['Abohm (abΩ)', 'EMU of Resistance (EMU)', 'ESU of Resistance (ESU)',
  'Gigaohm (GΩ)', 'Kiloohm (kΩ)', 'Megaohm (MΩ)', 'Microohm (µΩ)', 'Milliohm (mΩ)', 'Nanoohm (nΩ)', 'Ohm (Ω)',
  'Planck Impedance (Zp)', 'Quantized Hall Resistance (QHE)', 'Reciprocal Siemens (1/S)', 'Statohm (stΩ)',
  'Volt/Ampere (V/A)'];

const elecRaInitValue1 = "9";
const elecRaInitValue2 = "7";

//based on 1 ohm
const elecRaConvArray = [1e9, 1e9, 1.1126500297e-12, 1e-9, 0.001, 0.000001, 1000000,
  1000, 1e9, 1, 0.03335640952, 3.874046144e-5, 1, 1.1126500297e-12, 1];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = elecRaConvArray;
})

function clearAngle() {
  selectedUnit1.value = elecRaInitValue1;
  selectedUnit2.value = elecRaInitValue2;
  originalUnit1 = elecRaInitValue1;
  originalUnit2 = elecRaInitValue2;
}

let option = "";
for(let i=0;i<elecRaArray.length;i++){
  if (i === parseInt(elecRaInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + elecRaArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + elecRaArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<elecRaArray.length;j++){
  if (j === parseInt(elecRaInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + elecRaArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + elecRaArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;