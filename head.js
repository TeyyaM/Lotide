const head = array => {
  if (!Array.isArray(array)) {
    return ('Invalid entry: Not an array.');
  } else {
    return array[0];
  }
};

module.exports = head;