
'use strict';

var Calculator = require('./calculator'),
  mocha = require('mocha'),
  chai = require('chai');

chai.should();

describe('Calculator', function () {
  it('adds two numbers', function () {
    var num1 = 3,
      num2 = 5;

    Calculator.add(3, 5).should.equal(num1 + num2);
  });
});
