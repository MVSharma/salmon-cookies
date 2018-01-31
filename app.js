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

//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;

//constructor function begin with an Uppercase letter

function MakeLocation(
  name,
  minCustPerHour,
  maxCustPerHour,
  avgCookieSoldPerHour
) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  //why is this an array?
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
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement("td"); //create
    tdEl.textContent = hours[i]; //content
    trEl.appendChild(tdEl); //add cell to the row
  }
  cookiestands.appendChild(trEl); //add row to the table
  for (var k = 0; k < allLocations.length; k++) {
    var location = allLocations[k];
    var trEl2 = document.createElement("tr");
    for (var j = 0; j < location.cookiesSoldByHour.length; j++) {
      var cookiesSoldByHour = location.cookiesSoldByHour[j];
      var tdEl2 = document.createElement("th");
      tdEl2.textContent = cookiesSoldByHour; //create
      trEl2.appendChild(tdEl2); //add cell to the row
    }
    cookiestands.appendChild(trEl2); 
  }
}

tableRowMaker();

// function makeHeaderRow() {
//   var cookiestands = document.getElementById('cookiestands');
//   for (var i = 0; i < hours.length; i++) {
//     var trEl = document.createElement('tr');
//     var thEl = document.createElement('th');
//     trEl.appendChild(thEl);
//     cookiestands.appendChild(thEl);
//   }
// }

// makeHeaderRow();

console.log(allLocations)

//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

//remeber to call makeHeaderRow();

// 'use strict';
// //create an array of open store hours
// var hours = [
//   '6am',
//   '7am',
//   '8am',
//   '9am',
//   '10am',
//   '11am',
//   '12pm',
//   '1pm',
//   '2pm',
//   '3pm',
//   '4pm',
//   '5pm',
//   '6pm',
//   '7pm',
// ];

//Broadway Location
// var allStores = [cookiesOnBroadway, northgateCookies, bellevueCookies, westseattleCookies, shorelineCookies ];
// var cookiesOnBroadway = {
//   name: 'Cookies on Broadway',
//   //creating key value pairs inside of my object they are called properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers by hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   //method for cookies sold by hour
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var cookiesOnBroadway = document.getElementById('cookiesOnBroadway');
//     var cOnB = document.getElementById('cOnB');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     cOnB.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       cookiesOnBroadway.appendChild(liEl);
//     }
//   }
// };
// cookiesOnBroadway.render();


// //Northgate Location
// var northgateCookies = {
//   name: 'Northgate Cookies',
//   minCustPerHour: 16,
//   maxCustPerHour: 28,
//   avgCookiesSoldPerHour: 4.4,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers per hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var northgateCookies = document.getElementById('northgateCookies');
//     var ngC = document.getElementById('ngC');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     ngC.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       northgateCookies.appendChild(liEl);
//     }
//   }
// };
// northgateCookies.render();


// //Bellevue Location
// var bellevueCookies = {
//   name: 'Bellevue Cookies',
//   minCustPerHour: 16,
//   maxCustPerHour: 28,
//   avgCookiesSoldPerHour: 4.4,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers per hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var bellevueCookies = document.getElementById('bellevueCookies');
//     var bellC = document.getElementById('bellC');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     bellC.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies ';
//       console.log(liEl);
//       bellevueCookies.appendChild(liEl);
//     }
//   }
// };
// bellevueCookies.render();


// //West Seattle Location
// var westseattleCookies = {
//   name: 'West Seattle Cookies',
//   //creating key value pairs inside of my object they are called properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers by hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   //method for cookies sold by hour
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var westseattleCookies = document.getElementById('westseattleCookies');
//     var wsC = document.getElementById('wsC');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     wsC.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log('***********',liEl);
//       westseattleCookies.appendChild(liEl);
//     }
//   }
// }; 
// westseattleCookies.render();


// //Shoreline Location
// var shorelineCookies = {
//   name: 'Shoreline Cookie',
//   //creating key value pairs inside of my object they are called properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers by hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   //method for cookies sold by hour
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var shorelineCookies = document.getElementById('shorelineCookies');
//     var shoreC = document.getElementById('shoreC');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     shoreC.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       shorelineCookies.appendChild(liEl);
//     }
//   }
// };
// shorelineCookies.render();



  




