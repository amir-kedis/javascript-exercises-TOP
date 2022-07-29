const add = function(a,b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr = []) {
	let sum = arr.reduce((total, current) => total + current, 0);
  return sum;
};

const multiply = function(arr = []) {
	let result = arr.reduce((total, current) => total * current, 1);
  return result;
};

const power = function(base, power) {
  let result = base;
  for (let i = 1; i < power; i++) {
    result *= base;
  }
	return result;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
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
