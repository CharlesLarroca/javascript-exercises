const reverseString = function(str) {
  if (str === undefined || str === '') {
    return 'ERROR'
  } else {
    return str.split('').reverse().join('')
  }
  
};

// Do not edit below this line
module.exports = reverseString;
const test = reverseString()
console.log(test)