const add = function(...numbers) {
	return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
};

const subtract = function(...numbers) {
  return numbers.reduce((total, currentNumber) => total - currentNumber);
};

const sum = function(...numbers) {
  let totalSum = 0;
	numbers.forEach((item) => totalSum += item.reduce((total, current) => total + current, 0))
  return totalSum;
};

const multiply = function(...numbers) {
  let totalSum = 0;
	numbers.forEach((item) => totalSum += item.reduce((total, current) => total * current))
  return totalSum;
};

const power = function(...numbers) {
	let power = numbers[1];
  let total = 1;
  for(let i = 0; i < power; i++){
    total *= numbers[0];
  }
  return total;
};

const factorial = function(...numbers) {
  if (numbers[0] == 0){return 1}
  let total = 1;
	for(i = numbers[0]; i > 0; i--) total *= i;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
