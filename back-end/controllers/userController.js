var user = require('../User');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  user.findOne({name:name}, function(callback));
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  user.findOneAndUpdate({name:name},newEmail, function(callback));

};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  user.find({},function(callback));
};