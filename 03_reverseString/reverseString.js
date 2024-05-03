const reverseString = function(word) {
    output = '';
    for(i = word.length - 1; i >= 0; i--) {
        output = output + word[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
