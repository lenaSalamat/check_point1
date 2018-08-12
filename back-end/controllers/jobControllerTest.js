var expect = require('chai').expect;
var mongoose = require('mongoose');
/* START SOLUTION */
var Job = require('../models/Job');
var jobController = require('./jobController');
/* END SOLUTION */

var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['jobs'].remove(done);
};

describe('Job Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      // TODO: Seed database with some jobs to run tests against. 
      /* START SOLUTION */
      var jobs = [
        {
          company: 'Hack Reactor',
          title: 'Curriculum Engineer',
          description: 'Build world class curriculum with world class people',
          postedDate: Date.now(),
          salary: 100000
        },
        {
          company: 'Google',
          title: 'Senior Engineer',
          description: 'Make products, change the world',
          postedDate: Date.now(),
          salary: 150000
        }
      ];

      Job.create(jobs, done);
      /* END SOLUTION */
    });
  });

  // TODO: Write your tests for jobController here
  /* START SOLUTION */
  it('should create a new job in the database', function (done) {
    var job = {
      company: 'Evil Corp',
      title: 'Intern',
      description: 'I hope you can make a good latte',
      postedDate: Date.now(),
      salary: 10
    };

    jobController.createJob(job, function (err, job) {
      expect(err).to.not.exist;

      Job.findOne({ company: 'Evil Corp' }, function (err, job) {
        expect(job.salary).to.equal(10);
        done();
      });

    });
  });

  it('should read all jobs that have a salary greater than $50,000', function (done) {
    jobController.getHighPayingJobs(function (err, jobs) {

      expect(jobs.length).to.equal(2);
      done();
    });
  });
  /* END SOLUTION */
});
