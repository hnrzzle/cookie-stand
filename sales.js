/* Create a seperate JS object literal for each shop that:
-Stores min/max hourly customers
-"            " average cookies per customer, in object properties
-Uses a method of that object to generate a random number of customers per hour use Math.random() method
-Calculate and store The simulated amounts of cookies purchased for each hour at each location using average cookies purchased and random number of customers generated
-Store the results for each location in a seperate array... as a property of the object representing that location
-Display the values of each array as <ol> in the browser
*/


const pdx = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    randoCust: function() {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let random = Math.floor(Math.random() * (max - min +1)) + min;
        return random;
    },
    simCookies: function() {
        let sim = this.avgCookies * this.randoCust();
        return sim;
    },
    pdxProperties: [
        this.minCust,
        this.maxCust,
        this.avgCookies,
        this.randoCust,
        this.simCookies
        ],
    createLi: function() {
        const li = document.createElement('li');
        li.textContent = 'blah';
        return li;
    }
};
pdx.createLi();

// const pdxProperties = [
//                     pdx.minCust,
//                     pdx.maxCust,
//                     pdx.avgCookies,
//                     pdx.randoCust(),
//                     pdx.simCookies()
//                     ];

// const newList = document.createElement('li')
// li.textContent = this.
