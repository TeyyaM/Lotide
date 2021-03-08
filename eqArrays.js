const eqObjects = require('./eqObjects');

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
        // Do array stuff
        if (!eqArrays(arrayOne[i], arrayTwo[i])) {
          return (false);
        }
        // Do object stuff
      } else if (Array.isArray(arrayOne[i]) === false && typeof arrayOne[i] === 'object' && arrayOne[i] !== null) {
        if (!eqObjects(arrayOne[i], arrayTwo[i])) {
          return (false);
        }
        // End of new stuff
      } else if (arrayOne[i] !== arrayTwo[i]) {
        return (false);
      }
    }
  } else {
    return (false);
  }
  return (true);

};

module.exports = eqArrays;