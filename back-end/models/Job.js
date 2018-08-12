var mongoose = require('mongoose');
var db = require('./index.js');
// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var jobSchema = mongoose.Schema({
  company : type:String,
  title : type:String,
  description : type:String,
  postedDate: type:String,
  salary: type: Number
})

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;

