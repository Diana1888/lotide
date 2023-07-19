const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
};


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

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Hello World"));