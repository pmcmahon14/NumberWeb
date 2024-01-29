const metricArray = ['Base', 'Yotta (Y)', 'Zetta (Z)', 'Exa (E)', 'Peta (P)', 'Tera (T)',
  'Giga (G)', 'Mega (M)', 'Kilo (k)', 'Hecto (h)', 'Deca (dk or da)', 'Deci (d)', 'Centi (c)', 'Milli (m)',
  'Micro (µ)', 'Nano (n)', 'Pico (p)', 'Femto (f)', 'Atto (a)', 'Zepto (z)', 'Yocto (y)'];

const metricInitValue1 = "0";
const metricInitValue2 = "8";

//based on 1 base unit
const metricConvArray = [1, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 1e-3, 1e-2, 1e-1, 1e1,
  1e2, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24];

window.convArray = metricConvArray;

function clearAngle() {
  selectedUnit1.value = metricInitValue1;
  selectedUnit2.value = metricInitValue2;
  originalUnit1 = metricInitValue1;
  originalUnit2 = metricInitValue2;
}

let option1 = "";
for(let i=0;i<metricArray.length;i++){
  if (i === parseInt(metricInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + metricArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + metricArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<metricArray.length;j++){
  if (j === parseInt(metricInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + metricArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + metricArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;