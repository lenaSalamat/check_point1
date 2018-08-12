var expect = require('chai').expect;
var mongoose = require('mongoose');


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
      var jobs = [
        {
          company: 'rbk',
          title: 'H',
          description: 'hi there',
          postedDate: 'one day',
          salary: '10'
        },
        {
          company: 'krb',
          title: 'e',
          description: 'i am here',
          postedDate: 'two days',
          salary: '20'
        },
        {
          company: 'bkr',
          title: 'l',
          description: 'where are you',
          postedDate: 'three days',
          salary: '30'
        },
        {
          company: 'kbr',
          title: 'l',
          description: 'be happy',
          postedDate: 'for days',
          salary: '40'
        },
        {
          company: 'rkb',
          title: 'o',
          description: 'hop',
          postedDate: 'one weeke',
          salary: '50'
        }
      ];
      // TODO: Seed database with some jobs to run tests against. 
     Job.create(jobs, done);
    });
  });

  // TODO: Write your tests for jobController here
  it('should have a method that Create a new job in the database', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
      userSchema.methods.checkForUser = function(cb) {
      this.model('Job').insert({
          company: this.company,
          title: this.title,
          description: this.description,
          postedDate: this.postedDate,
          salary: this.salary
      }, function(err, val) {
          cb(!!val);
          done();
      });
  };
    
  });

  it('should have a method that  Get all jobs that have a salary greater than $50,000', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
      userSchema.methods.checkForUser = function(cb) {
      this.model('Job').find({salary:{ qty: { $gt: 50,000 } }}, function(err, val) {
          cb(!!val);
          done();
      });
  };
   
   });

 });

 

