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