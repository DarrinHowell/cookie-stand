'use strict';
// js file that generates sales report data for Pat and his cookie stands
// in seattle. objects are used to model stores and the particular stats
// that they generate around min / max number of customers, avg cookies
// ordered, and the number of customers that actually purchase Pat's salmon
// cookies.


//////////////////////////////////////////////////////////////////////////////

// initialize tableHeadLabels array and object constructor (w/ prototype functions)
var tableHeadLabels = [
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
  '8pm',
  'Totals'
];

// building a constructor which models a general location and its ops stats

var Location = function(address, minCust, maxCust, avgCookies) {
  this.address = address;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPurchased = [];
  this.resultsList = [];

  Location.locations.push(this);
};


Location.prototype.randNumCustGenerator = function() {
  return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
};

// build out the cookiesPurchased arr using random number generator
Location.prototype.cookiesPurchasedAtEachHour = function() {
  for(var i = 0; i < tableHeadLabels.length; i++){
    var numCust = this.randNumCustGenerator();
    //console.log(numCust);
    var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
    this.cookiesPurchased.push(cookiesPurchasedNow);
  }
};

// create a new message that concatonates values from different arrays
// this text will be displayed in our webpage.
Location.prototype.createResultsList = function() {
  for(var i = 0; i < tableHeadLabels.length; i++){
    var resultsSummary = tableHeadLabels[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
    this.resultsList.push(resultsSummary);
  }
};

Location.prototype.appendTotalCookAndLabels = function() {
  var sum = 0;
  for(var i = 0; i < tableHeadLabels.length; i++){
    sum += this.cookiesPurchased[i];
  }
  // var message = 'Total: ' + sum + ' cookies';
  //this.resultsList.push(message);
  this.resultsList.push(sum);
};

// render list in html
Location.prototype.renderResultsList = function() {
  // create list title
  var resultsListTitle = document.createElement('h2');
  var titleText = document.createTextNode(this.address);
  resultsListTitle.appendChild(titleText);
  var position = document.createElement('body')[0];
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

};

Location.locations = [];

////////////////////////////////////////////////////////////////////////////////////////

// generate new objects according to the specs on our report
// parameters: address, minCust, maxCust, avgCookies
// automatically add them to the Location.locations array (contains list of objects)

var pikes = new Location('1st and Pike', 23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
var alki = new Location('Alki', 2, 16, 4.6);
console.log(Location.locations);

////////////////////////////////////////////////////////////////////////////////////////


// generate table head
// need to stick head onto body
function tableHeadGenerator(tableHeadLabels){
  // create elements and append them to one another according to parent child heirarchy
  var position = document.getElementsByTagName('body')[0];
  var tableNode = document.createElement('table');
  var tableHead = document.createElement('thead');
  var tableRow = document.createElement('tr');




  // create column headings according to storeHrs array elements
  for(var i = 0; i < tableHeadLabels.length; i++){
    if(i === 0){
      var columnHeading = document.createElement('th');
      var columnText = document.createTextNode('');
      columnHeading.appendChild(columnText);
      tableRow.appendChild(columnHeading);
    } else {
      columnHeading = document.createElement('th');
      columnText = document.createTextNode(tableHeadLabels[i]);
      columnHeading.appendChild(columnText);
      tableRow.appendChild(columnHeading);
    }

  }

  tableHead.appendChild(tableRow);
  tableNode.appendChild(tableHead);
  position.appendChild(tableNode);

  return position;

}


////////////////////////////////////////////////////////////////////////////////////////


// run methods, generate sales data,

for(var i = 0; i < Location.locations.length; i++){
  var store = Location.locations[i];
  store.cookiesPurchasedAtEachHour();
  // console.log(store.cookiesPurchased);
  store.createResultsList();
  store.appendTotalCookAndLabels();
  // console.log(store.resultsList);
  //store.renderResultsList();
}

var tableHead = tableHeadGenerator(tableHeadLabels);
// console.log(tableHead);

