'use strict';
//create an array of open store hours
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
  '7pm',
];

//Broadway Location
var cookiesOnBroadway = {
  name: 'Cookies on Broadway',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var cookiesOnBroadway = document.getElementById('cookiesOnBroadway');
    var cOnB = document.getElementById('cOnB');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    cOnB.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      cookiesOnBroadway.appendChild(liEl);
    }
  }
};
cookiesOnBroadway.render();


//Northgate Location
var northgateCookies = {
  name: 'Northgate Cookies',
  minCustPerHour: 16,
  maxCustPerHour: 28,
  avgCookiesSoldPerHour: 4.4,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers per hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var northgateCookies = document.getElementById('northgateCookies');
    var ngC = document.getElementById('ngC');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    ngC.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      northgateCookies.appendChild(liEl);
    }
  }
};
northgateCookies.render();


//Bellevue Location
var bellevueCookies = {
  name: 'Bellevue Cookies',
  minCustPerHour: 16,
  maxCustPerHour: 28,
  avgCookiesSoldPerHour: 4.4,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers per hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var bellevueCookies = document.getElementById('bellevueCookies');
    var bellC = document.getElementById('bellC');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    bellC.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies ';
      console.log(liEl);
      bellevueCookies.appendChild(liEl);
    }
  }
};
bellevueCookies.render();


//West Seattle Location
var westseattleCookies = {
  name: 'West Seattle Cookies',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var westseattleCookies = document.getElementById('westseattleCookies');
    var wsC = document.getElementById('wsC');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    wsC.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log('***********',liEl);
      westseattleCookie.appendChild(liEl);
    }
  }
}; 
westseattleCookies.render();


//Shoreline Location
var shorelineCookies = {
  name: 'Shoreline Cookie',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var shorelineCookies = document.getElementById('shorelineCookies');
    var shoreC = document.getElementById('shoreC');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    shoreC.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      shorelineCookies.appendChild(liEl);
    }
  }
};
shorelineCookies.render();



  




