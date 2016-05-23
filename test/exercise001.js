var fs = require('fs');
var assert = require('chai').assert;

eval(fs.readFileSync('./problems/exercise001.js') + '');

describe('exercise001.js imaginaryFunction', function() {
  describe('imaginaryFunction', function () {
    it('should be a function', function() {
      assert.isFunction(imaginaryFunction);
    });

    it('should return "foon" when invoked', function () {
      assert.equal('foon', imaginaryFunction());
    });
  });
});
