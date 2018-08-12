var mongoose = require('mongoose');
var db = require('./index.js');
// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

var userSchema = mongoose.Schema({
	name:type: String,
	email:type: String
})
 
var User = mongoose.model('User', userSchema);

module.exports = User;
