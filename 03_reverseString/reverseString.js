const reverseString = function(string = '') {
    // split to array, reverse and returns to string
    let arrayChar = string.split('');
    arrayChar.reverse();
    string = arrayChar.join('');
    return string;
};

// Do not edit below this line
module.exports = reverseString;
