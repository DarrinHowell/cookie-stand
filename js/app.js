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

var market = {
  locations: [
    {address: '1st and Pike',
      minCust: 23,
      maxCust: 65,
      avgCookies: 6.3,
      cookiesPurchased: [],
    },

    {address: 'SeaTac Airport',
      minCust: 3,
      maxCust: 24,
      avgCookies: 1.2,
      cookiesPurchased: []
    },

    {address: 'Seattle Center',
      minCust: 24,
      maxCust: 38,
      avgCookies: 3.7,
      cookiesPurchased: []
    },

    {address: 'Capitol Hill',
      minCust: 20,
      maxCust: 38,
      avgCookies: 2.3,
      cookiesPurchased: []
    },

    {
      address: 'Alki',
      minCust: 2,
      maxCust: 16,
      avgCookies: 4.6,
      cookiesPurchased: []
    }
  ],

  randNumCustGenerator(max, min) {
    return Math.random() * (max-min) + min;
  }

};


// run a for loop and calculate randNumCustGenerator (for loop is same size as store hours)
// create an array at each location
// compute total cookies avg * num cust (must iterate through numCust (!) within each location)
// Do we need to call marketObject function again?
for(var i = 0; i < market.locations.length; i++){
  for(var j = 0; j < storeHrs.length; j++){
    var newNumCust = market.randNumCustGenerator(market.locations[i].minCust,
      market.locations[i].maxCust);
    //console.log(newNumCust);
    var cookiesPurchasedNow = newNumCust * market.locations[i].avgCookies;

    market.locations[i].cookiesPurchased.push(cookiesPurchasedNow);
  }
}

//console.log(market.locations[4].cookiesPurchased);


//////////////////////////////////////////////////////////////////////////////


// will need to generate new list to display on webpage

//need to iterate over every index of cookies purchased
// will need to add these values to a new array of objects (we would use a
// new constructor and input these values in)

function generateResultsList(marketObject, newObject) {
  for(var i = 0; i < marketObject.locations.length; i++){
    var franchiseName = marketObject.locations[i].address;
    newObject.locationsCopy.push(franchiseName);
    var cookieSales = [];
    for(var j = 0; j < storeHrs.length; j++){
      var cookieSummaryByHr = storeHrs[j] + ': ' +
                marketObject.locations[i].cookiesPurchased[j] + ' cookies purchased';
      cookieSales.push([cookieSummaryByHr]);
    }
    newObject.locationsCopy.push([cookieSales]);
  }
  return newObject;
}

var resultsList = {
  locationsCopy: []
};
resultsList = generateResultsList(market, resultsList);

console.log(resultsList);


//////////////////////////////////////////////////////////////////////////////


// will then need to add list items to html file

// Find Our <ul>
for(var k = 0; k < resultsList.length-2; k+=2){
  for(var l = 0; l < storeHrs.length; l++){
    // get into salesList section
    var salesList = document.getElementsByClassName('salesListSection');
    // Create a new List Item in the DOM
    var newSalesListTitle = document.createElement('h2');
    newSalesListTitle.textContent = resultsList[k];
    var newUl = document.createElement('ul');
    var newLi = document.createElement('li');
    newLi.textContent = resultsList[k][l];
    salesList.appendChild(newUl);
    newUl.appendChild(newLi);
  }
}


