const palindromes = function (str) { 
  const alphabetical = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const strClean = str
    .toLowerCase()
    .split('')
    .filter(char => alphabetical.includes(char))
    .join('')
  
  console.log(strClean)

  const strArrReverse = strClean.split('').reverse().join('')

  if(strClean === strArrReverse) return true

  return false
};

// Do not edit below this line
module.exports = palindromes;


const test = palindromes('Animal loots foliated detail of stool lamina.')

console.log(test)