const chai = require('chai');
const assert = chai.assert;
const chalk = require('chalk');
const head = require('../head');

describe('head', () => {
  it(`returns ${chalk.bold.cyan('first item of array')} given an array with numbers`, () => {
    assert.isTrue(head([5, 6, 7]) === 5);
  });
  it(`returns ${chalk.bold.cyan('first item of array')} given an array with strings`, () => {
    assert.isTrue(head(["Hello", "Lighthouse", "Labs"]) === "Hello");
  });
  it(`returns message ${chalk.bold.cyan('\'Invalid entry: Not an array.\'')} when not given an array`, () => {
    assert.isTrue(head('hello') === 'Invalid entry: Not an array.');
  });
});
