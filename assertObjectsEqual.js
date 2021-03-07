const eqObjects = require('./eqObjects');

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
