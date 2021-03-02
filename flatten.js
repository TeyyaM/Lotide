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

const flatten = function(multiArr) {
  let newArr = [];
  for (let i = 0; i < multiArr.length; i++) {
    if (Array.isArray(multiArr[i])) {
      for (let j = 0; j < multiArr[i].length; j++) {
        newArr.push(multiArr[i][j]);
      }
    } else {
      newArr.push(multiArr[i]);
    }
  }
  return (newArr);
};