const List<String> cookingArray = ['#2.5 can (can)', '#10 can (can)', 'Bushel (US) (bu)', 'Bushel (UK) (bu)',
  'Butter Stick (stick)', 'Coffee Spoon (csp)', 'Cup (US) (C)', 'Cup (metric) (C)', 'Cup (Imperial) (C)',
  'Dash (ds)', 'Deciliter (dl)', 'Dessertspoon (US) (dstspn)', 'Dessertspoon (UK) (dstspn)', 'Dram (dr)',
  'Drop (dp)', 'Fifth (1/5)', 'Fluid Ounce (US) (fl oz)', 'Fluid Ounce (UK) (fl oz)', 'Gallon (US dry) (gal)',
  'Gallon (US liquid) (gal)', 'Gallon (UK) (gal)', 'Gill (US) (gl)', 'Gill (UK) (gl)', 'Hogshead (US) (hhd)',
  'Hogshead (UK) (hhd)', 'Jigger (jigger)', 'Kiloliter (kl)', 'Liter (l)', 'Milliliter (ml)', 'Ounce (US) (oz)',
  'Ounce (UK) (oz)', 'Peck (US) (pk)', 'Peck (UK) (pk)', 'Pinch (pinch)', 'Pint (US) (pt)', 'Pint (UK) (pt)',
  'Quart (US) (qt)', 'Quart (UK) (qt)', 'Shot (shot)', 'Tablespoon (US) (tbsp)', 'Tablespoon (UK) (tbsp)',
  'Tablespoon (metric) (tbsp)', 'Teaspoon (US) (tsp)', 'Teaspoon (UK) (tsp)', 'Teaspoon (metric) (tsp)'];

String cookingInitValue1 = 'Cup (US) (C)';
String cookingInitValue2 = 'Teaspoon (US) (tsp)';

//based on 1 cup(US)
const List<double> cookingConvArray = [0.28571428571, 0.083333333333, 0.0067138037411, 0.0065052660638,
  0.98607036957, 96, 1, 0.946352946, 1.0408427308, 384, 2.365882375, 24, 19.984180431, 64, 4731.76, 0.31249995139,
  8, 8.3267418463, 0.053710437606, 0.062499986791398, 0.052042136539, 2, 1.6653483693, 0.00099206349207,
  0.00082606565935, 5.26, 0.0002365882365, 0.2365882365, 236.5882365, 8, 8.3267418463, 0.026855218803,
  0.02602106827, 768, 0.5, 0.41633709231, 0.25, 0.20816854616, 8, 16, 16.653483693, 15.772549148, 48, 66.61393477,
  47.3176473];