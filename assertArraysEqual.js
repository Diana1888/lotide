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

const assertArraysEqual = function(arrOne, arrTwo,) {

  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅Assertion passed: ${arrOne} === ${arrTwo}`);
    return;
  } else {
    console.log(`🛑Assertion failed: ${arrOne} !== ${arrTwo}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false
assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3"]) // => true