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

const countLetters = function(string) {
  const stringArr = (string.replace(/\s+/g, '')).split('');
  const newObject = {};

  const count = function(letterArr, letter) {
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

console.log(countLetters("lighthouse in the house"));