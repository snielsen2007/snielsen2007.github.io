//define the container to build within
//let closureschedule = document.querySelector('#templeclosureschedules');
let PHLclosureschedule = document.querySelector('#PHLclosures');
let STLclosureschedule = document.querySelector('#STLclosures');
let KCMclosureschedule = document.querySelector('#KCMclosures');
let BOIclosureschedule = document.querySelector('#BOIclosures');
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
    for (let i = 0; i < templeList.length; i++) {
        if (templeList[i].name == "St. Louis Missouri Temple") {
            let myDiv = document.createElement('div');
            let myH3 = document.createElement('h3');
            myH3.textContent = 'Scheduled Closures';
            myDiv.appendChild(myH3);
            STLclosureschedule.appendChild(myDiv);
            let closureList = templeList[i].templeClosureSchedule;
            let closureItem = 0;
            for (let j = 0; j < closureList.length; j++) {
                let closure = closureList[closureItem];
                closureItem++;
                //create HTL content on the fly
                
                let myPara = document.createElement('p');
                myPara.textContent = closure;
                myDiv.setAttribute("class", "STLclosuredate");
                myDiv.appendChild(myPara);

            }
        }
        else if (templeList[i].name == "Philadelphia Pennsylvania Temple") {
            let myDiv = document.createElement('div');
            let myH3 = document.createElement('h3');
            myH3.textContent = 'Scheduled Closures';
            myDiv.appendChild(myH3);
            PHLclosureschedule.appendChild(myDiv);
            let closureList = templeList[i].templeClosureSchedule;
            let closureItem = 0;
            for (let j = 0; j < closureList.length; j++) {
                let closure = closureList[closureItem];
                closureItem++;
                //create HTL content on the fly
                let myPara = document.createElement('p');                
                myPara.textContent = closure;
                myDiv.setAttribute('class','PHLclosuredate');
                myDiv.appendChild(myPara);
                
            }
        }
        else if (templeList[i].name == "Boise Idaho Temple") {
            let myDiv = document.createElement('div');
            let myH3 = document.createElement('h3');
            myH3.textContent = 'Scheduled Closures';
            myDiv.appendChild(myH3);
            BOIclosureschedule.appendChild(myDiv);
            let closureList = templeList[i].templeClosureSchedule;
            let closureItem = 0;
            for (let j = 0; j < closureList.length; j++) {
                let closure = closureList[closureItem];
                closureItem++;
                //create HTL content on the fly
                let myPara = document.createElement('p');                
                myPara.textContent = closure;

                myDiv.setAttribute('class','BOIclosuredate');
                myDiv.appendChild(myPara);
                
            }
        }
                else if (templeList[i].name == "Kansas City Missouri Temple") {
                let myDiv = document.createElement('div');
                let myH3 = document.createElement('h3');
                myH3.textContent = 'Scheduled Closures';
                myDiv.appendChild(myH3);
               KCMclosureschedule.appendChild(myDiv);
                let closureList = templeList[i].templeClosureSchedule;
                let closureItem = 0;
                for (let j = 0; j < closureList.length; j++) {
                    let closure = closureList[closureItem];
                    closureItem++;
                    //create HTL content on the fly
                    let myPara = document.createElement('p');
                    myPara.textContent = closure;
                    myDiv.setAttribute('class', 'KCMclosuredate');
                    myDiv.appendChild(myPara);
                    
                }
            }
        }
    }

    //        if (templeList[i].name == "St. Louis Missouri Temple" || templeList[i].name == "Philadelphia Pennsylvania Temple" || templeList[i].name == "Boise Idaho Temple" || templeList[i].name == "Kansas City Missouri Temple") {