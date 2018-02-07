/* Create a seperate JS object literal for each shop that:
-Stores min/max hourly customers
-"            " average cookies per customer, in object properties
-Uses a method of that object to generate a random number of customers per hour use Math.random() method
-Calculate and store The simulated amounts of cookies purchased for each hour at each location using average cookies purchased and random number of customers generated
-Store the results for each location in a seperate array... as a property of the object representing that location
-Display the values of each array as <ol> in the browser
*/
// time array
const time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'total: ' ];

function Location(minCust, maxCust, avgCookies, hourlyArray) {
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.hourlyArray = hourlyArray;
}
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
Location.prototype.renderCookieAmt = function() {
    for (let i = 0; i < this.hourlyArray.length; i++) {
        const list = document.getElementById('airport');
        const li = document.createElement('li');
        li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
        list.appendChild(li);
    }
};

   

const pdx = new Location(23, 65, 6.3, []);
const pioneerSquare = new Location(3, 24, 1.2, []);
pdx.cookiesHour();
pdx.getTotalCookies();
pdx.renderCookieAmt();
console.log(pdx.hourlyArray);
pioneerSquare.cookiesHour();
pioneerSquare.getTotalCookies();
pioneerSquare.renderCookieAmt();
console.log(pioneerSquare.hourlyArray);


/*
// Store Objects
const pdx = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 15; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        };
    },
    totalCookies: function () {
        let total = 0;
        for (let i = 0; i < 15; i++) {
            total = total + this.hourlyArray[i];
        }
        this.hourlyArray.push(total);
    },
    renderCookies: function() {
        for (let i = 0; i < this.hourlyArray.length; i++) {
            const list = document.getElementById('airport');
            const li = document.createElement('li');
            li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
            list.appendChild(li);

        }
    }
};



const pioneerSquare = {
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 15; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        };
    },
    totalCookies: function () {
        let total = 0;
        for (let i = 0; i < 15; i++) {
            total = total + this.hourlyArray[i];
        }
        this.hourlyArray.push(total);
    },
    renderCookies: function() {
        for (let i = 0; i < this.hourlyArray.length; i++) {
            const list = document.getElementById('pioneer');
            const li = document.createElement('li');
            li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
            list.appendChild(li);

        }
    }
};

const powells = {
    minCust: 11,
    maxCust: 24,
    avgCookies: 3.7,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 15; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        };
    },
    totalCookies: function () {
        let total = 0;
        for (let i = 0; i < 15; i++) {
            total = total + this.hourlyArray[i];
        }
        this.hourlyArray.push(total);
    },
    renderCookies: function() {
        for (let i = 0; i < this.hourlyArray.length; i++) {
            const list = document.getElementById('powells');
            const li = document.createElement('li');
            li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
            list.appendChild(li);

        }
    }
};

const stJohns = {
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 15; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        };
    },
    totalCookies: function () {
        let total = 0;
        for (let i = 0; i < 15; i++) {
            total = total + this.hourlyArray[i];
        }
        this.hourlyArray.push(total);
    },
    renderCookies: function() {
        for (let i = 0; i < this.hourlyArray.length; i++) {
            const list = document.getElementById('st-johns');
            const li = document.createElement('li');
            li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
            list.appendChild(li);

        }
    }
};

const waterfront = {
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 15; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        };
    },
    totalCookies: function () {
        let total = 0;
        for (let i = 0; i < 15; i++) {
            total = total + this.hourlyArray[i];
        }
        this.hourlyArray.push(total);
    },
    renderCookies: function() {
        for (let i = 0; i < this.hourlyArray.length; i++) {
            const list = document.getElementById('waterfront');
            const li = document.createElement('li');
            li.textContent = time[i] + this.hourlyArray[i] + ' cookies';
            list.appendChild(li);

        }
    }
};

// method calls and logging
pdx.cookiesHour();
pdx.totalCookies();
pdx.renderCookies();

console.log(pdx.hourlyArray);

pioneerSquare.cookiesHour();
pioneerSquare.totalCookies();
pioneerSquare.renderCookies();
console.log(pioneerSquare.hourlyArray);

powells.cookiesHour();
powells.totalCookies();
powells.renderCookies();
console.log(powells.hourlyArray);

stJohns.cookiesHour();
stJohns.totalCookies();
stJohns.renderCookies();
console.log(stJohns.hourlyArray);

waterfront.cookiesHour();
waterfront.totalCookies();
waterfront.renderCookies();
console.log(waterfront.hourlyArray);
*/
