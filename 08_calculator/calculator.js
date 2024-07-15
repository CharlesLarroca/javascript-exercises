const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(arr) {
	return arr.reduce((total, cur) => total+cur, 0)
};

const multiply = function(arr) {
  return arr.reduce((prod, cur) => prod*cur)
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
	if(num === 0) return 1
  let prod = 1
  for(let i = num; i > 0; i--){
    prod *= i
  }
  return prod
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

const test = factorial(5)

console.log(test)
