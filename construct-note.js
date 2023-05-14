// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterCount = {};
  
    // Count the frequency of each letter in the given letters
    for (let letter of letters) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    // Check if we have enough letters to construct the message
    for (let char of message) {
      if (!letterCount[char] || letterCount[char] === 0) {
        return false;
      }
      letterCount[char]--;
    }
  
    return true;
  }

  module.exports = constructNote;