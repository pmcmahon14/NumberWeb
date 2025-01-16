const thermResArray = ['Kelvin/Watt (°K/W)', 'Celsius/Watt (°C/W)', 'Rankine/Watt (°R/W)',
  'Fahrenheit/Watt (°F/W)', 'Kelvin Hour/BTU (IT) (°K·h/BTU)', 'Celsius Hour/BTU (IT) (°C·h/BTU)',
  'Rankine Hour/BTU (IT) (°R·h/BTU)', 'Fahrenheit Hour/BTU (IT) (°F·h/BTU)', 'Kelvin Hour/BTU (TH) (°K·h/BTU)',
  'Celsius Hour/BTU (TH) (°C·h/BTU)', 'Rankine Hour/BTU (TH) (°R·h/BTU)', 'Fahrenheit Hour/BTU (TH) (°F·h/BTU)',
  'Kelvin Second/BTU (IT) (°K·s/BTU)', 'Celsius Second/BTU (IT) (°C·s/BTU)',
  'Rankine Second/BTU (IT) (°R·s/BTU)', 'Fahrenheit Second/BTU (IT) (°F·s/BTU)',
  'Kelvin Second/BTU (TH) (°K·s/BTU)', 'Celsius Second/BTU (TH) (°C·s/BTU)',
  'Rankine Second/BTU (TH) (°R·s/BTU)', 'Fahrenheit Second/BTU (TH) (°F·s/BTU)'];

const thermResInitValue1 = "0";
const thermResInitValue2 = "1";

//based on 1 Kelvin/watt
const thermResConvArray = [1, 1, 1.8, 1.8, 0.2930710702, 0.2930710702, 0.52752792631, 0.52752792631,
  0.2928750833, 0.2928750833, 0.52717515, 0.52717515, 1055.06, 1055.06, 1899.1, 1899.1, 1054.35, 1054.35, 1897.83,
  1897.83];

window.convArray = thermResConvArray;

function clearAngle() {
  selectedUnit1.value = thermResInitValue1;
  selectedUnit2.value = thermResInitValue2;
  originalUnit1 = thermResInitValue1;
  originalUnit2 = thermResInitValue2;
}

let option1 = "";
for(let i=0;i<thermResArray.length;i++){
  if (i === parseInt(thermResInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + thermResArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + thermResArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<thermResArray.length;j++){
  if (j === parseInt(thermResInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + thermResArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + thermResArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;