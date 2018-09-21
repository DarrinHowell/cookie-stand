'use strict';
// js file that generates sales report data for Pat and his cookie stands
// in seattle. objects are used to model stores and the particular stats
// that they generate around min / max number of customers, avg cookies
// ordered, and the number of customers that actually purchase Pat's salmon
// cookies.


//////////////////////////////////////////////////////////////////////////////

// grab body object
var table = document.getElementsByTagName('table')[0];
var formPosition = document.getElementById('locationForm');

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

  this.cookiesPurchasedAtEachHour = function () {
    for(var i = 0; i < tableHeadLabels.length-1; i++){
      var numCust = this.randNumCustGenerator();
      var cookiesPurchasedNow = Math.floor(numCust * this.avgCookies);
      this.cookiesPurchased.push(cookiesPurchasedNow);
    }
    this.cookiesPurchased.push(this.appendTotalCookies());
  };

  this.cookiesPurchasedAtEachHour();

};


Location.locations = [];
//console.log(Location.locations);

Location.prototype.randNumCustGenerator = function() {
  return Math.floor(Math.random() * (this.maxCust-this.minCust)+ this.minCust);
};


Location.prototype.appendTotalCookies = function() {
  var sum = 0;
  for(var i = 0; i < tableHeadLabels.length-1; i++){
    sum += this.cookiesPurchased[i];
  }
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

  // create a row showing projection of num cookies purchased at each hour for each location
  // missing the first row here.
  for(var i = 0; i < this.cookiesPurchased.length; i++){
    newTd = document.createElement('td');
    tdText = document.createTextNode(this.cookiesPurchased[i]);
    newTd.appendChild(tdText);
    newRow.appendChild(newTd);
  }

  position.appendChild(newRow);

};

// separate these two
function renderTableData() {
  for(var i = 0; i < Location.locations.length; i++){
    var store = Location.locations[i];
    store.renderResultsRow();
  }
}



// generate table head function
// need to stick head onto body
function tableHeadGenerator(){
  // create elements and append them to one another according to parent child heirarchy
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

  tableHead.appendChild(tableRow);
  table.appendChild(tableHead);
  table.appendChild(tableBody);

}

// generate footer function
function tableFooterGenerator(){
  var tfoot = document.createElement('tfoot');
  var newRow = document.createElement('tr');
  var newTd = document.createElement('td');
  var newTdText = document.createTextNode('Total');
  newTd.appendChild(newTdText);
  newRow.appendChild(newTd);
  tfoot.appendChild(newRow);

  var cookiePurArrLength = Location.locations[0].cookiesPurchased.length;
  console.log('length of cookiePurchase array: ', cookiePurArrLength);
  var colSum = 0;
  for(var i = 0; i < cookiePurArrLength; i++){
    for(var j = 0; j < Location.locations.length; j++){
      colSum += Location.locations[j].cookiesPurchased[i];
      console.log('we inside!');
    }
    newTd = document.createElement('td');
    newTdText = document.createTextNode(colSum);
    newTd.appendChild(newTdText);
    newRow.appendChild(newTd);
    tfoot.appendChild(newRow);
    table.appendChild(tfoot);
    colSum = 0;
  }
}


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


// generate table head + labels
tableHeadGenerator();

// run methods, generate sales data, render table rows one by one
renderTableData();

// generate last row of table
tableFooterGenerator();


////////////////////////////////////////////////////////////////////////////////////////


// initialize event listener and event handler
// storeName, minimumCust, maximumCust, avgCookies
function addLocation(event){
  event.preventDefault();

  var newStoreName = event.target.storeName.value;
  var newMinimumCust =parseInt(event.target.minimumCust.value);
  var newMaximumCust = parseInt(event.target.maximumCust.value);
  var newAvgCookies = parseInt(event.target.avgCookies.value);

  new Location(newStoreName, newMinimumCust, newMaximumCust, newAvgCookies);

  table.innerHTML = '';
  tableHeadGenerator();
  renderTableData();
  tableFooterGenerator();
}

formPosition.addEventListener('submit', addLocation);


