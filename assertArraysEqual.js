const eqArrays = require('./eqArrays');

//Create function that print message to console after comparing the two arrays.

const assertArraysEqual = function(arrOne, arrTwo,) {

  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅Assertion passed: ${arrOne} === ${arrTwo}`);
    return;
  } else {
    console.log(`🛑Assertion failed: ${arrOne} !== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;
