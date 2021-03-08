const assertEqual = (actual, expected) => {
  const addQuotation = input => {
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

const countLetters = string => {
  const stringArr = (string.replace(/\s+/g, '')).split('');
  const newObject = {};

  const count = (letterArr, letter) => {
    let count = 0;
    for (let item of letterArr) {
      if (item === letter) {
        count += 1;
      }
    }
    return (count);
  };

  for (let letter of stringArr) {
    newObject[letter] = count(stringArr, letter);
  }
  return (newObject);
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));