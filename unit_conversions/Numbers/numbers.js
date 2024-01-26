const numbersArray = ['Unit', 'Vigintillion', 'Novemdecillion', 'Octodecillion', 'Septendecillion',
  'Sexdecillion', 'Quindecillion', 'Quattuordecillion', 'Tredecillion', 'Duodecillion', 'Undecillion',
  'Decillion', 'Nonillion', 'Octillion', 'Septillion', 'Sextillion', 'Quintillion', 'Quadrillion', 'Trillion',
  'Billion', 'Million', 'Thousand', 'Hundred', 'Ten', 'One-tenth', 'One-hundredth', 'One-thousandth',
  'One-millionth', 'One-billionth', 'One-trillionth', 'One-quadrillionth', 'One-quintillionth',
  'One-sextillionth', 'One-septillionth', 'One-octillionth', 'One-nonillionth', 'Penny', 'Nickel', 'Dime',
  'Quarter', 'Pair', 'Percent', 'Permille', 'Parts per Million', 'Parts per Billion', 'Half', 'One Third',
  'One Fourth', 'One Fifth', 'One Sixth', 'One Seventh', 'One Eighth', 'One Ninth', 'One Tenth', 'Solo', 'Duet',
  'Trio', 'Quartet', 'Quintet', 'Sextet', 'Septet', 'Octet', 'Dozen', 'Baker\'s Dozen', 'Gross'];

const numbersInitValue1 = "0";
const numbersInitValue2 = "62";

//based on one
const numbersConvArray = [1, 1e-63, 1e-60, 1e-57, 1e-54, 1e-51, 1e-48, 1e-45, 1e-42, 1e-39, 1e-36,
  1e-33, 1e-30, 1e-27, 1e-24, 1e-21, 1e-18, 1e-15, 1e-12, 1e-9, 1e-6, 0.001, 0.01, 0.1, 10, 100, 1000, 1000000, 1e9,
  1e12, 1e15, 1e18, 1e21, 1e24, 1e27, 1e30, 100, 20, 10, 4, 0.5, 100, 1000, 1e6, 1e9, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1,
  0.5, 0.3333333333, 0.25, 0.2, 0.1666666667, 0.1428571429, 0.125, 0.08333333333, 0.07692307692, 0.006944444444];

window.convArray = numbersConvArray;

function clearAngle() {
  selectedUnit1.value = numbersInitValue1;
  selectedUnit2.value = numbersInitValue2;
  originalUnit1 = numbersInitValue1;
  originalUnit2 = numbersInitValue2;
}

let option = "";
for(let i=0;i<numbersArray.length;i++){
  if (i === parseInt(numbersInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + numbersArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + numbersArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<numbersArray.length;j++){
  if (j === parseInt(numbersInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + numbersArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + numbersArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;