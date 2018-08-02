
// let assert = require('assert');
let assert = require('chai').assert;
let expect = require('chai').expect;
let should = require('chai').should();

let mergeSort = require('../js/app.js');

describe('mergeSort', function() {
  it('should be a function', function() {
    expect(typeof mergeSort).to.be.equal('function');
  });
  it('should return an array in ascending order', function() {
    let results = mergeSort([4,2,3,1]);
    expect(results).to.be.eql([1,2,3,4]);
  });
});

// describe('Array', function() {
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });

