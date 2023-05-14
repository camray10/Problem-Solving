// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const frequencyCounter1 = createFrequencyCounter(num1.toString());
    const frequencyCounter2 = createFrequencyCounter(num2.toString());
  
    // Compare the frequency of digits in both frequency counters
    for (let key in frequencyCounter1) {
      if (frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  function createFrequencyCounter(str) {
    const frequencyCounter = {};
  
    for (let char of str) {
      frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
  
    return frequencyCounter;
  }

  module.exports = sameFrequency;