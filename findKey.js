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

/* New Code */

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return (key);
    }
  }
  throw `No such value! Can't find key.`;
};

/* Test */

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2), "noma");