'use strict';

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
      numCust: []
    },

    {address: 'SeaTac Airport',
      minCust: 3,
      maxCust: 24,
      avgCookies: 1.2,
      numCust: []
    },

    {address: 'Seattle Center',
      minCust: 24,
      maxCust: 38,
      avgCookies: 3.7,
      numCust: []
    },

    {address: 'Capitol Hill',
      minCust: 20,
      maxCust: 38,
      avgCookies: 2.3,
      numCust: []
    },

    {
      address: 'Alki',
      minCust: 2,
      maxCust: 16,
      avgCookies: 4.6,
      numCust: []
    }
  ],

  randNumCustGenerator(max, min) {
    return Math.random() * (max-min) + min;
  }

  cookieCalc(){
      for()
  }


};


// run a for loop and calculate randNumCustGenerator (for loop is same size as store hours)
// create an array at each location
// compute total cookies avg * num cust (must iterate through numCust (!) within each location)
for(var i = 0; i < market.locations.length; i++){
  for(var j = 0; j < storeHrs.length; j++){
    var newNumCust = market.randNumCustGenerator(market.locations[i].minCust,
      market.locations[i].maxCust);
    console.log(newNumCust);
    market.locations[i].numCust.push(newNumCust);
  }
}

console.log(market.locations[4].numCust);
