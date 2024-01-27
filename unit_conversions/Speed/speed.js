const speedArray = ['Centimeter/Day (cm/d)', 'Centimeter/Hour (cm/hr)', 'Centimeter/Minute (cm/min)',
  'Centimeter/Second (cm/s)', 'Feet/Day (ft/d)', 'Feet/Hour (ft/hr)', 'Feet/Minute (ft/min)', 'Feet/Second (ft/s)',
  'Furlong/Day (fur/d)', 'Furlong/Hour (fur/hr)', 'Furlong/Minute (fur/min)', 'Furlong/Second (fur/s)',
  'Inch/Day (in/d)', 'Inch/Hour (in/hr)', 'Inch/Minute (in/min)', 'Inch/Second (in/s)', 'Kilometer/Day (km/d)',
  'Kilometer/Hour (km/hr)', 'Kilometer/Minute (km/min)', 'Kilometer/Second (km/s)', 'Knot (kn)', 'Mach (Ma)',
  'Megameter/Day (Mm/d)', 'Megameter/Hour (Mm/hr)', 'Megameter/Minute (Mm/min)', 'Megameter/Second (Mm/s)',
  'Meter/Day (m/d)', 'Meter/Hour (m/hr)', 'Meter/Minute (m/min)', 'Meter/Second (m/s)', 'Mile/Day (mi/d)',
  'Mile/Hour (mi/hr)', 'Mile/Minute (mi/min)', 'Mile/Second (mi/s)', 'Millimeter/Day (mm/d)',
  'Millimeter/Hour (mm/hr)', 'Millimeter/Minute (mm/min)', 'Millimeter/Second (mm/s)', 'Nautical Mile/Day (nmi/d)',
  'Nautical Mile/Hour (nmi/hr)', 'Nautical Mile/Minute (nmi/min)', 'Nautical Mile/Second (nmi/s)',
  'Speed of Light (Air) (c)', 'Speed of Light (Glass) (c)', 'Speed of Light (Ice) (c)', 'Speed of Light (Vacuum) (c)',
  'Speed of Light (Water) (c)', 'Speed of Sound (Air) (vs)', 'Speed of Sound (Metal) (vs)',
  'Speed of Sound (Water) (vs)', 'Yard/Day (yd/d)', 'Yard/Hour (yd/hr)', 'Yard/Minute (yd/min)',
  'Yard/Second (yd/s)'];

const speedInitValue1 = "29";
const speedInitValue2 = "31";

//based on 1 meter/second
const speedConvArray = [8640000, 360000, 6000, 100, 283464.57, 11811.02, 196.85, 3.28, 429.49, 17.9,
  0.29825817227392, 0.0049709695378987, 3401574.8, 141732.28, 2362.2, 39.37, 86.4, 3.6, 0.06, 0.001, 1.94, 0.0029387,
  0.0864, 0.0036, 0.00006, 0.000001, 86400, 3600, 60, 1, 53.69, 2.24, 0.03728227153, 0.0006213711922, 86400000,
  3600000, 60000, 1000, 46.65, 1.94, 0.03239740821, 0.0005399568035, 3.336641647e-9, 5.003461445e-9, 4.369689658e-9,
  3.335640952e-9, 4.436402469e-9, 0.002938669958, 0.0002, 0.0006666666667, 94488.19, 3937.01, 65.62, 1.09];

window.convArray = speedConvArray;

function clearAngle() {
  selectedUnit1.value = speedInitValue1;
  selectedUnit2.value = speedInitValue2;
  originalUnit1 = speedInitValue1;
  originalUnit2 = speedInitValue2;
}

let option = "";
for(let i=0;i<speedArray.length;i++){
  if (i === parseInt(speedInitValue1)) {
    option +=
        '<option value="'+ i + '" selected>' + speedArray[i] + "</option>"
  } else {
    option +=
        '<option value="'+ i + '">' + speedArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option;

for(let j=0;j<speedArray.length;j++){
  if (j === parseInt(speedInitValue2)) {
    option +=
        '<option value="'+ j + '" selected>' + speedArray[j] + "</option>"
  } else {
    option +=
        '<option value="'+ j + '">' + speedArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option;