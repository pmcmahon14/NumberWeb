var coll = document.getElementsByClassName("collapsible");
var i;
const rule = document.getElementById("container");
let divRule = "";

const error = "Rule not found.";
// const div1 = '<p><span style="font-weight: bold">Divisibility Rule for 1:</span><br>All non-zero integers!</p>';

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

const div1 = '<h2>Divisibility Rule for 1:</h2><p>All non-zero integers!</p>\n';
const div2 = '<h2>Divisibility Rule for 2:</h2><p>If the non-zero number ends in either 0, 2, 4, 6, or 8, it is divisible by two. All even numbers are divisible by 2.</p>\n';
const div3 = '<h2>Divisibility Rule for 3:</h2>' +
    '        <h3>If the sum of the digits is divisible by 3, then the number is divisible by 3.</h3>\n' +
    '        <math>\n' +
    '            <mtext>3258 => 3+2+5+8=18 => 18/3=6 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 3258/3=1086</mtext>\n' +
    '        </math>\n' +
    '        <h3>For large numbers: you can repeat the process until you get a two-digit number</h3>' +
    '        <math>\n' +
    '            <mtext>987,654,321,099,876,543,210 => 9+8+7+6+5+4+3+2+1+0+9+9+8+7+6+5+4+3+2+1+0 => 108</mtext>\n' +
    '        </math>\n' +
    '        <p></p>' +
    '        <math>\n' +
    '            <mtext>9+8+7+6+5+4+3+2+1+0+9+9+8+7+6+5+4+3+2+1+0 => 108</mtext>\n' +
    '        </math>\n' +
    '        <p></p>' +
    '        <math>\n' +
    '            <mtext>108 => 1+0+8=9 => 9/3=3 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 987,654,321,099,876,543,210/3=329,218,107,033,292,181,070</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n';
const div4 = '<h2>Divisibility Rule for 4:</h2>' +
    '        <h3>If the last two digits as a number are divisible by 4, then the number is divisible by 4.</h3>\n' +
    '        <math>\n' +
    '            <mtext>5216 => last two digits 16 => 16/4=4 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 5216/4=1304</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n';
const div5 = '<h2>Divisibility Rule for 5:</h2>' +
    '        <h3>If the last digit is either 5 or 0, then the number is divisible by 5.</h3>\n' +
    '        <math>\n' +
    '            <mtext>34625 => last digit is 5' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 34625/5=6925</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>17520 => last digit is 0' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 17520/5=3504</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div6 = '<h2>Divisibility Rule for 6:</h2>' +
    '        <h3>If the number is divisible by both 2 and 3, then the number is divisible by 6.</h3>\n' +
    '        <h3>Divisibility by 2</h3>' +
    '        <math>\n' +
    '            <mtext>576 => last digit is even (6) => 576/2=288 </mtext>\n' +
    '        </math>\n' +
    '        <h3>Divisibility by 3</h3>\n' +
    '        <math>\n' +
    '            <mtext>576 => 5+7+6=18 => 18/3=6 => 576/3=192 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 576/6=96</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n';
const div7 = '<h2>Divisibility Rule for 7:</h2>' +
    '        <h3>Take the last digit, double it, and subtract it from the rest of the number. Repeat the process until a two-digit number remains. If that answer is divisible by 7, then the original number is divisible by 7.</h3>\n' +
    '        <math>\n' +
    '            <mtext>24003 => last digit is 3 => 3*2=6 => 2400-6=2394</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>2394 => last digit is 4 => 4*2=8 => 239-8=231</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>231 => last digit is 1 => 1*2=2 => 23-2=21 => 21/7=3</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 24003/7=3429</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div8 = '<h2>Divisibility Rule for 8:</h2>' +
    '        <h3>Take the last three digits as a number. If that number is divisible by 8, then the original number is divisible by 8.</h3>\n' +
    '        <math>\n' +
    '            <mtext>65728 => last three digits are 728 => 728/8=91</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 65728/8=8216</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n';
const div9 = '<h2>Divisibility Rule for 9:</h2>' +
    '        <h3>If the sum of the digits is 9, then the number is divisible by 9.</h3>\n' +
    '        <math>\n' +
    '            <mtext>45261 => 4+5+2+6+1=18 => 18/9=2</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 45261/9=5029</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n';
const div10 = '<h2>Divisibility Rule for 10:</h2>' +
    '        <h3>If the last digit of the number is 0, then the number is divisible by 10.</h3>\n' +
    '        <math>\n' +
    '            <mtext>6350 => last digit is 0</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 6350/10=635</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div11 = '<h2>Divisibility Rule for 11:</h2>' +
    '        <h3>If the difference between the sum of the digits in odd positions and the sum of the digits in the even positions is either 0 or divisible by 11, then the number is divisible by 11.</h3>\n' +
    '        <math>\n' +
    '            <mtext>247588 => 2+7+8=17 => 4+5+8=17 => 17-17=0 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 247588/11=22508</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>227480 => 2+7+8=17 => 2+4+0=6 => 17-6=11 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 227480/11=20680</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div12 = '<h2>Divisibility Rule for 12:</h2>' +
    '        <h3>If the number is divisible by 3 and 4, then the number is divisible by 12.</h3>\n' +
    '        <h3>Divisibility by 3</h3>' +
    '        <math>\n' +
    '            <mtext>4572 => 4+5+7+2=18 => 18/3=6 </mtext>\n' +
    '        </math>\n' +
    '        <h3>Divisibility by 4</h3>\n' +
    '        <math>\n' +
    '            <mtext>4572 => last two digits 72 => 72/4=18 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 4572/12=381</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div13 = '<h2>Divisibility Rules for 13:</h2>' +
    '        <h3>There are four methods to test for divisibility by 13.</h3>\n' +
    '        <h3>Method One: Alternating Sum of Triplets, starting from the right (especially useful for large numbers)</h3>\n' +
    '        <math>\n' +
    '            <mtext>5,098,418 => 418, 098, 5 => 418-098+5=325 => 325/13=25 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 5,098,418/13=392,186</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>Method Two: Multiply the Last Digit by 4</h3>\n' +
    '        <math>\n' +
    '            <mtext>6760 => Last digit is 0 => 676+(0*4)=676 => 676/13=52 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 6760/13=520</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>Method Three: Subtracting the Last Two Digits and Subtract From Four Times the Rest of the Number</h3>\n' +
    '        <math>\n' +
    '            <mtext>17537 => Last two digits are 37; remaining number is 175 => 175*4-37=663 => 663/13=51</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 17537/13=1349</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>Method Four: Multiply the Last Digit by 9 and Subtract From the Rest of the Number</h3>\n' +
    '        <math>\n' +
    '            <mtext>884 => 88-(4*9) => 88-36=52 => 52/13=4 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 884/13=68</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div14 = '<h2>Divisibility Rule for 14:</h2>' +
    '        <h3>There are two rules for testing divisibility by 14.</h3>\n' +
    '        <h3>Method One: Test for divisibility by both 2 and 7</h3>\n' +
    '        <math>\n' +
    '            <mtext>7546 => 7546 is an even number => 7546/2=3773 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>7546 => last digit is 6 => 6*2=12 => 754-12=742 => 742/7=106 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 7546/14=539</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>Method Two: Add the last two digits of the number to twice the rest of the digits.</h3>\n' +
    '        <math>\n' +
    '            <mtext>19,460 => 194 60 => (194*2)+60 => 388+60=448 => 448/14=32 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 19460/14=1390</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div15 = '<h2>Divisibility Rule for 15:</h2>' +
    '        <h3>If the number is divisible by both 3 and 5, then it is divisible by 15.</h3>\n' +
    '        <h3>Divisibility by 3</h3>' +
    '        <math>\n' +
    '            <mtext>765 => 7+6+5=18 => 18/3=6 </mtext>\n' +
    '        </math>\n' +
    '        <h3>Divisibility by 5</h3>\n' +
    '        <math>\n' +
    '            <mtext>765 => The number ends in 5</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 765/15=51</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div16 = '<h2>Divisibility Rules for 16:</h2>' +
    '        <h3>There are three ways to test if a number is divisible by 16.</h3>\n' +
    '        <h3>Method One: Last four digits</h3>\n' +
    '        <math>\n' +
    '            <mtext>25,472 => 5472 => 5472/16=342 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 25,472/16=1592</mtext>\n' +
    '        </math>\n' +
    '        <h3>Method Two: Thousands-Digit Test</h3>\n' +
    '        <p>If the thousands digit is even, test to see if the last three digits are divisible by 16</p>' +
    '        <math>\n' +
    '            <mtext>2864 => 2 is even => 864/16=54</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2864/16=179</mtext>\n' +
    '        </math>\n' +
    '        <p>If the thousands digit is odd, test to see if the last three digits are equal to 8 times an odd number</p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 35,632 => 5 is odd => 632/8=79</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 35,632/16=2227</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>Method Three: Four Times the Rest</h3>\n' +
    '        <p>Take the last two digits, multiply the rest of the number by 4, and divide that answer by 16.</p>\n' +
    '        <math>\n' +
    '            <mtext>45,872 => 458 72 => (458*4)+72 => (1832)+72=1904 => 1904/16=119</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 45,872/16=2867</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div17 = '<h2>Divisibility Rule for 17:</h2>' +
    '        <h3>There are three ways to test for divisibility by 17.</h3>\n' +
    '        <h3>Method One: Check the last digit</h3>\n' +
    '        <p>Multiply the last digit by 5</p>\n' +
    '        <math>\n' +
    '            <mtext>25,472 => 5472 => 5472/16=342 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 25,472/16=1592</mtext>\n' +
    '        </math>\n' +
    '        <h3>Method Two: If the thousands place digit is even, check the last three digits</h3>\n' +
    '        <math>\n' +
    '            <mtext>2864 => 2 is even => 864/16=54</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2864/16=179</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>Method Three: Four Times the Rest</h3>\n' +
    '        <p>Take the last two digits, multiply the rest of the number by 4, and divide that answer by 16.</p>\n' +
    '        <math>\n' +
    '            <mtext>45,872 => 458 72 => (458*4)+72 => (1832)+72=1904 => 1904/16=119</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 45,872/16=2867</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div18 = '<h2>Divisibility Rule for 18:</h2>' +
    '        <h3>If the number is divisible by both 2 and 9, then the number is divisible by 18.</h3>\n' +
    '        <h3>Divisibility by 2</h3>' +
    '        <math>\n' +
    '            <mtext>5778 => 5778 is an even number => 5778/2=2889</mtext>\n' +
    '        </math>\n' +
    '        <h3>Divisibility by 9</h3>\n' +
    '        <math>\n' +
    '            <mtext>5778 => 5+7+7+8=27 => 27/9=3</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 5778/18=321</mtext>\n' +
    '        </math>\n' +
    '        <p></p> ';
const div19 = '<h2>Divisibility Rule for 19:</h2>' +
    '        <h3>Double the last digit and add to remaining part of the number. If that sum is divisible by 19, then the original number is divisible by 19.</h3>\n' +
    '        <math>\n' +
    '            <mtext>30,267 => last digit is 7 => 7*2=14 => 3026+14=3040 =></mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>3040/19=160</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 30,267/19=1593</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div20 = '<h2>Divisibility Rule for 20:</h2>' +
    '        <h3>If the last digit is 0 and the last two digits are divisible by 4, then the number is divisible by 20.</h3>\n' +
    '        <math>\n' +
    '            <mtext>2060 => last digit is 0 => 7*2=14 => 3026+14=3040 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>2060 => last two digits are 60 => 60/4=15</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2060/20=103</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div21 = '<h2>Divisibility Rule for 21:</h2>' +
    '        <h3>If the number is divisible by both 3 and 7, then the number is divisible by 21.</h3>\n' +
    '        <h3>Divisibility by 3</h3>' +
    '        <math>\n' +
    '            <mtext>15,246 => 1+5+2+4+6=18 => 18/3=6</mtext>\n' +
    '        </math>\n' +
    '        <h3>Divisibility by 7</h3>\n' +
    '        <math>\n' +
    '            <mtext>15,246 => last digit is 6 => 6*2=12 => 1524-12=1512</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>1512 => last digit is 2 => 2*2=4 => 151-4=147</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>147 => last digit is 7 => 7*2=14 => 14-14=0 => 0/7=0</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 15,246/21=726</mtext>\n' +
    '        </math>\n' +
    '        <p></p> ';
const div22 = '<h2>Divisibility Rule for 22:</h2>' +
    '        <h3>If the number is divisible by both 2 and 11, then the number is divisible by 22.</h3>\n' +
    '        <h3>Divisibility by 2</h3>' +
    '        <p>If the non-zero number ends in either 0, 2, 4, 6, or 8, it is divisible by two. All even numbers are divisible by 2.</p>' +
    '        <h3>Divisibility by 11</h3>\n' +
    '        <math>\n' +
    '            <mtext>15,246 => last digit is 6 => 6*2=12 => 1524-12=1512</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>1512 => last digit is 2 => 2*2=4 => 151-4=147</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>147 => last digit is 7 => 7*2=14 => 14-14=0 => 0/7=0</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 15,246/21=726</mtext>\n' +
    '        </math>\n' +
    '        <p></p> ';
const div23 = '<h2>Divisibility Rule for 23:</h2>' +
    '        <h3>Multiply the last digit by 7 and add to the remaining part of the number. If that sum is divisible by 23, then the original number is divisible by 23.</h3>\n' +
    '        <math>\n' +
    '            <mtext>6348 => last digit is 8 => 8*7=56 => 634+56=690 => </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>690/23=30</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 6348/23=276</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div24 = '<h2>Divisibility Rule for 24:</h2>' +
    '        <h3>If the number is divisible by both 3 and 8, then the number is divisible by 24.</h3>\n' +
    '        <h3>Divisibility by 3</h3>' +
    '        <math>\n' +
    '            <mtext>2976 => 2+9+7+6=24 => 24/3=8</mtext>\n' +
    '        </math>\n' +
    '        <h3>Divisibility by 8</h3>\n' +
    '        <math>\n' +
    '            <mtext>2976 => last three digits are 976 => 976/8=122</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2976/24=124</mtext>\n' +
    '        </math>\n' +
    '        <p></p> ';
const div25 = '<h2>Divisibility Rule for 25:</h2>' +
    '        <h3>If the last two digits are either 00, 25, 50, or 75, then the number is divisible by 25.</h3>\n' +
    '        <math>\n' +
    '            <mtext>1500 => last two digits are 00' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 1500/25=60</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>2725 => last two digits are 25' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2725/25=109</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>34650 => last two digits are 50' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 34650/25=1386</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>19975 => last two digits are 75' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 19975/25=799</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n';
const div26 = '26';
const div27 = '27';
const div28 = '28';
const div29 = '29';
const div30 = '30';
const div31 = '31';
const div32 = '32';
const div33 = '33';
const div34 = '34';
const div35 = '35';
const div36 = '36';
const div37 = '37';
const div38 = '38';
const div39 = '39';
const div40 = '40';
const div41 = '41';
const div42 = '42';
const div43 = '43';
const div44 = '44';
const div45 = '45';
const div46 = '46';
const div47 = '47';
const div48 = '48';
const div49 = '49';
const div50 = '50';
const div51 = '51';
const div52 = '52';
const div53 = '53';
const div54 = '54';
const div55 = '55';
const div56 = '56';
const div57 = '57';
const div58 = '58';
const div59 = '59';
const div60 = '60';
const div61 = '61';
const div62 = '62';
const div63 = '63';
const div64 = '64';
const div65 = '65';
const div66 = '66';
const div67 = '67';
const div68 = '68';
const div69 = '69';
const div70 = '70';
const div71 = '71';
const div72 = '72';
const div73 = '73';
const div74 = '74';
const div75 = '75';
const div76 = '76';
const div77 = '77';
const div78 = '78';
const div79 = '79';
const div80 = '80';
const div81 = '81';
const div82 = '82';
const div83 = '83';
const div84 = '84';
const div85 = '85';
const div86 = '86';
const div87 = '87';
const div88 = '88';
const div89 = '89';
const div90 = '90';
const div91 = '91';
const div92 = '92';
const div93 = '93';
const div94 = '94';
const div95 = '95';
const div96 = '96';
const div97 = '97';
const div98 = '98';
const div99 = '99';
const div100 = '100';

function displayRule(number) {
    const rules = {'1': div1, '2': div2, '3': div3, '4': div4, '5': div5, '6': div6, '7': div7, '8': div8,
        '9': div9, '10': div10, '11': div11, '12': div12, '13': div13, '14': div14, '15': div15, '16': div16,
        '17': div17, '18': div18, '19': div19, '20': div20, '21': div21, '22': div22, '23': div23, '24': div24,
        '25': div25, '26': div26, '27': div27, '28': div28, '29': div29, '30': div30, '31': div31, '32': div32,
        '33': div33, '34': div34, '35': div35, '36': div36, '37': div37, '38': div38, '39': div39, '40': div40,
        '41': div41, '42': div42, '43': div43, '44': div44, '45': div45, '46': div46, '47': div47, '48': div48,
        '49': div49, '50': div50, '51': div51, '52': div52, '53': div53, '54': div54, '55': div55, '56': div56,
        '57': div57, '58': div58, '59': div59, '60': div60, '61': div61, '62': div62, '63': div63, '64': div64,
        '65': div65, '66': div66, '67': div67, '68': div68, '69': div69, '70': div70, '71': div71, '72': div72,
        '73': div73, '74': div74, '75': div75, '76': div76, '77': div77, '78': div78, '79': div79, '80': div80,
        '81': div81, '82': div82, '83': div83, '84': div84, '85': div85, '86': div86, '87': div87, '88': div88,
        '89': div89, '90': div90, '91': div91, '92': div92, '93': div93, '94': div94, '95': div95, '96': div96,
        '97': div97, '98': div98, '99': div99, '100': div100}
    rule.innerHTML = rules[number];
}