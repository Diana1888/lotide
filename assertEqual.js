//Create function that compare 2 values and and print message to console if they are equal or not.
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
};

module.exports = assertEqual;