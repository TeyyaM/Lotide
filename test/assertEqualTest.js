const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chalk = require('chalk');
const assertEqual = require('../assertEqual')

describe('assertEqual', () => {
  it(`console.logs assertion of ${chalk.bold.green('true')} when two strings are identical`, () => {
    expect(assertEqual('hello', 'hello')).to.eql(console.log(`💚💚💚Assertion Passed: "hello" === "hello"`));
  });
  it(`console.logs assertion of ${chalk.bold.red('false')} when two strings are NOT identical`, () => {
    expect(assertEqual('hello', 'hi')).to.eql(console.log(`🔥🔥🔥Assertion Failed: "hello" !== "hi"`));
  });
  it(`console.logs assertion of ${chalk.bold.green('true')} when two numbers are identical`, () => {
    expect(assertEqual(4, 4)).to.eql(console.log(`💚💚💚Assertion Passed: 4 === 4`));
  });
  it(`console.logs assertion of ${chalk.bold.red('false')} when two numbers are NOT identical`, () => {
    expect(assertEqual(3, 4)).to.eql(console.log(`🔥🔥🔥Assertion Failed: 3 !== 4`));
  });
  it(`console.logs assertion of ${chalk.bold.red('false')} when two numbers are identical but one is a string`, () => {
    expect(assertEqual(4, '4')).to.eql(console.log(`🔥🔥🔥Assertion Failed: 4 !== "4"`));
  });
});


