const chai = require('chai');
const assert = chai.assert;
const chalk = require('chalk');

const eqObjects = require('../eqObjects');

describe('eqObjects', () => {
  it(`returns ${chalk.bold.green('true')} if non-nested objects are identical`, () => {
    assert.isTrue(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
  });
  it(`returns ${chalk.bold.red('false')} if non-nested objects are not identical`, () => {
    assert.isFalse(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }));
  });
  it(`returns ${chalk.bold.green('true')} if objects with array values are identical`, () => {
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
  });
  it(`returns ${chalk.bold.red('false')} if objects with array values have non-identical arrays`, () => {
    assert.isFalse(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }));
  });
  it(`returns ${chalk.bold.green('true')} if objects are identical with one nested object key:value pair`, () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it(`returns ${chalk.bold.red('false')} if the objects are identical excepting the contents of a nested object`, () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it(`returns ${chalk.bold.red('false')} if the objects are not identical and involve a nested object`, () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});