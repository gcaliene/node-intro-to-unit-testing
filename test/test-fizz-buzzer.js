const should = require('chai').should();

const fizzbuzzer = require('../fizzBuzzer');


// unit tests for our `fizzbuzzer` function
describe('fizzbuzzer', function() {

  // test the normal case
  it('should leave no remainder for multiples of fifteen', function() {

    const fifteen = [15,30,1500];
   
    fifteen.forEach(function(input) {
      fizzbuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['a', '1', false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzbuzzer(input)
      }).should.throw(Error);
    });
  });
});