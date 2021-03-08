const flatten = multiArr => {
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

module.exports = flatten;