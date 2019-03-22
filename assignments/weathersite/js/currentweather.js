let weatherRequest = new XMLHttpRequest();
let townPage = document.getElementById("pagetitle").innerHTML;
switch (townPage) {
    case "Preston":
        townId = '5604473';
        break;
    case "Fish Haven":
        townID = '5585000';
        break;
    case "Soda Springs":
        townID = '5678757';
}
apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id='+townID+'&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    let desc = weatherData.weather[0].description;
    console.log(weatherData);
    document.getElementById('descriptionvalue').innerHTML = desc;
    document.getElementById('temperaturevalue').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidityvalue').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeedvalue').innerHTML = weatherData.wind.speed;
    //trigger windchill function
    let windchill = callWindChill();
    return windchill;
}