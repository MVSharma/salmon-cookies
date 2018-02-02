'use strict';

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm'
];

//we need to create a place for our list of all locations to be placed whenwe create them
var allLocations = [];

//CONSTRUCTOR function begin with an Uppercase letter

function MakeLocation(
  // input parameters
  name,
  minCustPerHour,
  maxCustPerHour,
  avgCookieSoldPerHour
) {

  // constructor properties

  
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;

  this.calcRandCustByHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  };

  this.calcCookiesSoldByHour = function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  };

  this.calcRandCustByHour();
  this.calcCookiesSoldByHour();
  allLocations.push(this);

}

function makeStands() {
  new MakeLocation('Cookies on Broadway', 23, 65, 6.3);
  new MakeLocation('Northgate Cookies', 3, 24, 1.2);
  new MakeLocation('Bellevue Cookies', 16, 28, 4.4);
  new MakeLocation('West Seattle Cookies', 23, 65, 6.3);
  new MakeLocation('Shoreline Cookie', 21, 45, 4.6);
}
makeStands();

//time to create the table in javascript
//make header row
//table needs an id in html


function tableRowMaker() {
  var cookiestands = document.getElementById('cookiestands');
  //make a table row
  var trEl = document.createElement("tr");
  //iterate through array
  hours.unshift('');
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement("th"); //create
    tdEl.textContent = hours[i]; //set the content of the tdel
    trEl.appendChild(tdEl); //add cell to the row
  }
  cookiestands.appendChild(trEl); //add row to the table
  for (var k = 0; k < allLocations.length; k++) {
    var location = allLocations[k];
    var trEl2 = document.createElement("tr");
    location.cookiesSoldByHour.unshift(location.name);
    for (var j = 0; j < location.cookiesSoldByHour.length; j++) {
      var cookiesSoldByHour = location.cookiesSoldByHour[j];
      var tdEl2 = document.createElement("td");
      tdEl2.textContent = cookiesSoldByHour; //create
      trEl2.appendChild(tdEl2); //add cell to the row
    }
    cookiestands.appendChild(trEl2); //add location row to cell
  }
}

tableRowMaker();

console.log(allLocations);
