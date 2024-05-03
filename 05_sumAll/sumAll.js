const sumAll = function(startInt, endInt) {
    let sum = 0;
    if(typeof startInt != 'number' || typeof endInt != 'number' || startInt < 0 || endInt < 0) {
        return 'ERROR';
    }
    if(startInt > endInt) {
        let temp = startInt;
        startInt = endInt;
        endInt = temp;
    }
    for(i = startInt; i <= endInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
