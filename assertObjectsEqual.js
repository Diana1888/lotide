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



const eqObjects = function(object1, object2) {

  const objOne = Object.keys(object1);
  const objTwo = Object.keys(object2);

  if (objOne.length !== objTwo.length) {
    return false;
  }

  for (const element of objOne) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (eqArrays(object1[element], object2[element])) {
        return true;
      }
    }
    if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;


  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }


};



assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // => passed
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c: 3 }); // => failed

assertObjectsEqual({ a: '1', b: 2, c: ["1", "b", 3] }, { b: 2, a: '1', c: ["1", "b", 3]}); // => passed
assertObjectsEqual({ a: '1', b: 2, c: ["1", "b", 3, "5"] }, { b: 2, a: '1', c: ["1", "b", 3]}); // => failed
