const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chalk = require('chalk');
const middle = require('../middle');

describe('middle', () => {
  it(`returns ${chalk.bold.cyan('middle item (single)')} of an array with an odd number of items.`, () => {
    expect(middle([5, 6, 7])).to.eql([6]);
  });
  it(`returns ${chalk.bold.cyan('middle items (dual)')} of an array with an even number of items.`, () => {
    expect(middle([5, 6, 7, 8])).to.eql([6, 7]);
  });
  it(`returns message ${chalk.bold.cyan('\'Invalid entry: Not an array.\'')} when not given an array`, () => {
    assert.isTrue(middle('hello') === 'Invalid entry: Not an array.');
  });
});
