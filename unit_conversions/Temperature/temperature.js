const tempArray = ['Kelvin (K)', 'Celsius (°C)', 'Fahrenheit (°F)', 'Rankine (°R)',
  'Reaumur (°Re)', 'Triple Point of Water'];

const tempInitValue1 = "0";
const tempInitValue2 = "1";

//based on Kelvin

const tempConvArray = [0, -273.15, -459.67, 0, -217.72, 0];

window.convArray = tempConvArray;

function clearAngle() {
  selectedUnit1.value = tempInitValue1;
  selectedUnit2.value = tempInitValue2;
  originalUnit1 = tempInitValue1;
  originalUnit2 = tempInitValue2;
  outputDisplay.value = "-273.15";
}

let option1 = "";
for(let i=0;i<tempArray.length;i++){
  if (i === parseInt(tempInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + tempArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + tempArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<tempArray.length;j++){
  if (j === parseInt(tempInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + tempArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + tempArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;