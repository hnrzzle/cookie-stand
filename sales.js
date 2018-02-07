/* Create a seperate JS object literal for each shop that:
-Stores min/max hourly customers
-"            " average cookies per customer, in object properties
-Uses a method of that object to generate a random number of customers per hour use Math.random() method
-Calculate and store The simulated amounts of cookies purchased for each hour at each location using average cookies purchased and random number of customers generated
-Store the results for each location in a seperate array... as a property of the object representing that location
-Display the values of each array as <ol> in the browser
*/
// time array
const time = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];

// constructor function
function Location(name, minCust, maxCust, avgCookies) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.hourlyArray = [];
}
// Methods
Location.prototype.cookiesHour = function() {
    const min = Math.ceil(this.minCust);
    const max = Math.floor(this.maxCust);
    for (let i = 0; i < 15; i++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        const cookiesPerHour = Math.round(random * this.avgCookies);
        this.hourlyArray.push(cookiesPerHour);
    };
};
Location.prototype.getTotalCookies = function() {
    let total = 0;
    for (let i = 0; i < 15; i++) {
        total = total + this.hourlyArray[i];
    }
    this.hourlyArray.push(total);
};
/*
Location.prototype.renderCookieAmt = function(location) {
    for (let i = 0; i < this.hourlyArray.length; i++) {
        const list = document.getElementById(location);
        const li = document.createElement('li');
        li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
        list.appendChild(li);
    }
};
*/

Location.prototype.renderRow = function() {
    this.cookiesHour();
    this.getTotalCookies();
    //Create first row with location name
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    for (let i = 0; i < this.hourlyArray.length; i++) {
        const td = document.createElement('td');
        td.textContent = this.hourlyArray[i];
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
};


function buildHeader () {
    for (let i = 0; i < time.length; i++) {
        const header = document.getElementById('header-row');
        const th = document.createElement('th');
        th.textContent = time[i];
        header.appendChild(th);
    }
};


buildHeader();
const pdx = new Location('PDX Airport', 23, 65, 6.3);
const pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
const powells = new Location('Powell\'s', 11, 38, 3.7);
const stJohns = new Location('St. John\'s', 20, 38, 2.3);
const waterfront = new Location('Waterfront', 2, 16, 4.6);


// method calls and logs
pdx.renderRow();
pioneerSquare.renderRow();
powells.renderRow();
stJohns.renderRow();
waterfront.renderRow();

// pdx.renderCookieAmt('airport');
// console.log(pdx.hourlyArray);
// pioneerSquare.cookiesHour();
// pioneerSquare.getTotalCookies();
// pioneerSquare.renderCookieAmt('pioneer');
// console.log(pioneerSquare.hourlyArray);
// powells.cookiesHour();
// powells.getTotalCookies();
// powells.renderCookieAmt('powells');
// console.log(powells.hourlyArray);
// stJohns.cookiesHour();
// stJohns.getTotalCookies();
// stJohns.renderCookieAmt('st-johns');
// console.log(stJohns.hourlyArray);
// waterfront.cookiesHour();
// waterfront.getTotalCookies();
// waterfront.renderCookieAmt('waterfront');
// console.log(waterfront.hourlyArray);


