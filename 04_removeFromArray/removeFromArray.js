const removeFromArray = function(array = [], ...args) {
    // nested loops looking for equal arguments in array
    for (let i = 0; i < array.length; i++){
        for(let x = 0; x < args.length; x++){
            if (array[i] === args[x]){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
