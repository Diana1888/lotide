const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');



module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  flatten: flatten,
  countOnly: countOnly,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays
}