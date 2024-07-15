const fibonacci = function(num) {
  let count
  if(typeof num !== 'number'){
    count = parseInt(num)
  } else {
    count = num
  }

  if (count < 0) return "OOPS";
  if (count == 0) return 0;
  
  const arrFib = [1,1]
  
  for(let i = 2; i < count; i++){
    const firstPrev = arrFib[arrFib.length-1]
    const secondPrev = arrFib[arrFib.length-2]
    arrFib.push(firstPrev+secondPrev)
  }
  
  return arrFib[arrFib.length-1]
};

// Do not edit below this line
module.exports = fibonacci;

const test = fibonacci("8")

console.log(test)
