let outliers1 = '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">\n' +
    '  <mtext>Upper Fence</mtext>\n' +
    '  <mo>=</mo>\n' +
    '  <msub>\n' +
    '    <mi>Q</mi>\n' +
    '    <mn>3</mn>\n' +
    '  </msub>\n' +
    '  <mo>+</mo>\n' +
    '  <mn>1.5</mn>\n' +
    '  <mo>&#x00D7;<!-- × --></mo>\n' +
    '  <mi>I</mi>\n' +
    '  <mi>Q</mi>\n' +
    '  <mi>R</mi>\n' +
    '</math>';
document.getElementById("Outliers1").innerHTML = outliers1;

let outliers2 = '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">\n' +
    '  <mtext>Lower Fence</mtext>\n' +
    '  <mo>=</mo>\n' +
    '  <msub>\n' +
    '    <mi>Q</mi>\n' +
    '    <mn>1</mn>\n' +
    '  </msub>\n' +
    '  <mo>&#x2212;<!-- − --></mo>\n' +
    '  <mn>1.5</mn>\n' +
    '  <mo>&#x00D7;<!-- × --></mo>\n' +
    '  <mi>I</mi>\n' +
    '  <mi>Q</mi>\n' +
    '  <mi>R</mi>\n' +
    '</math>';
document.getElementById("Outliers2").innerHTML = outliers2;