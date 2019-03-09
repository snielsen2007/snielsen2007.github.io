//define the container to build within
let townfacts = document.querySelector('#townfactscontainer');
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
    console.log(responsedata)
    
    for (let i = 0; i < townList.length; i++) {

        if (townList[i].name == "Fish Haven" || townList[i].name == "Preston" || townList[i].name == "Soda Springs") {
            
        
            let myArticleContainer=document.createElement('div')
            let myArticle = document.createElement('article');
            let myH2 = document.createElement('h2');
            let myPara1 = document.createElement('p');
            let myPara2 = document.createElement('p');
            let myPara3 = document.createElement('p');
            let myPara4 = document.createElement('p');
            let myImg = document.createElement('img');

            myH2.textContent = townList[i].name;
            myPara1.textContent = townList[i].motto;
            myPara2.textContent = 'Year Founded: ' + townList[i].yearFounded;
            myPara3.textContent = 'Population: ' + townList[i].currentPopulation;
            myPara4.textContent = 'Annual Rain Fall: ' + townList[i].averageRainfall; + 'inches';
            myImg.setAttribute('src', 'images/towndata/' + townList[i].name + '.jpg');
            myImg.setAttribute('alt', 'The city of ' + townList[i].name + ' picture');
            myPara1.setAttribute('class', 'motto');

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myImg);

            townfacts.appendChild(myArticleContainer); 
            myArticleContainer.appendChild(myArticle);

        }
    }
}