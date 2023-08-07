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

//Create function that takes in an array that contains elements including nested array of elements and returns a single-level array.
const flatten = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (!Array.isArray(element)) {
      newArray.push(element);
    }  else {
      for (let j = 0; j < element.length; j++) {
        newArray.push(element[j]);
      }
    }
  }
  return newArray;
};
module.exports = flatten;

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]