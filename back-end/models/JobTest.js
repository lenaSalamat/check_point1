var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('./Job.js');

describe('Job Model', function () {

  it('should be a Mongoose model', function () {
    expect(new Job()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Job.schema).to.exist;
  });

  it('should have a company property', function(){
  	expect(Job.company).to.exist;
  })

  it('should have a title property', function(){
	expect(Job.title).to.exist;
  })
  it('should have a description property', function(){
  	expect(Job.description).to.exist;
  })

  it('should have a postedDate property', function(){
  	expect(Job.postedDate).to.exist;
  })

  it('should have a salary property', function(){
  	expect(Job.salary).to.exist;
  })

  it('Job module should be exported'), function(){
  	expect(module.exports = Job).to.be.true;
  }

});
