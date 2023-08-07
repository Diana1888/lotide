//Create function that takes in an array and returns everything except the first element of the array.
const tail = function(arr) {
  const tailArr = [];
  for (let i = 0; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr.slice(1);
};

module.exports = tail;

