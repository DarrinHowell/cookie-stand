'use strict';
// js file that generates sales report data for Pat and his cookie stands
// in seattle. objects are used to model stores and the particular stats
// that they generate around min / max number of customers, avg cookies
// ordered, and the number of customers that actually purchase Pat's salmon
// cookies.


//////////////////////////////////////////////////////////////////////////////

// initialize variables and objects
var storeHrs = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

var pikes = {
  address: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesPurchased: [],
  resultsList: [],

  // generate a random number
  randNumCustGenerator() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
  },

  // build out the cookiesPurchased arr using random number generator
  cookiesPurchasedAtEachHour() {
    for(var i = 0; i < storeHrs.length; i++){
      var numCust = this.randNumCustGenerator();
      //console.log(numCust);
      var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
      this.cookiesPurchased.push(cookiesPurchasedNow);
    }
  },

  // create a new message that concatonates values from different arrays
  // this text will be displayed in our webpage.
  createResultsList() {
    for(var i = 0; i < storeHrs.length; i++){
      var resultsSummary = storeHrs[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      this.resultsList.push(resultsSummary);
    }
  },

  appendTotalCookies() {
    var sum = 0;
    for(var i = 0; i < storeHrs.length; i++){
      sum += this.cookiesPurchased[i];
    }
    var message = 'Total: ' + sum + ' cookies';
    this.resultsList.push(message);
  },

  // render list in html
  renderResultsList() {
    // create list title
    var resultsListTitle = document.createElement('h2');
    var titleText = document.createTextNode(this.address);
    resultsListTitle.appendChild(titleText);
    var position = document.getElementsByTagName('body')[0];
    position.appendChild(resultsListTitle);

    // create ordered list as a child of that title
    var newList = document.createElement('ul');
    for(var i = 0; i < this.resultsList.length; i++){
      var newListItem = document.createElement('li');
      var listItemText = document.createTextNode(this.resultsList[i]);
      newListItem.appendChild(listItemText);
      newList.appendChild(newListItem);
    }

    position.appendChild(newList);

  }


};

var seaTac = {
  address: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  cookiesPurchased: [],
  resultsList: [],

  // generate a random number
  randNumCustGenerator() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
  },

  // build out the cookiesPurchased arr using random number generator
  cookiesPurchasedAtEachHour() {
    for(var i = 0; i < storeHrs.length; i++){
      var numCust = this.randNumCustGenerator();
      //console.log(numCust);
      var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
      this.cookiesPurchased.push(cookiesPurchasedNow);
    }
  },

  // create a new message that concatonates values from different arrays
  // this text will be displayed in our webpage.
  createResultsList() {
    for(var i = 0; i < storeHrs.length; i++){
      var resultsSummary = storeHrs[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      this.resultsList.push(resultsSummary);
    }
  },

  appendTotalCookies() {
    var sum = 0;
    for(var i = 0; i < storeHrs.length; i++){
      sum += this.cookiesPurchased[i];
    }
    var message = 'Total: ' + sum + ' cookies';
    this.resultsList.push(message);
  },

  // render list in html
  renderResultsList() {
    // create list title
    var resultsListTitle = document.createElement('h2');
    var titleText = document.createTextNode(this.address);
    resultsListTitle.appendChild(titleText);
    var position = document.getElementsByTagName('body')[0];
    position.appendChild(resultsListTitle);

    // create ordered list as a child of that title
    var newList = document.createElement('ul');
    for(var i = 0; i < this.resultsList.length; i++){
      var newListItem = document.createElement('li');
      var listItemText = document.createTextNode(this.resultsList[i]);
      newListItem.appendChild(listItemText);
      newList.appendChild(newListItem);
    }

    position.appendChild(newList);

  }

};

var seattleCenter = {
  address: 'Seattle Center',
  minCust: 24,
  maxCust: 38,
  avgCookies: 3.7,
  cookiesPurchased: [],
  resultsList: [],

  // generate a random number
  randNumCustGenerator() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
  },

  // build out the cookiesPurchased arr using random number generator
  cookiesPurchasedAtEachHour() {
    for(var i = 0; i < storeHrs.length; i++){
      var numCust = this.randNumCustGenerator();
      //console.log(numCust);
      var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
      this.cookiesPurchased.push(cookiesPurchasedNow);
    }
  },

  // create a new message that concatonates values from different arrays
  // this text will be displayed in our webpage.
  createResultsList() {
    for(var i = 0; i < storeHrs.length; i++){
      var resultsSummary = storeHrs[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      this.resultsList.push(resultsSummary);
    }
  },

  appendTotalCookies() {
    var sum = 0;
    for(var i = 0; i < storeHrs.length; i++){
      sum += this.cookiesPurchased[i];
    }
    var message = 'Total: ' + sum + ' cookies';
    this.resultsList.push(message);
  },

  // render list in html
  renderResultsList() {
    // create list title
    var resultsListTitle = document.createElement('h2');
    var titleText = document.createTextNode(this.address);
    resultsListTitle.appendChild(titleText);
    var position = document.getElementsByTagName('body')[0];
    position.appendChild(resultsListTitle);

    // create ordered list as a child of that title
    var newList = document.createElement('ul');
    for(var i = 0; i < this.resultsList.length; i++){
      var newListItem = document.createElement('li');
      var listItemText = document.createTextNode(this.resultsList[i]);
      newListItem.appendChild(listItemText);
      newList.appendChild(newListItem);
    }

    position.appendChild(newList);

  }
};

var capitolHill = {
  address: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  cookiesPurchased: [],
  resultsList: [],

  // generate a random number
  randNumCustGenerator() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
  },

  // build out the cookiesPurchased arr using random number generator
  cookiesPurchasedAtEachHour() {
    for(var i = 0; i < storeHrs.length; i++){
      var numCust = this.randNumCustGenerator();
      //console.log(numCust);
      var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
      this.cookiesPurchased.push(cookiesPurchasedNow);
    }
  },

  // create a new message that concatonates values from different arrays
  // this text will be displayed in our webpage.
  createResultsList() {
    for(var i = 0; i < storeHrs.length; i++){
      var resultsSummary = storeHrs[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      this.resultsList.push(resultsSummary);
    }
  },

  appendTotalCookies() {
    var sum = 0;
    for(var i = 0; i < storeHrs.length; i++){
      sum += this.cookiesPurchased[i];
    }
    var message = 'Total: ' + sum + ' cookies';
    this.resultsList.push(message);
  },

  // render list in html
  renderResultsList() {
    // create list title
    var resultsListTitle = document.createElement('h2');
    var titleText = document.createTextNode(this.address);
    resultsListTitle.appendChild(titleText);
    var position = document.getElementsByTagName('body')[0];
    position.appendChild(resultsListTitle);

    // create ordered list as a child of that title
    var newList = document.createElement('ul');
    for(var i = 0; i < this.resultsList.length; i++){
      var newListItem = document.createElement('li');
      var listItemText = document.createTextNode(this.resultsList[i]);
      newListItem.appendChild(listItemText);
      newList.appendChild(newListItem);
    }

    position.appendChild(newList);

  }
};

var alki = {
  address: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  cookiesPurchased: [],
  resultsList: [],

  // generate a random number
  randNumCustGenerator() {
    return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
  },

  // build out the cookiesPurchased arr using random number generator
  cookiesPurchasedAtEachHour() {
    for(var i = 0; i < storeHrs.length; i++){
      var numCust = this.randNumCustGenerator();
      //console.log(numCust);
      var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
      this.cookiesPurchased.push(cookiesPurchasedNow);
    }
  },

  // create a new message that concatonates values from different arrays
  // this text will be displayed in our webpage.
  createResultsList() {
    for(var i = 0; i < storeHrs.length; i++){
      var resultsSummary = storeHrs[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      this.resultsList.push(resultsSummary);
    }
  },

  appendTotalCookies() {
    var sum = 0;
    for(var i = 0; i < storeHrs.length; i++){
      sum += this.cookiesPurchased[i];
    }
    var message = 'Total: ' + sum + ' cookies';
    this.resultsList.push(message);
  },

  // render list in html
  renderResultsList() {
    // create list title
    var resultsListTitle = document.createElement('h2');
    var titleText = document.createTextNode(this.address);
    resultsListTitle.appendChild(titleText);
    var position = document.getElementsByTagName('body')[0];
    position.appendChild(resultsListTitle);

    // create ordered list as a child of that title
    var newList = document.createElement('ul');
    for(var i = 0; i < this.resultsList.length; i++){
      var newListItem = document.createElement('li');
      var listItemText = document.createTextNode(this.resultsList[i]);
      newListItem.appendChild(listItemText);
      newList.appendChild(newListItem);
    }

    position.appendChild(newList);

  }
};

var locationsArray = [pikes, seaTac, seattleCenter, capitolHill, alki];


////////////////////////////////////////////////////////////////////////////////////////


// run methods and generate sales data

for(var i = 0; i < locationsArray.length; i++){
  var store = locationsArray[i];
  store.cookiesPurchasedAtEachHour();
  // console.log(store.cookiesPurchased);
  store.createResultsList();
  store.appendTotalCookies();
  // console.log(store.resultsList);
  store.renderResultsList();
}

