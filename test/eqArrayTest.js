const chai = require('chai');
const assert = chai.assert;
const chalk = require('chalk');

const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it(`returns ${chalk.bold.green('true')} if non-nested arrays are identical`, () => {
    assert.isTrue(eqArrays(['2', 3], ['2', 3]));
  });
  it(`returns ${chalk.bold.red('false')} if non-nested arrays are not identical`, () => {
    assert.isFalse(eqArrays([2, 3], ['2', 3]));
  });
  it(`returns ${chalk.bold.green('true')} if arrays with objects in them are identical`, () => {
    assert.isTrue(eqArrays(['2', 3, { num: 4 }], ['2', 3, { num: 4 }]));
  });
  it(`returns ${chalk.bold.red('false')} if arrays with objects in them have non-identical objects`, () => {
    assert.isFalse(eqArrays(['2', 3, { num: 6 }], ['2', 3, { num: 4 }]));
  });
  it(`returns ${chalk.bold.green('true')} if arrays are identical with one nested array`, () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it(`returns ${chalk.bold.red('false')} if the arrays are identical excepting the contents of a nested array`, () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
  it(`returns ${chalk.bold.red('false')} if the arrays are identical except for an extra level of nesting`, () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});