const energyArray = ['100 Cubic Feet Natural Gas (ccf)', 'Attojoule (aJ)',
  'Automotive Gasoline (UK) (gal)', 'Automotive Gasoline (US) (gal)', 'Aviation Gasoline (UK) (gal)',
  'Aviation Gasoline (US) (gal)', 'Board of Trade (BOTU)', 'BTU (BTU)', 'BTU (TH) (BTU)', 'Calorie (Cal)',
  'Calorie (15°C) (Cal)', 'Calorie (Nutritional) (Cal)', 'Calorie (TH) (Cal)', 'Celsius Heat (CHU)',
  'Centijoule (cJ)', 'Cheval Vapeur Heure (cvh)', 'Decijoule (dJ)', 'Dekajoule (dkJ)', 'Dekatherm (dkthm)',
  'Dekawatt Hour (dkWh)', 'Diesel Oil (UK) (gal diesel)', 'Diesel Oil (US) (gal diesel)',
  'Distillate #2 Fuel Oil (UK) (gal)', 'Distillate #2 Fuel Oil (US) (gal)', 'Dyne Centimeter (dyn cm)',
  'Electronvolt (eV)', 'Exajoule (EJ)', 'Exawatt Hour (EWh)', 'Femtojoule (fJ)', 'Foot Pound (ft-lb)',
  'Foot Poundal (ft-pdl)', 'Fuel Oil Equivalent of 1 Barrel (bbl)', 'Fuel Oil Equivalent of 1 Kiloliter (kl)',
  'Gasoline (Liter) (l gas)', 'Gigaelectronvolt (GeV)', 'Gigajoule (GJ)', 'Gigaton (TNT) (Gtn)',
  'Gigawatt Hour (GWh)', 'Gram Calorie (gcal)', 'Gram Force Centimeter (gf cm)', 'Gram Force Meter (gf m)',
  'Hartree (2R∞hc)', 'Hectojoule (hJ)', 'Hectowatt Hour (hWh)', 'Horsepower Hour (hph)',
  'Horsepower Hour (Metric) (hph)', 'Inch Ounce (in-oz)', 'Inch Pound (in-lb)', 'Joule (J)',
  'Kerosene (UK) (gal)', 'Kerosene (US) (gal)', 'Kerosene Type Jet Fuel (UK) (gal)',
  'Kerosene Type Jet Fuel (US) (gal)', 'Kilocalorie (kcal)', 'Kilocalorie (15°C) (kcal)',
  'Kilocalorie (Nutritional) (kcal)', 'Kilocalorie (TH) (kcal)', 'Kiloelectronvolt (keV)',
  'Kilogram Calorie (kgcal)', 'Kilogram Force Centimeter (kgf cm)', 'Kilogram Force Meter (kgf-m)',
  'Kilojoule (kJ)', 'Kilopond Meter (kpm)', 'Kiloton (TNT) (ktn)', 'Kilowatt Second (kWs)',
  'Kilowatt Hour (kWh)', 'Liter Atmosphere (l-atm)', 'LPG Gallon (UK) (lpg)', 'LPG Gallon (US) (lpg)',
  'Mega BTU (MBTU)', 'Megaelectronvolt (MeV)', 'Megajoule (MJ)', 'Megaton (TNT) (Mtn)', 'Megawatt Hour (MWh)',
  'Microjoule (µJ)', 'Millijoule (mJ)', 'MMBTU (MMBTU)', 'MMKcal (MMKcal)', 'Myriawatt Hour (myWh)',
  'Nanojoule (nJ)', 'Naphtha Type Jet Fuel (UK) (gal)', 'Naphtha Type Jet Fuel (US) (gal)',
  'Newton Meter (Nm)', 'Ounce Force Inch (ozf in)', 'Petajoule (PJ)', 'Petawatt hour (PWh)', 'Picojoule (pJ)',
  'Pound Force Foot (lbf ft)', 'Pound Force Inch (lbf in)', 'Q unit (q)', 'Quad (quad)',
  'Refrigeration Ton Hour (tnh)', 'Residual Fuel Oil (UK) (gal oil)', 'Residual Fuel Oil (US) (gal oil)',
  'Teraelectronvolt (TeV)', 'Terajoule (TJ)', 'Terawatt Hour (TWh)', 'Therm (Europe) (thm)', 'Therm (US) (thm)',
  'Thermie (th)', 'Ton (TNT) (tn)', 'Tonne of Coal (t coal)', 'Tonne of Oil (t oil)', 'Watt Hour (Wh)',
  'Watt Second (Ws)', 'Yoctojoule (yJ)', 'Yottajoule (YJ)', 'Yottawatt Hour (YWh)', 'Zeptojoule (zJ)',
  'Zettajoule (ZJ)', 'Zettawatt Hour (ZWh)'];

const energyInitValue1 = "48";
const energyInitValue2 = "7";

const energyConvArray = [9.1979396615e-9, 1e18, 6.3196276031e-9, 7.5895567699e-9, 6.3196276031e-9,
  7.5895567699e-9, 2.7777777778e-7, 0.00094781712031, 0.0009484513828, 0.23884589663, 0.23890295762,
  0.00023884589663, 0.23900573614, 0.00052656507647, 100, 3.776726715e-7, 10, 0.1, 9.4804342797e-10, 2.7777777778e-5,
  5.6830066406e-9, 6.825006825e-9, 5.6830066406e-9, 6.825006825e-9, 10000000, 6.2415093433e18, 1e-18,
  2.7777777778e-22, 1e15, 0.73756215242, 23.73, 1.5666398683e-10, 2.4877089772e-11, 2.9239766082e-8, 6241509343.3,
  1e-9, 2.3900573614e-19, 2.7777777778e-13, 0.23884589663, 10197.16, 101.9716, 2.2937115044e17, 0.01,
  2.7777777778e-6, 3.7250607185e-7, 3.7767267147331e-7, 141.61, 8.85, 1, 5.8556549436e-9, 7.0323488045e-9,
  5.8556549436e-9, 7.0323488045e-9, 0.00023884589663, 2.3890295762e-4, 2.3884589663e-7, 0.00023900573614,
  6.2415093433e15, 2.3884589663e-4, 10.2, 0.1019716213, 0.001, 0.1019716213, 2.3900573614e-13, 0.001,
  2.7777777778e-7, 0.0098692326672, 8.2641127061e-9, 9.9247861544e-9, 9.4781712031e-10, 6.2415093433e12, 0.000001,
  2.3900573614e-16, 2.7777777778e-10, 1000000, 1000, 9.4781712031e-10, 2.3884589663e-10, 2.7777777778e-8, 1e9,
  6.2176981256e-9, 7.4671445639e-9, 1, 141.61, 1e-15, 2.7777777778e-19, 1e12, 0.7375621524, 8.85, 9.4781707775e-22,
  9.4781707775e-19, 7.8984760026e-8, 5.2687555871e-9, 6.3275120223e-9, 6241509.34, 1e-12, 2.7777777778e-16,
  9.4781707775e-9, 9.4804342797e-9, 2.3890295762e-7, 2.3900573614e-10, 3.4120842375e-11, 2.3884589663e-11,
  0.00027777777778, 1, 1e24, 1e-24, 2.7777777778e-28, 1e21, 1e-21, 2.7777777778e-25];

document.addEventListener("DOMContentLoaded", function(){
  window.convArray = energyConvArray;
})

function clearAngle() {
  selectedUnit1.value = energyInitValue1;
  selectedUnit2.value = energyInitValue2;
  originalUnit1 = energyInitValue1;
  originalUnit2 = energyInitValue2;
}