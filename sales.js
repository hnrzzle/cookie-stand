// time array
const time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];

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


// defining stores
const pdx = new Location('PDX Airport', 23, 65, 6.3);
const pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
const powells = new Location('Powell\'s', 11, 38, 3.7);
const stJohns = new Location('St. John\'s', 20, 38, 2.3);
const waterfront = new Location('Waterfront', 2, 16, 4.6);

// method calls and logs
buildHeader();
pdx.renderRow();
pioneerSquare.renderRow();
powells.renderRow();
stJohns.renderRow();
waterfront.renderRow();