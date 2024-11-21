const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let total = 1;
    for(let i = 0; i < num - 1; i++){
        if(i % 2 == 0){
            num2 = total;
            total += num1;
        }
        else{
            num1 = total;
            total += num2
        };
    }
    if(num == 0)return 0;
    else if(num < 0) return "OOPS";
    
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
