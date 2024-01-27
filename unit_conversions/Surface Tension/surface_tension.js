const surfTenArray = ['Dyne/Meter (dyn/m)', 'Dyne/Centimeter (dyn/cm)', 'Dyne/Millimeter (dyn/mm)',
  'Dyne/Micrometer (dyn/µm)', 'Dyne/Yard (dyn/yd)', 'Dyne/Foot (dyn/ft)', 'Dyne/Inch (dyn/in)',
  'Gram Force/Meter (gf/m)', 'Gram Force/Centimeter (gf/cm)', 'Gram Force/Millimeter (gf/mm)',
  'Gram Force/Micrometer (gf/µm)', 'Gram Force/Yard (gf/yd)', 'Gram Force/Foot (gf/ft)', 'Gram Force/Inch (gf/in)',
  'Kilogram Force/Meter (kgf/m)', 'Kilogram Force/Centimeter (kgf/cm)', 'Kilogram Force/Millimeter (kgf/mm)',
  'Kilogram Force/Micrometer (kgf/µm)', 'Kilogram Force/Yard (kgf/yd)', 'Kilogram Force/Foot (kgf/ft)',
  'Kilogram Force/Inch (kgf/in)', 'Kilonewton/Meter (kN/m)', 'Kilonewton/Centimeter (kN/cm)',
  'Kilonewton/Millimeter (kN/mm)', 'Kilonewton/Micrometer (kN/µm)', 'Kilonewton/Yard (kN/yd)',
  'Kilonewton/Foot (kN/ft)', 'Kilonewton/Inch (kN/in)', 'Kilopond/Meter (kp/m)', 'Kilopond/Centimeter (kp/cm)',
  'Kilopond/Millimeter (kp/mm)', 'Kilopond/Micrometer (kp/µm)', 'Kilopond/Yard (kp/yd)', 'Kilopond/Foot (kp/ft)',
  'Kilopond/Inch (kp/in)', 'Micronewton/Meter (µN/m)', 'Micronewton/Centimeter (µN/cm)',
  'Micronewton/Millimeter (µN/mm)', 'Micronewton/Micrometer (µN/µm)', 'Micronewton/Yard (µN/yd)',
  'Micronewton/Foot (µN/ft)', 'Micronewton/Inch (µN/in)', 'Millinewton/Meter (mN/m)',
  'Millinewton/Centimeter (mN/cm)', 'Millinewton/Millimeter (mN/mm)', 'Millinewton/Micrometer (mN/µm)',
  'Millinewton/Yard (mN/yd)', 'Millinewton/Foot (mN/ft)', 'Millinewton/Inch (mN/in)', 'Newton/Meter (N/m)',
  'Newton/Centimeter (N/cm)', 'Newton/Millimeter (N/mm)', 'Newton/Micrometer (N/µm)', 'Newton/Yard (N/yd)',
  'Newton/Foot (N/ft)', 'Newton/Inch (N/in)', 'Ounce Force/Meter (ozf/m)', 'Ounce Force/Centimeter (ozf/cm)',
  'Ounce Force/Millimeter (ozf/mm)', 'Ounce Force/Micrometer (ozf/µm)', 'Ounce Force/Yard (ozf/yd)',
  'Ounce Force/Foot (ozf/ft)', 'Ounce Force/Inch (ozf/in)', 'Pond/Meter (p/m)', 'Pond/Centimeter (p/cm)',
  'Pond/Millimeter (p/mm)', 'Pond/Micrometer (p/µm)', 'Pond/Yard (p/yd)', 'Pond/Foot (p/ft)', 'Pond/Inch (p/in)',
  'Pound Force/Meter (lbf/m)', 'Pound Force/Centimeter (lbf/cm)', 'Pound Force/Millimeter (lbf/mm)',
  'Pound Force/Micrometer (lbf/µm)', 'Pound Force/Yard (lbf/yd)', 'Pound Force/Foot (lbf/ft)',
  'Pound Force/Inch (lbf/in)', 'Poundal/Meter (pdl/m)', 'Poundal/Centimeter (pdl/cm)',
  'Poundal/Millimeter (pdl/mm)', 'Poundal/Micrometer (pdl/µm)', 'Poundal/Yard (pdl/yd)', 'Poundal/Foot (pdl/ft)',
  'Poundal/Inch (pdl/in)'];

const surfTenInitValue1 = "49";
const surfTenInitValue2 = "0";

//based on 1 newton/meter
const surfTenConvArray = [100000, 1000, 100, 0.1, 91440, 30480, 2540, 101.9716213, 1.019716213,
  0.1019716213, 0.0001019716213, 93.242850515, 31.080950172, 2.590079181, 0.1019716213, 0.001019716213,
  0.0001019716213, 1.019716213e-7, 0.093242850515, 0.031080950172, 0.002590079181, 0.001, 0.00001, 0.000001, 1e-9,
  0.0009144, 0.0003048, 0.0000254, 0.1019716213, 0.001019716213, 0.0001019716213, 1.019716213e-7, 0.093242850515,
  0.031080950172, 0.002590079181, 1000000, 10000, 1000, 1, 914400, 304800, 25400, 1000, 10, 1, 0.001, 914.4,
  304.8, 25.4, 1, 0.01, 0.001, 0.000001, 0.9144, 0.3048, 0.0254, 3.6, 0.036, 0.0036, 0.0000036, 3.29184, 1.09728,
  0.09144, 101.9716213, 1.019716213, 0.1019716213, 0.0001019716213, 93.242850515, 31.080950172, 2.590079181,
  0.2248089431, 0.002248089431, 0.0002248089431, 2.248089431e-7, 0.20556529757, 0.068521765857, 0.0057101471547,
  7.23, 0.0723, 0.00723, 0.00000723, 6.611112, 2.203704, 0.183642];

window.convArray = surfTenConvArray;

function clearAngle() {
  selectedUnit1.value = surfTenInitValue1;
  selectedUnit2.value = surfTenInitValue2;
  originalUnit1 = surfTenInitValue1;
  originalUnit2 = surfTenInitValue2;
}

let option = "";
for(let i=0;i<surfTenArray.length;i++){
  if (i === parseInt(surfTenInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + surfTenArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + surfTenArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<surfTenArray.length;j++){
  if (j === parseInt(surfTenInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + surfTenArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + surfTenArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;