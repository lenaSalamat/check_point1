/* START SOLUTION */
var User = require('../models/User.js');
/* END SOLUTION */
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  /* START SOLUTION */
  User.findOne({ name: name }, callback);
  /* END SOLUTION */
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  /* START SOLUTION */
  User.update({ name: name }, { email: newEmail }, {}, callback);
  /* END SOLUTION */
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  /* START SOLUTION */
  User.find(callback);
  /* END SOLUTION */
};
