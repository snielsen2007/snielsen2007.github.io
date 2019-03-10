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
            let mySpan2a = document.createElement('span');
            let mySpan2b = document.createElement('span');
            let myPara3 = document.createElement('p');
            let mySpan3a = document.createElement('span');
            let mySpan3b = document.createElement('span');
            let myPara4 = document.createElement('p');
            let mySpan4a = document.createElement('span');
            let mySpan4b = document.createElement('span');
            let myImg = document.createElement('img');
            let link = townList[i].name;
            let linkname = link.toLowerCase();   // this makes it all lowercase
           

           

            myH2.textContent = townList[i].name;
            myPara1.textContent = townList[i].motto;
            mySpan2a.textContent = 'Year Founded: ';
            mySpan2b.textContent = townList[i].yearFounded;
            mySpan3a.textContent = 'Population: '
            mySpan3b.textContent = townList[i].currentPopulation;
            mySpan4a.textContent = 'Annual Rain Fall: ';
            mySpan4b.textContent = townList[i].averageRainfall + ' "';
            link = link.replace(/\s/g, '');  // this is regex to remove the spaces
            myImg.setAttribute('src', 'images/towndata/' + linkname + '300px' + '.jpg');
            myImg.setAttribute('alt', 'The city of ' + townList[i].name + '  picture');
            myPara1.setAttribute('class', 'motto');
            mySpan2a.setAttribute('class', 'towndatalabel');
            mySpan3a.setAttribute('class', 'towndatalabel');
            mySpan4a.setAttribute('class', 'towndatalabel');

            

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myPara2.appendChild(mySpan2a);
            myPara2.appendChild(mySpan2b);
            myArticle.appendChild(myPara3);
            myPara3.appendChild(mySpan3a);
            myPara3.appendChild(mySpan3b);
            myArticle.appendChild(myPara4);
            myPara4.appendChild(mySpan4a);
            myPara4.appendChild(mySpan4b);
            myArticle.appendChild(myImg);

            townfacts.appendChild(myArticleContainer); 
            myArticleContainer.appendChild(myArticle);

        }
    }
}