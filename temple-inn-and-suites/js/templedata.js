//define the container to build within
let closureschedule = document.querySelector('#templeclosureschedule');
let section = document.querySelector('section');
//use an API called XMLHttpRequest --a JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript
// store the URL of the JSON we want to retrieve in a variable
let requestURL = 'https://snielsen2007.github.io/temple-inn-and-suites/json/templedata.json';
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
    let templeList = responsedata['temples'];
    let templeTitle = document.getElementById('templetitle').innerHTML;
    for (let i = 0; i < templeList.length; i++) {
        if (templeList[i].name == templeTitle) {
            let closureList = templeList[i].templeclosureSchedule;
            let closureItem = 0;
            for (let j = 0; j < closureList.length; j++) {
                let closure = closureList[closureItem];
                closureItem++;
        //create HTL content on the fly
                let myArticle = document.createElement('article');
                let myPara = document.createElement('p');
                myPara.textContent = closure; 
                myArticle.appendChild('myPara');
                closureschedule.appendChild(myArticle);
            }
        }
    }
}

