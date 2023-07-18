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

const middle = function(arr) {

  let newArray = [];
  let middleIndex = 0;

  if (arr.length <= 2) {
    return newArray;
  }

  if (arr.length % 2 !== 0) {
    middleIndex = Math.round(arr.length / 2);
    newArray.push(arr[middleIndex-1]);
  }

  if (arr.length % 2 === 0) {
    middleIndex = Math.round(arr.length / 2);
    newArray.push(arr[middleIndex - 1],arr[middleIndex]);
  }

  return newArray;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []);

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]);

console.log(middle([1, 2, 3, 4])) // => [2, 3]);
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]);
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])) // => [7]);
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])) // => [7, 8]);
console.log(middle(["hello", "world", "lighthouse"])) // => ["world");
console.log(middle(["hello", "world", "beautiful", "lighthouse"])) // => ["world", "beautiful");