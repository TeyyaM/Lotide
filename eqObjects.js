const eqArrays = require('./eqArrays');

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