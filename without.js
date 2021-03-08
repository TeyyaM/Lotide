const without = (source, itemsToRemove) => {
  let newArr = [];
  for (let item of source) {
    let pushItem = true;
    for (let itemToDelete of itemsToRemove) {
      if (item === itemToDelete) {
        pushItem = false;
      }
    }
    if (pushItem) {
      newArr.push(item);
    }
  }
  return (newArr);
};

module.exports = without;