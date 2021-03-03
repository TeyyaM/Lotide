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

const letterPositions = function(sentence) {
  const results = {};
  const sentenceArr = sentence.split('');
  let letters;

  const allLettersIn = function(stringArr) {
    const lettersIn = [];
    for (let i = 0; i < stringArr.length; i++) {
      if (lettersIn.indexOf(stringArr[i]) === -1) {
        lettersIn.push(stringArr[i]);
      }
    }
    return (lettersIn);
  };

  letters = allLettersIn(sentenceArr);

  const letterIndexes = function(stringArr, letter) {
    let indexArr = [];
    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i] === letter) {
        indexArr.push(i);
      }
    }
    return (indexArr);
  };

  const addToObject = function(object, letter, index) {
    object[letter] = index;
  };

  for (let letter of letters) {
    addToObject(results, letter, letterIndexes(sentenceArr, letter));
  }

  return results;
};

/* test */

// assertArraysEqual(letterPositions('settata').s, [0]);
// assertArraysEqual(letterPositions('settata').e, [1]);
// assertArraysEqual(letterPositions('settata').t, [2, 3, 5]);
// assertArraysEqual(letterPositions('settata').a, [4, 6]);