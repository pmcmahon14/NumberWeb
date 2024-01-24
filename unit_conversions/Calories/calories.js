const calorieArray = ['BTU/Cubic Foot (BTU/ft³)', 'Calorie/Cubic Centimeter (cal/cm³)',
  'Dyne/Square Centimeter (dyn/cm³)', 'Joule/Cubic Meter (J/m³)', 'Kilocalorie/Cubic Meter (kcal/m³)',
  'Kilojoule/Cubic Meter (kJ/m³)', 'Megajoule/Cubic Meter (MJ/m³)', 'Newton/Square Meter (N/m³)',
  'Therm/Cubic Foot (thm/ft³)'];

const calorieInitValue1 = "0";
const calorieInitValue2 = "1";

//based on 1 BTU/cubic foot
const calorieConvArray = [1, 0.0089051017705, 372589.46, 37258.95, 8.91, 37.26,
  0.037258945808, 37258.95, 1.0002387672e-5];

document.addEventListener("DOMContentLoaded", function(){
    window.convArray = calorieConvArray;
})

function clearAngle() {
    selectedUnit1.value = calorieInitValue1;
    selectedUnit2.value = calorieInitValue2;
    originalUnit1 = calorieInitValue1;
    originalUnit2 = calorieInitValue2;
}

let option = "";
for(let i=0;i<calorieArray.length;i++){
    if (i === parseInt(calorieInitValue1)) {
        option +=
            '<option value="'+ i + '" selected>' + calorieArray[i] + "</option>"
    } else {
        option +=
            '<option value="'+ i + '">' + calorieArray[i] + "</option>"
    }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<calorieArray.length;j++){
    if (j === parseInt(calorieInitValue2)) {
        option +=
            '<option value="'+ j + '" selected>' + calorieArray[j] + "</option>"
    } else {
        option +=
            '<option value="'+ j + '">' + calorieArray[j] + "</option>"
    }
}
document.getElementById("unit2").innerHTML = option;