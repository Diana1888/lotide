const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
};

//Create function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
const findKey = function(obj, callback) {

  for (const element of Object.keys(obj)) {
    if (callback(obj[element])) {
      return element;
    }
  }

};

module.exports = findKey;

const rating = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);// => "noma"

assertEqual(findKey(rating, x => x.stars === 2), "noma"); // => "noma"
assertEqual(findKey(rating, x => x.stars === 5), undefined); // => undefined
assertEqual(findKey(rating, x => x.stars === 3), "Akaleri"); // => "Akaleri"