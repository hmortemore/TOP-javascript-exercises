const removeFromArray = function(list) {
    for(i = 1; i < arguments.length; i++) {
        for(j = 0; j < list.length; j++) {
            if(arguments[i] === list[j]) {
                list.splice(j, 1);
                j--;
            }
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
