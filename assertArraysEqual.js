const assertArraysEqual = function(arrOne, arrTwo,) {

  if (arrOne.length !== arrTwo.length) {
    console.log("🛑Assertion failed: arrays are NOT equal");
    return;
  }
  
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log("🛑Assertion failed: arrays are NOT equal");
      return ;
    }
  } 
  
  console.log("✅Assertion passed: arrays are equal");
  return;

};


assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false