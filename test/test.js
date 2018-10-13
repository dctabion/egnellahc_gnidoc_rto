// Load test modules
const request = require('supertest');
const app = require('../app'); //reference to our app.js file
const assert = require('assert');
const dummy = require('../modules/z_dummy.js');
const parseUtils = require('../modules/parse_utils.js');

// Start testing with supertest test module
console.log('\n\n\n\n========================================');
console.log('Now running test using supertest module');
console.log('========================================');

/**
 * Testing dummy module to verify supertest/mocha working
 */

describe('Basic Mocha test on dummy module to ensure test framework is working', function () {
 it('Should return string Hello', function () {
        assert.equal(dummy.sayHello(), "Hello");
    });
 it('Should return "Sir" in front of name', function () {
        assert.equal(dummy.respect('Dood'), 'Sir Dood');
    });
});



/**
 * Testing parsing module
 */

describe('Test parseUtils.parseLine()', function() {
  it('Should parse pipe delimited input and return populated record object', function(){
    assert.deepEqual(
      parseUtils.parseLine('Vader|Darth|Male|Black|5\/3\/1905'),
        {
          lastName: "Vader",
          firstName: "Darth",
          gender: "Male",
          color: "Black",
          dob: "5/3/1905"
        }
      )
    });

  it('Should parse space delimited input and return populated record object', function(){
    assert.deepEqual(
      parseUtils.parseLine('Vader Darth Male Black 5\/3\/1905'),
        {
          lastName: "Vader",
          firstName: "Darth",
          gender: "Male",
          color: "Black",
          dob: "5/3/1905"
        }
      )
    });

  it('Should parse comma delimited input and return populated record object', function(){
    assert.deepEqual(
      parseUtils.parseLine('Vader,Darth,Male,Black,5\/3\/1905'),
        {
          lastName: "Vader",
          firstName: "Darth",
          gender: "Male",
          color: "Black",
          dob: "5/3/1905"
        }
      )
    });

  it('Bad input line.  Missing attribute.  Should return null', function(){
    assert.deepEqual(
      parseUtils.parseLine('Vader,Darth,Male,Black'),
      null
    )
  });

  it('Blank input line.  Should return null', function(){
    assert.deepEqual(
      parseUtils.parseLine(''),
      null
    )
  });

  it('null input line.  Should return null', function(){
    assert.deepEqual(
      parseUtils.parseLine(null),
      null
    )
  });

});


/**
* Testing API Endpoints
*/
describe('GET / test to ensure test framework is working', function () {
   it('expect 200 status code', function (done) {
       request(app)
           .get('/')
           .expect(200)
           .end(function(err, res) {
             if (err) return done(err);
             else {
               done();
             }
           });
   });
});
