var _ = require('underscore');
var chai = require('chai');
var expect = chai.expect;
var Users = require('../models/users.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));


describe('Users Model', function () {
  var testUsers;

  beforeEach(function () {
    testUsers = [
      {
        id: 1,
        name: 'Taka',
        email: 'taka@taka.com'
      },
      {
        id: 2,
        name: 'Nayo',
        email: 'nayo@nayo.com'
      },
      {
        id: 3,
        name: 'Amrit',
        email: 'amrit@amrit.com'
      }
    ];

    Users.setAll(testUsers);
  });

  // Fill this out if you like..
  /* START SOLUTION */

  // A NOTE TO MENTORS:
  // These tests make use of getAll and getOne rather extensively.
  // Unfortunately, this means if a student messes up getAll or getOne,
  // all other tests that use them will fail too.

  // Sunny and I (Dan T) were looking into ways that we could isolate
  // a function's behavior without exposing the `users` array directly.
  // After probably too much discussion, we have implemented a partial solution

  // After testing getAll and getOne, we overwrite those functions
  // with a known, working solution. It's only a partial solution because 
  // our function references the `testUsers` array above. `testUsers` is also
  // passed by reference into the Users model through `setAll`. This means
  // that the stubbed function will only work if `testUsers` is mutated
  // internally in the Users model.

  // Sunny believes that most students do infact mutate their `users` array
  // in their solution, so he thinks this will do more good. This is a tradeoff
  // we would like to actively explore.

  // The important part: if you see a bunch of `addOne` or `deleteOne` tests failing,
  // it could be because the implementation uses assignment instead of mutation
  // If this is a deal breaker, we can revert it right out no problem.

  describe('[SOLUTION] getAll', function () {

    it('should return all users in the `users` array', function () {
      expect(Users.getAll()).to.deep.equal(testUsers);
    });

    // Overwrite Users.getAll so we can isolate functionality in our tests
    // NOTE: This will only handle mutation cases
    after(function() {
      Users.getAll = function() {
        return testUsers;
      };
    });
  });

  describe('[SOLUTION] getOne', function () {

    it('should return the user with a matching `id`', function () {
      expect(Users.getOne(1)).to.deep.equal(testUsers[0]);
      expect(Users.getOne(2)).to.deep.equal(testUsers[1]);
      expect(Users.getOne(3)).to.deep.equal(testUsers[2]);
    });

    it('should return undefined/null when no user matches `id`', function () {
      expect(Users.getOne(42)).to.not.exist;
    });

    it('should not rely on index position', function () {
      // Special setAll case for this test
      Users.setAll([
        {
          id: 99,
          name: 'Taka',
          email: 'taka@taka.com'
        },
        {
          id: 3,
          name: 'Nayo',
          email: 'nayo@nayo.com'
        },
        {
          id: 7,
          name: 'Sunny',
          email: 'sunny@gonna.com'
        },
        {
          id: 9,
          name: 'Amrit',
          email: 'amrit@amrit.com'
        }
      ]);

      expect(Users.getOne(7)).to.deep.equal({
        id: 7,
        name: 'Sunny',
        email: 'sunny@gonna.com'
      });
    });

    // Overwrite Users.getOne so we can isolate functionality in our tests
    // NOTE: This will only handle mutation cases
    after(function() {
      Users.getOne = function(id) {
        return _.findWhere(testUsers, { id: id });
      };
    });

  });

  describe('[SOLUTION] addOne', function () {
    var beth = {
      name: 'Beth',
      email: 'beth@beth.com'
    };

    it('should add a new user to the `users` array', function () {
      Users.addOne(beth);
      expect(Users.getAll()).length.to.be(4);
    });

    it('should assign a numeric auto incremented `id` to the user', function () {
      Users.addOne(beth);
      expect(Users.getOne(4)).to.exist;
    });

    it('should return the added user', function () {
      expect(Users.addOne(beth)).to.deep.equal({
        id: 4,
        name: 'Beth',
        email: 'beth@beth.com'
      });
    });

  });

  describe('[SOLUTION] updateOne', function () {

    it('should update both `name` and `email` property', function () {
      Users.updateOne(3, {
        name: 'Proper Amrit',
        email: 'proper@amrit.com'
      });

      expect(Users.getOne(3)).to.deep.equal({
        id: 3,
        name: 'Proper Amrit',
        email: 'proper@amrit.com'
      });
    });

    it('should update only `name` property', function () {
      Users.updateOne(2, { name: 'Nayo-san' });
      expect(Users.getOne(2)).to.deep.equal({
        id: 2,
        name: 'Nayo-san',
        email: 'nayo@nayo.com'
      });
    });

    it('should update nothing if an empty object is passed in', function () {
      Users.updateOne(1, {});
      expect(Users.getOne(1)).to.deep.equal(testUsers[0]);
    });

    it('should return the updated user', function () {
      expect(Users.updateOne(1, {})).to.deep.equal(testUsers[0]);
    });

    it('should return undefined/null when no user matches `id`', function () {
      expect(Users.updateOne(42, {})).to.not.exist;
    });

    it('should mutate the existing user object', function () {
      var amrit = Users.getOne(3);
      expect(Users.updateOne(3, {})).to.equal(amrit); // uses `===`
    });

  });

  describe('[SOLUTION] deleteOne', function () {

    it('should remove a user from the `users` array', function () {
      Users.deleteOne(1);
      expect(Users.getAll()).to.not.include.something.that.deep.equals({
        id: 1,
        name: 'Taka',
        email: 'taka@taka.com'
      });
    });

    it('should return the removed user', function () {
      expect(Users.deleteOne(2)).to.deep.equal({
        id: 2,
        name: 'Nayo',
        email: 'nayo@nayo.com'
      });
    });

    it('should return undefined/null when no user matches `id`', function () {
      expect(Users.deleteOne(42)).to.not.exist;
    });

  });
  /* END SOLUTION */
});
