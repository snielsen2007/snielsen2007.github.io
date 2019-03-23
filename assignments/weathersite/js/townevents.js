//define the container to build within
let townevents = document.querySelector('#towneventscontainer');
let section = document.querySelector('section');
//use an API called XMLHttpRequest --a JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript
// store the URL of the JSON we want to retrieve in a variable
let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//create a new request object instance from the XMLHttpRequest constructor, using the new keyword
let request = new XMLHttpRequest();
//open a new request using the open() method
request.open('GET', requestURL);
//set the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object.
request.responseType = 'json';
//send the request with the send() method
request.send();
//store the response to our request (available in the response property) in a variable; 
//this variable will now contain the JavaScript object based on the JSON! 
//Then pass that object to function calls
request.onload = function () {
    let responsedata = request.response;
    let townList = responsedata['towns'];
    let townPageTitle = document.getElementById("pagetitle").innerHTML;
    for (let i = 0; i < townList.length; i++) {
        if (townList[i].name == townPageTitle) {
            let eventsList = townList[i].events;
            let eventItem = 0; 
            for (let j = 0; j < eventsList.length; j++) {
                let event = eventsList[eventItem];
                eventItem++;
            //create HTML content on the fly
            let myArticle = document.createElement('article');
            let myH4 = document.createElement('h4');
            myH4.textContent = event;
            myArticle.appendChild(myH4);
            townevents.appendChild(myArticle);
            }
        }
    }
}

