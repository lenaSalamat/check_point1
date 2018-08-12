var job = require('../Job');
// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  var company :job.company,
  var title : job.title,
  var description : job.description,
  var postedDate: job.postedDate,
  var salary: job.salary
  var newjob = {
     company:company,
     title:title,
     description:description,
     postedDate:postedDate,
     salary:salary
  }
  Job = new job(newjob);
  Job.save();
  callback();
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  // job.find({salary: function(data){
  // 	if(data >= $50,000){
  // 		return data;
  // 	}
  // }})
  job.find({salary:{ qty: { $gt: 50,000 } }},
  	function(callback));
};
