const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
};


const eqArrays = function(arrOne, arrTwo,) {
  let firstElements = '';
  let  secondElements = '';
  for (let i = 0; i < arrOne.length; i++) {
    firstElements += arrOne[i];
  }

  for (let j = 0; j < arrTwo.length; j++) {
    secondElements += arrTwo[j];
    console.log(secondElements);
  }

  if (firstElements === secondElements) {
    return true;
  }

  if (firstElements !== secondElements) {
    return false;
  }

};





assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), true); // => should FAIL