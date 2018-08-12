// TODO: Create and export a mongoose model called `Job` that follows the description in the README
/* START SOLUTION */
var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
  company: String,
  title: String,
  description: String,
  postedDate: Date,
  salary: Number
});

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;
/* END SOLUTION */

