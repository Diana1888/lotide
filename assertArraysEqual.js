const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo,) {

  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅Assertion passed: ${arrOne} === ${arrTwo}`);
    return;
  } else {
    console.log(`🛑Assertion failed: ${arrOne} !== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;
