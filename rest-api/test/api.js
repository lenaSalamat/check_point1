var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../index.js');
var Users = require('../models/users.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));

var testUsers = [
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

// Return a JSON object back from the response
// Handles both `res.send(JSON.stringify({}))` and `res.json({})`
var getBody = function (res) {
  return JSON.parse(res.text);
};

describe('RESTful API', function () {

  beforeEach(function () {
    // Send a deep copy in so internal mutations do not affect our `testUsers` array above
    // Note: This copy technique works because we don't have any functions
    var usersCopy = JSON.parse(JSON.stringify(testUsers));
    Users.setAll(usersCopy);
  });

  describe('/api/users', function () {

    describe('GET', function () {

      it('responds with a 200 (OK)', function (done) {

        request(app)
          .get('/api/users')
          .expect(200, done);

      });

      /* START SOLUTION */
      it('[SOLUTION] responds with JSON of all users', function () {

        request(app)
          .get('/api/users')
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            expect(getBody(res)).to.deep.equal(testUsers);
            done();
          });

      });
      /* END SOLUTION */
    });

    describe('POST', function () {

      var newUser = {
        name: 'Josh',
        email: 'josh@josh.io'
      };

      it('responds with a 201 (Created) when a valid user is sent', function (done) {

        request(app)
          .post('/api/users')
          .send(newUser)
          .expect(201, done);

      });

      /* START SOLUTION */
      it('[SOLUTION] responds with JSON of the created user', function (done) {

        request(app)
          .post('/api/users')
          .send(newUser)
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            expect(getBody(res)).to.deep.equal({
              // Given the initial state of the in-memory "database",
              // created in the `beforeEach` hook, we know at this point
              // in the test that the next auto-generated id should be 4
              id: 4,
              name: 'Josh',
              email: 'josh@josh.io'
            });
            done();

          });

      });

      it('[SOLUTION] includes the created user in a subsequent GET request to `/api/users', function (done) {

        request(app)
          .post('/api/users')
          .send(newUser)
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            request(app)
              .get('/api/users')
              .end(function (err, res) {

                if (err) {
                  return done(err);
                }

                expect(getBody(res)).to.include.something.that.deep.equals({
                  // Given the initial state of the in-memory "database",
                  // created in the `beforeEach` hook, we know at this point
                  // in the test that the next auto-generated id should be 4
                  id: 4,
                  name: 'Josh',
                  email: 'josh@josh.io'
                });
                done();

              });

          });

      });
      /* END SOLUTION */
    });

  });

  describe('/api/users/:id', function () {

    describe('GET', function () {

      it('responds with a 200 (OK) when a user with a matching `id` exists', function (done) {

        request(app)
          .get('/api/users/1')
          .expect(200, done);

      });

      /* START SOLUTION */
      it('[SOLUTION] responds with a 404 (Not Found) when there is no user with a matching `id`', function (done) {

        request(app)
          .get('/api/users/42')
          .expect(404, done);

      });

      it('[SOLUTION] responds with JSON of the user with a matching `id`', function (done) {

        request(app)
          .get('/api/users/1')
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            expect(getBody(res)).to.deep.equal(testUsers[0]);
            done();
          });

      });
      /* END SOLUTION */

    });

    describe('PUT', function () {

      it('responds with a 200 (OK) when a user with the matching `id` is updated', function (done) {

        request(app)
          .put('/api/users/1')
          .send({ name: 'Taka-san' })
          .expect(200, done);

      });

      /* START SOLUTION */
      it('[SOLUTION] responds with JSON of the updated user', function (done) {

        request(app)
          .put('/api/users/1')
          .send({ name: 'Taka-san' })
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            expect(getBody(res)).to.deep.equal({
              id: 1,
              name: 'Taka-san',
              email: 'taka@taka.com'
            });
            done();

          });

      });

      it('[SOLUTION] responds with the updated user in a subsequent GET request to the same `id`', function (done) {

        request(app)
          .put('/api/users/1')
          .send({ name: 'Taka-san' })
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            request(app)
              .get('/api/users/1')
              .end(function (err, res) {

                if (err) {
                  return done(err);
                }

                expect(getBody(res)).to.deep.equal({
                  id: 1,
                  name: 'Taka-san',
                  email: 'taka@taka.com'
                });
                done();

              });

          });

      });

      it('[SOLUTION] includes the updated user in a subsequent GET request to `/api/users`', function (done) {

        request(app)
          .put('/api/users/1')
          .send({ name: 'Taka-san' })
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            request(app)
              .get('/api/users')
              .end(function (err, res) {

                if (err) {
                  return done(err);
                }

                expect(getBody(res)).to.include.something.that.deep.equals({
                  id: 1,
                  name: 'Taka-san',
                  email: 'taka@taka.com'
                });
                done();

              });

          });

      });
      /* END SOLUTION */
    });

    describe('DELETE', function () {

      it('responds with a 200 (OK) when a user with the matching `id` is deleted', function (done) {

        request(app)
          .delete('/api/users/1')
          .expect(200, done);

      });

      /* START SOLUTION */
      it('[SOLUTION] responds with JSON of the deleted user', function (done) {

        request(app)
          .delete('/api/users/2')
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            expect(getBody(res)).to.deep.equal(testUsers[1]);
            done();

          });

      });

      it('[SOLUTION] responds with a 404 (Not Found) in a subsequent GET request to the same `id`', function (done) {

        request(app)
          .delete('/api/users/3')
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            request(app)
              .get('/api/users/3')
              .expect(404, done);

          });

      });

      it('[SOLUTION] should not include the deleted user in a subsequent GET request to `api/users`', function (done) {

        request(app)
          .delete('/api/users/3')
          .end(function (err, res) {

            if (err) {
              return done(err);
            }

            request(app)
              .get('/api/users')
              .end(function (err, res) {

                if (err) {
                  return done(err);
                }

                expect(getBody(res)).to.not.include.something.that.deep.equals(testUsers[2]);
                done();

              });
          });

      });
      /* END SOLUTION */

    });

  });

});
