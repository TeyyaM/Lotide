const assertEqual = require('./assertEqual')

/* New Code */

const countOnly = (allItems, itemsToCount) => {
  const itemArray = allItems;
  const validItems = [];
  const newObject = {};

  const countValid = (validArr, key) => {
    let count;
    for (let valid of validArr) {
      if (valid === key) {
        if (count === undefined) {
          count = 1;
        } else {
          count += 1;
        }
      }
    }
    return (count);
  };

  for (let key in itemsToCount) {
    const filterArr = (unfilterArr, word) => {
      let filteredArr = [];
      for (let i = 0; i < unfilterArr.length; i++) {
        if (unfilterArr[unfilterArr.indexOf(word)] !== -1 && unfilterArr[unfilterArr.indexOf(word)] === word && itemsToCount[word]) {
          validItems.push(unfilterArr[unfilterArr.indexOf(word)]);
          unfilterArr.splice(unfilterArr.indexOf(word), 1);
          i--;
        }

      }
      return (filteredArr);
    };

    validItems.push(filterArr(itemArray, key));
    newObject[key] = countValid(validItems, key);
  }
  return (newObject);
};

module.exports = countOnly;

/* Test Code */

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);