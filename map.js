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



const assertArraysEqual = function(arrayOne, arrayTwo) {
  const addQuotation = function(input) {
    if (typeof (input) === "string") {
      return ("\"" + input + "\"");
    } else {
      return (input);
    }
  };
  const addQuoteArray = function(array) {
    let newArr = [];
    for (let item of array) {
      newArr.push(addQuotation(item));
    }
    return (newArr);
  };
  let quotedArrOne = addQuoteArray(arrayOne);
  let quotedArrTwo = addQuoteArray(arrayTwo);
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`💚💚💚Assertion Passed: ${quotedArrOne} === ${quotedArrTwo}`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: ${quotedArrOne} !== ${quotedArrTwo}`);
  }
};

/* New Code */

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/* Test Code */

// const words = ["ground", "control", "to", "major", "tom"];
// const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// assertArraysEqual(lighthouses.map(name => name.length), map(lighthouses, name => name.length));
// assertArraysEqual(lighthouses.map(name => `I fell off of ${name}!`), map(lighthouses, name => `I fell off of ${name}!`));