let secantAcos = '<math>\n' +
    '    <mrow>\n' +
    '        <mi>acsc(&#119909;) = &theta; or csc(&theta;) = &#119909;</mi>\n' +
    '        <mo>=</mo>\n' +
    '        <mfrac>\n' +
    '            <msup>\n' +
    '                <mi>adjacent</mi>\n' +
    '            </msup>\n' +
    '            <msup>\n' +
    '                <mi>opposite</mi>\n' +
    '            </msup>\n' +
    '        </mfrac>\n' +
    '        <mo>=</mo>\n' +
    '        <mfrac>\n' +
    '            <msup>\n' +
    '                <mi>cos(&theta;)</mi>\n' +
    '            </msup>\n' +
    '            <msup>\n' +
    '                <mi>sin(&theta;)</mi>\n' +
    '            </msup>\n' +
    '        </mfrac>\n' +
    '    </mrow>        \n' +
    '</math>';
document.getElementById("cscArccsc").innerHTML = secantAcos;

let arccos = '<math>\n' +
    '    <mi>arccsc(&#119909;) &isin; [-</mi>\n' +
    '    <mfrac>\n' +
    '      <mi>&pi;</mi>\n' +
    '      <mn>2</mn>\n' +
    '    </mfrac>\n' +
    '    <mi>,0) &cup; (0,</mi>\n' +
    '    <mfrac>\n' +
    '      <mi>&pi;</mi>\n' +
    '      <mn>2</mn>\n' +
    '    </mfrac>\n' +
    '    <mi>] or [-180&deg;,0) &cup; (0,180&deg;]</mi>\n' +
    '  </math>';
document.getElementById("arcCos").innerHTML = arccos;