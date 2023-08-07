const assertArraysEqual = function(arrOne, arrTwo,) {

  if (arrOne.length !== arrTwo.length) {
    console.log("🛑Assertion failed: arrays are NOT equal");
    return;
  }
  
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log("🛑Assertion failed: arrays are NOT equal");
      return;
    }
  }
  
  console.log("✅Assertion passed: arrays are equal");
  return;

};


const eqArrays = function(arrOne, arrTwo,) {

  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  
  return true;

};


//Create  function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function(words, itemsToRemove) {
  let newArray = [];

  for (let word of words) {
    if (!itemsToRemove.includes(word)) {
      newArray.push(word);
    }
  }
  return newArray;
};

module.exports = without;


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, "2", "3"]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);