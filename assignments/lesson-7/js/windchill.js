/* Input: wind speed and temperature
* Processing: calculate wind chill factor as a temperature in Fahrenheit
* Output: return the wind chill facotr in Fahrenheit
*/

function doInputOutput(){
    var tempF = parseFloat(document.getElementById('tempInputBox').value);
    var speed = parseFloat(document.getElementById('windInputBox').value);
    var result = windChill(tempF,speed);
    document.getElementById('outputDiv').innerHTML = result + 'degrees Farhenheit';
}
                        
function windChill (tempF, speed) {
//set variables
var t = tempF;
                        var s = speed;
                        
                        //calculate wind chill
                        var wc = 35.74 + 0.6215 * t - 35.75 * Math.pow( s, 0.16 ) + 0.4275 * t * Math.pow(s,0.16);
                        
                        //return result
                        return wc;
                        }
                        
</script>
</head>
                <body>

                    Temperature:<input type="text" id="tempInputBox">
                        <br>
                            Wind Speed:<input type="text" id="windInputBox">
                                <br>
                                    <button type="button" onclick="doInputOutput()">Wind Chill</button>
                                    <div id="outputDiv"></div>
</body>
</html>