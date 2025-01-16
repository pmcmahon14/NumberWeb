const dataTransferArray = ['Bits/Day(b/d)', 'Bits/Hour(b/hr)', 'Bits/Microsecond(b/µs)',
  'Bits/Millisecond(b/ms)', 'Bits/Minute(b/min)', 'Bits/Nanosecond(b/ns)', 'Bits/Second(b/s)', 'Bytes/Day(B/d)',
  'Bytes/Hour(B/hr)', 'Bytes/Microsecond(B/µs)', 'Bytes/Millisecond(B/ms)', 'Bytes/Minute(B/min)',
  'Bytes/Nanosecond(B/ns)', 'Bytes/Second(B/s)', 'Ethernet', 'Fast Ethernet', 'Gigabit Ethernet', 'Gigabits/Day(Gb/d)',
  'Gigabits/Hour(Gb/hr)', 'Gigabits/Microsecond(Gb/µs)', 'Gigabits/Millisecond(Gb/ms)', 'Gigabits/Minute(Gb/min)',
  'Gigabits/Nanosecond(Gb/ns)', 'Gigabits/Second(Gb/s)', 'Gigabytes/Day(GB/d)', 'Gigabytes/Hour(GB/hr)',
  'Gigabytes/Microsecond(GB/µs)', 'Gigabytes/Millisecond(GB/ms)', 'Gigabytes/Minute(GB/min)',
  'Gigabytes/Nanosecond(GB/ns)', 'Gigabytes/Second(GB/s)', 'Kilobits/Day(kb/d)', 'Kilobits/Hour(kb/hr)',
  'Kilobits/Microsecond(kb/µs)', 'Kilobits/Millisecond(kb/ms)', 'Kilobits/Minute(kb/min)',
  'Kilobits/Nanosecond(kb/ns)', 'Kilobits/Second(kb/s)', 'Kilobytes/Day(kB/d)', 'Kilobytes/Hour(kB/hr)',
  'Kilobytes/Microsecond(kB/µs)', 'Kilobytes/Millisecond(kB/ms)', 'Kilobytes/Minute(kB/min)',
  'Kilobytes/Nanosecond(kB/ns)', 'Kilobytes/Second(kB/s)', 'Megabits/Day(Mb/d)', 'Megabits/Hour(Mb/hr)',
  'Megabits/Microsecond(Mb/µs)', 'Megabits/Millisecond(Mb/ms)', 'Megabits/Minute(Mb/min)',
  'Megabits/Nanosecond(Mb/ns)', 'Megabits/Second(Mb/s)', 'Megabytes/Day(MB/d)', 'Megabytes/Hour(MB/hr)',
  'Megabytes/Microsecond(MB/µs)', 'Megabytes/Millisecond(MB/ms)', 'Megabytes/Minute(MB/min)',
  'Megabytes/Nanosecond(MB/ns)', 'Megabytes/Second(MB/s)', 'Terabits/Day(Tb/d)', 'Terabits/Hour(Tb/hr)',
  'Terabits/Microsecond(Tb/µs)', 'Terabits/Millisecond(Tb/ms)', 'Terabits/Minute(Tb/min)',
  'Terabits/Nanosecond(Tb/ns)', 'Terabits/Second(Tb/s)', 'Terabytes/Day(TB/d)', 'Terabytes/Hour(TB/hr)',
  'Terabytes/Microsecond(TB/µs)', 'Terabytes/Millisecond(TB/ms)', 'Terabytes/Minute(TB/min)',
  'Terabytes/Nanosecond(TB/ns)', 'Terabytes/Second(TB/s)'];

const dataTransferInitValue1 = "13";
const dataTransferInitValue2 = "6";

//based on 1 byte/second
const dataTransferConvArray = [691200, 28800, 0.000008, 0.008, 480, 8e-9, 8, 86400, 3600, 0.000001,
  0.001, 60, 1e-9, 1, 8e-7, 8e-8, 8e-9, 0.0006912, 0.0000288, 8e-15, 8e-12, 4.8e-7, 8e-18, 8e-9, 0.0000864, 0.0000036,
  1e-15, 1e-12, 6e-8, 1e-18, 1e-9, 691.2, 28.8, 8e-9, 0.000008, 0.48, 8e-12, 0.008, 86.4, 3.6, 1e-9, 0.000001,
  0.06, 1e-12, 0.001, 0.6912, 0.0288, 8e-12, 8e-9, 0.00048, 8e-15, 0.000008, 0.0864, 0.0036, 1e-12, 1e-9, 0.00006,
  1e-15, 0.000001, 6.912e-7, 2.88e-8, 8e-18, 8e-15, 4.8e-10, 8e-21, 8e-12, 8.64e-8, 3.6e-9, 1e-18, 1e-15, 6e-11, 1e-21,
  1e-12];

window.convArray = dataTransferConvArray;

function clearAngle() {
  selectedUnit1.value = dataTransferInitValue1;
  selectedUnit2.value = dataTransferInitValue2;
  originalUnit1 = dataTransferInitValue1;
  originalUnit2 = dataTransferInitValue2;
}

let option1 = "";
for(let i=0;i<dataTransferArray.length;i++){
  if (i === parseInt(dataTransferInitValue1)) {
    option1 +=
        '<option value="'+ i + '" selected>' + dataTransferArray[i] + "</option>"
  } else {
    option1 +=
        '<option value="'+ i + '">' + dataTransferArray[i] + "</option>"
  }
}
document.getElementById("unit1").innerHTML = option1;

let option2 = "";
for(let j=0;j<dataTransferArray.length;j++){
  if (j === parseInt(dataTransferInitValue2)) {
    option2 +=
        '<option value="'+ j + '" selected>' + dataTransferArray[j] + "</option>"
  } else {
    option2 +=
        '<option value="'+ j + '">' + dataTransferArray[j] + "</option>"
  }
}
document.getElementById("unit2").innerHTML = option2;