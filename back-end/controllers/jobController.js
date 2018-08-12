/* START SOLUTION */
var Job = require('../models/Job.js');
/* END SOLUTION */
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  /* START SOLUTION */
  Job.create(job, callback);
  /* END SOLUTION */
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  /* START SOLUTION */
  Job.find({ salary: { $gt: 50000 }}, callback);
  /* END SOLUTION */
};
