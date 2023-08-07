//Create function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
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

module.exports = eqArrays;

