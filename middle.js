const middle = function(arr) {

  let newArray = [];
  let middleIndex = 0;

  if (arr.length <= 2) {
    return newArray;
  }

  if (arr.length % 2 !== 0) {
    middleIndex = Math.round(arr.length / 2);
    newArray.push(arr[middleIndex - 1]);
  }

  if (arr.length % 2 === 0) {
    middleIndex = Math.round(arr.length / 2);
    newArray.push(arr[middleIndex - 1],arr[middleIndex]);
  }

  return newArray;
};

module.exports = middle;
