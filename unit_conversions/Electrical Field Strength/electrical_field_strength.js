const efsArray = ['Abvolt/Kilometer(abV/km)', 'Abvolt/Meter(abV/m)', 'Abvolt/Centimeter(abV/cm)',
  'Abvolt/Millimeter(abV/mm)', 'Abvolt/Micrometer(abV/µm)', 'Abvolt/Nanometer(abV/nm)', 'Abvolt/Mile(abV/mi)',
  'Abvolt/Yard(abV/yd)', 'Abvolt/Foot(abV/ft)', 'Abvolt/Inch(abV/in)', 'Kilovolt/Kilometer(kV/km)',
  'Kilovolt/Meter(kV/m)', 'Kilovolt/Centimeter(kV/cm)', 'Kilovolt/Millimeter(kV/mm)',
  'Kilovolt/Micrometer(kV/µm)', 'Kilovolt/Nanometer(kV/nm)', 'Kilovolt/Mile(kV/mi)', 'Kilovolt/Yard(kV/yd)',
  'Kilovolt/Foot(kV/ft)', 'Kilovolt/Inch(kV/in)', 'Megavolt/Kilometer(MV/km)', 'Megavolt/Meter(MV/m)',
  'Megavolt/Centimeter(MV/cm)', 'Megavolt/Millimeter(MV/mm)', 'Megavolt/Micrometer(MV/µm)',
  'Megavolt/Nanometer(MV/nm)', 'Megavolt/Mile(MV/mi)', 'Megavolt/Yard(MV/yd)', 'Megavolt/Foot(MV/ft)',
  'Megavolt/Inch(MV/in)', 'Microvolt/Kilometer(µV/km)', 'Microvolt/Meter(µV/m)', 'Microvolt/Centimeter(µV/cm)',
  'Microvolt/Millimeter(µV/mm)', 'Microvolt/Micrometer(µV/µm)', 'Microvolt/Nanometer(µV/nm)',
  'Microvolt/Mile(µV/mi)', 'Microvolt/Yard(µV/yd)', 'Microvolt/Foot(µV/ft)', 'Microvolt/Inch(µV/in)',
  'Millivolt/Kilometer(mV/km)', 'Millivolt/Meter(mV/m)', 'Millivolt/Centimeter(mV/cm)',
  'Millivolt/Millimeter(mV/mm)', 'Millivolt/Micrometer(mV/µm)', 'Millivolt/Nanometer(mV/nm)',
  'Millivolt/Mile(mV/mi)', 'Millivolt/Yard(mV/yd)', 'Millivolt/Foot(mV/ft)', 'Millivolt/Inch(mV/in)',
  'Statvolt/Kilometer(stV/km)', 'Statvolt/Meter(stV/m)', 'Statvolt/Centimeter(stV/cm)',
  'Statvolt/Millimeter(stV/mm)', 'Statvolt/Micrometer(stV/µm)', 'Statvolt/Nanometer(stV/nm)',
  'Statvolt/Mile(stV/mi)', 'Statvolt/Yard(stV/yd)', 'Statvolt/Foot(stV/ft)', 'Statvolt/Inch(stV/in)',
  'Volt/Kilometer(V/km)', 'Volt/Meter(V/m)', 'Volt/Centimeter(V/cm)', 'Volt/Millimeter(V/mm)',
  'Volt/Micrometer(V/µm)', 'Volt/Nanometer(V/nm)', 'Volt/Mile(V/mi)', 'Volt/Yard(V/yd)', 'Volt/Foot(V/ft)',
  'Volt/Inch(V/in)', 'Watt/Ampere/Kilometer(W/A/km)', 'Watt/Ampere/Meter(W/A/m)',
  'Watt/Ampere/Centimeter(W/A/cm)', 'Watt/Ampere/Millimeter(W/A/mm)', 'Watt/Ampere/Micrometer(W/A/µm)',
  'Watt/Ampere/Nanometer(W/A/nm)', 'Watt/Ampere/Mile(W/A/mi)', 'Watt/Ampere/Yard(W/A/yd)',
  'Watt/Ampere/Foot(W/A/ft)', 'Watt/Ampere/Inch(W/A/in)'];

const efsInitValue1 = "61";
const efsInitValue2 = "71";

//based on 1 volt/meter
const efsConvArray = [1e11, 1e8, 1e6, 1e5, 100, 0.1, 1.609344e11, 91440000, 30480000, 2540000,
  1, 0.001, 0.00001, 0.000001, 1e-9, 1e-12, 1.60934, 0.0009144, 0.0003048, 0.0000254,
  0.001, 0.000001, 1e-8, 1e-9, 1e-12, 1e-15, 0.001609344, 0.0000009144, 3.048e-7, 2.54e-8,
  1e9, 1000000, 10000, 1000, 1, 0.001, 1.609344e9, 914400, 304800, 25400,
  1000000, 1000, 10, 1, 0.001, 0.000001, 1609344, 914.4, 304.8, 25.4,
  3.3356399951, 0.0033356399951, 3.3356399951e-5, 3.3356399951e-6, 3.3356399951e-9,
  3.3356399951e-12, 5.37, 0.0030501092115, 0.0010167030705, 0.000084725255876,
  1000, 1, 0.01, 0.001, 0.000001, 1e-9, 1609.34, 0.9144, 0.3048, 0.0254,
  1000, 1, 0.01, 0.001, 0.000001, 1e-9, 1609.34, 0.9144, 0.3048, 0.0254];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = efsConvArray;
})

function clearAngle() {
  selectedUnit1.value = efsInitValue1;
  selectedUnit2.value = efsInitValue2;
  originalUnit1 = efsInitValue1;
  originalUnit2 = efsInitValue2;
}
