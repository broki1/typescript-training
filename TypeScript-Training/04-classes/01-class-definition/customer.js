"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
let myCustomer = new Customer("Martin", "Dixon");
/*
myCustomer.firstName = "Martin";

myCustomer.lastName = "Dixon";
*/
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
