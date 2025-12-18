const coll = document.getElementsByClassName("collapsible");
let i;
const rule = document.getElementById("container");

const error = "Rule not found.";
// const div1 = '<p><span style="font-weight: bold">Divisibility Rule for 1:</span><br>All non-zero integers!</p>';

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

const div1 = '<h2>Divisibility Rule for 1:</h2><h3>All non-zero integers!</h3>\n';
const div2 = '<h2>Divisibility Rule for 2:</h2><h3>If the non-zero number ends in either 0, 2, 4, 6, or 8, it is divisible by two. All even numbers are divisible by 2.</h3>\n';
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
    '        <h3>If the number is divisible by both 2 and 3, then the number is divisible by 6.</h3>\n';
const div7 = '<h2>Divisibility Rule for 7:</h2>' +
    '        <h3>Take the last digit, double it, and subtract it from the rest of the number. Repeat the process until either a two-digit number remains or the result is 0. If that answer is divisible by 7, then the original number is divisible by 7.</h3>\n' +
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
    '        <h3>If the number is divisible by 3 and 4, then the number is divisible by 12.</h3>\n';
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
    '        <h3>Method Three: Take the Last Two Digits and Subtract From Four Times the Rest of the Number</h3>\n' +
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
    '        <h3>If the number is divisible by both 3 and 5, then it is divisible by 15.</h3>\n';
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
    '            <mtext>35,632 => 5 is odd => 632/8=79 => 79 is an odd number</mtext>\n' +
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
const div17 = '<h2>Divisibility Rules for 17:</h2>' +
    '        <h3>There are three ways to test for divisibility by 17.</h3>\n' +
    '        <h3>Method One: Check the last digit</h3>\n' +
    '        <p>Multiply the last digit by 5 and subtract the product from the rest of the number.</p>\n' +
    '        <math>\n' +
    '            <mtext>884 => last digit is 4 => 88-(4*5)=68 => 68/17=4 </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 884/16=52</mtext>\n' +
    '        </math>\n' +
    '        <h3>Method Two: Weighted Sum Method</h3>\n' +
    '        <p>Find the sum of 9 times the last digit and 5 times the rest of the number and divide the sum by 17.</p>\n' +
    '        <math>\n' +
    '            <mtext>2873 => 3*9=27 and 287*5=1435 => 27+14351462 => 1462/17=86</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2864/16=179</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>Method Three: Four Times the Rest or Last Two Digits</h3>\n' +
    '        <p>Take the last two digits, multiply the rest of the number by 2, and divide that answer by 17.</p>\n' +
    '        <math>\n' +
    '            <mtext>62,798 => last two digits are 98 => (627*2)-98 =></mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>1254-98=1156 => 1156/17=68</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 62,798/17=3694</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div18 = '<h2>Divisibility Rule for 18:</h2>' +
    '        <h3>If the number is divisible by both 2 and 9, then the number is divisible by 18.</h3>\n';
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
    '        <h3>If the number is divisible by both 3 and 7, then the number is divisible by 21.</h3>\n';
const div22 = '<h2>Divisibility Rule for 22:</h2>' +
    '        <h3>If the number is divisible by both 2 and 11, then the number is divisible by 22.</h3>\n';
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
    '        <h3>If the number is divisible by both 3 and 8, then the number is divisible by 24.</h3>\n';
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
const div26 = '<h2>Divisibility Rule for 26:</h2>' +
    '        <h3>If the number is divisible by both 2 and 13, then the number is divisible by 26.</h3>\n';
const div27 = '<h2>Divisibility Rule for 27:</h2>' +
    '        <h3>First, find the sum of its digits. If that sum is divisible by 9, multiply the sum by 3 and check if the result is divisible by 27. If it is, then the original number is divisible by 27.</h3>\n' +
    '        <math>\n' +
    '            <mtext>7695 => 7+6+9+5=27 => 27/9=3</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>27*3=81 => 81/27=3</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 7695/27=285</mtext>\n' +
    '        </math>\n' +
    '        <p></p> ';
const div28 = '<h2>Divisibility Rule for 28:</h2>' +
    '        <h3>If the number is divisible by both 4 and 7, then the number is divisible by 28.</h3>\n';
const div29 = '<h2>Divisibility Rule for 29:</h2>' +
    '        <h3>Take the last digit and multiply it by 3. Add that product to the remaining number. If that answer is divisible by 29, then the original number is divisible by 29. If the answer is still too large, repeat the process to get a manageable number.</h3>\n' +
    '        <math>\n' +
    '            <mtext>6786 => last digit is 6 => 6*3=18 => 18+678=696 => </mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>696/29=24</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 6348/23=276</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div30 = '<h2>Divisibility Rule for 30:</h2>' +
    '        <h3>If the number is divisible by 2, 3, and 5, then the number is divisible by 30.</h3>\n';
const div31 = '<h2>Divisibility Rule for 31:</h2>' +
    '        <h3>Take the last digit, triple it, and subtract it from the rest of the number. Repeat the process until either a two-digit number remains or zero is a result. If that answer is divisible by 31, then the original number is divisible by 31.</h3>\n' +
    '        <math>\n' +
    '            <mtext>16,988 => last digit is 8 => 8*3=24 => 1698-24=1674</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>1674 => last digit is 4 => 4*3=12 => 167-12=155</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>155 => last digit is 5 => 5*3=15 => 15-15=0</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 16,988/31=548</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div32 = '<h2>Divisibility Rule for 32:</h2>' +
    '        <h3>Check the last five digits of the number. If the number has fewer than five digits, check the entire number. If this number is divisible by 32, then the original number is also divisible by 32.</h3>\n' +
    '        <math>\n' +
    '            <mtext>776,192 => last 5 digits are 76,192 => 76,192/32=2381</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 776,192/32=24,256</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div33 = '<h2>Divisibility Rule for 33:</h2>' +
    '        <h3>If the number is divisible by both 3 and 11, then the number is divisible by 33.</h3>\n';
const div34 = '<h2>Divisibility Rule for 34:</h2>' +
    '        <h3>If the number is divisible by both 2 and 17, then the number is divisible by 34.</h3>\n';
const div35 = '<h2>Divisibility Rule for 35:</h2>' +
    '        <h3>If the number is divisible by both 5 and 7, then the number is divisible by 35.</h3>\n';
const div36 = '<h2>Divisibility Rule for 36:</h2>' +
    '        <h3>If the number is divisible by both 4 and 9, then the number is divisible by 36.</h3>\n';
const div37 = '<h2>Divisibility Rule for 37:</h2>' +
    '        <h3>Split the number into groups of three digits, starting from the right, and add the triplets together. Repeat until the sum is no larger than three digits. If that sum is divisible by 37, then the original number is divisible by 37.</h3>\n' +
    '        <math>\n' +
    '            <mtext>1,723,793 => 793+723+1=1517 => 517+1=518 => 518/37=14</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 1,723,793/37=46,589</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div38 = '<h2>Divisibility Rule for 38:</h2>' +
    '        <h3>If the number is divisible by both 2 and 19, then the number is divisible by 38.</h3>\n';
const div39 = '<h2>Divisibility Rule for 39:</h2>' +
    '        <h3>If the number is divisible by both 3 and 13, then the number is divisible by 39.</h3>\n';
const div40 = '<h2>Divisibility Rule for 40:</h2>' +
    '        <h3>If the number is divisible by both 5 and 8, then the number is divisible by 40.</h3>\n';
const div41 =  '<h2>Divisibility Rule for 41:</h2>' +
    '        <h3>Take the last digit, multiply by 4, and then subtract from the rest of the number. Repeat as needed to get a manageable number (two or three digits). If that difference is divisible by 41, then the original number is divisible by 41.</h3>\n' +
    '        <math>\n' +
    '            <mtext>1,463,249 => last digit is 9 => 9*4=36 => 146,324-36 => 146,288</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>146,288 => last digit is 8 => 8*4=32 => 14,628-32 => 14,596</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>14,596 => last digit is 6 => 6*4=24 => 1459-24 => 1435</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>1435 => last digit is 5 => 5*4=20 => 143-20=123 => 123/41=3</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 1,463,249/41=35,689</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div42 = '<h2>Divisibility Rule for 42:</h2>' +
    '        <h3>If the number is divisible by 2, 3, and 7, then the number is divisible by 42.</h3>\n';
const div43 = '<h2>Divisibility Rule for 43:</h2>' +
    '        <h3>Take the last digit, multiply by 13, and then add to the rest of the number. Repeat until you get a two digit number. If that sum is divisible by 43, then the original number is divisible by 43.</h3>\n' +
    '        <math>\n' +
    '            <mtext>329,036 => last digit is 6 => 6*13=78 => 32,903+78= => 32,981</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>32,981 => last digit is 1 => 1*13=13 => 3298+13 => 3311</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>3311 => last digit is 1 => 1*13=13 => 331+13 => 344</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>344 => last digit is 4 => 4*13=52 => 34+52=86 => 86/43=2</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 329,036/43=7652</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div44 = '<h2>Divisibility Rule for 44:</h2>' +
    '        <h3>If the number is divisible by both 4 and 11, then the number is divisible by 44.</h3>\n';
const div45 = '<h2>Divisibility Rule for 45:</h2>' +
    '        <h3>If the number is divisible by both 5 and 9, then the number is divisible by 45.</h3>\n';
const div46 = '<h2>Divisibility Rule for 46:</h2>' +
    '        <h3>If the number is divisible by both 2 and 23, then the number is divisible by 46.</h3>\n';
const div47 = '<h2>Divisibility Rule for 47:</h2>' +
    '        <h3>Take the last digit, multiply by 14, and then subtract from the rest of the number. Repeat until you get a two digit number. If that difference is either divisible by 47 or 0, then the original number is divisible by 47.</h3>\n' +
    '        <math>\n' +
    '            <mtext>23,406 => last digit is 6 => 6*14=84 => 2340-84= => 2256</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>2256 => last digit is 6 => 6*14=84 => 225-84 => 141</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>141 => last digit is 1 => 1*14=14 => 14-14=0</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 23,406/47=498</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div48 = '<h2>Divisibility Rule for 48:</h2>' +
    '        <h3>If the number is divisible by both 3 and 16, then the number is divisible by 48.</h3>\n';
const div49 = '<h2>Divisibility Rule for 49:</h2>' +
    '        <h3>If the number is two digits: Only 49 and 98 are divisible by 49. If the number is three or more digits, take the last digit, multiply that number by 5, and add to the remaining number. Repeat until the sum is two digits. If that sum results in either 49 or 98, then the original number is divisible by 49.</h3>\n' +
    '        <math>\n' +
    '            <mtext>2,787,953 => last digit is 3 => 278,795+(3*5)=278,810</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>278,810 => last digit is 0 => 27,881+(0*5)=27881</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>27,881 => last digit is 1 => 2788+(1*5)=2793</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>2793 => last digit is 3 => 279+(3*5)=294</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>294 => last digit is 4 => 29+(4*5)=49 => 49/49=1</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2,787,953/49=56,897</mtext>\n' +
    '        </math>\n' +
    '        <p></p>';
const div50 = '<h2>Divisibility Rule for 50:</h2>' +
    '        <h3>If the number ends in either 50 or 00, then the number is divisible by 50.</h3>\n' +
    '        <math>\n' +
    '            <mtext>750 => number ends in 50</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 750/50=15</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>2500 => number ends in 00</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 2500/50=50</mtext>\n' +
    '        </math>\n' +
    '        <p></p> ';
const div51 = '<h2>Divisibility Rule for 51:</h2>' +
    '        <h3>If the number is divisible by both 3 and 17, then the number is divisible by 51.</h3>\n';
const div52 = '<h2>Divisibility Rule for 52:</h2>' +
    '        <h3>If the number is divisible by both 4 and 13, then the number is divisible by 52.</h3>\n';
const div53 = '<h2>Divisibility Rule for 53:</h2>' +
    '        <h3>For numbers with at least seven digits, take the last six digits and separate from the rest of the number. Multiply the remaining number by 4 and subtract that number from the six digits. Take the last digit from that difference, multiply it by 16, and add that to the remaining number from the difference. Repeat the last step until you have a manageable number.</h3>\n' +
    '        <math>\n' +
    '            <mtext>3,310,804 => last six digits are 310804 => 3*4=12 =></mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>310,804-12=310,792 => last digit is 2 => 31,079+(16*2)=31,111 =></mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>last digit is 1 => 3111+(16*1)=3127 => last digit is 7 =></mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>312+(16*7)=424 => last digit is 4 => 42+(16*4)=106 => 106/53=2</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 3,310,804/53=62,468</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <h3>For numbers with fewer than seven digits, take the last digit from the number, multiply it by 16, and add that to the remaining number from the difference. Repeat until you have a manageable number.</h3>\n' +
    '        <math>\n' +
    '            <mtext>1378 => last digit is 8 => 137+(16*8)=265 => last digit is 5 =></mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>26+(16*5)=106 => 106/53=2</mtext>\n' +
    '        </math>\n' +
    '        <p></p>\n' +
    '        <math>\n' +
    '            <mtext>&#8756; 1378/53=26</mtext>\n' +
    '        </math>\n' +
    '        <p></p> ';
const div54 = '<h2>Divisibility Rule for 54:</h2>' +
    '        <h3>If the number is divisible by both 2 and 27, then the number is divisible by 54.</h3>\n';
const div55 = '<h2>Divisibility Rule for 55:</h2>' +
    '        <h3>If the number is divisible by both 5 and 11, then the number is divisible by 55.</h3>\n';
const div56 = '<h2>Divisibility Rule for 56:</h2>' +
    '        <h3>If the number is divisible by both 7 and 8, then the number is divisible by 56.</h3>\n';
const div57 = '<h2>Divisibility Rule for 57:</h2>' +
    '        <h3>If the number is divisible by both 3 and 19, then the number is divisible by 57.</h3>\n';
const div58 = '<h2>Divisibility Rule for 58:</h2>' +
    '        <h3>If the number is divisible by both 2 and 29, then the number is divisible by 58.</h3>\n';
const div59 = '59';
// for (let i=10000; i<20001; i++) {
//     let n = i.toString();
//     let r = Number(n.substring(2, n.length));
//     let l = Number(n.substring(0, 2))*3;
//     let t = r-l;
//     let n2 = t.toString();
//     let r2 = Number(n2.substring(n2.length-1))*6;
//     let l2 = Number(n2.substring(0, 2));
//     let t2 = r2+l2;
//     if ((t2)%59===0) {
//         console.log(i);
//     }
// }
// 11505=>11 505=>505-11*3=472=>47 2=>47+6*2=59
const div60 = '<h2>Divisibility Rule for 60:</h2>' +
    '        <h3>If the number is divisible by 3, 4, and 5, then the number is divisible by 60.</h3>\n';
const div61 = '61';
const div62 = '<h2>Divisibility Rule for 62:</h2>' +
    '        <h3>If the number is divisible by both 2 and 31, then the number is divisible by 62.</h3>\n';
const div63 = '<h2>Divisibility Rule for 63:</h2>' +
    '        <h3>If the number is divisible by both 7 and 9, then the number is divisible by 63.</h3>\n';
const div64 = '64';
const div65 = '<h2>Divisibility Rule for 65:</h2>' +
    '        <h3>If the number is divisible by both 5 and 13, then the number is divisible by 65.</h3>\n';
const div66 = '<h2>Divisibility Rule for 66:</h2>' +
    '        <h3>If the number is divisible by 2, 3, and 11, then the number is divisible by 66.</h3>\n';
const div67 = '67';
const div68 = '<h2>Divisibility Rule for 68:</h2>' +
    '        <h3>If the number is divisible by both 4 and 17, then the number is divisible by 68.</h3>\n';
const div69 = '<h2>Divisibility Rule for 69:</h2>' +
    '        <h3>If the number is divisible by both 3 and 23, then the number is divisible by 69.</h3>\n';
const div70 = '<h2>Divisibility Rule for 70:</h2>' +
    '        <h3>If the number is divisible by 2, 5, and 7, then the number is divisible by 70.</h3>\n';
const div71 = '71';
const div72 = '<h2>Divisibility Rule for 72:</h2>' +
    '        <h3>If the number is divisible by both 8 and 9, then the number is divisible by 72.</h3>\n';
const div73 = '73';
const div74 = '<h2>Divisibility Rule for 74:</h2>' +
    '        <h3>If the number is divisible by both 2 and 37, then the number is divisible by 74.</h3>\n';
const div75 = '<h2>Divisibility Rule for 75:</h2>' +
    '        <h3>If the number is divisible by both 3 and 25, then the number is divisible by 75.</h3>\n';
const div76 = '<h2>Divisibility Rule for 76:</h2>' +
    '        <h3>If the number is divisible by both 4 and 19, then the number is divisible by 76.</h3>\n';
const div77 = '<h2>Divisibility Rule for 77:</h2>' +
    '        <h3>If the number is divisible by both 7 and 11, then the number is divisible by 77.</h3>\n';
const div78 = '<h2>Divisibility Rule for 78:</h2>' +
    '        <h3>If the number is divisible by 2, 3, and 13, then the number is divisible by 78.</h3>\n';
const div79 = '79';
const div80 = '<h2>Divisibility Rule for 80:</h2>' +
    '        <h3>If the number is divisible by both 5 and 16, then the number is divisible by 80.</h3>\n';
const div81 = '81';
const div82 = '<h2>Divisibility Rule for 82:</h2>' +
    '        <h3>If the number is divisible by both 2 and 41, then the number is divisible by 82.</h3>\n';
const div83 = '83';
const div84 = '<h2>Divisibility Rule for 84:</h2>' +
    '        <h3>If the number is divisible by 3, 4, and 7, then the number is divisible by 84.</h3>\n';
const div85 = '<h2>Divisibility Rule for 85:</h2>' +
    '        <h3>If the number is divisible by both 5 and 17, then the number is divisible by 85.</h3>\n';
const div86 = '86';
const div87 = '87';
const div88 = '<h2>Divisibility Rule for 88:</h2>' +
    '        <h3>If the number is divisible by both 8 and 11, then the number is divisible by 88.</h3>\n';
const div89 = '89';
const div90 = '<h2>Divisibility Rule for 90:</h2>' +
    '        <h3>If the number is divisible by both 9 and 10, then the number is divisible by 90.</h3>\n';
const div91 = '<h2>Divisibility Rule for 91:</h2>' +
    '        <h3>If the number is divisible by both 7 and 13, then the number is divisible by 91.</h3>\n';
const div92 = '92';
const div93 = '<h2>Divisibility Rule for 93:</h2>' +
    '        <h3>If the number is divisible by both 3 and 31, then the number is divisible by 93.</h3>\n';
const div94 = '<h2>Divisibility Rule for 94:</h2>' +
    '        <h3>If the number is divisible by both 2 and 47, then the number is divisible by 94.</h3>\n';
const div95 = '<h2>Divisibility Rule for 95:</h2>' +
    '        <h3>If the number is divisible by both 5 and 19, then the number is divisible by 95.</h3>\n';
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