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

  //check if number of properties are the same
  if (objOne.length !== objTwo.length) {
    return false;
  }

  //iterate over object
  for (let element in object1) {
    //check if type of property is Array
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      //check if arrays of two objects are not equal then return false
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
      //check if key value are not equal then return false
    } else if (object1[element] !== object2[element]) {
      return false;
    }
    //return true if of objects are equal (arrays and key values are equal)
  } return true;
};


module.exports = eqObjects;


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// const secondMultiColorShirtObject = { size: "medium", colors: ["red", "pink"] };
// eqObjects(multiColorShirtObject  , secondMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject  , secondMultiColorShirtObject), false);

// const longSleeveMultiColorShirtObject = {colors: ["red", "blue"],  size: "medium", sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
// assertEqual(eqObjects({a:[1,2], b:2}, {a:[1,2], b:3}), false);