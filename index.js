// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari','Mo'];

const returnFirstTwoDrivers = function (driverArray) {
  return (driverArray[0,1]);
};

const returnLastTwoDrivers= function (drivers){
   return drivers.slice[-2]
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0](drivers);

function quadruple(x){
    return (x*4)};

function createFareMultiplier(thing){
   return thing();
};

function fareDoubler (x){
return x*2;
};

function fareTripler (x){
    return x*3;
};

function selectDifferentDrivers(drivers, fun){
return fun(drivers)
}
