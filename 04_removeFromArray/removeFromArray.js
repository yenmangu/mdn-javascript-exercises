const removeFromArray = function(array, value) {
    var i = 0;
    while (i < array.length) {
        if (array[i] === value) {
            array.splice(i);
        } else {
            i++;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;