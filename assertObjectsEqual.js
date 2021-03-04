const assertEqual = function(actual, expected) {
  const addQuotation = function(input) {
    if (typeof (input) === "string") {
      return ("\"" + input + "\"");
    } else {
      return (input);
    }
  };
  actual = addQuotation(actual);
  expected = addQuotation(expected);
  (actual === expected) ? console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`) : console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  let isEqual;
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length && isEqual !== false; i++) {
      if (arrayOne[i] === arrayTwo[i]) {
        isEqual = true;
      } else {
        isEqual = false;
      }
    }
  }
  return (isEqual);
};

const eqObjects = function(object1, object2) {
  const checkIfObject = function(input) {
    return (Array.isArray(input) === false && typeof input === 'object' && input !== null);
  };

  const compareLength = function(object1, object2) {
    return (Object.keys(object1).length === Object.keys(object2).length);
  };

  const compareKeyValues = function(object1, object2) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return (false);
        }
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

/* New Code */

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(actual, expected) ? console.log(`💚💚💚Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🔥🔥🔥Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
};

// /* primitive test */

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// /* array test */

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(ab, ba); // => true
// assertObjectsEqual(ab, abc);  // => false
// assertObjectsEqual(cd, dc); // => true
// assertObjectsEqual(cd, cd2);  // => false
