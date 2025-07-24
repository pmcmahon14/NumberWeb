let var1 = '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">\n' +
    '  <msup>\n' +
    '    <mi>s</mi>\n' +
    '    <mrow class="MJX-TeXAtom-ORD">\n' +
    '      <mn>2</mn>\n' +
    '    </mrow>\n' +
    '  </msup>\n' +
    '  <mo>=</mo>\n' +
    '  <mstyle displaystyle="true" scriptlevel="0">\n' +
    '    <mfrac>\n' +
    '      <mrow>\n' +
    '        <munderover>\n' +
    '          <mo>&#x2211;<!-- ∑ --></mo>\n' +
    '          <mrow>\n' +
    '            <mi>i</mi>\n' +
    '            <mo>=</mo>\n' +
    '            <mn>1</mn>\n' +
    '          </mrow>\n' +
    '          <mrow>\n' +
    '            <mi>n</mi>\n' +
    '          </mrow>\n' +
    '        </munderover>\n' +
    '        <mo stretchy="false">(</mo>\n' +
    '        <msub>\n' +
    '          <mi>x</mi>\n' +
    '          <mi>i</mi>\n' +
    '        </msub>\n' +
    '        <mo>&#x2212;<!-- − --></mo>\n' +
    '        <mover>\n' +
    '          <mi>x</mi>\n' +
    '          <mo accent="false">&#x00AF;<!-- ¯ --></mo>\n' +
    '        </mover>\n' +
    '        <msup>\n' +
    '          <mo stretchy="false">)</mo>\n' +
    '          <mrow>\n' +
    '            <mn>2</mn>\n' +
    '          </mrow>\n' +
    '        </msup>\n' +
    '      </mrow>\n' +
    '      <mrow>\n' +
    '        <mi>n</mi>\n' +
    '        <mo>&#x2212;<!-- − --></mo>\n' +
    '        <mn>1</mn>\n' +
    '      </mrow>\n' +
    '    </mfrac>\n' +
    '  </mstyle>\n' +
    '</math>';
document.getElementById("Variance1").innerHTML = var1;

let var2 = '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">\n' +
    '  <msup>\n' +
    '    <mi>&#x03C3;<!-- σ --></mi>\n' +
    '    <mrow class="MJX-TeXAtom-ORD">\n' +
    '      <mn>2</mn>\n' +
    '    </mrow>\n' +
    '  </msup>\n' +
    '  <mo>=</mo>\n' +
    '  <mstyle displaystyle="true" scriptlevel="0">\n' +
    '    <mfrac>\n' +
    '      <mrow>\n' +
    '        <munderover>\n' +
    '          <mo>&#x2211;<!-- ∑ --></mo>\n' +
    '          <mrow>\n' +
    '            <mi>i</mi>\n' +
    '            <mo>=</mo>\n' +
    '            <mn>1</mn>\n' +
    '          </mrow>\n' +
    '          <mrow>\n' +
    '            <mi>n</mi>\n' +
    '          </mrow>\n' +
    '        </munderover>\n' +
    '        <mo stretchy="false">(</mo>\n' +
    '        <msub>\n' +
    '          <mi>x</mi>\n' +
    '          <mi>i</mi>\n' +
    '        </msub>\n' +
    '        <mo>&#x2212;<!-- − --></mo>\n' +
    '        <mi>&#x03BC;<!-- μ --></mi>\n' +
    '        <msup>\n' +
    '          <mo stretchy="false">)</mo>\n' +
    '          <mrow>\n' +
    '            <mn>2</mn>\n' +
    '          </mrow>\n' +
    '        </msup>\n' +
    '      </mrow>\n' +
    '      <mi>n</mi>\n' +
    '    </mfrac>\n' +
    '  </mstyle>\n' +
    '</math>';
document.getElementById("Variance2").innerHTML = var2;