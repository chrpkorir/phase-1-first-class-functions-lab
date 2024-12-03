// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2,4)
}
/*
his is an array containing two elements: the two functions 
that we previously defined (returnFirstTwoDrivers() and 
returnLastTwoDrivers())
*/
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

/*
 higher-order function that takes in one argument, an integer, 
 and returns a function that will multiply a fare for a ride 
 accordingly
 */
function createFareMultiplier(a){
    return function(fare){
        return fare * a
    }
} 

const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3)

/*
This function takes two arguments, an array of the names of
 Scuber's drivers and either the returnFirstTwoDrivers() or 
 returnLastTwoDrivers() function.
 */
function selectDifferentDrivers(arrayOfDrivers, callback){
    return callback(arrayOfDrivers)
}