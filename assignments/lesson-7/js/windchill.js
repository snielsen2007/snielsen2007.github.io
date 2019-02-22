/* Input: wind speed and temperature
* Processing: calculate wind chill factor as a temperature in Fahrenheit
* Output: return the wind chill facotr in Fahrenheit
*/

    let tempF = parseFloat(document.getElementById('temperaturevalue').innerHTML);
    let speed = parseFloat(document.getElementById('windspeedvalue').innerHTML);
    let result = windChill(tempF,speed);
    document.getElementById('windchillvalue').innerHTML = result.toFixed(2);
                  
function windChill (tempF, speed) {
//set variables
    let t = tempF;
    let s = speed;                     
//calculate wind chill
    let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow( s, 0.16 ) + 0.4275 * t * Math.pow(s,0.16);                        
//return result
    return wc;
}