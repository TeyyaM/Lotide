const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chalk = require('chalk');
const tail = require('../tail');

describe('tail', () => {
  it(`returns array ${chalk.bold.cyan('without first item')} given an array with numbers`, () => {
    expect(tail([5, 6, 7])).to.eql([6, 7]);
  });
  it(`returns array ${chalk.bold.cyan('without first item')} given an array with strings`, () => {
    expect(tail(['Hello', 'Lighthouse', 'Labs'])).to.eql(['Lighthouse', 'Labs']);
  });
  it(`returns message ${chalk.bold.cyan('\'Invalid entry: Not an array.\'')} when not given an array`, () => {
    assert.isTrue(tail('hello') === 'Invalid entry: Not an array.');
  });
});