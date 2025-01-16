const thermExpArray = ['Length/Length/Kelvin (°K⁻¹)', 'Length/Length/Celsius (°C⁻¹)',
  'Length/Length/Fahrenheit (°F⁻¹)', 'Length/Length/Rankine (°Ra⁻¹)', 'Length/Length/Reaumure (°Re⁻¹)'];

const thermExpInitValue1 = "0";
const thermExpInitValue2 = "1";

//based on 1 Length/Length/Kelvin
const thermExpConvArray = [1, 1, 0.5555555556, 0.5555555556, 1.25];

window.convArray = thermExpConvArray;

function clearAngle() {
  selectedUnit1.value = thermExpInitValue1;
  selectedUnit2.value = thermExpInitValue2;
  originalUnit1 = thermExpInitValue1;
  originalUnit2 = thermExpInitValue2;
}

let option1 = "";
for(let i=0;i<thermExpArray.length;i++){
  if (i === parseInt(thermExpInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + thermExpArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + thermExpArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<thermExpArray.length;j++){
  if (j === parseInt(thermExpInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + thermExpArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + thermExpArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;