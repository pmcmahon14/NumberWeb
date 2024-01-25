const illuminanceArray = ['Candela Steradian/Meter² (cd·sr/m²)', 'Centimeter Candle (cm·c)',
  'Flame (flame)', 'Foot Candle (ft·c)', 'Lumen/Centimeter² (lm/cm²)', 'Lumen/Foot² (lm/ft²)',
  'Lumen/Meter² (lm/m²)', 'Lux (lx)', 'Meter Candle (m·c)', 'Nox (nx)', 'Phot (ph)',
  'Watt/Centimeter² (W/cm²)'];

const illuminanceInitValue1 = "7";
const illuminanceInitValue2 = "8";

//based on 1 lux
const illuminanceConvArray = [1, 0.0001, 0.02322576, 0.092903039997, 0.0001,
  0.092903039997, 1, 1, 1, 1000, 0.0001, 1.4641288433e-7];


window.convArray = illuminanceConvArray;

function clearAngle() {
  selectedUnit1.value = illuminanceInitValue1;
  selectedUnit2.value = illuminanceInitValue2;
  originalUnit1 = illuminanceInitValue1;
  originalUnit2 = illuminanceInitValue2;
}

let option = "";
for(let i=0;i<illuminanceArray.length;i++){
  if (i === parseInt(illuminanceInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + illuminanceArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + illuminanceArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<illuminanceArray.length;j++){
  if (j === parseInt(illuminanceInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + illuminanceArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + illuminanceArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;