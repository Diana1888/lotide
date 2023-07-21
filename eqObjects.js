const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const secondMultiColorShirtObject = { size: "medium", colors: ["red", "pink"] };
eqObjects(multiColorShirtObject  , secondMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , secondMultiColorShirtObject), false);

const longSleeveMultiColorShirtObject = {colors: ["red", "blue"],  size: "medium", sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);