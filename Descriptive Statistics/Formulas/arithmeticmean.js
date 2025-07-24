let amean1 = ' <math>\n' +
    '   <mi>arithmetic mean</mi>\n' +
    '  <mo>=</mo>\n' +
    '  <mstyle displaystyle="true" scriptlevel="0">\n' +
    '    <mfrac>\n' +
    '      <mrow>\n' +
    '        <munderover>\n' +
    '          <mo>&#x2211;</mo>\n' +
    '          <mrow>\n' +
    '            <mi>i</mi>\n' +
    '            <mo>=</mo>\n' +
    '            <mn>1</mn>\n' +
    '          </mrow>\n' +
    '          <mrow>\n' +
    '            <mi>n</mi>\n' +
    '          </mrow>\n' +
    '        </munderover>\n' +
    '        <msub>\n' +
    '          <mi>x</mi>\n' +
    '          <mi>i</mi>\n' +
    '        </msub>\n' +
    '      </mrow>\n' +
    '      <mi>n</mi>\n' +
    '    </mfrac>\n' +
    '    <mo>=</mo>\n' +
    '    <mfrac>\n' +
    '        <mrow>\n' +
    '          <msub>\n' +
    '            <mi>&#119909;</mi>\n' +
    '            <mn>1</mn>\n' +
    '        </msub>\n' +
    '          <mo>+</mo>\n' +
    '          <msub>\n' +
    '            <mi>&#119909;</mi>\n' +
    '            <mn>2</mn>\n' +
    '        </msub>\n' +
    '          <mtext>+...+</mtext>\n' +
    '          <msub>\n' +
    '            <mi>&#119909;</mi>\n' +
    '            <mn>n</mn>\n' +
    '        </msub>\n' +
    '        </mrow>\n' +
    '      <mi>n</mi>\n' +
    '    </mfrac>\n' +
    '  </mstyle>\n' +
    '  </math>';
document.getElementById("aMean1").innerHTML = amean1;

let amean2 = '<math>\n' +
    '   <mover>\n' +
    '    <mi>x</mi>\n' +
    '    <mo accent="false">&#x00AF;<!-- ¯ --></mo>\n' +
    '  </mover>\n' +
    '  </math>';
document.getElementById("aMean2").innerHTML = amean2;

let amean3 = '<math>\n' +
    '   <mover>\n' +
    '    <mi>x</mi>\n' +
    '    <mo accent="false">&#x00AF;<!-- ¯ --></mo>\n' +
    '  </mover>\n' +
    '  </math>';
document.getElementById("aMean3").innerHTML = amean3;