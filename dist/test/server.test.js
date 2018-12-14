'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var data = 'MEAN';

describe('Automated Tests in Node.js with Mocha and Chai: ', () => {
  describe('Tests using Assert interface from Chai module: ', () => {
    it('Test example: Assert', done => {
      assert.typeOf(data, 'string');
      assert.equal(data, 'MEAN');
      assert.lengthOf(data, 4);
      done();
    });
  });
  describe('Tests using Expect interface from Chai module: ', () => {
    it('Test example: Expect', done => {
      expect(data).to.be.a('string');
      expect(data).to.equal('MEAN');
      expect(data).to.have.lengthOf(4);
      done();
    });
  });
  describe('Tests using Should interface from Chai module: ', () => {
    it('Test example: Should', done => {
      data.should.be.a('string');
      data.should.equal('MEAN');
      data.should.have.lengthOf(4);
      done();
    });
  });
});
