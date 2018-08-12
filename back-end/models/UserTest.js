var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('./User.js');

describe('User Model', function () {

  it('User should be a Mongoose model', function () {
    expect(new User()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(User.schema).to.exist;
  });

  it('should have a Name property', function(){
  	expect(User.name).to.exist;
  })

  it('should have a Email property', function(){
	expect(User.email).to.exist;
  })

  it('User module should be exported'), function(){
  	expect(module.exports = User).to.be.true;
  }

});
