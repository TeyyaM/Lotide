const middle = (array) => {
  let middle = [];
  if (Array.isArray(array)) {
    if (array.length <= 2) {
      return (middle);
    }
    let average = ((array.length - 1) / 2);
    let index = average;
    const grabByIndex = (array, index) => {
      return (array[Math.floor(index)]);
    };
    const dualMiddle = (array, index) => {
      middle.push(grabByIndex(array, index));
      middle.push(grabByIndex(array, (index + 1)));
      return;
    };
    const singleMiddle = (array, index) => {
      middle.push(grabByIndex(array, index));
    };
    (Number.isInteger(index)) ? (singleMiddle(array, index)) : dualMiddle(array, index);
    return (middle);
  }
  return ('Invalid entry: Not an array.');
};

module.exports = middle;