let header = document.querySelector('header');
let section = document.querySelector('section');
let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    let resultJson = request.response;
    console.log(resultJson)
    populateHeader(resultJson);
    showTown(resultJson.towns);
}
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