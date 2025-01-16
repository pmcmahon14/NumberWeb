const radiationArray = ['Rem/Second (rem/s)', 'Sievert/Second (Sv/s)', 'Watt/Kilogram (W/kg)',
  'Attogray/Second (aGy/s)', 'Attogray/Millisecond (aGy/ms)', 'Attogray/Microsecond (aGy/µs)',
  'Attogray/Nanosecond (aGy/ns)', 'Attogray/Minute (aGy/min)',
  'Attogray/Hour (aGy/hr)', 'Attogray/Day (aGy/d)', 'Attogray/Week (aGy/wk)', 'Attogray/Month (aGy/mo)',
  'Attogray/Year (aGy/yr)',
  'Centigray/Second (cGy/s)', 'Centigray/Millisecond (cGy/ms)',
  'Centigray/Microsecond (cGy/µs)', 'Centigray/Nanosecond (cGy/ns)', 'Centigray/Minute (cGy/min)',
  'Centigray/Hour (cGy/hr)', 'Centigray/Day (cGy/d)', 'Centigray/Week (cGy/wk)', 'Centigray/Month (cGy/mo)',
  'Centigray/Year (cGy/yr)',
  'Exagray/Second (EGy/s)', 'Exagray/Millisecond (EGy/ms)',
  'Exagray/Microsecond (EGy/µs)', 'Exagray/Nanosecond (EGy/ns)', 'Exagray/Minute (EGy/min)',
  'Exagray/Hour (EGy/hr)', 'Exagray/Day (EGy/d)', 'Exagray/Week (EGy/wk)', 'Exagray/Month (EGy/mo)',
  'Exagray/Year (EGy/yr)',
  'Femtogray/Second (fGy/s)', 'Femtogray/Millisecond (fGy/ms)',
  'Femtogray/Microsecond (fGy/µs)', 'Femtogray/Nanosecond (fGy/ns)', 'Femtogray/Minute (fGy/min)',
  'Femtogray/Hour (fGy/hr)', 'Femtogray/Day (fGy/d)', 'Femtogray/Week (fGy/wk)', 'Femtogray/Month (fGy/mo)',
  'Femtogray/Year (fGy/yr)',
  'Gigagray/Second (GGy/s)', 'Gigagray/Millisecond (GGy/ms)',
  'Gigagray/Microsecond (GGy/µs)', 'Gigagray/Nanosecond (GGy/ns)', 'Gigagray/Minute (GGy/min)',
  'Gigagray/Hour (GGy/hr)', 'Gigagray/Day (GGy/d)', 'Gigagray/Week (GGy/wk)', 'Gigagray/Month (GGy/mo)',
  'Gigagray/Year (GGy/yr)',
  'Gray/Second (Gy/s)', 'Gray/Millisecond (Gy/ms)', 'Gray/Microsecond (Gy/µs)',
  'Gray/Nanosecond (Gy/ns)', 'Gray/Minute (Gy/min)', 'Gray/Hour (Gy/hr)', 'Gray/Day (Gy/d)', 'Gray/Week (Gy/wk)',
  'Gray/Month (Gy/mo)', 'Gray/Year (Gy/yr)',
  'Joule/Gram/Second (J/g/s)', 'Joule/Gram/Millisecond (J/g/ms)',
  'Joule/Gram/Microsecond (J/g/µs)', 'Joule/Gram/Nanosecond (J/g/ns)', 'Joule/Gram/Minute (J/g/min)',
  'Joule/Gram/Hour (J/g/hr)', 'Joule/Gram/Day (J/g/d)', 'Joule/Gram/Week (J/g/wk)', 'Joule/Gram/Month (J/g/mo)',
  'Joule/Gram/Year (J/g/yr)',
  'Joule/Kilogram/Second (J/kg/s)', 'Joule/Kilogram/Millisecond (J/kg/ms)',
  'Joule/Kilogram/Microsecond (J/kg/µs)', 'Joule/Kilogram/Nanosecond (J/kg/ns)',
  'Joule/Kilogram/Minute (J/kg/min)', 'Joule/Kilogram/Hour (J/kg/hr)', 'Joule/Kilogram/Day (J/kg/d)',
  'Joule/Kilogram/Week (J/kg/wk)', 'Joule/Kilogram/Month (J/kg/mo)', 'Joule/Kilogram/Year (J/kg/yr)',
  'Joule/Milligram/Second (J/mg/s)', 'Joule/Milligram/Millisecond (J/mg/ms)',
  'Joule/Milligram/Microsecond (J/mg/µs)', 'Joule/Milligram/Nanosecond (J/mg/ns)',
  'Joule/Milligram/Minute (J/mg/min)', 'Joule/Milligram/Hour (J/mg/hr)', 'Joule/Milligram/Day (J/mg/d)',
  'Joule/Milligram/Week (J/mg/wk)', 'Joule/Milligram/Month (J/mg/mo)', 'Joule/Milligram/Year (J/mg/yr)',
  'Kilogray/Second (kGy/s)', 'Kilogray/Millisecond (kGy/ms)', 'Kilogray/Microsecond (kGy/µs)',
  'Kilogray/Nanosecond (kGy/ns)', 'Kilogray/Minute (kGy/min)', 'Kilogray/Hour (kGy/hr)', 'Kilogray/Day (kGy/d)',
  'Kilogray/Week (kGy/wk)', 'Kilogray/Month (kGy/mo)', 'Kilogray/Year (kGy/yr)',
  'Megagray/Second (MGy/s)',
  'Megagray/Millisecond (MGy/ms)', 'Megagray/Microsecond (MGy/µs)', 'Megagray/Nanosecond (MGy/ns)',
  'Megagray/Minute (MGy/min)', 'Megagray/Hour (MGy/hr)', 'Megagray/Day (MGy/d)', 'Megagray/Week (MGy/wk)',
  'Megagray/Month (MGy/mo)', 'Megagray/Year (MGy/yr)',
  'Microgray/Second (µGy/s)',
  'Microgray/Millisecond (µGy/ms)', 'Microgray/Microsecond (µGy/µs)', 'Microgray/Nanosecond (µGy/ns)',
  'Microgray/Minute (µGy/min)', 'Microgray/Hour (µGy/hr)', 'Microgray/Day (µGy/d)', 'Microgray/Week (µGy/wk)',
  'Microgray/Month (µGy/mo)', 'Microgray/Year (µGy/yr)',
  'Milligray/Second (mGy/s)',
  'Milligray/Millisecond (mGy/ms)', 'Milligray/Microsecond (mGy/µs)', 'Milligray/Nanosecond (mGy/ns)',
  'Milligray/Minute (mGy/min)', 'Milligray/Hour (mGy/hr)', 'Milligray/Day (mGy/d)', 'Milligray/Week (mGy/wk)',
  'Milligray/Month (mGy/mo)', 'Milligray/Year (mGy/yr)',
  'Millirad/Second (mrd/s)',
  'Millirad/Millisecond (mrd/ms)', 'Millirad/Microsecond (mrd/µs)', 'Millirad/Nanosecond (mrd/ns)',
  'Millirad/Minute (mrd/min)', 'Millirad/Hour (mrd/hr)', 'Millirad/Day (mrd/d)', 'Millirad/Week (mrd/wk)',
  'Millirad/Month (mrd/mo)', 'Millirad/Year (mrd/yr)',
  'Nanogray/Second (nGy/s)',
  'Nanogray/Millisecond (nGy/ms)', 'Nanogray/Microsecond (nGy/µs)', 'Nanogray/Nanosecond (nGy/ns)',
  'Nanogray/Minute (nGy/min)', 'Nanogray/Hour (nGy/hr)', 'Nanogray/Day (nGy/d)', 'Nanogray/Week (nGy/wk)',
  'Nanogray/Month (nGy/mo)', 'Nanogray/Year (nGy/yr)',
  'Petagray/Second (PGy/s)',
  'Petagray/Millisecond (PGy/ms)', 'Petagray/Microsecond (PGy/µs)', 'Petagray/Nanosecond (PGy/ns)',
  'Petagray/Minute (PGy/min)', 'Petagray/Hour (PGy/hr)', 'Petagray/Day (PGy/d)', 'Petagray/Week (PGy/wk)',
  'Petagray/Month (PGy/mo)', 'Petagray/Year (PGy/yr)',
  'Picogray/Second (pGy/s)',
  'Picogray/Millisecond (pGy/ms)', 'Picogray/Microsecond (pGy/µs)', 'Picogray/Nanosecond (pGy/ns)',
  'Picogray/Minute (pGy/min)', 'Picogray/Hour (pGy/hr)', 'Picogray/Day (pGy/d)', 'Picogray/Week (pGy/wk)',
  'Picogray/Month (pGy/mo)', 'Picogray/Year (pGy/yr)',
  'Rad/Second (rd/s)', 'Rad/Millisecond (rd/ms)',
  'Rad/Microsecond (rd/µs)', 'Rad/Nanosecond (rd/ns)', 'Rad/Minute (rd/min)', 'Rad/Hour (rd/hr)',
  'Rad/Day (rd/d)', 'Rad/Week (rd/wk)', 'Rad/Month (rd/mo)', 'Rad/Year (rd/yr)',
  'Teragray/Second (TGy/s)',
  'Teragray/Millisecond (TGy/ms)', 'Teragray/Microsecond (TGy/µs)', 'Teragray/Nanosecond (TGy/ns)',
  'Teragray/Minute (TGy/min)', 'Teragray/Hour (TGy/hr)', 'Teragray/Day (TGy/d)', 'Teragray/Week (TGy/wk)',
  'Teragray/Month (TGy/mo)', 'Teragray/Year (TGy/yr)'];

const radiationInitValue1 = "173";
const radiationInitValue2 = "2";

//based on 1 rad/second
const radiationConvArray = [1, 0.01, 0.01,
  1e16, 1e13, 1e10, 10000000, 6e17, 3.6e19, 8.64e20, 6.048e21, 2.6298e22, 3.15576e23,
  1, 0.001, 0.000001, 1e-9, 60, 3600, 86400, 604800, 2629800, 31557600,
  1e-20, 1e-23, 1e-26, 1e-29, 6e-19, 3.6e-17, 8.64e-16, 6.048e-15, 2.6298e-14, 3.15576e-13,
  1e13, 1e10, 1e7, 10000, 6e14, 3.6e16, 8.64e17, 6.048e18, 2.6298e19, 3.15576e20,
  1e-11, 1e-14, 1e-17, 1e-20, 6e-10, 3.6e-8, 8.64e-7, 0.000006048, 0.000026298, 0.000315576,
  0.01, 0.00001, 1e-8, 1e-11, 0.6, 36, 864, 6048, 26298, 315576,
  0.00001, 1e-8, 1e-11, 1e-14, 0.0006, 0.036, 0.864, 6.048, 26.298, 315.576,
  0.01, 0.00001, 1e-8, 1e-11, 0.6, 36, 864, 6048, 26298, 315576,
  1e-8, 1e-11, 1e-14, 1e-17, 6e-7, 0.000036, 0.000864, 0.006048, 0.026298, 0.315576,
  0.00001, 1e-8, 1e-11, 1e-14, 0.0006, 0.036, 0.864, 6.048, 26.298, 315.576,
  1e-8, 1e-11, 1e-14, 1e-17, 6e-7, 0.000036, 0.000864, 0.006048, 0.026298, 0.315576,
  10000, 10, 0.01, 0.00001, 600000, 3.6e7, 8.64e8, 6.048e9, 2.6298e10, 3.15576e11,
  10, 0.01, 0.00001, 1e-8, 600, 36000, 864000, 6048000, 2.6298e7, 3.15576e8,
  1000, 1, 0.001, 0.000001, 60000, 3600000, 8.64e7, 6.048e8, 2.6298e9, 3.15576e10,
  1e7, 10000, 10, 0.01, 6e8, 3.6e10, 8.64e11, 6.048e12, 2.6298e13, 3.15576e14,
  1e-17, 1e-20, 1e-23, 1e-26, 6e-16, 3.6e-14, 8.64e-13, 6.048e-12, 2.6298e-11, 3.15576e-10,
  1e10, 1e7, 10000, 10, 6e11, 3.6e13, 8.64e14, 6.048e15, 2.6298e16, 3.15576e17,
  1, 0.001, 0.000001, 1e-9, 60, 3600, 86400, 604800, 2629800, 3.15576e7,
  1e-14, 1e-17, 1e-20, 1e-23, 6e-13, 3.6e-11, 8.64e-10, 6.048e-9, 2.6298e-8, 3.15576e-7];

window.convArray = radiationConvArray;

function clearAngle() {
  selectedUnit1.value = radiationInitValue1;
  selectedUnit2.value = radiationInitValue2;
  originalUnit1 = radiationInitValue1;
  originalUnit2 = radiationInitValue2;
}

let option1 = "";
for(let i=0;i<radiationArray.length;i++){
  if (i === parseInt(radiationInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + radiationArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + radiationArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<radiationArray.length;j++){
  if (j === parseInt(radiationInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + radiationArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + radiationArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;