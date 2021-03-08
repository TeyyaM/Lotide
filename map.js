const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/* Test Code */

// const words = ["ground", "control", "to", "major", "tom"];
// const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// assertArraysEqual(lighthouses.map(name => name.length), map(lighthouses, name => name.length));
// assertArraysEqual(lighthouses.map(name => `I fell off of ${name}!`), map(lighthouses, name => `I fell off of ${name}!`));