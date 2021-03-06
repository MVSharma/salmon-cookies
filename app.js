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
var salmonForm = document.getElementById('salmon-form');
salmonForm.addEventListener('submit', handleStoreSubmit);


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

var total = ['totals',0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var cookiestands = document.getElementById('cookiestands');
function tableRowMaker() {
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
    createRow(location);
  }
}

function createRow(location) {
  location.cookiesSoldByHour.unshift(location.name);
  var row = document.createElement('tr');
  for (var j = 0; j < location.cookiesSoldByHour.length; j++) {
    var cookiesSoldByHour = location.cookiesSoldByHour[j];
    if (j > 0) {
      total[j] += cookiesSoldByHour;
    }
    var tdEl2 = document.createElement('td');
    tdEl2.textContent = cookiesSoldByHour; //create
    row.appendChild(tdEl2); //add cell to the row
  }
  cookiestands.appendChild(row); //add location row to cell
}

function footerRow() {
  var trEl = document.createElement('tr');
  for (var i = 0; i < total.length; i++) {
    var tdEl = document.createElement('td'); //create
    tdEl.textContent = total[i]; //set the content of the tdel
    trEl.appendChild(tdEl); //add cell to the row
  }
  cookiestands.appendChild(trEl); //add row to the table
}

function handleStoreSubmit(event) {
  console.log(event);
  event.preventDefault(); //gotta have it. prevents page reload

  if (!event.target.store.value || !event.target.mincookies.value || !event.target.maxcookies.value || !event.target.avgcookiessoldperhr.value)  {
    return alert('Fields cannot be empty!');
  }

  
  var storeName = event.target.store.value;
  var minCookies = event.target.mincookies.value;
  var maxCookies = event.target.maxcookies.value;
  var avgCookies = event.target.avgcookiessoldperhr.value;

  var newStore = new MakeLocation(storeName, minCookies, maxCookies, avgCookies);


  console.log('Store name ' + event.target.store.value + ' created at ' + Date());

  event.target.store.value = null;
  event.target.mincookies.value = null;
  event.target.maxcookies.value = null;
  event.target.avgcookiessoldperhr.value = null;

  renderNewRow(newStore);
}

function renderNewRow(newStore) {
  var tableLength = cookiestands.rows.length;
  cookiestands.deleteRow(tableLength - 1);
  createRow(newStore);
  footerRow();
}
console.log(salmonForm);

tableRowMaker();
footerRow();
console.log(allLocations);
console.log('total', total);