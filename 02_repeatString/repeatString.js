const repeatString = function(string = '', i) {
    // returns 0 or error in case argument is <= 0
    if(i == 0){
        return '';
    }
    else if(i < 0){
        return 'ERROR';
    }

    // generic for loop for repeating arguments
    const backup = string;
    for(i; i > 1; i--){
        string = string.concat(backup);
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
