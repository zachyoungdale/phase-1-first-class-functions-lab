// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier =  (fare) => {
    return function (integer) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, selection) => {
    if (selection === returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    } else if (selection === returnLastTwoDrivers) {
        return drivers.slice(2,4);
    }
}