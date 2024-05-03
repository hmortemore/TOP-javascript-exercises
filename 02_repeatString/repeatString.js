const repeatString = function(stringInput, repeatNumber) {
    if(repeatNumber < 0) {
        return 'ERROR';
    }
    let stringOutput = '';
    for(i = 0; i < repeatNumber; i++) {
        stringOutput = stringOutput + stringInput;
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
