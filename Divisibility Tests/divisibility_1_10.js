const test1_10 = '<p><span style="font-weight: bold">Divisibility Rule for 1:</span><br>All non-zero integers!</p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 2:</span><br>If the non-zero number ends in either 0, 2, 4, 6, or 8, it is divisible by two. All even numbers are divisible by 2.</p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 3:</span><br>If the sum of the digits is divisible by 3, then the number is divisible by 3.</p>\n' +
    '        <math>\n' +
    '            <mtext>3258 => 3+2+5+8=18 => 18/3=6 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 3258/3=1086</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 4:</span><br>If the last two digits as a number are divisible by 4, then the number is divisible by 4.</p>\n' +
    '        <math>\n' +
    '            <mtext>5216 => last two digits 16 => 16/4=4 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 5216/4=1304</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 5:</span><br>If the last digit is either 5 or 0, then the number is divisible by 5.</p>\n' +
    '        <math>\n' +
    '            <mtext>17520 => last digit is 0 => 16/4=4 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 5216/4=1304</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 6:</span><br>If the number is divisible by both 2 and 3, then the number is divisible by 6.</p>\n' +
    '        <math>\n' +
    '            <mtext>576 => last digit is even (6) => 576/2=288 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>576 => 5+7+6=18 => 18/3=6 => 576/3=192 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 576/6=96</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 7:</span><br>Take the last digit, double it, and subtract it from the rest of the number. If that answer is divisible by 7, then the original number is divisible by 7.</p>\n' +
    '        <math>\n' +
    '            <mtext>24003 => last digit is 3 => 3*2=6 => 2400-6=2394 => 2394/7=342 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 24003/7=3429</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 8:</span><br>Take the last three digits as a number. If that number is divisible by 8, then the original number is divisible by 8.</p>\n' +
    '        <math>\n' +
    '            <mtext>65728 => last three digits are 728 => 728/8=91</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 65728/8=8216</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 9:</span><br>If the sum of the digits is 9, then the number is divisible by 9.</p>\n' +
    '        <math>\n' +
    '            <mtext>45261 => 4+5+2+6+1=18 => 18/9=2</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 45261/9=5029</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <p><span style="font-weight: bold">Divisibility Rule for 10:</span><br>If the last digit of the number is 0, then the number is divisible by 10.</p>\n' +
    '        <math>\n' +
    '            <mtext>6350 => last digit is 0</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 6350/10=635</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
document.getElementById("Test1_10").innerHTML = test1_10;