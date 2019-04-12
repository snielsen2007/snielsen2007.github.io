let weatherRequest = new XMLHttpRequest();
let cities = [
    {
        city: "PHLweather",
        cityId: "4560349"
    },
    {
        city: "BOIweather",
        cityId: "5586437"
    },
    {
        city: "KCMweather",
        cityId: "4393217"
    },
    {
        city: "STLweather",
        cityId: "4540403"
    }
]

cityURL(cities);
function cityURL() {
    for (let i = 0; i < cities.length; i++) {
        apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + cities[i].cityId + '&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
        weatherRequest.open('Get', apiURLstring, true);
        weatherRequest.send();
        console.log(apiURLstring);
    
    }
}


weatherRequest.onload = function () {
    for (let i = 0; i < cities.length; i++) {
        let weatherData = JSON.parse(weatherRequest.responseText);
        let desc = weatherData.weather[0].description;
        document.getElementById('descriptionvalue' + cities[i].city).innerHTML = desc;
        console.log(cities[i].city);
        let tempF = parseFloat(weatherData.main.temp_max);
        document.getElementById('temperaturevalue' + cities[i].city).innerHTML = tempF;
        let speed = parseFloat(weatherData.wind.speed);
        document.getElementById('windspeedvalue' + cities[i].city).innerHTML = speed;

        document.getElementById('humidityvalue' + cities[i].city).innerHTML = weatherData.main.humidity;
        
        let windchill = windChill(tempF, speed);
        document.getElementById('windchillvalue' + cities[i].city).innerHTML = windchill.toFixed(2);
    }
}


/*}
weatherStats;

function weatherStats () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    let desc = weatherData.weather[0].description;
    document.getElementById('descriptionvalue' + city).innerHTML = desc;
    console.log(city)
    document.getElementById('temperaturevalue' + city).innerHTML = weatherData.main.temp_max;
    document.getElementById('humidityvalue' + city).innerHTML = weatherData.main.humidity;
    document.getElementById('windspeedvalue' + city).innerHTML = weatherData.wind.speed;
    //trigger windchill function
    return getWindChill();

}
*/
