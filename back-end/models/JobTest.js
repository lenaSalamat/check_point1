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

  /* START SOLUTION */
  it('[SOLUTION] should have a `company` property', function () {
    expect(Job.schema.paths.company).to.exist;
  });

  it('[SOLUTION] should have a `company` property that is `String`', function () {
    if (typeof Job.schema.paths.company === 'string') {
      expect(Job.schema.paths.company).to.equal(String);
    } else {
      expect(Job.schema.paths.company.options.type.name).to.equal('String');
    }
  });

  it('[SOLUTION] should have a `title` property', function () {
    expect(Job.schema.paths.title).to.exist;
  });

  it('[SOLUTION] should have a `title` property that is `String`', function () {
    if (typeof Job.schema.paths.title === 'string') {
      expect(Job.schema.paths.title).to.equal(String);
    } else {
      expect(Job.schema.paths.title.options.type.name).to.equal('String');
    }
  });

  it('[SOLUTION] should have a `description` property', function () {
    expect(Job.schema.paths.description).to.exist;
  });

  it('[SOLUTION] should have a `description` property that is `String`', function () {
    if (typeof Job.schema.paths.description === 'string') {
      expect(Job.schema.paths.description).to.equal(String);
    } else {
      expect(Job.schema.paths.description.options.type.name).to.equal('String');
    }

  });

  it('[SOLUTION] should have a `postedDate` property', function () {
    expect(Job.schema.paths.postedDate).to.exist;
  });

  it('[SOLUTION] should have a `postedDate` property that is `Date`', function () {
    if (typeof Job.schema.paths.postedDate === 'string') {
      expect(Job.schema.paths.postedDate).to.equal(Date);
    } else {
      expect(Job.schema.paths.postedDate.options.type.name).to.equal('Date');
    }
  });

  it('[SOLUTION] should have a `salary` property', function () {
    expect(Job.schema.paths.salary).to.exist;
  });

  it('[SOLUTION] should have a `salary` property that is `Number`', function () {
    if (typeof Job.schema.paths.salary === 'string') {
      expect(Job.schema.paths.salary).to.equal(Number);
    } else {
      expect(Job.schema.paths.salary.options.type.name).to.equal('Number');
    }

  });
  /* END SOLUTION */

});
