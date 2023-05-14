// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((acc, num) => acc + num, 0);
    
    for (let i = 0; i < arr.length; i++) {
      rightSum -= arr[i];
      
      if (leftSum === rightSum) {
        return i;
      }
      
      leftSum += arr[i];
    }
    
    return -1;
  }

  module.exports = pivotIndex;
  