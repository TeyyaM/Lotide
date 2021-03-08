// Can't require eqArrays due to circular dependencies

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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  const checkIfObject = (input) => {
    return (Array.isArray(input) === false && typeof input === 'object' && input !== null);
  };

  const compareLength = (object1, object2) => {
    return (Object.keys(object1).length === Object.keys(object2).length);
  };

  const compareKeyValues = (object1, object2) => {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return (false);
        }
        // Add recursion in an else if to deal with nested objects
      } else if (checkIfObject(object1[key]) && checkIfObject(object2[key])) {
        return (eqObjects(object1[key], object2[key]));
        // End of new stuff
      } else if (object1[key] !== object2[key]) {
        return (false);
      }
    }
    return (true);
  };

  if (checkIfObject(object1) && checkIfObject(object2)) {
    if (compareLength(object1, object2)) {
      return (compareKeyValues(object1, object2));
    }
  }
  return (false);
};


module.exports = eqObjects;