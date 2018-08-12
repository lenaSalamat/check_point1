var _ = require('underscore');

// The seeded state of our in-memory "database"
var users = [
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

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function () {
  return users;
};

exports.setAll = function (newUsers) {
  users = newUsers;
  nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function (id) {
  /* START SOLUTION */
  return _.findWhere(users, { id: id });
  /* END SOLUTION */
};

exports.addOne = function (user) {
  /* START SOLUTION */
  var userToAdd = _.extend(user, { id: getNextId() });
  // A non-mutating solution will fail the current test suite
  users.push(userToAdd);
  return userToAdd;
  /* END SOLUTION */
};

exports.updateOne = function (id, newProperties) {
  /* START SOLUTION */
  var userToUpdate = this.getOne(id);
  if (userToUpdate) {
    _.extend(userToUpdate, newProperties);
  }
  return userToUpdate;
  /* END SOLUTION */
};

exports.deleteOne = function (id) {
  /* START SOLUTION */
  var indexToDelete = _.findIndex(users, function (user) {
    return user.id === id;
  });

  if (indexToDelete > -1) {
    return _.first(users.splice(indexToDelete, 1));
  }
  /* END SOLUTION */
};
