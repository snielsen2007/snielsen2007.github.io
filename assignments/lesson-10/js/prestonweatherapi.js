let weatherRequest = new XMLHttpRequest();
apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    //document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
    //let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"//add loop so if there is more than one icon, it pulls both
    let desc = weatherData.weather[0].description;

   // document.getElementById('cc-img').setAttribute('src', icon);
   // document.getElementById('cc-img').setAttribute('alt', desc);
    document.getElementById('descriptionvalue').innerHTML = desc;
    document.getElementById('temperaturevalue').innerHTML = weatherData.main.temp;
    document.getElementById('humidityvalue').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeedvalue').innerHTML = weatherData.wind.speed;
}