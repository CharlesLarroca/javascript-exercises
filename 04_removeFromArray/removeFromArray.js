const removeFromArray = function(arr, ...args) {
  const elToRemove = arr.indexOf(...args)
  arr.splice(elToRemove, 1)
  return arr

  // const newArr = []

  // arr.forEach(element => {
  //   if(!args.includes(element)){
  //     newArr.push(element)
  //   }
  // });

  // return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
const array = ['orange', 'tut', 4, 'cimento', {}]

const test = removeFromArray(array, 4)
console.log(test)
