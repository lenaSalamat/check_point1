var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('../models/User');
/* START SOLUTION */
var userController = require('./userController');
/* END SOLUTION */

var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['users'].remove(done);
};

describe('User Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Clear database before each test and then seed it with example `users` so that you can run tests
  beforeEach(function (done) {
    clearDB(function () {
      var users = [
        {
          name: 'Magee',
          email: 'magee@magee.com'
        },
        {
          name: 'Dan',
          email: 'dan@dan.com'
        },
        {
          name: 'Beth',
          email: 'beth@beth.com'
        },
        {
          name: 'Sunny',
          email: 'sunny@sunny.com'
        },
        {
          name: 'Zach',
          email: 'zach@zach.com'
        }
      ];

      // See http://mongoosejs.com/docs/models.html for details on the `create` method
      User.create(users, done);
    });
  });

  it('should have a method that given the name of a user, retrieves their record from the database', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    /* START SOLUTION */
    userController.getUserByName('Magee', function (err, user) {

      expect(user.email).to.equal('magee@magee.com');
      done();
    });
    /* END SOLUTION */
  });

  it('should have a method that given the name of a user, updates their `email` property', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    /* START SOLUTION */
    userController.updateEmailByName('Dan', 'dan@properdan.com', function (err, raw) {
      expect(err).to.not.exist;

      User.findOne({ name: 'Dan' }, function (err, dan) {
        expect(dan.email).to.equal('dan@properdan.com');
        done();
      });

    });
    /* END SOLUTION */
  });

  it('should have a method that reads all users from the database at once', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    /* START SOLUTION */
    userController.readAllUsers(function (err, users) {

      expect(users.length).to.equal(5);
      done();
    });
    /* END SOLUTION */
  });

});
