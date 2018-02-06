/* Create a seperate JS object literal for each shop that:
-Stores min/max hourly customers
-"            " average cookies per customer, in object properties
-Uses a method of that object to generate a random number of customers per hour use Math.random() method
-Calculate and store The simulated amounts of cookies purchased for each hour at each location using average cookies purchased and random number of customers generated
-Store the results for each location in a seperate array... as a property of the object representing that location
-Display the values of each array as <ol> in the browser
*/

// const pdxCookies = [];
// const pioneerSquareCookies = [];
// const powellsCookies = [];
// const stJohnsCookies = [];
// const waterfrontCookies = [];

const pdx = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 14; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    }
};
pdx.cookiesHour();
console.log(pdx.hourlyArray);



// TODO: try to put this into pdx, get rid of return sim


const pioneerSquare = {
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 14; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    }
};

pioneerSquare.cookiesHour();
console.log(pioneerSquare.hourlyArray);


const powells = {
    minCust: 11,
    maxCust: 24,
    avgCookies: 3.7,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 14; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    }
};
powells.cookiesHour();
console.log(powells.hourlyArray);

const stJohns = {
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 14; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    }
};
stJohns.cookiesHour();
console.log(stJohns.hourlyArray);

const waterfront = {
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    hourlyArray: [],
    cookiesHour: function() {
        const min = Math.ceil(this.minCust);
        const max = Math.floor(this.maxCust);
        for (let i = 0; i < 14; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            const cookiesPerHour = Math.round(random * this.avgCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    }
};
waterfront.cookiesHour();
console.log(waterfront.hourlyArray);
