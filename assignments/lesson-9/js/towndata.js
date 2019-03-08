//grab references to the <header> and <section> elements and store them in variables
let header = document.querySelector('header');
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
//Then pass that object to two function calls — the first one will fill the < header > with the correct data, 
//the second one will create an information card for each town , and insert it into the < section >
request.onload = function () {
    let resultJson = request.response;
    console.log(resultJson)
    populateHeader(resultJson);
    showTown(resultJson.towns);
}
//populate the header
function populateHeader(jsonObj) {
    let myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    let myPara = document.createElement('p');
    myPara.textContent = 'Name: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}
function showTown(townList) {
    
    let mytempdiv = document.getElementById('tempdiv'); 
    for (let i = 0; i < townList.length; i++) {
        let myArticle = document.createElement('article');
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');

        myH2.textContent = townList[i].name;
        myPara1.textContent = 'Year Founded: ' + townList[i].yearFounded;
        myPara2.textContent = 'Current Population: ' + townList[i].currentPopulation;
        myPara3.textContent = 'Superpowers:';

        

        mytempdiv.appendChild(myH2);
        mytempdiv.appendChild(myPara1);
        mytempdiv.appendChild(myPara2);
        mytempdiv.appendChild(myPara3);
    }
}