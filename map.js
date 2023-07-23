const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word + " is cool!");
console.log(results1);

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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["ground is cool!", "control is cool!", "to is cool!", "major is cool!", "tom is cool!"]);