var _ = require('underscore');
//var user = require('../back-end/models/User.js')
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
 users.findOne({id:id}, function(err,data){
  if(err){
    console.log(err);
  } else {
    //res.json(data);
    console.log(data);
  }
 })
};

exports.addOne = function (user) {
 var id = user.id;
 var name = user.name;
 var email = user.email;
 var newUser = {
   id:id,
   name:name,
   email:email
 }
 user = new user(newUser);
 user.save();
};

exports.updateOne = function (id, newProperties) {
  users.findOneAndUpdate({id:id},newProperties,funstion(err,updated){
    if(err){
      console.log(err);
    } else {
      console.log(updated);
    }
  })
};
};

exports.deleteOne = function (id) {
 users.findOneAndRemove({id:id}, function(err,deleted){
  if(err){
    console.log(err);
  } else {
    console.log(deleted);
  }
 })
};
