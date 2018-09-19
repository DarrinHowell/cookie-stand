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
  '12pm',
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


Location.locations = [];
console.log(Location.locations);

Location.prototype.randNumCustGenerator = function() {
  return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
};

// build out the cookiesPurchased arr using random number generator
Location.prototype.cookiesPurchasedAtEachHour = function() {
  for(var i = 0; i < tableHeadLabels.length-1; i++){
    var numCust = this.randNumCustGenerator();
    //console.log(numCust);
    var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
    this.cookiesPurchased.push(cookiesPurchasedNow);
  }
  console.log('length of cookiesPurchased before appending toal is: ', this.cookiesPurchased.length);
  this.cookiesPurchased.push(this.appendTotalCookies());
  console.log('length of cookiesPurchased after appending toal is: ', this.cookiesPurchased.length);
};


// create a new message that concatonates values from different arrays
// this text will be displayed in our webpage.
Location.prototype.createResultsList = function() {
  for(var i = 0; i < tableHeadLabels.length; i++){
    var resultsSummary = tableHeadLabels[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
    this.resultsList.push(resultsSummary);
  }
};


Location.prototype.appendTotalCookies = function() {
  var sum = 0;
  for(var i = 0; i < tableHeadLabels.length-1; i++){
    sum += this.cookiesPurchased[i];
  }
  // var message = 'Total: ' + sum + ' cookies';
  //this.resultsList.push(message);
  return sum;
};


// render list in html
Location.prototype.renderResultsRow = function() {
  // grab body tag
  var position = document.getElementsByTagName('tbody')[0];

  // generate a new row each time we run computations on a new object
  var newRow = document.createElement('tr');

  var newTd = document.createElement('td');
  var tdText = document.createTextNode(this.address);
  newTd.appendChild(tdText);
  newRow.appendChild(newTd);

  // *******create a row showing projection of num cookies purchased at each hour for each location
  // missing the first row here.
  for(var i = 0; i < this.cookiesPurchased.length; i++){
    newTd = document.createElement('td');
    tdText = document.createTextNode(this.cookiesPurchased[i]);
    newTd.appendChild(tdText);
    newRow.appendChild(newTd);
  }

  position.appendChild(newRow);

};

////////////////////////////////////////////////////////////////////////////////////////

// generate new objects according to the specs on our report
// parameters: address, minCust, maxCust, avgCookies
// automatically add them to the Location.locations array (contains list of objects)

var pikes = new Location('1st and Pike', 23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
var alki = new Location('Alki', 2, 16, 4.6);

////////////////////////////////////////////////////////////////////////////////////////


// generate table head function
// need to stick head onto body
function tableHeadGenerator(tableHeadLabels){
  // create elements and append them to one another according to parent child heirarchy
  var position = document.getElementsByTagName('body')[0];
  var tableNode = document.createElement('table');
  var tableHead = document.createElement('thead');
  var tableRow = document.createElement('tr');
  var tableBody = document.createElement('tbody');

  var columnHeading = document.createElement('th');
  var columnText = document.createTextNode('');
  columnHeading.appendChild(columnText);
  tableRow.appendChild(columnHeading);

  // create column headings according to storeHrs array elements
  for(var i = 0; i < tableHeadLabels.length; i++){
    columnHeading = document.createElement('th');
    columnText = document.createTextNode(tableHeadLabels[i]);
    columnHeading.appendChild(columnText);
    tableRow.appendChild(columnHeading);
  }


  //append the child to the parent
  tableHead.appendChild(tableRow);
  tableNode.appendChild(tableHead);
  tableNode.appendChild(tableBody);
  position.appendChild(tableNode);

}

function tableFooterGenerator(tableHeadLabels){
  var position = document.getElementsByTagName('table')[0];
  var newRow = document.createElement('tr');
  for(var i = 0; i < tableHeadLabels.length; i++){
    if(i === 0){
      var newTd = document.createElement('td');
      var newTdText = document.createTextNode('Total');
      newTd.appendChild(newTdText);
    } else {
      newTd = document.createElement('td');
      newTdText = document.createTextNode('');
      newTd.appendChild(newTdText);
    }
    newRow.appendChild(newTd);
  }
  position.appendChild(newRow);
}


////////////////////////////////////////////////////////////////////////////////////////

// generate table head + labels
tableHeadGenerator(tableHeadLabels);

// run methods, generate sales data, render table rows one by one
for(var i = 0; i < Location.locations.length; i++){
  var store = Location.locations[i];
  store.cookiesPurchasedAtEachHour();
  store.createResultsList();
  store.renderResultsRow();
}

// generate last row of table
tableFooterGenerator(tableHeadLabels);
