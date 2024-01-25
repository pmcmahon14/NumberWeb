const liquidArray = ['Beer Barrel (bbl)', 'Cup (C)', 'Drop (gt)', 'Fluid Dram (dr)',
  'Fluid Ounce (fl oz)', 'Gallon (gal)', 'Gill (gi)', 'Hogshead (hhd)', 'Minim (min)', 'Oil Barrel (bbl)',
  'Pint (pt)', 'Quart (qt)'];

const liquidInitValue1 = "0";
const liquidInitValue2 = "1";

//based on 1 beer barrel
const liquidConvArray = [1, 496, 2.346956e6, 3.174401e4, 3968, 31, 992, 0.4920635187,
  1.90464056e6, 0.7380954328, 248, 124];

window.convArray = liquidConvArray;

function clearAngle() {
  selectedUnit1.value = liquidInitValue1;
  selectedUnit2.value = liquidInitValue2;
  originalUnit1 = liquidInitValue1;
  originalUnit2 = liquidInitValue2;
}

let option = "";
for(let i=0;i<liquidArray.length;i++){
  if (i === parseInt(liquidInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + liquidArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + liquidArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<liquidArray.length;j++){
  if (j === parseInt(liquidInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + liquidArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + liquidArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;