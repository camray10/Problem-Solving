// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0;
    const complements = new Set();
  
    for (let num of arr) {
      const complement = target - num;
      if (complements.has(complement)) {
        count++;
      }
      complements.add(num);
    }
  
    return count;
  }

  module.exports = countPairs;
