const sumAll = function(num1 = 0, num2 = 0) {
    let tempNum = 0;
    let finalNumber = 0;

    // test for errors
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1)
        || !Number.isInteger(num2)){
        return 'ERROR';
    }
    // changes order in case num2 is lower
    else if (num1 > num2){
        tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }

    // main loop for the function
    for(let i = num1; i <= num2; i++){
        finalNumber += i;
    }
    return finalNumber;
};

// Do not edit below this line
module.exports = sumAll;
