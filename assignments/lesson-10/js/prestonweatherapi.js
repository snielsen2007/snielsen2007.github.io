let weatherRequest = new XMLHttpRequest();
apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    let desc = weatherData.weather[0].description;

    document.getElementById('descriptionvalue').innerHTML = desc;
    document.getElementById('temperaturevalue').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidityvalue').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeedvalue').innerHTML = weatherData.wind.speed;
    //call windChill function
    function windChill(tempF, speed) { }  
}
