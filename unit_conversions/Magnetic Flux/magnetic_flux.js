const magFluxArray = ['Gauss/Square Meter(G/m²)', 'Gauss/Square Centimeter(G/cm²)',
  'Gauss/Square Micrometer(G/µm²)', 'Gauss/Square Yard(G/yd²)', 'Gauss/Square Foot(G/ft²)',
  'Gauss/Square Inch(G/in²)', 'Kiloline (kline)', 'Kiloweber (kWb)', 'Line (line)', 'Magnetic Flux Quantum (Φ0)',
  'Maxwell (Mx)', 'Megaline (Mline)', 'Megaweber (MWb)', 'Microweber (µW)', 'Milliweber (mW)',
  'Tesla/Square Meter(T/m²)', 'Tesla/Square Centimeter(T/cm²)', 'Tesla/Square Micrometer(T/µm²)',
  'Tesla/Square Yard(T/yd²)', 'Tesla/Square Foot(T/ft²)', 'Tesla/Square Inch(T/in²)', 'Unit Pole (P)',
  'Volt Second (V·s)', 'Weber (W)'];

const magFluxInitValue1 = "23";
const magFluxInitValue2 = "22";

//based on 1 weber
const magFluxConvArray = [10000, 1e8, 1e16, 11959.9, 107639.1, 15500031, 100000, 0.001, 1e8, 4.8359784842e14,
  1e8, 100, 0.000001, 1000000, 1000, 1, 10000, 1e12, 1.2, 10.76, 1550, 7957747.15, 1, 1];

window.convArray = magFluxConvArray;

function clearAngle() {
  selectedUnit1.value = magFluxInitValue1;
  selectedUnit2.value = magFluxInitValue2;
  originalUnit1 = magFluxInitValue1;
  originalUnit2 = magFluxInitValue2;
}

let option = "";
for(let i=0;i<magFluxArray.length;i++){
  if (i === parseInt(magFluxInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + magFluxArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + magFluxArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<magFluxArray.length;j++){
  if (j === parseInt(magFluxInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + magFluxArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + magFluxArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;