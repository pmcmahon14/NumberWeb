const timeArray = ['Attosecond (as)', 'Century (c)', 'Day (d)', 'Day (sidereal) (d)',
  'Decade (dec)', 'Femtosecond (fs)', 'Fortnight (Fortn)', 'Hour (h)', 'Hour (sidereal) (hr)',
  'Microsecond (µs)', 'Millennium (M)', 'Millisecond (ms)', 'Minute (min)', 'Minute (sidereal) (min)',
  'Month (mo)', 'Month (synodic) (mo)', 'Nanosecond (ns)', 'Novennial', 'Octennial', 'Picosecond (ps)',
  'Planck time', 'Quarter (qtr)', 'Quindecennial', 'Quinquennial', 'Second (sec)', 'Second (sidereal) (sec)',
  'Septennial', 'Shake (shake)', 'Week (wk)', 'Year (yr)', 'Year (Julian) (yr)', 'Year (leap) (yr)',
  'Year (sidereal) (yr)', 'Year (tropical) (yr)'];

const timeInitValue1 = "24";
const timeInitValue2 = "12";

//based on 1 minute
const timeConvArray = [1e18, 3.1688087814e-10, 0.0000115741, 0.0000116058, 3.1688087814e-9, 1e15,
  8.2671957672e-7, 0.00027777777778, 0.00027853818703, 1000000, 3.1688087814e-11, 1000, 0.01666666667,
  0.01671229122, 3.8025705377e-7, 3.9193494457e-7, 1e9, 3.520898646e-9, 3.9610109768e-9, 1e12, 1.8599996838e43,
  1.2675235126e-7, 2.1125391876e-9, 6.3376175628e-9, 1, 1, 4.5268696877e-9, 1e8, 1.653439153e-6, 3.1688087814e-8,
  3.1688087814e-8, 3.1623153208e-8, 3.1687536047e-8, 3.1688760599e-8];

window.convArray = timeConvArray;

function clearAngle() {
  selectedUnit1.value = timeInitValue1;
  selectedUnit2.value = timeInitValue2;
  originalUnit1 = timeInitValue1;
  originalUnit2 = timeInitValue2;
}

let option1 = "";
for(let i=0;i<timeArray.length;i++){
  if (i === parseInt(timeInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + timeArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + timeArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<timeArray.length;j++){
  if (j === parseInt(timeInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + timeArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + timeArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;