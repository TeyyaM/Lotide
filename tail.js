const tail = array => {
  if (!Array.isArray(array)) {
    return ('Invalid entry: Not an array.');
  } else {
    let newArr = [];
    for (let i = 1; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return (newArr);
  }
};

module.exports = tail;