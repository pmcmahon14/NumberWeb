const List<String> weightArray = ['Atomic Mass Unit (u)', 'Avogram (avogram)', 'Bale (UK) (bale)',
  'Bale (US) (bale)', 'Barge (barge)', 'Butter Stick (stick)', 'Carat (ct)', 'Clove (clove)', 'Dalton (Da)',
  'Deuteron Mass (D)', 'Dram (dr)', 'Dyne (Dyne)', 'Earth Mass (e)', 'Electron Mass (me)', 'Electron Volt (eV)',
  'Flask (flask)', 'Gamma (Γ)', 'Gigagram (Gg)', 'Gigaton (Metric) (Gtn)', 'Grain (gr)', 'Gram (g)',
  'Hundredweight (Long) (cwt)', 'Hundredweight (Short) (cwt)', 'Keel (Coal) (keel)', 'Keg (Nails) (keg)',
  'Kilogram (kg)', 'Kilonewton (kN)', 'Kilopound (klb)', 'Kiloton (Short) (ktn)', 'Kiloton (Long) (ktn)',
  'Kiloton (Metric) (ktn)', 'Megagram (Mg)', 'Megaton (Metric) (Mtn)',
  'Mercantile Pound (lb)', 'Microgram (µg)', 'Milligram (mg)', 'Muon Mass (µ)', 'Myriagram (myg)',
  'Nanogram (ng)', 'Neutron Mass (n)', 'Newton (N)', 'Ounce (oz)', 'Ounce (Troy) (oz)', 'Pennyweight (dwt)',
  'Planck Mass (mP)', 'Point (pointmass)', 'Pond (pondmass)', 'Pound (lb)', 'Pound (Troy) (troy lb)',
  'Poundal (pdl)', 'Proton Mass (p)', 'Quarter (UK) (quarter)', 'Quarter (US) (quarter)', 'Scruple (scruple)',
  'Sheet (sheet)', 'Shekel (shekel)', 'Slug (slug)', 'Stone (st)', 'Sun Mass (sun)', 'Ton (Long) (tn)',
  'Ton (Metric) (tn)', 'Ton (Short) (tn)'];

String weightInitValue1 = 'Gram (g)';
String weightInitValue2 = 'Pound (lb)';

//based on 1 gram
const List<double> weightConvArray = [6.0229552895e23, 6.0221366517e23, 0.0000030619, 0.0000045931, 4.8991613819e-8,
  0.0086956522, 5, 0.0003149606, 6.0229552895e23, 2.9908008955e23, 0.5643833912, 980.67, 1.6733601071e-28,
  1.0977683830e+27, 5.6095883572e32, 0.0000290082, 1000000, 1e-9, 1e-15, 15.43, 1, 0.0000196841, 0.0000220462,
  4.6424836208e-8, 0.0000220462, 0.001, 0.0000098067, 0.0000022046, 1.1023113109e-9, 9.8420652761e-10, 1e-9, 0.000001,
  1e-12, 0.002143393, 1000000, 1000, 5.3091724927e24, 0.0001, 1e9, 5.9704037533e23, 0.0098066500, 0.03527396195,
  0.0321507474, 0.6430148652, 45940.89, 500, 0.002, 0.0022046226, 0.002679229, 0.0709888484, 5.9786332055e23,
  0.0000787365, 0.0000881849, 0.7716179176, 1.54, 0.0875656743, 0.0000685218, 0.000157473, 5e-34, 9.8420652761e-7,
  0.000001, 0.0000011023];