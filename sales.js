/* Create a seperate JS object literal for each shop that:
-Stores min/max hourly customers
-"            " average cookies per customer, in object properties
-Uses a method of that object to generate a random number of customers per hour use Math.random() method
-Calculate and store The simulated amounts of cookies purchased for each hour at each location using average cookies purchased and random number of customers generated
-Store the results for each location in a seperate array... as a property of the object representing that location
-Display the values of each array as <ol> in the browser
*/

const pdxCookies = [];
const pioneerSquareCookies = [];
const powellsCookies = [];
const stJohnsCookies = [];
const waterfrontCookies = [];

const pdx = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    cookiesHour: function() {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let random = Math.floor(Math.random() * (max - min +1)) + min;
        let sim = Math.round(random * this.avgCookies);
        return sim;
        }
        
};
// TODO: try to put this into pdx, get rid of return sim
pdx.cookiesHour();
for (let i = 0; i < 14; i++) {
    pdxCookies.push(pdx.cookiesHour());
}
console.log(pdxCookies);

const pioneerSquare = {
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    cookiesHour: function() {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let random = Math.floor(Math.random() * (max - min +1)) + min;
        let sim = Math.round(random * this.avgCookies);
        return sim;
    }
}
pioneerSquare.cookiesHour();
for (let i = 0; i < 14; i++) {
    pioneerSquareCookies.push(pioneerSquare.cookiesHour());
}
console.log(pioneerSquareCookies);

const powells = {
    minCust: 11,
    maxCust: 24,
    avgCookies: 3.7,
    cookiesHour: function () {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let random = Math.floor(Math.random() * (max - min +1)) + min;
        let sim = Math.round(random * this.avgCookies);
        return sim;
    }
}
powells.cookiesHour();
for (let i = 0; i < 14; i++) {
    powellsCookies.push(powells.cookiesHour());
}
console.log(powellsCookies);

const stJohns = {
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    cookiesHour: function () {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let random = Math.floor(Math.random() * (max - min +1)) + min;
        let sim = Math.round(random * this.avgCookies);
        return sim;
    }
}
stJohns.cookiesHour();
for (let i = 0; i < 14; i++) {
    stJohnsCookies.push(stJohns.cookiesHour());
}
console.log(stJohnsCookies);

const waterfront = {
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    cookiesHour: function () {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let random = Math.floor(Math.random() * (max - min +1)) + min;
        let sim = Math.round(random * this.avgCookies);
        return sim;
    }
}
waterfront.cookiesHour();
for (let i = 0; i < 14; i++) {
    waterfrontCookies.push(waterfront.cookiesHour());
}
console.log(waterfrontCookies);
