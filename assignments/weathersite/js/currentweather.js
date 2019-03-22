let weatherRequest = new XMLHttpRequest();
apiURLstring = 'https://api.openweathermap.org/data/2.5/group?id=5604473,5678757,5585000&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    let townPage = document.getElementById("pagetitle").innerHTML;
    switch (townPage) {
        case "Fish Haven":
            townPage = "Bear Lake County";
            break; 
    }
    console.log(weatherData);
    console.log(townPage); 

    for (let i = 0; i < weatherData.list.length; i++)
        if (weatherData.list[i].name = "Bear Lake County")
        if (townPage = weatherData.list[i].name) {

            let desc = weatherData.list[i].weather[0].description;
            document.getElementById('descriptionvalue').innerHTML = desc;
            document.getElementById('temperaturevalue').innerHTML = weatherData.list[i].main.temp_max;
            document.getElementById('humidityvalue').innerHTML = weatherData.list[i].main.humidity;
            document.getElementById('windspeedvalue').innerHTML = weatherData.list[i].wind.speed;
            //trigger windchill function
            let windchill = callWindChill();
            return windchill;
        }
}