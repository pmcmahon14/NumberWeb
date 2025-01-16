const typographyArray = ['Agate Line (agate)', 'Centimeter (cm)', 'Character-X (ch-X)',
  'Character-Y (ch-Y)',
  'Decimeter (dm)', 'Didot (didot)', 'Em (em)', 'En (en)', 'Feet (ft)', 'Inch (in)', 'Meter (m)', 'Millimeter (mm)',
  'Pica (pc)', 'Pica-printer (pc-p)', 'Pixel (px)', 'Point (pt)', 'Point-printer (pt-p)', 'Twip (twip)'];

const typographyInitValue1 = "10";
const typographyInitValue2 = "1";

//based on 1 meter
const typographyConvArray = [551.18110236, 100, 472.440945, 236.220472, 10,
  2652.5198939, 237.10630158, 5690.551181, 3.28084, 39.370079, 1,
  1000, 236.220472, 237.106299, 3779.527559, 2834.645669, 2845.275591, 56692.91339];

window.convArray = typographyConvArray;

function clearAngle() {
  selectedUnit1.value = typographyInitValue1;
  selectedUnit2.value = typographyInitValue2;
  originalUnit1 = typographyInitValue1;
  originalUnit2 = typographyInitValue2;
}

let option1 = "";
for(let i=0;i<typographyArray.length;i++){
  if (i === parseInt(typographyInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + typographyArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + typographyArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<typographyArray.length;j++){
  if (j === parseInt(typographyInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + typographyArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + typographyArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;