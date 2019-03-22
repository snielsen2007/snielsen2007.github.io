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
apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + townID + '&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    
apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + townID + '&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
console.log(townPage);
let forecastRequest = new XMLHttpRequest();
let apiURLstring = function api() {
    if (townPage = 'Preston') {
        return 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
    }
    else if (townPage = 'Bear Lake Country') {
        return 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
    }
    else if (townPage = 'Soda Springs') {
        return 'https://api.openweathermap.org/data/2.5/forecast?id=5678757&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
    }
}
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function forecasts() {
    if (townPage = 'Preston') {        
        function prestonForecast() {
            let forecastData = JSON.parse(forecastRequest.responseText);
            let temp = [];
            let dates = [];
            let icons = [];
            let day = 0;

            for (let i = 0; i < forecastData.list.length; i++) {
                let dayforecast = forecastData.list[i];
                if (dayforecast.dt_txt.includes('18:00:00')) {
                    temp[day] = dayforecast.main.temp_max;
                    dates[day] = dayforecast.dt_txt;
                    icons[day] = dayforecast.weather[0].icon;

                    day++;
                }
            }
            for (let i = 0; i <= 4; i++) {
                document.getElementById('day' + i + 'temp').innerHTML = temp[i];
                let tempdate = new Date(dates[i]);
                let dayofweek = weekday[tempdate.getDay()];
                document.getElementById('forecastdate' + i).innerHTML = dayofweek;

                let dayicon = icons[i];

                let iconsrc = 'https://openweathermap.org/img/w/' + dayicon + '.png';
                document.getElementById('day' + i + 'icon').src = iconsrc;
            }
        }
    if (townPage = 'Bear Lake County') {
                let forecastRequest = new XMLHttpRequest();
                apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
                forecastRequest.open('Get', apiURLstring, true);
                forecastRequest.send();
                function fishHavenForecast () {
                    let forecastData = JSON.parse(forecastRequest.responseText);
                    let temp = [];
                    let dates = [];
                    let icons = [];
                    let day = 0;

                for (let i = 0; i < forecastData.list.length; i++) {
                    let dayforecast = forecastData.list[i];
                    if (dayforecast.dt_txt.includes('18:00:00')) {
                        temp[day] = dayforecast.main.temp_max;
                        dates[day] = dayforecast.dt_txt;
                        icons[day] = dayforecast.weather[0].icon;
                            day++;
                        }
                    }
                    for (let i = 0; i <= 4; i++) {
                        document.getElementById('fhday' + i + 'temp').innerHTML = temp[i];
                        let tempdate = new Date(dates[i]);
                        let dayofweek = weekday[tempdate.getDay()];
                        document.getElementById('fhforecastdate' + i).innerHTML = dayofweek;
                        console.log(temp); 
                        let dayicon = icons[i];
                        let iconsrc = 'https://openweathermap.org/img/w/' + dayicon + '.png';
                        document.getElementById('fhday' + i + 'icon').src = iconsrc;
                    }
                }
            }
        }
    }