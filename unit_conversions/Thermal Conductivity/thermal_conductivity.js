const thermCondArray = ['BTU Inch (IT)/Second/Square Foot/Fahrenheit\n (BTU·in·s⁻¹·ft2·°F⁻¹)',
  'BTU Inch (TH)/Second/Square Foot/Fahrenheit\n (BTU·in·s⁻¹·ft2·°F⁻¹)',
  'BTU Foot (IT)/Second/Square Foot/Fahrenheit\n (BTU·ft·s⁻¹·ft2·°F⁻¹)',
  'BTU Foot (TH)/Second/Square Foot/Fahrenheit\n (BTU·ft·s⁻¹·ft2·°F⁻¹)',
  'BTU Inch (IT)/Hour/Square Foot/Fahrenheit\n (BTU·in·h⁻¹·ft2·°F⁻¹)',
  'BTU Inch (TH)/Hour/Square Foot/Fahrenheit\n (BTU·in·h⁻¹·ft2·°F⁻¹)',
  'BTU Foot (IT)/Hour/Square Foot/Fahrenheit\n (BTU·ft·h⁻¹·ft2·°F⁻¹)',
  'BTU Foot (TH)/Hour/Square Foot/Fahrenheit\n (BTU·ft·h⁻¹·ft2·°F⁻¹)',
  'Calorie (IT)/Second/Meter/Celsius\n (cal·s⁻¹·m⁻¹·°K⁻¹)',
  'Calorie (TH)/Second/Meter/Celsius\n (cal·s⁻¹·m⁻¹·°K⁻¹)',
  'Calorie (IT)/Second/Centimeter/Celsius\n (cal·s⁻¹·cm⁻¹·°K⁻¹)',
  'Calorie (TH)/Second/Centimeter/Celsius\n (cal·s⁻¹·cm⁻¹·°K⁻¹)',
  'Calorie (IT)/Hour/Meter/Celsius\n (cal·h⁻¹·m⁻¹·°K⁻¹)',
  'Calorie (TH)/Hour/Meter/Celsius\n (cal·h⁻¹·m⁻¹·°K⁻¹)',
  'Calorie (IT)/Hour/Centimeter/Celsius\n (cal·h⁻¹·cm⁻¹·°K⁻¹)',
  'Calorie (TH)/Hour/Centimeter/Celsius\n (cal·h⁻¹·cm⁻¹·°K⁻¹)',
  'Kilocalorie (IT)/Second/Meter/Celsius\n (kcal·s⁻¹·m⁻¹·°K⁻¹)',
  'Kilocalorie (TH)/Second/Meter/Celsius\n (kcal·s⁻¹·m⁻¹·°K⁻¹)',
  'Kilocalorie (IT)/Second/Centimeter/Celsius\n (kcal·s⁻¹·cm⁻¹·°K⁻¹)',
  'Kilocalorie (TH)/Second/Centimeter/Celsius\n (kcal·s⁻¹·cm⁻¹·°K⁻¹)',
  'Kilocalorie (IT)/Hour/Meter/Celsius\n (kcal·h⁻¹·m⁻¹·°K⁻¹)',
  'Kilocalorie (TH)/Hour/Meter/Celsius\n (kcal·h⁻¹·m⁻¹·°K⁻¹)',
  'Kilocalorie (IT)/Hour/Centimeter/Celsius\n (kcal·h⁻¹·cm⁻¹·°K⁻¹)',
  'Kilocalorie (TH)/Hour/Centimeter/Celsius\n (kcal·h⁻¹·cm⁻¹·°K⁻¹)',
  'Kilowatt/Meter/Celsius (kW·m⁻¹·K)', 'Kilowatt/Centimeter/Celsius (kW·cm⁻¹·K)',
  'Watt/Meter/Celsius (W·m⁻¹·K⁻¹)', 'Watt/Centimeter/Celsius (W·cm⁻¹·°K⁻¹)'];

const thermCondInitValue1 = "26";
const thermCondInitValue2 = "27";

//based on 1 watt/meter/Celsius
const thermCondConvArray = [0.001925964388, 0.00192725321, 0.0001604970324, 0.0001606044342, 6.93,
  6.94, 0.5777893165, 0.578175963, 0.2388458966, 0.2390057361, 0.002388458966, 0.002390057361, 859.85, 860.42,
  8.5985, 8.6042, 0.0002388458966, 0.0002390057361, 2.388458966e-6, 2.390057361e-6, 0.8598452279, 0.8604206501,
  0.008598452279, 0.008604206501, 1, 0.008604206501, 0.001, 0.00001];

window.convArray = thermCondConvArray;

function clearAngle() {
  selectedUnit1.value = thermCondInitValue1;
  selectedUnit2.value = thermCondInitValue2;
  originalUnit1 = thermCondInitValue1;
  originalUnit2 = thermCondInitValue2;
}

let option1 = "";
for(let i=0;i<thermCondArray.length;i++){
  if (i === parseInt(thermCondInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + thermCondArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + thermCondArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<thermCondArray.length;j++){
  if (j === parseInt(thermCondInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + thermCondArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + thermCondArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;