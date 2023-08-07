const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
};

//Create function that takes in a sentence and returns a count of each of the letters in the sentence excluding space.
const countLetters = function(sentence) {
  const output = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Hello World"));