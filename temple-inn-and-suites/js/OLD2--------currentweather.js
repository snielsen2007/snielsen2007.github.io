let weatherRequest = new XMLHttpRequest();
let city = document.querySelector('.tWeather').id;
let cityId = [];

function cities() {
    for (let i = 0; i < city.length; i++) {
        switch (i) {
            case "PHLweather":
                Id = '4560349';
                cityId.push(Id);
                break;
            case "BOIweather":
                Id = '5586437';
                cityId.push(Id);
                break;
            case "KCMweather":
                cityId = '4393217';
                break;
            case "STLweather":
                cityId = '4540403';
                break;
            default: cityId = "5586437";
        }
        apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
        weatherRequest.open('Get', apiURLstring, true);
        weatherRequest.send();
        return (cityId);
    }

}

        weatherRequest = function () {
            let weatherData = JSON.parse(weatherRequest.responseText);
            let desc = weatherData.weather[0].description;
            for (let i = 0; i < city.length; i++) {
                document.getElementById('descriptionvalue' + city).innerHTML = desc;
                console.log(city)
                document.getElementById('temperaturevalue' + city).innerHTML = weatherData.main.temp_max;
                document.getElementById('humidityvalue' + city).innerHTML = weatherData.main.humidity;
                document.getElementById('windspeedvalue' + city).innerHTML = weatherData.wind.speed;
                //trigger windchill function
                return getWindChill();
            }

        }
/*
function cities() {
    for (let i = 0; i < city.length; i++) {
        apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
        weatherRequest.open('Get', apiURLstring, true);
        weatherRequest.send();

    }
}
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    let desc = weatherData.weather[0].description;
    for (let i = 0; i < city.length; i++) {
        document.getElementById('descriptionvalue' + city).innerHTML = desc;
        console.log(city)
        document.getElementById('temperaturevalue' + city).innerHTML = weatherData.main.temp_max;
        document.getElementById('humidityvalue' + city).innerHTML = weatherData.main.humidity;
        document.getElementById('windspeedvalue' + city).innerHTML = weatherData.wind.speed;
        //trigger windchill function
        return getWindChill();

    }
}
*/
/*
function cities() {
    switch (city) {
        case "PHLweather":
            cityId = '4560349';
            break;
        case "BOIweather":
            cityId = '5586437';
            break;
        case "KCMweather":
            cityId = '4393217';
        case "STLweather":
            cityId = '4540403';
    }
    
}
*/