let forecastRequest = new XMLHttpRequest();
apiURLstring='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=be51ac7443b3bdad44d5779b4d1a2133';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function () {
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

        let iconsrc = "https://openweathermap.org/img/w/" + dayicon + ".png";
        document.getElementById('day' + i + 'icon').src = iconsrc;
    }

    
    
}

//document.getElementById('cc-temp').innerHTML = forecastData.main.temp;
//let icon = "http://openweathermap.org/img/w/" + forecastData.list[0].icon + ".png"
//let desc = forecastData.weather[0].description;

//document.getElementById('cc-img').setAttribute('src', icon);
//document.getElementById('cc-img').setAttribute('alt', desc);